export default {
  loginIsSuccessful(state) {
    state.loginSuccess = true;
    localStorage.setItem("loginSuccess", "true");
  },
  userLogout(state) {
    state.loginSuccess = false;
    localStorage.setItem("loginSuccess", false);
  },
  loggedInUser(state, user) {
    state.userLoggedIn = user;
    localStorage.setItem("userLoggedIn", user);
  },
  unsetUser(state) {
    state.userLoggedIn = null;
    localStorage.setItem("userLoggedIn", null);
  },
  setUserId(state, userId) {
    state.userIdSet = userId;
    localStorage.setItem("userId", userId);
    console.log("User ID set.");
  },

  addToCart(state, item) {
    state.shoppingCart.push(item);
  },

  removeFromCart(state, itemId) {
    state.shoppingCart = state.shoppingCart.filter(
      (item) => item.id !== itemId
    );
  },
};
