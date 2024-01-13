<template>
  <!-- <div v-if="loginSuccess" class="login-success-message">
    <p class="success-message">
      Hi <span class="username">{{ getUser }}</span>
    </p>
    <p class="success-message">You have been logged in successful!</p>
  </div> -->

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
      // loginSuccess: true,
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    ...mapActions(["fetchWishList"]),

    submitLogin() {
      fetch(
        "http://localhost/vue-php-store-prototype-backend/api/login.api.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.loginData),
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (!data) {
            throw new Error("Invalid response data");
          }
          if (data.error) {
            throw new Error(data.error);
          }
          // this.setLoginSuccess();
          this.setUserId(data.user.user_id);
          this.loggedInUser(data.user.user_uid);
          this.fetchWishList(data.user.user_id);
          this.runDisplayLoginMessage();
          this.loginIsSuccessful();
          this.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
          this.reload();
        });
    },

    reload() {
      setTimeout(() => {
        window.location.reload();
        this.loginIsSuccessful();
      }, 3000);
    },

    // setLoginSuccess() {
    //   this.loginSuccess = true;
    // },

    ...mapMutations([
      "loginIsSuccessful",
      "loggedInUser",
      "setUserId",
      "runDisplayLoginMessage",
    ]),
  },
};
</script>
