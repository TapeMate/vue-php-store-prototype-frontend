import { createStore } from "vuex";
import state from "@/store/modules/state";
import mutations from "@/store/modules/mutations";
import getters from "@/store/modules/getters";
import localStoragePlugin from "@/store/modules/plugins";

const store = createStore({
  state,
  mutations,
  getters,
  plugins: [localStoragePlugin],
});

export default store;
