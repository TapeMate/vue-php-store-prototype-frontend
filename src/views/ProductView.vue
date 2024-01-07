<template>
  <h2>GET PROFESSIONAL GEAR</h2>
  <StoreProducts :productData="productData" />
</template>

<script>
import StoreProducts from "@/components/StoreProducts.vue";
import img1 from "../assets/img/product-a.png";
import img2 from "../assets/img/product-b.png";
import img3 from "../assets/img/product-c.png";

export default {
  name: "ProductView",
  components: {
    StoreProducts,
  },

  data() {
    return {
      productData: {},
      productImages: [img1, img2, img3],
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
          this.setProductImage(data, this.productImages);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },

    // set img link from import to product object
    setProductImage(data, images) {
      const imgArr = images;
      const results = [];

      data.product.forEach((elmt) => {
        const images = imgArr;
        elmt.product_img = images.shift();
        results.push(elmt);
        return imgArr;
      });

      this.productData = results;
    },
  },
};
</script>

<style scoped>
h2 {
  padding: 1rem;
}
</style>
