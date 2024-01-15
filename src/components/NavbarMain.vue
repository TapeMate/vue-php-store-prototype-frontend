<template>
  <div class="navbar-wrapper">
    <nav class="navbar-main">
      <div class="navbar-main-logo">
        <img :src="logo" alt="" />
      </div>
      <div class="navbar-main-container">
        <ul>
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="/product">PRODUCTS</router-link></li>
          <li><a href="#">CURRENT SALES</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </div>
      <div class="navbar-secondary-container">
        <span class="username-intro" v-if="isloginSuccessful"
          >Welcome, <span class="username">{{ getUser }}</span></span
        >

        <div class="navbar-secondary-item">
          <router-link class="card-link" to="/card">
            <span v-if="cartCount === 0" class="card-count-zero">{{
              cartCount
            }}</span>
            <span v-if="cartCount > 0" class="card-count">{{ cartCount }}</span>
            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
          </router-link>
        </div>
        <div class="navbar-secondary-item">
          <router-link v-if="isloginSuccessful" class="wish-link" to="/wish">
            <span v-if="wishCount === 0" class="wish-count-zero">
              {{ wishCount }}</span
            >
            <span v-if="wishCount > 0" class="wish-count">{{ wishCount }}</span>
            <i id="navbar-wishlist-icon" class="fa-solid fa-heart"></i>
          </router-link>
        </div>
        <div class="navbar-secondary-item">
          <button
            class="btn-logout"
            @click="logoutUser"
            v-if="isloginSuccessful"
          >
            <i class="fa-solid fa-right-from-bracket"></i>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from "@/assets/img/logo.png";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "NavbarMain",
  data() {
    return {
      logo: Logo,
      cartCount: 0,
      wishCount: 0,
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    ...mapGetters([
      "isloginSuccessful",
      "getUser",
      "getUserId",
      "getShoppingCart",
      "getWishList",
    ]),
  },
  methods: {
    init() {
      this.getCartCount();
      this.getWishCount();
    },
    ...mapActions(["fetchWishList"]),
    ...mapMutations([
      "userLogout",
      "unsetUser",
      "unsetUserId",
      "unsetPaymentMethod",
      "unsetDeliveryMethod",
      "unsetWishList",
      "unsetCart",
    ]),
    logoutUser() {
      this.userLogout();
      this.unsetUser();
      this.unsetUserId();
      this.unsetDeliveryMethod();
      this.unsetPaymentMethod();
      this.unsetWishList();
      this.$router.push("/");
    },

    getCartCount() {
      this.cartCount = this.getShoppingCart.length;
      return;
    },

    getWishCount() {
      this.wishCount = this.getWishList.length;
      // console.log(this.getWishList);
      // console.log(this.wishCount);
      return;
    },
  },
};
</script>
