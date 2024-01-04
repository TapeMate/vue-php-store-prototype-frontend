<template>
  <div class="home-wrapper">
    <NavbarMain />
    <LandingPage />
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from "@/components/LandingPage.vue";
import NavbarMain from "@/components/NavbarMain.vue";

export default {
  name: "HomeView",
  components: {
    LandingPage,
    NavbarMain,
  },
};
</script>
