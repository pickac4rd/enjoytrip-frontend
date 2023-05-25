import http from "@/api/http";

const boardStore = {
  namespaced: true,
  state: {
    board: null,
    boards: [],
  },
  getters: {},
  mutations: {
    CLEAR_BOARD(state) {
      state.board = null;
    },
    CLEAR_BOARD_LIST(state) {
      state.boards = [];
    },
    SET_BOARD(state, board) {
      state.board = board;
    },
    SET_BOARD_LIST(state, boards) {
      state.boards = boards;
    },
  },
  actions: {
    getBoardList({ commit }) {
      http
        .get(`/board`)
        .then(({ data }) => {
          commit("SET_BOARD_LIST", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getBoard({ commit }, boardid) {
      http
        .get(`/board/view/${boardid}`)
        .then(({ data }) => {
          commit("SET_BOARD", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async countUpBoard(context, boardid) {
      await http.put(`/board/view/countup/${boardid}`).catch((error) => {
        console.log(error);
      });
    },
    async deleteBoard(context, boardid) {
      await http.delete(`/board/view/${boardid}`).catch((error) => {
        console.log(error);
      });
    },
    async modifyBoard(context, param) {
      await http.put(`/board/modify`, JSON.stringify(param)).catch((error) => {
        console.log(error);
      });
    },
  },
};

export default boardStore;
