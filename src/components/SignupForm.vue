<template>
  <div class="index-signup">
    <h4>SIGN UP</h4>
    <p>Don't have an account yet? Sign up here!</p>
    <form method="post">
      <input type="text" name="uid" placeholder="Username" />
      <input type="password" name="pwd" placeholder="Password" />
      <input type="password" name="pwdRepeat" placeholder="Repeat Password" />
      <input type="text" name="email" placeholder="E-Mail" />
      <br />
      <button type="submit" name="submit">SIGN UP</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignupForm",
};
</script>
