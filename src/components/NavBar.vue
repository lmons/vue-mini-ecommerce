<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand">Vue E-commerce</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link">Cart <span class="badge bg-secondary">{{ cartItemCount }}</span></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useCartStore } from '../store/cartStore';
import { computed } from 'vue';

export default {
  name: 'NavBar',
  setup() {
    const cartStore = useCartStore();
    const cartItemCount = computed(() => cartStore.cartItems.length);

    return {
      cartItemCount,
    };
  },
};
</script>

<style scoped>
</style>
