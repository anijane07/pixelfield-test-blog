import axios from 'axios'

export default {
  async registrateUser(_, payload) {
    console.log('Action: registre')
    let response
    const headers = {
      'Content-Type': 'multipart/form-data',
    }
    try {
      console.log('try registrate')
      response = await axios.post(
        'https://pfld-sandbox-voiuolbq7q-ey.a.run.app/api/users/register/',
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
