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
  methods: {
    submitLogin() {
      console.log(this.loginData);
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
          console.log("Login successful:", data);
          this.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    reload() {
      console.log("Reloading the page");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    },
  },
};
</script>
