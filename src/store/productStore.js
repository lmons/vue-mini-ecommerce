import { defineStore } from 'pinia';
const BASE_URL = 'https://fakestoreapi.com';

export const useProductStore = defineStore({
  id: 'productStore',
  state: () => ({
    products: [],
    loading: false,
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await fetch(`${BASE_URL}/products`);
        const data = await response.json();
        this.products = data;
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        this.loading = false;
      }
    },
  },
});