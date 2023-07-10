const comment = {
  state: {
    comment_list: [],
  },
  getters: {
    get_comment_list: (state) => state.comment_list,
  },
  mutations: {
    set_comment_list(state, parameter) {
      state.comment_list = parameter;
    },
  },
  actions: {},
};

export default comment;
