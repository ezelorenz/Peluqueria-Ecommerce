<template>
    <div class="ui secondary menu">
        <div class="ui container">
            <div class="left menu">
              <router-link class="item" to="/">
                  <img
                      class="ui small image"
                      src="../assets/logo.png"
                      alt="Ecommerce"
                  />
                  <template v-for="category in categories" :key="category.id">
                    <router-link class="item" :to="category.attributes.slug">
                      {{ category.attributes.title }}
                    </router-link>
                  </template>
              </router-link>
            </div>
            <div class="right menu">
              <router-link class="item" to="/login"
              v-if="!token">
                Iniciar sesion
              </router-link>
              <template v-if="token">
                <router-link class="item" to="/orders">Pedidos</router-link>
                <span class="ui item cart" @click="openCart">
                  <i class="shopping cart icon"></i>
                </span>
                <span class="ui item logout" @click="logout"><i class="sign-out icon"></i></span>
              </template>
            </div>
        </div>
    </div>
</template>

<script>
import { getTokenApi, deleteTokenApi } from '@/api/token'
import { ref, onMounted } from "vue";
import {getCategoriesApi} from '../api/category';
import { useStore } from 'vuex';
export default {
    name:"Menu",
    props: {
      products: Array,
    },
    setup () {
      let categories = ref(null);
      const token = getTokenApi();
      const store = useStore();

      onMounted(async () => {
        const response = await getCategoriesApi();
        categories.value = response.data;
      });

      const logout = () =>{
        deleteTokenApi();
        location.replace("/"); 
      }

      const openCart = () => {
        store.commit("setShowCart", true);
      };


      return{
        token,
        logout,
        categories,
        openCart,
      }
    }
}
</script>

<style lang="scss" scoped>
.ui.menu.secondary {
  background-color: #16202b;
  .item {
    color: #fff;
    &:hover {
      color: #1fa1f1;
    }
  }
  .menu.left {
    width: 50%;
    .ui.image {
      width: 40px;
    }
  }
  .menu.right {
    width: 50%;
    justify-content: flex-end;
    .logout,
    .cart {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>