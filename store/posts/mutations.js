export default {
  setPosts(state, posts) {
    state.loadedPosts = posts
  },
  setPages(state, pages) {
    state.totalPages = pages
  },
}
