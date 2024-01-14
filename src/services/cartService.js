const baseURL =
  "http://localhost/vue-php-store-prototype-backend/api/cart.api.php";

export const postItemToCart = async (product, amount, userId) => {
  try {
    const response = await fetch(`${baseURL}/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product, amount, userId }),
    });
    if (!response.ok) {
      throw new Error("Network error while adding Item to cart!");
    }
    return await response.json();
  } catch (error) {
    console.error("Error on postItemToCart service:", error);
    throw error;
  }
};
