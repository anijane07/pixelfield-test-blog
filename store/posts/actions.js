export default {
  async loadPosts(context, payload) {
    let data
    try {
      data = await this.$axios.$get(
        `${this.$axios.defaults.baseURL}/blog/posts/?page=${payload.page}&page_size=${payload.pageSize}`
      )
    } catch (err) {
      console.log('error accured')
      context.commit('setPosts', null)
      return
    }
    //console.log('action')
    //console.log(await data)
    context.commit('setPosts', await data.results)
    context.commit('setPages', await data.pages_count)
  },

  async getPost(context, payload) {
    let data
    try {
      data = await this.$axios.$get(
        `${this.$axios.defaults.baseURL}/blog/posts/detail/${payload}`
      )
    } catch (err) {
      console.log(err.response)
      context.commit('setOnePost', null)
      return
    }
    context.commit('setOnePost', data)
  },

  async createPost(_, payload) {
    let data
    const headers = {
      'Content-Type': 'multipart/form-data',
    }
    try {
      data = await this.$axios.$post(
        `${this.$axios.defaults.baseURL}/blog/posts/create`,
        payload,
        { headers: headers }
      )
    } catch (err) {
      console.log(err)
      return
    }
    console.log('Post created!')
  },
}
