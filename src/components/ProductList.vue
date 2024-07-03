<template>
    <div class="container">
      <h2>Product List</h2>
      <div v-if="loading" class="text-center my-5">
        <p>Loading products...</p>
      </div>
      <div v-else>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div class="col" v-for="product in products" :key="product.id">
            <div class="card h-100">
              <img class="card-img-top product-image" :src="product.image" alt="Product Image">
              <div class="card-body d-flex flex-column">
                <h3 class="card-title">{{ product.title }}</h3>
                <p class="card-text">Price: ${{ product.price }}</p>
                <a href="#" class="mt-auto btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useProductStore } from '../store/productStore';
  import { storeToRefs } from 'pinia';
  
  export default {
    name: 'ProductList',
    setup() {
      const productStore = useProductStore();
      productStore.fetchProducts();
      const { products, loading } = storeToRefs(productStore);
  
      return {
        products,
        loading,
      };
    },
  };
  </script>
  
  <style scoped>
  .product-image {
    height: 200px;
    object-fit: cover;
  }
  
  /* Custom spacing between cards */
  .row-cols-md-2 .col {
    margin-bottom: 20px; /* Adjust as needed */
  }
  
  .row-cols-lg-3 .col {
    margin-bottom: 20px; /* Adjust as needed */
  }
  </style>
  