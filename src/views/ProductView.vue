<template>
  <h2>Get professional Gear</h2>
  <StoreProducts :products="productData" />
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
      productData: [
        {
          img: img1,
          name: "Product A",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit sed.",
          price: "100,-",
          stockAmount: "9",
        },
        {
          img: img2,
          name: "Product B",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit sed.",
          price: "150,-",
          stockAmount: "6",
        },
        {
          img: img3,
          name: "Product C",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit sed.",
          price: "200,-",
          stockAmount: "0",
        },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  padding: 0.5rem;
}
</style>
