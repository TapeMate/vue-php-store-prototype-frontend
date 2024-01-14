<template>
  <StoreProducts :productData="productData" />
</template>

<script>
import { mapActions } from "vuex";
import StoreProducts from "@/components/StoreProducts.vue";

export default {
  name: "ProductView",
  components: {
    StoreProducts,
  },

  data() {
    return {
      productData: {},
    };
  },

  async mounted() {
    try {
      const data = await this.getProductData();
      this.productData = data;
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  },

  methods: {
    ...mapActions(["getProductData"]),
  },
};
</script>
