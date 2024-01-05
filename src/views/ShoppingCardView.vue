<template>
  <h2>SHOPPING SUMMARY</h2>
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
