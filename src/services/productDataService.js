const baseURL =
  "http://localhost/vue-php-store-prototype-backend/api/product.api.php";

export const pullProductData = async () => {
  try {
    const response = await fetch(`${baseURL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network error while fetching product data!");
    }
    return await response.json();
  } catch (error) {
    console.error("Error on pullProductData service:", error);
    throw error;
  }
};
