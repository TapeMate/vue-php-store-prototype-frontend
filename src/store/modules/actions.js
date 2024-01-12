import { postWishList } from "@/services/wishlistService";

export default {
  async setWishListItem({ commit }, item) {
    try {
      const response = await postWishList(item);
      if (response.success) {
        commit("addToWishList", item);
        return response;
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error("Error in setWishListItem action:", error);
      throw error;
    }
  },
};
