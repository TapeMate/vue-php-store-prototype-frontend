<template>
  <h2>SHOPPING CART</h2>
  <ShoppingCard :cartItems="getShoppingCart" />
</template>

<script>
import ShoppingCard from "@/components/ShoppingCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "ShoppingCardView",
  components: {
    ShoppingCard,
  },
  computed: {
    ...mapGetters(["getShoppingCart"]),
  },
};
</script>

<style scoped>
h2 {
  padding: 0.5rem;
}
</style>
