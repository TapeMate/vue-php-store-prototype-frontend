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
      productData: [
        {
          img: "https://dummyimage.com/200x200/00b3ff/000000&text=Product+Image",
          name: "Product A",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit sed.",
          price: "100,-",
          stockAmount: "9",
        },
        {
          img: "https://dummyimage.com/200x200/00b3ff/000000&text=Product+Image",
          name: "Product B",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit sed.",
          price: "150,-",
          stockAmount: "6",
        },
        {
          img: "https://dummyimage.com/200x200/00b3ff/000000&text=Product+Image",
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
