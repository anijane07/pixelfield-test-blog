<template>
  <section>
    <v-card>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="userLogin"
      >
        <v-text-field
          v-model="email"
          :rules="required"
          label="Email"
          placeholder="eg. smith.j@email.com"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="required"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          label="Password"
          outlined
          @click:append="show = !show"
        ></v-text-field>
        <div class="bottom-login">
          <v-btn type="submit">Login</v-btn>
          <span class="link-registration">
            New here?
            <nuxt-link to="/auth/register">Register now!</nuxt-link>
          </span>
        </div>
      </v-form>
    </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      required: [(value) => !!value || 'Required.'],
      email: '',
      password: '',
      show: false,
    }
  },
  methods: {
    async userLogin() {
      if (this.$refs.form.validate()) {
        try {
          const response = await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password,
            },
          })
          console.log(response)
          //this.$router.push('/user')
        } catch (err) {
          console.log(err)
        }
        console.log(this.$auth.loggedIn)
        console.log(this.$auth.user)
      }
    },
  },
}
</script>

<style scoped>
section {
  width: 40%;
  margin: 5rem auto;
}
.v-card {
  padding: 2rem;
}

.link-registration {
  margin-left: 2rem;
}

.bottom-login {
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 900px) {
  section {
    width: 80%;
  }
}

@media only screen and (max-width: 450px) {
  section {
    width: 98%;
  }

  .bottom-login {
    flex-direction: column;
    align-items: center;
  }

  .bottom-login span {
    margin-top: 2rem;
  }
}
</style>
