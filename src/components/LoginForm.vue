<template>
  <div class="index-login">
    <h4>LOGIN</h4>
    <p>Login to your Account.</p>
    <form @submit.prevent="submitLogin" method="post">
      <input
        v-model="loginData.uid"
        type="text"
        name="uid"
        placeholder="Username"
      />
      <input
        v-model="loginData.pwd"
        type="password"
        name="pwd"
        placeholder="Password"
      />
      <br />
      <button type="submit" name="submit">LOGIN</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "LoginForm",
  data() {
    return {
      loginData: {
        uid: "",
        pwd: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getUser", "getUserId"]),
  },
  methods: {
    ...mapActions(["fetchWishList", "loginUser", "fetchLocalCart"]),

    ...mapMutations([
      "loginIsSuccessful",
      "loggedInUser",
      "setUserId",
      "runDisplayLoginMessage",
    ]),

    async submitLogin() {
      try {
        const response = await this.loginUser(this.loginData);
        if (response && response.success) {
          this.setUserId(response.user.user_id);
          this.loggedInUser(response.user.user_uid);
          this.fetchWishList(this.getUserId);
          this.fetchLocalCart(this.getUserId);
          this.runDisplayLoginMessage();
          this.loginIsSuccessful();
          this.loginData.uid = "";
          this.loginData.pwd = "";
        } else {
          console.error("Login failed: ", response);
          this.loginData.uid = "";
          this.loginData.pwd = "";
        }
      } catch (error) {
        console.error("Login error: ", error);
        this.loginData.uid = "";
        this.loginData.pwd = "";
      }
    },
  },
};
</script>
