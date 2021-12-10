<template>
  <section>
    <v-card>
      <v-form ref="form" v-model="valid" @submit.prevent="userRegistrate">
        <v-text-field
          v-model="user.email"
          :rules="[rules.required, rules.email]"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="user.password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.minEight]"
          :type="show ? 'text' : 'password'"
          label="Password"
          counter
          @click:append="show = !show"
        ></v-text-field>
        <v-text-field
          v-model="user.firstname"
          label="First name"
        ></v-text-field>

        <v-text-field v-model="user.lastname" label="Last name"></v-text-field>

        <!-- <v-file-input
          v-model="user.avatar"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an image"
          prepend-icon="mdi-camera"
          label="Avatar"
        >
        </v-file-input> -->
        <p class="form-error" v-if="userTry">
          You must fill all required fields!
        </p>
        <v-btn type="submit">Register</v-btn>
      </v-form>
    </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      show: false,
      userTry: false,
      user: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        //avatar: '',
      },

      rules: {
        required: (value) => !!value || 'Required.',
        email: (v) => /.+@.+/.test(v) || 'E-mail must be valid.',
        minEight: (v) => v.length >= 8 || 'Must be more than 8 characters.',
      },
    }
  },
  methods: {
    async userRegistrate() {
      this.userTry = true
      if (this.$refs.form.validate()) {
        this.userTry = false
        const response = await this.$store.dispatch('users/registrateUser', {
          email: this.user.email,
          password: this.user.password,
          name: this.user.firstname,
          surname: this.user.lastname,
          //avatar: this.user.avatar,
        })
        console.log(response)
        if (response.ok) {
          await this.$auth.loginWith('local', {
            data: {
              email: this.user.email,
              password: this.user.password,
            },
          })
        }
        //this.$router.replace('/login')
      }
    },
  },
}
</script>

<style scoped>
section {
  width: 70%;
  margin: 5rem auto;
}

.v-card {
  padding: 2rem;
}

.form-error {
  color: #dd2c00;
}

@media only screen and (max-width: 450px) {
  section {
    width: 98%;
  }
}
</style>
