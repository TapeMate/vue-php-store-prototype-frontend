export default {
  isloginSuccessful: (state) => state.loginSuccess,
  getUser: (state) => state.userLoggedIn,
  getUserId: (state) => state.userIdSet,
  getShoppingCart: (state) => state.shoppingCart,
  getPaymentMethod: (state) => state.paymentMethod,
  getDeliveryMethod: (state) => state.deliveryMethod,
};
