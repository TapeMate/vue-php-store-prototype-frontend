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
          // checks response property if is false and throws error to get handled
          if (!response.ok) {
            throw new Error(
              "Network response was not ok " + response.statusText
            );
          }
          return response.json();
        })
        .then((data) => {
          // check for application errors
          if (data.error) {
            console.error("Application Error: ", data.error);
            // Handle application-level error
            this.reloadOnError();
          } else {
            console.log("Success: ", data);
            // Handle success
          }
        })
        .catch((error) => {
          console.error("Network Error: ", error);
          // Handle network error
        });
    },
  },
};
</script>
