import axios from 'axios'

export default {
  async loadComments(context, payload) {
    let response
    try {
      response = await axios.get(
        `https://pfld-sandbox-voiuolbq7q-ey.a.run.app/api/blog/posts/comments/${payload.slug}?page=${payload.page}&page_size=${payload.pageSize}`
      )
    } catch (err) {
      console.log(err.response)
    }

    context.commit('setComments', await response.data.results)
    context.commit('setPages', await response.data.pages_count)
  },
}
