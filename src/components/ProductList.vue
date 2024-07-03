<template>
    <div class="container">
      <h2>Product List</h2>
      <div v-if="loading" class="text-center my-5">
        <p>Loading products...</p>
      </div>
      <div v-else>
        <div class="mb-3">
          <ProductFilter :categories="categories" @filters="applyFilters" />
        </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div class="col" v-for="product in filteredProducts" :key="product.id">
            <div class="card h-100">
              <img class="card-img-top product-image" :src="product.image" :alt="product.title">
              <div class="card-body d-flex flex-column">
                <h3 class="card-title">{{ product.title }}</h3>
                <p class="card-text">Price: ${{ product.price }}</p>
                <div class="mt-auto">
                  <router-link :to="{ name: 'ProductDetail', params: { id: product.id }}" class="btn btn-primary me-2">View Details</router-link>
                  <button @click="addToCart(product)" class="btn btn-success">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useProductStore } from '../store/productStore';
  import { useCartStore } from '../store/cartStore';
  import { storeToRefs } from 'pinia';
  import { ref, watch } from 'vue';
  
  import ProductFilter from './ProductFilter.vue';
  
  export default {
    name: 'ProductList',
    components: {
      ProductFilter,
    },
    setup() {
      const productStore = useProductStore();
      const cartStore = useCartStore();
      productStore.fetchProducts();
      productStore.fetchProductCategories();
      const { products, loading, categories } = storeToRefs(productStore);
      const { addToCart } = cartStore;
  
      const selectedCategory = ref('');
      const filteredProducts = ref([]);
  
      watch(products, (newVal) => {
        filteredProducts.value = newVal;
      });
  
      const applyFilters = (filters) => {
        const { searchQuery, category, price } = filters;
  
        let filtered = products.value.filter(product =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
  
        if (category) {
          filtered = filtered.filter(product =>
            product.category.toLowerCase() === category.toLowerCase()
          );
        }
  
        if (price === 'low-to-high') {
          filtered.sort((a, b) => a.price - b.price);
        } else if (price === 'high-to-low') {
          filtered.sort((a, b) => b.price - a.price);
        }
  
        filteredProducts.value = filtered;
      };
  
      return {
        products,
        loading,
        categories,
        selectedCategory,
        filteredProducts,
        addToCart,
        applyFilters
      };
    },
  };
  </script>
  
  <style scoped>
  .product-image {
    height: 200px;
    object-fit: cover;
  }
  
  .row-cols-md-2 .col {
    margin-bottom: 20px;
  }
  
  .row-cols-lg-3 .col {
    margin-bottom: 20px;
  }
  </style>
  