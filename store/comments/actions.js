export default {
  async loadComments(context, payload) {
    let data
    try {
      data = await this.$axios.$get(
        `${this.$axios.defaults.baseURL}/blog/posts/comments/${payload.slug}?page=${payload.page}&page_size=${payload.pageSize}`
      )
    } catch (err) {
      console.log(err.response)
    }

    context.commit('setComments', await data.results)
    context.commit('setPages', await data.pages_count)
  },
  async createComment(_, payload) {
    try {
      await this.$axios.$post(
        `${this.$axios.defaults.baseURL}/blog/posts/comment/create`,
        payload
      )
    } catch (err) {
      console.log(err)
      return false
    }
    console.log('Okomentovano!')
    return true
  },
  async deleteComment(context, payload) {
    try {
      await this.$axios.$delete(
        `${this.$axios.defaults.baseURL}/blog/posts/comments/delete/${payload}`
      )
    } catch (err) {
      console.log(err)
      return
    }
    context.commit('deleteComment', payload)
  },
}
