import { createStore } from "vuex";
import state from "@/store/modules/state";
import mutations from "@/store/modules/mutations";
import getters from "@/store/modules/getters";

const store = createStore({
  state,
  mutations,
  getters,
});

export default store;
