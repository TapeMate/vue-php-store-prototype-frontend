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
        <button>
          <router-link to="/card"
            ><span class="username" v-if="isloginSuccessful"
              >Welcome {{ getUser }}</span
            >CART <span>0</span
            ><i class="fa-sharp fa-solid fa-cart-shopping"></i
          ></router-link>
        </button>
        <button class="btn-logout" @click="logoutUser" v-if="isloginSuccessful">
          LOGOUT
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
