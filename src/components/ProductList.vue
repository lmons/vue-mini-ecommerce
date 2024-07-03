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
            <img
              class="card-img-top product-image"
              :src="product.image"
              alt="Product Image"
            />
            <div class="card-body d-flex flex-column">
              <h3 class="card-title">{{ product.title }}</h3>
              <p class="card-text">Price: ${{ product.price }}</p>
              <div class="mt-auto">
                <a href="#" class="btn btn-primary me-2">View Details</a>
                <button @click="addToCart(product)" class="btn btn-success">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductStore } from "../store/productStore";
import { useCartStore } from "../store/cartStore";
import { storeToRefs } from "pinia";

export default {
  name: "ProductList",
  setup() {
    const productStore = useProductStore();
    productStore.fetchProducts();
    const { products, loading } = storeToRefs(productStore);

    const cartStore = useCartStore();

    const addToCart = (product) => {
      cartStore.addToCart(product);
    };

    return {
      products,
      loading,
      addToCart,
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
