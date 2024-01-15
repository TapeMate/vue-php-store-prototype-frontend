<template>
  <div class="index-signup">
    <h4>SIGN UP</h4>
    <p>Don't have an account yet? Sign up here!</p>
    <form @submit.prevent="submitSignup" method="post">
      <input
        v-model="signupData.uid"
        type="text"
        name="uid"
        placeholder="Username"
      />
      <input
        v-model="signupData.pwd"
        type="password"
        name="pwd"
        placeholder="Password"
      />
      <input
        v-model="signupData.pwdRepeat"
        type="password"
        name="pwdRepeat"
        placeholder="Repeat Password"
      />
      <input
        v-model="signupData.email"
        type="text"
        name="email"
        placeholder="E-Mail"
      />
      <br />
      <button type="submit" name="submit">SIGN UP</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SignupForm",
  data() {
    return {
      signupData: {
        uid: "",
        pwd: "",
        pwdRepeat: "",
        email: "",
      },
    };
  },
  methods: {
    ...mapActions(["signupUser"]),

    async submitSignup() {
      try {
        this.signupUser(this.signupData);
      } catch (error) {
        console.error("Signup failed: ", error);
      }
      this.signupData.uid = "";
      this.signupData.pwd = "";
      this.signupData.pwdRepeat = "";
      this.signupData.email = "";
    },
  },
};
</script>
