<template>
  <NavbarMain />
  <router-view />
</template>

<script>
import NavbarMain from "@/components/NavbarMain.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    NavbarMain,
  },

  computed: {
    ...mapGetters(["getUserId"]),
  },

  mounted() {
    this.fetchWishList(this.getUserId);
  },

  methods: {
    ...mapActions(["fetchWishList"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: white;
}
</style>
