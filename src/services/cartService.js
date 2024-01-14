const baseURL =
  "http://localhost/vue-php-store-prototype-backend/api/cart.api.php";

// export const postItemToCart = async (product, amount, userId) => {
//   try {
//     const response = await fetch(`${baseURL}/cart/add`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ product, amount, userId }),
//     });
//     if (!response.ok) {
//       throw new Error("Network error while adding Item to cart!");
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error on postItemToCart service:", error);
//     throw error;
//   }
// };

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

// export const updateCartToLocal
