export default {
  loginSuccess: localStorage.getItem("loginSuccess") === "true" || false,
  displayLoginMessage:
    localStorage.getItem("displayLoginMessage") === "true" || false,
  userLoggedIn: localStorage.getItem("userLoggedIn") || null,
  userIdSet: localStorage.getItem("userId") || null,
  shoppingCart: JSON.parse(localStorage.getItem("shoppingCart")) || [],
  wishList: JSON.parse(localStorage.getItem("wishList")) || [],
  paymentMethod: localStorage.getItem("paymentMethod") || null,
  deliveryMethod: localStorage.getItem("deliveryMethod") || null,
};
