import wishlistService from "@/services/wishlistService";

export default {
  async setWishListItem({ commit }, item) {
    try {
      const response = await wishlistService.add(item);
      if (response.success) {
        commit("setWishListItem", item);
        return response;
      } else {
        return { success: false };
      }
    } catch (error) {
      throw error;
    }
  },
};
