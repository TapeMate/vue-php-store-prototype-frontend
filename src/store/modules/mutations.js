export default {
  loginIsSuccessful(state) {
    state.loginSuccess = true;
    localStorage.setItem("loginSuccess", "true");
  },
  runDisplayLoginMessage(state) {
    state.displayLoginMessage = true;
    localStorage.setItem("displayLoginMessage", "true");
    setTimeout(() => {
      state.displayLoginMessage = false;
      localStorage.setItem("displayLoginMessage", false);
    }, 3000);
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
    const index = state.shoppingCart.findIndex(
      (el) => el.product_id == item.product_id
    );

    if (index === -1) {
      state.shoppingCart.push(item);
    } else {
      state.shoppingCart[index].product_order_amount =
        state.shoppingCart[index].product_order_amount +
        item.product_order_amount;
    }
  },

  updateCartAmount(state, payload) {
    const item = payload.item;
    const newAmount = payload.amount;
    const index = state.shoppingCart.findIndex(
      (el) => el.product_id == item.product_id
    );

    if (newAmount > item.product_order_amount) {
      let increment = newAmount - item.product_order_amount;
      state.shoppingCart[index].product_order_amount =
        state.shoppingCart[index].product_order_amount + increment;
    } else if (newAmount < item.product_order_amount) {
      let decrement = item.product_order_amount - newAmount;
      state.shoppingCart[index].product_order_amount =
        state.shoppingCart[index].product_order_amount - decrement;
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

  addToWishList(state, item) {
    const index = state.wishList.findIndex(
      (el) => el.product_id == item.product_id
    );
    if (index === -1) {
      state.wishList.push(item);
    }
  },

  updateWishListLocal(state, data) {
    state.wishList = [];
    data.wishListData.forEach((el) => {
      state.wishList.push(el);
    });
  },

  removeFromWishListLocal(state, productId) {
    state.wishList = state.wishList.filter(
      (item) => item.product_id !== productId
    );
  },

  unsetWishList(state) {
    state.wishList = [];
    localStorage.setItem("wishList", JSON.stringify([]));
  },

  updatePaymentMethod(state, method) {
    (state.paymentMethod = method),
      localStorage.setItem("paymentMethod", method);
  },

  unsetPaymentMethod(state) {
    (state.paymentMethod = null), localStorage.setItem("paymentMethod", null);
  },

  updateDeliveryMethod(state, method) {
    (state.deliveryMethod = method),
      localStorage.setItem("deliveryMethod", method);
  },

  unsetDeliveryMethod(state) {
    (state.deliveryMethod = null), localStorage.setItem("deliveryMethod", null);
  },
};
