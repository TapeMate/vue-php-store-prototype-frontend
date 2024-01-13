import { postWishList } from "@/services/wishListService";
import { pullWishList } from "@/services/wishListService";

export default {
  async addWishListItem({ commit }, { userId, product }) {
    const productId = product.product_id;
    try {
      const response = await postWishList({ userId, productId });
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

  async fetchWishList({ commit }, userId) {
    try {
      const response = await pullWishList(userId);
      if (response.success) {
        commit("setWishListLocal", response);
        return response;
      } else {
        console.error(response.error);
        return { success: false };
      }
    } catch (error) {
      console.error("Error in fetchWishList action:", error);
      throw error;
    }
  },
};
