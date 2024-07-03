<template>
  <div class="container">
    <h2>Product Detail</h2>
    <div v-if="loading" class="text-center my-5">
      <p>Loading product details...</p>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-lg-6 mb-3 mb-lg-0 order-lg-1">
          <img class="card-img-top product-image w-100" :src="product.image" :alt="product.title">
        </div>
        <div class="col-lg-6 order-lg-2">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <p class="card-text">Price: ${{ product.price }}</p>
            </div>
            <button @click="addToCart(product)" class="btn btn-success">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '../store/productStore';
import { useCartStore } from '../store/cartStore';
import { useRoute } from 'vue-router';
import { storeToRefs } from "pinia";

export default {
  name: 'ProductDetail',
  setup() {
    const route = useRoute();
    const productId = route.params.id;

    const productStore = useProductStore();
    const cartStore = useCartStore();
    productStore.fetchProductById(productId);
    const { product, loading } = storeToRefs(productStore);
    const addToCart = (product) => {
      cartStore.addToCart(product);
    };

    return {
      product,
      loading,
      addToCart
    };
  }
};
</script>

<style scoped>
.product-image {
  max-width: 100%;
  height: auto;
}
</style>
