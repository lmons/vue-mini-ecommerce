<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 mb-3">
        <input type="text" class="form-control" v-model="searchQuery" @input="emitFilters" placeholder="Search by name">
      </div>
      <div class="col-md-4 mb-3">
        <select class="form-select" v-model="selectedCategory" @change="emitFilters">
          <option value="">Filter by Category</option>
          <option v-for="category in categories" :key="category">{{ category }}</option>
        </select>
      </div>
      <div class="col-md-4 mb-3">
        <select class="form-select" v-model="selectedPrice" @change="emitFilters">
          <option value="">Filter by Price</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'ProductFilter',
  props: {
    categories: Array,
  },
  setup(props, { emit }) {
    const searchQuery = ref('');
    const selectedCategory = ref('');
    const selectedPrice = ref('');

    const emitFilters = () => {
      emit('filters', {
        searchQuery: searchQuery.value,
        category: selectedCategory.value,
        price: selectedPrice.value,
      });
    };

    watch([searchQuery, selectedCategory, selectedPrice], () => {
      emitFilters();
    });

    return {
      searchQuery,
      selectedCategory,
      selectedPrice,
    };
  },
};
</script>

<style scoped>
</style>
