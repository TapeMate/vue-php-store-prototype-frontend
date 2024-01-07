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
          >CART <span class="card-count">0</span>
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
    };
  },
  computed: {
    ...mapGetters(["isloginSuccessful", "getUser"]),
  },
  methods: {
    ...mapMutations(["userLogout", "unsetUser"]),
    logoutUser() {
      this.userLogout();
      this.unsetUser();
    },
  },
};
</script>
