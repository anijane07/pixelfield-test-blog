import axios from 'axios'

export default {
  async registrateUser(_, payload) {
    console.log('Action: registre')
    let response
    try {
      response = await axios.post(
        'https://pfld-sandbox-voiuolbq7q-ey.a.run.app/api/users/register/',
        payload
      )
    } catch (err) {
      console.log(err.response)
      return
    }

    console.log('Registration done!')
  },
}
