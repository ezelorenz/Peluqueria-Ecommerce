<template>
    <div class="basic-layout">
      <Menu/>
      <div class="ui container">
        <slot />
      </div>
    </div>
    <Cart/>
  </template>
  
  <script>
  import Menu from '@/components/Menu.vue';
  import Cart from '../components/Cart/Cart.vue';
  import { getProductsCartApi } from '../api/cart';
  
  export default {
    name: "BasicLayout",
    components: {
      Menu,
      Cart,
    }
  };
  </script>

  

  