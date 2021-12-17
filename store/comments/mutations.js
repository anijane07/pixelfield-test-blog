export default {
  setComments(state, comments) {
    state.comments = comments
  },
  setPages(state, pages) {
    state.totalPages = pages
  },
  deleteComment(state, id) {
    console.log(id)
    const tmp = state.comments.filter((com) => com.id !== id)
    state.comments = tmp
  },
}
