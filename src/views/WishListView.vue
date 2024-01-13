<template>
  <button @click="fetchData" class="test-fetching">
    TEST FETCH WISHLIST DATA
  </button>
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
    ...mapGetters(["getWishList"]),
  },
  methods: {
    ...mapActions(["fetchWishList"]),
    fetchData() {
      const testUserId = 30;
      this.fetchWishList(testUserId);
    },
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
