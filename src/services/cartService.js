const baseURL =
  "http://localhost/vue-php-store-prototype-backend/api/cart.api.php";

export const pushLocalCart = async (userId, localCart) => {
  try {
    const response = await fetch(`${baseURL}/cart/push`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, localCart }),
    });
    if (!response.ok) {
      throw new Error("Network error while cart push!");
    }
    return await response.json();
  } catch (error) {
    console.error("Error on pushLocalCart Service:", error);
    throw error;
  }
};

export const getCartFromDB = async (userId) => {
  try {
    const response = await fetch(
      `${baseURL}/cart/get?userId=${encodeURIComponent(userId)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network error while fetching cart!");
    }
    return await response.json();
  } catch (error) {
    console.error("Error on getCartFromDB service:", error);
    throw error;
  }
};

export const updateCartItemOrderAmount = async (payload) => {
  try {
    const response = await fetch(`${baseURL}/cart/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error("Network error while updating cart amount!");
    }
    return await response.json();
  } catch (error) {
    console.error("Error on updateCartItemOrderAmount service:", error);
    throw error;
  }
};

export const deleteItemFromCard = async (payload) => {
  try {
    const response = await fetch(`${baseURL}/cart/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error("Network error while deleting item!");
    }
    return await response.json();
  } catch (error) {
    console.error("Error on deleteItemFromCard service:", error);
    throw error;
  }
};
