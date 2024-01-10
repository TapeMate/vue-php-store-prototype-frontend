export default (store) => {
  store.subscribe((mutation, state) => {
    localStorage.setItem("shoppingCart", JSON.stringify(state.shoppingCart));
    localStorage.setItem("wishList", JSON.stringify(state.wishList));
  });
};
