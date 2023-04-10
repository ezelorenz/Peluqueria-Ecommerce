<template>
    <BasicLayout>
      <h1>Mis pedidos</h1>
      <h3 v-if="!orders">No tienes pedidos</h3>
      <template v-if="orders">
        <div class="order" v-for="order in orders" :key="order.id">
          <div class="header">
            <span class="date">{{ formatDate(order.createdAt) }}</span>
            <p>ID: {{ order.id }}</p>
            <p>Total: $ {{ order.attributes.totalPayment }}</p>
          </div>
          <div class="products">
            <div class="product" v-for="product in order.attributes.data" :key="product.id">
              <div>
                <img
                :src="API_URL + product.data.attributes.image.data.attributes.url"
                :alt="product.data.attributes.name"
                  class="ui image"
                />
                <p>{{  product.data.attributes.name  }}</p>
              </div>
              <div>{{ product.quantity }} x $ {{ product.data.attributes.price  }}</div>
            </div>
          </div>
        </div>
      </template>
    </BasicLayout>
  </template>

<script>
import { ref, onMounted } from "vue";
import BasicLayout from "../layouts/BasicLayout";
import { getOrders } from "../api/order";
import { getTokenApi } from "../api/token";
import jwt_decode from "jwt-decode";
import { API_URL } from "../utils/consants";
import moment from "moment";
import "moment/locale/es";
export default {
    name:"OrdersView",
    components: {
        BasicLayout,
    },
    setup(){
        let orders = ref(null);

        onMounted(async()=>{
            const token = getTokenApi();
            const {id} = jwt_decode(token);
            const response = await getOrders(id);
            orders.value = response.data;
        });

        const formatDate = (date) => {
            return moment(date).format("L [a las] LT");
        };


        return{
            orders,
            formatDate,
            API_URL,
        };
    },
};
</script>

<style lang="scss" scoped>
.order {
  border: 1px solid #000;
  margin-bottom: 20px;
  margin-top: 40px;
  .header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    p {
      margin: 0;
    }
    span {
      position: absolute;
      top: -20px;
      left: 0;
      font-size: 12px;
    }
  }
  .products {
    border-top: 1px solid #000;
    .product {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 30px;
      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    .ui.image {
      width: 50px;
    }
  }
}
</style>