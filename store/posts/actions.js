import axios from 'axios'

export default {
  async loadPosts(context, payload) {
    let response
    try {
      response = await axios.get(
        `https://pfld-sandbox-voiuolbq7q-ey.a.run.app/api/blog/posts/?page=${payload.page}&page_size=${payload.pageSize}`
      )
    } catch (err) {
      console.log(err.response)
      context.commit('setPosts', null)
      return
    }
    //console.log('action')
    //console.log(await response.data)
    context.commit('setPosts', await response.data.results)
    context.commit('setPages', await response.data.pages_count)
  },

  async getPost(context, payload) {
    let response
    try {
      response = await axios.get(
        `https://pfld-sandbox-voiuolbq7q-ey.a.run.app/api/blog/posts/detail/${payload}`
      )
    } catch (err) {
      console.log(err.response)
      context.commit('setOnePost', null)
      return
    }
    context.commit('setOnePost', await response.data)
  },
}
