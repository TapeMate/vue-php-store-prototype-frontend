<template>
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
