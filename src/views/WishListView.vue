<template>
  <!-- <button @click="fetchData" class="test-fetching">
    TEST FETCH WISHLIST DATA
  </button> -->
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
  // mounted() {
  //   this.fetchWishList(this.getUserId);
  // },

  computed: {
    ...mapGetters(["getWishList", "getUserId"]),
  },
  methods: {
    ...mapActions(["fetchWishList"]),
    // fetchData() {
    //   const testUserId = this.getUserId;
    //   this.fetchWishList(testUserId);
    // },
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
