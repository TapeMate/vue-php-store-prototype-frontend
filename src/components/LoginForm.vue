<template>
  <div class="index-login">
    <h4>LOGIN</h4>
    <p>Login to your Account.</p>
    <form method="post">
      <input type="text" name="uid" placeholder="Username" />
      <input type="password" name="pwd" placeholder="Password" />
      <br />
      <button type="submit" name="submit">LOGIN</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>
