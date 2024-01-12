const baseURL =
  "http://localhost/vue-php-store-prototype-backend/api/wishlist.api.php";

export const postWishList = async ({ userId, product }) => {
  try {
    const response = await fetch(`${baseURL}/wishlist/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, product }),
    });
    if (!response.ok) {
      throw new Error("Network error!");
    }
    return await response.json();
  } catch (error) {
    console.error("Error in postWishList service:", error);
    throw error;
  }
};
