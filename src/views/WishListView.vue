<template>
  <WishList :wishItems="getWishList" />
</template>

<script>
import WishList from "@/components/WishList.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "WishListView",
  components: {
    WishList,
  },

  computed: {
    ...mapGetters(["getWishList", "getUserId"]),
  },
  methods: {
    ...mapActions(["fetchWishList"]),
  },
};
</script>
<style scoped>
.test-fetching {
  padding: 1rem;
  background: #333;
  font-weight: bold;
  font-size: 1rem;
  color: tomato;
  margin: 1rem;
}
.test-fetching:hover {
  background: #555;
}
</style>
