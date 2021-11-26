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
          v-model="login.email"
          label="Email"
          placeholder="eg. smith.j@email.com"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="login.password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          label="Password"
          outlined
          @click:append="show = !show"
        ></v-text-field>
        <v-btn type="submit">Login</v-btn>
        <span class="link-registration"
          >New here?
          <nuxt-link to="/auth/register">Register now!</nuxt-link></span
        >
      </v-form>
    </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      login: {},
      show: false,
    }
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('local', {
          data: this.login,
        })
        this.$router.push('/user')
      } catch (err) {
        console.log(err)
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
</style>
