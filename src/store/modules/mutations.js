export default {
  loginIsSuccessful(state) {
    state.loginSuccess = true;
    localStorage.setItem("loginSuccess", "true");
  },
  userLogout(state) {
    state.loginSuccess = false;
    localStorage.setItem("loginSuccess", false);
    console.log("login false");
  },
  loggedInUser(state, user) {
    state.userLoggedIn = user;
    localStorage.setItem("userLoggedIn", user);
  },
  unsetUser(state) {
    state.userLoggedIn = null;
    localStorage.setItem("userLoggedIn", null);
    console.log("unset user");
  },
};
