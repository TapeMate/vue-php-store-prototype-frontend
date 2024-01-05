<template>
  <h2>All Products</h2>
  <StoreProducts :products="productData" />
</template>

<script>
import StoreProducts from "@/components/StoreProducts.vue";

export default {
  name: "ProductView",
  components: {
    StoreProducts,
  },

  data() {
    return {
      productData: ["Product A", "Product B", "Product C"],
    };
  },
};
</script>
