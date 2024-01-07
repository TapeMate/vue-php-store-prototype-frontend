export default {
  loginSuccess: localStorage.getItem("loginSuccess") === "true" || false,
  userLoggedIn: localStorage.getItem("userLoggedIn") || null,
  userIdSet: localStorage.getItem("userId") || null,
  shoppingCart: JSON.parse(localStorage.getItem("shoppingCart")) || [],
};
