export default {
  loginSuccess: localStorage.getItem("loginSuccess") === "true" || false,
  userLoggedIn: localStorage.getItem("userLoggedIn") || null,
};
