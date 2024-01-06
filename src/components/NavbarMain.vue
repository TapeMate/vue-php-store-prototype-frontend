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
            >SHOPPING CART <span>0</span>
            <i class="fa-sharp fa-solid fa-cart-shopping"></i
          ></router-link>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from "@/assets/img/logo.png";

export default {
  name: "NavbarMain",
  data() {
    return {
      logo: Logo,
    };
  },
};
</script>
