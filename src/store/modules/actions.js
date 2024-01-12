import { postWishList } from "@/services/wishListService";

export default {
  async addWishListItem({ commit }, { userId, productId }) {
    try {
      const response = await postWishList({ userId, productId });
      if (response.success) {
        commit("addToWishList", productId);
        return response;
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error("Error in addWishListItem action:", error);
      throw error;
    }
  },
};
