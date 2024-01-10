<template>
  <div class="home-section-wrapper">
    <div class="section-container">
      <section>
        <img :src="background" alt="" />
        <div class="section-content-container">
          <div class="media-container">
            <img :src="img" alt="" />
            <i class="fa-solid fa-circle-play"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            accusamus officia illum, dolores exercitationem.
          </p>
        </div>
        <div class="section-content-container">
          <h5>We make professional Equipment.</h5>
        </div>
      </section>
    </div>

    <div class="section-container">
      <section v-if="!isloginSuccessful">
        <div class="section-signup-container">
          <SignupForm />
        </div>
        <div class="separator">
          <p>OR</p>
        </div>
        <div class="section-login-container">
          <LoginForm />
        </div>
      </section>
      <section class="portfolio-section" v-if="isloginSuccessful">
        <HomePortfolio />
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "@/components/LoginForm.vue";
import Dummy from "../assets/img/dummy.jpg";
import Background from "../assets/img/background.jpg";
import HomePortfolio from "@/components/HomePortfolio.vue";

export default {
  name: "HomeSections",
  components: {
    SignupForm,
    LoginForm,
    HomePortfolio,
  },
  computed: {
    ...mapGetters(["isloginSuccessful"]),
  },
  data() {
    return {
      img: Dummy,
      background: Background,
    };
  },
};
</script>
