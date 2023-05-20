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
    attraction_list: [],
    partial_list: []
  },
  getters: {
  },
  actions: {
    [Constant.GET_SIDOS]: (attractionStore) => {
      http.get("/attractions/sido").then((response) => {
        attractionStore.commit(Constant.GET_SIDOS, {
          sido_list: response.data,
        });
      });
    },

    [Constant.GET_ATTRACTIONS]: (attractionStore) => {
      http.get("/attractions/partial?offset=0&limit=60").then((response) => {
        attractionStore.commit(Constant.GET_ATTRACTIONS, {
          attraction_list: response.data,
        });
      });
    },

    [Constant.GET_PARTIAL_ATTRACTIONS]: (attractionStore, offset) => {
      http
        .get("/attractions/partial?" + `offset=${(offset-1) * 6}&limit=6`)
        .then((response) => {
          attractionStore.commit(Constant.GET_PARTIAL_ATTRACTIONS, {
            attraction_list: response.data,
          });
        });
    },
  },
  mutations: {
    [Constant.GET_SIDOS]: (state, payload) => {
      //console.log(payload.sido_list);
      state.sido_list = payload.sido_list;
    },

    [Constant.GET_ATTRACTIONS]: (state, payload) => {
      state.attraction_list = payload.attraction_list;
    },

    [Constant.GET_PARTIAL_ATTRACTIONS]: (state, payload) => {
      state.attraction_list = payload.attraction_list;
    },
  },
};

export default attractionStore;
