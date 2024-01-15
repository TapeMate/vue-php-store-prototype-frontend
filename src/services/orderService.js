const baseURL =
  "http://localhost/vue-php-store-prototype-backend/api/order.api.php";

export const setOrder = async (payload) => {
  try {
    const response = await fetch(`${baseURL}/order/set`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error("Network error while setting order!");
    }
    return await response.json();
  } catch (error) {
    console.error("Error on setOrder service:", error);
    throw error;
  }
};
