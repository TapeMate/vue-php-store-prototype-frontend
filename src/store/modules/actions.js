export default {
  async setWishListItem({ commit }, item) {
    try {
      const response = await wishlistService.add(item);
      if (response.success) {
        commit("setWishListItem", item);
      } else {
        // handle case where item is already in the wishlist
      }
    } catch (error) {
      // Error handling
    }
  },
};
