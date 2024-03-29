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

  runOrderSuccessMessage(state) {
    state.orderSuccessMessage = true;
    localStorage.setItem("orderSuccessMessage", "true");
    setTimeout(() => {
      state.orderSuccessMessage = false;
      localStorage.setItem("orderSuccessMessage", false);
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

  addToLocalCart(state, item) {
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

  setLocalCart(state, payload) {
    if (payload.data.length > 0) {
      payload.data.forEach((newCartItem) => {
        const existingItemIdx = state.shoppingCart.findIndex(
          (item) => item.product_id === newCartItem.product_id
        );

        if (existingItemIdx !== -1) {
          if (
            state.shoppingCart[existingItemIdx].product_order_amount >
            newCartItem.product_order_amount
          ) {
            return;
          } else if (
            state.shoppingCart[existingItemIdx].product_order_amount <=
            newCartItem.product_order_amount
          ) {
            state.shoppingCart[existingItemIdx].product_order_amount =
              newCartItem.product_order_amount;
          }
        } else {
          state.shoppingCart.push(newCartItem);
        }
      });
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

  unsetCart(state) {
    state.shoppingCart = [];
    localStorage.setItem("shoppingCart", JSON.stringify([]));
  },

  addToWishListLocal(state, item) {
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
