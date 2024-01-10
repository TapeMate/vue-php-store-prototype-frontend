<template>
  <WishList :wishItems="getWishList" />
</template>

<script>
import WishList from "@/components/WishList.vue";
import { mapGetters } from "vuex";
export default {
  name: "WishListView",
  components: {
    WishList,
  },
  computed: {
    ...mapGetters(["getWishList"]),
  },
};
</script>
