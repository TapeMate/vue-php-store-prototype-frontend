export default {
  isloginSuccessful: (state) => state.loginSuccess,
  getLoginMessage: (state) => state.displayLoginMessage,
  getUser: (state) => state.userLoggedIn,
  getUserId: (state) => state.userIdSet,
  getShoppingCart: (state) => state.shoppingCart,
  getPaymentMethod: (state) => state.paymentMethod,
  getDeliveryMethod: (state) => state.deliveryMethod,
};
