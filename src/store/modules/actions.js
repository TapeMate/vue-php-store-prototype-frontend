import { postWishList } from "@/services/wishlistService";

export default {
  async addWishListItem({ commit }, { userId, product }) {
    try {
      const response = await postWishList({ userId, product });
      if (response.success) {
        commit("addToWishList", product);
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
