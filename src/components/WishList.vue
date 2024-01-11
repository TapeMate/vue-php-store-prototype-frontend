<template>
  <div class="wish-list-container">
    <div v-if="getWishList.length === 0" class="upper-container">
      <span class="username-intro"
        >Hello <span class="username">{{ getUser }}</span
        >. Currently there are no Products on your Wish List.</span
      >
    </div>
    <div class="lower-container">
      <img :src="background" alt="Background" />
      <div class="selected-products-container">
        <h5>WISH LIST OVERVIEW</h5>
        <div
          v-for="(item, index) in wishItems"
          :key="index"
          class="product-container"
        >
          <img
            class="product-image"
            :src="item.product_img"
            alt="Product Image"
          />
          <div class="info-container">
            <h5 class="product-name">{{ item.product_name }}</h5>
            <p class="product-description">{{ item.product_description }}</p>
            <p class="stock-amount">
              STOCK AMOUNT<span class="amount">{{
                item.product_stock_amount
              }}</span>
            </p>
          </div>
          <div class="ctrl-container">
            <button @click="removeItem(item.product_id)" class="btn-remove">
              REMOVE <i class="fa-solid fa-trash"></i>
            </button>

            <div class="price-container">
              <span class="product-price-unit"
                ><span>UNIT</span>{{ item.product_price }},- EUR</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import img from "@/assets/img/wishlist.jpg";

export default {
  name: "WishList",
  props: {
    wishItems: Array,
  },

  data() {
    return {
      background: img,
    };
  },

  computed: {
    ...mapGetters(["getWishList", "getUser"]),
  },

  methods: {
    ...mapMutations(["removeFromWishList"]),

    removeItem(id) {
      this.removeFromWishList(id);
      this.quickReload();
    },

    quickReload() {
      window.location.reload();
    },
  },
};
</script>
