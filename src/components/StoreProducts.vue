<template>
  <h2 v-for="(product, index) in products" :key="index">{{ product }}</h2>
</template>

<script>
export default {
  name: "StoreProducts",
  props: {
    products: Array,
  },
};
</script>
