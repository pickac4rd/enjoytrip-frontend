import http from "@/api/http";
import Constant from "../constant/Constant";

const attractionStore = {
  namespaced: true,
  state: {
    sido_list: [],
    gugun_list: [],
    sido_code: "",
    gugun_code: "",
    content_type_id: "",
    title: "",
  },
  getters: {},
  actions: {
    [Constant.GET_SIDOS]: (attractionStore) => {
      http.get("/attractions/sido").then((response) => {
        attractionStore.commit(Constant.GET_SIDOS, {
          sido_list: response.data,
        });
      });
    },
  },
  mutations: {
    [Constant.GET_SIDOS]: (state, payload) => {
      console.log(payload.sido_list);
      state.sido_list = payload.sido_list;
    },
  },
};

export default attractionStore;
