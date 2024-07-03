import { defineStore } from 'pinia';
const BASE_URL = 'https://fakestoreapi.com';

export const useProductStore = defineStore({
  id: 'productStore',
  state: () => ({
    products: [],
    product: null,
    loading: false,
    categories: [],
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
    async fetchProductById(id) {
      try {
        this.loading = true;
        const response = await fetch(`${BASE_URL}/products/${id}`);
        console.log(response);
        const data = await response.json();
        this.product = data;
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        this.loading = false;
      }
    },
    async fetchProductCategories() {
      try {
        const response = await fetch(`${BASE_URL}/products/categories`);
        const data = await response.json();
        this.categories = data;
        return data;
      } catch (error) {
        console.error('Error fetching product categories:', error);
      }
    },
  },
});