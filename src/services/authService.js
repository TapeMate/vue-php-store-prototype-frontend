const signupURL =
  "http://localhost/vue-php-store-prototype-backend/api/signup.api.php";

export const pushUserData = async (signupData) => {
  console.log(signupData);
  try {
    const response = await fetch(`${signupURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    });
    if (!response.ok) {
      throw new Error("Network error while pushing signupData!");
    }
    return await response.json();
  } catch (error) {
    console.error("Error on pushUserData service:", error);
    throw error;
  }
};
