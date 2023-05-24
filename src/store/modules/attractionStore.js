import http from "@/api/http";
import Constant from "../constant/Constant";

const attractionStore = {
  namespaced: true,
  state: {
    sido_list: [],
    gugun_list: [],
    sido_code: undefined,
    gugun_code: undefined,
    content_type_id: undefined,
    title: undefined,
    attraction_list: [],
    partial_list: [],
    attraction_list_length: 0,
    attraction: null,
    cur_page: 0,
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

    [Constant.GET_GUGUNS]: (attractionStore, newSidoCode)=>{
      http.get("/attractions/sido/" + `${newSidoCode}`).then((response) => {
        attractionStore.commit(Constant.GET_GUGUNS, {
          gugun_list: response.data,
        });
      })

    },

    [Constant.GET_ATTRACTIONS]: (attractionStore) => {
      http.get("/attractions").then((response) => {
        attractionStore.commit(Constant.GET_ATTRACTIONS, {
          attraction_list: response.data,
        });
      });
    },

    [Constant.GET_PARTIAL_ATTRACTIONS]: (attractionStore, offset) => {
      http
        .get("/attractions/partial?" + `offset=${offset * 6}&limit=6`)
        .then((response) => {
          attractionStore.commit(Constant.GET_PARTIAL_ATTRACTIONS, {
            attraction_list: response.data,
          });
        });
    },

    [Constant.GET_ATTRACTION]: (attractionStore, content_id)=>{
      http
        .get(`/attractions/${content_id}`)
        .then((response) => {
          attractionStore.commit(Constant.GET_ATTRACTION, {
            attraction: response.data,
          });
        });
    },

    [Constant.SEARCH]: (attractionStore, payload)=>{
      
      http
        .get(`/attractions/partial/search?offset=${payload.offset*6}&limit=6&sido_code=${payload.sido_code}&gugun_code=${payload.gugun_code}&content_type_id=${payload.content_type_id}&title=${payload.title}`)
        .then((response) => {
          attractionStore.commit(Constant.SEARCH, {
            attraction_list: response.data,
          });
        });
    },

    [Constant.CHANGE_SEARCH_PARAMS]: (attractionStore,{sido_code, gugun_code, content_type_id,title})=>{
      attractionStore.commit(Constant.CHANGE_SEARCH_PARAMS, {
        sido_code: sido_code,
        gugun_code: gugun_code,
        content_type_id: content_type_id,
        title: title,
      })
    }
  },
  mutations: {
    [Constant.GET_SIDOS]: (state, payload) => {
      //console.log(payload.sido_list);
      state.sido_list = payload.sido_list;
    },

    [Constant.GET_GUGUNS]: (state,payload) => {
      state.gugun_list = payload.gugun_list;
    },

    [Constant.GET_ATTRACTIONS]: (state, payload) => {
      state.attraction_list = payload.attraction_list;
    },

    [Constant.GET_PARTIAL_ATTRACTIONS]: (state, payload) => {
      state.attraction_list = payload.attraction_list;
    },

    [Constant.GET_ATTRACTION]: (state, payload) => {
      state.attraction = payload.attraction;
    },

    [Constant.SEARCH]: (state,payload) => {
      state.attraction_list = payload.attraction_list;
    },

    [Constant.CHANGE_SEARCH_PARAMS]: (state,payload) => {
      state.sido_code = payload.sido_code;
      state.gugun_code = payload.gugun_code;
      state.content_type_id = payload.content_type_id;
      state.title = payload.title;
    }
  },
};

export default attractionStore;
