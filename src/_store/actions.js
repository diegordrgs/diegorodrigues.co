export default {
  setLoading ({commit}) {
    commit('LOADING');
  },
  async getProjectById({commit}, id) {
    commit('GET_PROJECT_BY_ID', {id});
  }
}