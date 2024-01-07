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
    submitSignup() {
      console.log(this.signupData);
      fetch(
        "http://localhost/vue-php-store-prototype-backend/api/signup.api.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.signupData),
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
            this.reload();
          } else {
            console.log("Success: ", data);
            this.reload();
            // Handle success
          }
        })
        .catch((error) => {
          console.error("Network Error: ", error);
          // Handle network error
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
