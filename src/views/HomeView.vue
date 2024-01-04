<template>
  <div class="home-wrapper">
    <NavbarMain />
    <HomeSections />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarMain from "@/components/NavbarMain.vue";
import HomeSections from "@/components/HomeSections.vue";

export default {
  name: "HomeView",
  components: {
    NavbarMain,
    HomeSections,
  },
};
</script>
