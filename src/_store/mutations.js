export default {
  'LOADING'(state) {
    state.loading = !state.loading;
  },
  'GET_PROJECT_BY_ID'(state, {id}) {
    state.selectedProject = state.allProjects.find(project => project.id == id);
  }
}
