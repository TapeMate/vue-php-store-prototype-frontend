const baseURL = "http://localhost/";

export const addToWishList = async (item) => {
  try {
    const response = await fetch(`${baseURL}/wishlist/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    if (!response.ok) {
      throw new Error("Network error!");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
