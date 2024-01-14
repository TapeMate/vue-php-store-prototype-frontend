// wishlist services:
import { pushItemToWishList } from "@/services/wishListService";
import { pullWishList } from "@/services/wishListService";
import { removeItemOnWishList } from "@/services/wishListService";

// cart services:
// import { postItemToCart } from "@/services/cartService";
import { pushLocalCart } from "@/services/cartService";

export default {
  async addWishListItem({ commit }, { userId, product }) {
    const productId = product.product_id;
    try {
      const response = await pushItemToWishList({ userId, productId });
      if (response.success) {
        commit("addToWishListLocal", product);
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
        commit("removeFromWishListLocal", productId);
        return response;
      } else {
        console.error("no success: ", response);
        return { success: false };
      }
    } catch (error) {
      console.error("Error in removeWishListItem action:", error);
      throw error;
    }
  },

  // async addCartItem({ dispatch }, { product, amount, userId }) {
  //   try {
  //     const response = await postItemToCart(product, amount, userId);
  //     if (response.success) {
  //       dispatch("dummyForTesting");
  //       return response;
  //     } else {
  //       console.error("no success: ", response);
  //       return { success: false };
  //     }
  //   } catch (error) {
  //     console.error("Error in addCartItem action:", error);
  //     throw error;
  //   }
  // },

  async sendLocalCart({ dispatch }, { product, userId }) {
    try {
      const response = await pushLocalCart(product, userId);
      if (response.success) {
        dispatch("dummyForTesting");
        return response;
      } else {
        console.error("no success: ", response);
        return { success: false };
      }
    } catch (error) {
      console.error("Error in getLocalCart action:", error);
      throw error;
    }
  },

  dummyForTesting() {
    console.log("dispatched dummy.");
  },
};
