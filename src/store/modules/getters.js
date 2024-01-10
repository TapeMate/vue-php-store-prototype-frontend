export default {
  isloginSuccessful: (state) => state.loginSuccess,
  getLoginMessage: (state) => state.displayLoginMessage,
  getUser: (state) => state.userLoggedIn,
  getUserId: (state) => state.userIdSet,
  getShoppingCart: (state) => state.shoppingCart,
  getWishList: (state) => state.wishList,
  getPaymentMethod: (state) => state.paymentMethod,
  getDeliveryMethod: (state) => state.deliveryMethod,
};
