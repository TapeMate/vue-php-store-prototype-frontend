// wishlist services:
import { pushItemToWishList } from "@/services/wishListService";
import { pullWishList } from "@/services/wishListService";
import { removeItemOnWishList } from "@/services/wishListService";

// cart services:
// import { postItemToCart } from "@/services/cartService";
import { pushLocalCart } from "@/services/cartService";

// other services:
import { pullProductData } from "@/services/productDataService";
import { pushUserData } from "@/services/authService";
import { verifyUserData } from "@/services/authService";

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

  async sendLocalCartToDB({ getters }, userId) {
    const localCart = getters.getShoppingCart;
    try {
      const response = await pushLocalCart(userId, localCart);
      if (response.success) {
        console.log("success: ", response);
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

  // async receiveCartFromDB({ commit }, userId) {

  // },

  // dummyForTesting() {
  //   console.log("dispatched dummy.");
  // },

  async getProductData() {
    try {
      const response = await pullProductData();
      return response;
    } catch (error) {
      console.error("Error in getProductData action:", error);
      throw error;
    }
  },

  async signupUser(_, signupData) {
    console.log(signupData);
    try {
      const response = await pushUserData(signupData);
      if (response.success) {
        console.log("success: ", response);
        return response;
      } else {
        console.error("no success: ", response);
      }
    } catch (error) {
      console.error("Error in signupUser action:", error);
      throw error;
    }
  },

  async loginUser(_, loginData) {
    console.log(loginData);
    try {
      const response = await verifyUserData(loginData);
      console.log("success: ", response);
      return response;
    } catch (error) {
      console.error("Error in loginUser action:", error);
      throw error;
    }
  },
};
