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
        <router-link to="/card"
          >CART
          <span v-if="cartCount === 0" class="card-count-zero">{{
            cartCount
          }}</span>
          <span v-if="cartCount > 0" class="card-count">{{ cartCount }}</span>
          <i class="fa-sharp fa-solid fa-cart-shopping"></i>
        </router-link>
        <button class="btn-logout" @click="logoutUser" v-if="isloginSuccessful">
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from "@/assets/img/logo.png";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "NavbarMain",
  data() {
    return {
      logo: Logo,
      cartCount: 0,
    };
  },
  mounted() {
    this.getCartCount();
  },
  computed: {
    ...mapGetters(["isloginSuccessful", "getUser", "getShoppingCart"]),
  },
  methods: {
    ...mapMutations(["userLogout", "unsetUser", "unsetUserId"]),
    logoutUser() {
      this.userLogout();
      this.unsetUser();
      this.unsetUserId();
      this.reload();
    },
    getCartCount() {
      this.cartCount = this.getShoppingCart.length;
      return;
    },

    reload() {
      console.log("Reloading the page");
      window.location.reload();
    },
  },
};
</script>
