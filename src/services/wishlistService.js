const baseURL =
  "http://localhost/vue-php-store-prototype-backend/api/wishlist.api.php";

export const postItemToWishList = async ({ userId, productId }) => {
  try {
    const response = await fetch(`${baseURL}/wishlist/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, productId }),
    });
    if (!response.ok) {
      throw new Error("Network error while posting Wishlist!");
    }
    return await response.json();
  } catch (error) {
    console.error("Error in postWishList service:", error);
    throw error;
  }
};

export const pullWishList = async (userId) => {
  try {
    const response = await fetch(
      `${baseURL}/wishlist/get?userId=${encodeURIComponent(userId)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network error while fetching Wishlist!");
    }
    return await response.json();
  } catch (error) {
    console.error("Error in pullWishList service:", error);
    throw error;
  }
};

export const removeItemOnWishList = async ({ userId, productId }) => {
  try {
    const response = await fetch(
      `${baseURL}/users/${encodeURIComponent(
        userId
      )}/wishlist/${encodeURIComponent(productId)}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(
        "Network error while trying to remove Item from wishlist!"
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error on removeItemOnWishList service:", error);
    throw error;
  }
};
