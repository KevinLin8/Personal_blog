const article = {
  state: {
    ArticleList: [],
    articleDetails: {},
  },
  getters: {
    get_ArticleList: (state) => state.ArticleList,
    get_articleDetails: (state) => state.articleDetails,
  },
  mutations: {
    set_ArticleList(state, parameter) {
      state.ArticleList = parameter;
    },
    set_articleDetails(state, parameter) {
      state.articleDetails = parameter;
    },
  },
  actions: {},
};

export default article;
