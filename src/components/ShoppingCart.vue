<template>
    <div>
      <h2>Shopping Cart</h2>
      <div v-if="cartItems.length === 0" class="text-center my-5">
        <p>Your shopping cart is empty.</p>
      </div>
      <div v-else>
        <div v-for="(item, index) in cartItems" :key="index" class="card mb-3">
          <div class="card-body d-flex align-items-center">
            <img :src="item.image" alt="Product Image" class="cart-item-image me-3" />
            <div class="flex-grow-1">
              <h5 class="card-title text-center">{{ item.title }}</h5>
              <p class="card-text text-center">Price: ${{ item.price }}</p>
              <div class="input-group mb-3 d-flex justify-content-center">
                <button class="btn btn-outline-secondary" type="button" @click="decrementQuantity(index)">-</button>
                <input type="text" class="form-control text-center quantity-input" :value="item.quantity" readonly>
                <button class="btn btn-outline-secondary" type="button" @click="incrementQuantity(index)">+</button>
              </div>
              <button @click="removeFromCart(index)" class="btn btn-danger d-block mx-auto">Remove</button>
            </div>
          </div>
        </div>
        <p v-if="cartItems.length > 0">Total Items: {{ totalItems }}</p>
        <p v-if="cartItems.length > 0">Total Price: ${{ totalPrice }}</p>
        <button @click="clearCart" class="btn btn-primary">Clear Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../store/cartStore';
  import { computed } from 'vue';
  
  export default {
    name: 'ShoppingCart',
    setup() {
      const cartStore = useCartStore();
      const cartItems = computed(() =>cartStore.cartItems);
  
      const totalItems = computed(() => cartStore.totalItems);
      const totalPrice = computed(() => cartStore.totalPrice);
  
      const removeFromCart = (index) => {
        cartStore.removeFromCart(index);
      };
  
      const clearCart = () => {
        cartStore.clearCart();
      };
  
      const incrementQuantity = (index) => {
        cartStore.cartItems[index].quantity++;
      };
  
      const decrementQuantity = (index) => {
        if (cartStore.cartItems[index].quantity > 1) {
          cartStore.cartItems[index].quantity--;
        }
      };
  
      return {
        cartItems,
        totalItems,
        totalPrice,
        removeFromCart,
        clearCart,
        incrementQuantity,
        decrementQuantity,
      };
    },
  };
  </script>
  
  <style scoped>
  .cart-item-image {
    width: 80px; 
    height: auto;
  }
  
  .quantity-input {
    width: 60px; 
    font-size: 14px;
  }
  </style>
  