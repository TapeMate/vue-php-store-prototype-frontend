import { postItemToWishList } from "@/services/wishListService";
import { pullWishList } from "@/services/wishListService";
import { removeItemOnWishList } from "@/services/wishListService";

export default {
  async addWishListItem({ commit }, { userId, product }) {
    const productId = product.product_id;
    try {
      const response = await postItemToWishList({ userId, productId });
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
        commit("updateWishListLocal", response);
        return response;
      } else {
        commit("unsetWishList", response);
        return { success: false };
      }
    } catch (error) {
      console.error("Error in fetchWishList action:", error);
      throw error;
    }
  },

  async removeWishListItem({ commit }, { userId, productId }) {
    try {
      const response = await removeItemOnWishList(userId, productId);
      if (response.success) {
        commit("removeFromWishList", response);
        return response;
      } else {
        console.error(response);
        return { success: false };
      }
    } catch (error) {
      console.error("Error in removeWishListItem action:", error);
      throw error;
    }
  },
};
