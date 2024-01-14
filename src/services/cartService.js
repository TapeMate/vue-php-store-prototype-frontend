const baseURL =
  "http://localhost/vue-php-store-prototype-backend/api/cart.api.php";

export const pushLocalCart = async (userId, localCart) => {
  console.log(localCart);
  try {
    const response = await fetch(`${baseURL}/cart/sync`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, localCart }),
    });
    if (!response.ok) {
      throw new Error("Network error while cart sync!");
    }
    return await response.json();
  } catch (error) {
    console.error("Error on syncCart Service:", error);
    throw error;
  }
};

// export const getCartFromDB
