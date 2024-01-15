// wishlist services:
import { pushItemToWishList } from "@/services/wishListService";
import { pullWishList } from "@/services/wishListService";
import { removeItemOnWishList } from "@/services/wishListService";

// cart services:
import { pushLocalCart } from "@/services/cartService";
import { getCartFromDB } from "@/services/cartService";
import { updateCartItemOrderAmount } from "@/services/cartService";
import { deleteItemFromCard } from "@/services/cartService";

// order services:
import { setOrder } from "@/services/orderService";

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
        return response;
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error("Error in sendLocalCartToDB action:", error);
      throw error;
    }
  },

  async fetchCart({ commit }, userId) {
    try {
      const response = await getCartFromDB(userId);
      if (response.success) {
        commit("setLocalCart", response);
        return response;
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error("Error in fetchCart action:", error);
    }
  },

  async getProductData() {
    try {
      const response = await pullProductData();
      return response;
    } catch (error) {
      console.error("Error in getProductData action:", error);
      throw error;
    }
  },

  async updateCartItemOrderAmount(_, payload) {
    try {
      const response = await updateCartItemOrderAmount(payload);
      if (response.success) {
        return response;
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error("Error in updateCartOrderAmount action:", error);
      throw error;
    }
  },

  async deleteItemFromCard(_, payload) {
    try {
      const response = await deleteItemFromCard(payload);
      if (response.success) {
        return response;
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error("Error in deleteItemFromCard action:", error);
      throw error;
    }
  },

  async orderCartItems({ commit }, payload) {
    try {
      const response = await setOrder(payload);
      if (response.success) {
        commit("unsetCart");
        return response;
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error("Error in orderCartItems action:", error);
      throw error;
    }
  },

  async signupUser(_, signupData) {
    try {
      const response = await pushUserData(signupData);
      if (response.success) {
        return response;
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error("Error in signupUser action:", error);
      throw error;
    }
  },

  async loginUser(_, loginData) {
    try {
      const response = await verifyUserData(loginData);
      return response;
    } catch (error) {
      console.error("Error in loginUser action:", error);
      throw error;
    }
  },
};
