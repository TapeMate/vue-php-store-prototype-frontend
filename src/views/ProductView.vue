<template>
  <StoreProducts :productData="productData" />
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
      productData: {},
    };
  },

  mounted() {
    this.getProductData();
  },

  methods: {
    getProductData() {
      fetch(
        "http://localhost/vue-php-store-prototype-backend/api/product.api.php"
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Connection to products api failed.");
          }
          return response.json();
        })
        .then((data) => {
          this.productData = data;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>
