export default {
  loginIsSuccessful(state) {
    state.loginSuccess = true;
    localStorage.setItem("loginSuccess", "true");
  },
  loggedInUser(state, user) {
    state.userLoggedIn = user;
    localStorage.setItem("userLoggedIn", user);
    console.log("mutation called.");
  },
};
