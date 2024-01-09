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
  },
  unsetUserId(state) {
    state.userIdSet = null;
    localStorage.setItem("userId", null);
  },

  addToCart(state, item) {
    let index = null;

    state.shoppingCart.some((el) => {
      if (el.product_id == item.product_id) {
        index = state.shoppingCart.indexOf(el);
        return index;
      }
      return;
    });

    if (index === null) {
      state.shoppingCart.push(item);
    } else {
      state.shoppingCart[index].product_order_amount =
        state.shoppingCart[index].product_order_amount +
        item.product_order_amount;
    }
  },

  removeFromCart(state, itemId) {
    state.shoppingCart = state.shoppingCart.filter(
      (item) => item.product_id !== itemId
    );
  },

  resetCart(state) {
    state.shoppingCart = [];
    localStorage.setItem("shoppingCart", JSON.stringify([]));
  },
};
