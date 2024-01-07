<template>
  <h2>SHOPPING CART</h2>
  <ShoppingCard />
</template>

<script>
import ShoppingCard from "@/components/ShoppingCard.vue";

export default {
  name: "ShoppingCardView",
  components: {
    ShoppingCard,
  },
};
</script>

<style scoped>
h2 {
  padding: 0.5rem;
}
</style>
