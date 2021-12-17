export default {
  async registrateUser(_, payload) {
    console.log('Action: registre')
    let response
    const headers = {
      'Content-Type': 'multipart/form-data',
    }
    try {
      console.log('try registrate')
      response = await this.$axios.$post(
        `${this.$axios.defaults.baseURL}/users/register/`,
        payload,
        { headers: headers }
      )
    } catch (err) {
      console.log(err.response)
      return false
    }
    console.log('Registration done!')
    return true
  },
}
