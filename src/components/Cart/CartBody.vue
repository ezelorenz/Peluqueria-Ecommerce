<template>
  <div class="cart-body" v-if="products">
    <div class="product" v-for="product in products" :key="product.data.id">
        <img
        class="ui image fluid"
        :src="API_URL + product.data.attributes.image.data.attributes.url"
        :alt="product.data.attributes.name"
      />
      <div class="info">
        <p>{{ product.data.attributes.name }}</p>
        <div class="price">
          <p>{{ product.data.attributes.price }} $</p>

          <div class="quantity">
            <button
              class="ui button primary"
              size="large"
              @click="increaseProductCart(product.data.id)"
            >
              +
            </button>
            <p>{{ product.quantity }}</p>
            <button
              class="ui button primary"
              size="large"
              @click="decreaseProductCart(product.data.id)"
            >
              -
            </button>
          </div>
        </div>
      </div>
      <h1>{{ product.id }}</h1>
    </div>
  </div>
</template>

<script>
import { API_URL } from "../../utils/consants";
import { addProductCartApi, deleteProductCartApi } from "../../api/cart";
export default {
    name: "CartBody",
    props: {
        products: Array,
        realodCartFn: Function,
    },
    data(props){

      const increaseProductCart = (idProduct) => {
      addProductCartApi(idProduct);
      props.realodCartFn();
    };
    const decreaseProductCart = (idProduct) => {
      deleteProductCartApi(idProduct);
      props.realodCartFn();
    };
      return {
        API_URL,
        increaseProductCart,
        decreaseProductCart,
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-body {
  padding: 20px 10px;
  overflow-y: scroll;
  height: calc(100vh - 50px - 90px);
  &::-webkit-scrollbar {
    display: none;
  }
  .product {
    display: flex;
    .ui.image.fluid {
      width: 100px !important;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }
    .price {
      display: flex;
      justify-content: space-between;
      p {
        margin: 0;
      }
    }
    .quantity {
      display: flex;
      align-items: center;
      p {
        margin: 0 10px;
      }
      button {
        padding: 4px 10px;
      }
    }
  }
}
</style>