<template>
  <BasicLayout>
    <h1>categorias</h1>

    <div class="ui grid">
      <div
        class="sixten wide mobile eight wide tablet four wide computer column"
        v-for="product in products"
        :key="product.attributes.id"
      >
        <Product :product="product" />
      </div>
    </div>

  </BasicLayout>
</template>

<script>
import BasicLayout from '@/layouts/BasicLayout.vue';
import Product from "../components/Product";
import { ref, onMounted } from 'vue';
import { getProductsCategory } from '@/api/product';
import { useRoute } from 'vue-router';


export default {
    name: "Category",
    components: {
        BasicLayout,
        Product,
    },
    watch: {
        $route(to, from){
          this.getProduts(to.params.category); 
        },
    },
    setup() {
    let products = ref(null);
    const { params } = useRoute();
    onMounted(() => {
      getProduts(params.category);
    });
    const getProduts = async (category) => {
      const response = await getProductsCategory(category);
      products.value = response.data;
    };
    return {
      getProduts,
      products,
    };
  },
};
</script>

<style>

</style>