<template>
  <section>
    <v-card>
      <v-form v-model="valid" @submit.prevent="userRegistrate">
        <v-text-field
          v-model="user.firstname"
          :rules="[rules.required, rules.maxTen]"
          :counter="10"
          label="First name"
          required
        ></v-text-field>

        <v-text-field
          v-model="user.lastname"
          :rules="[rules.required, rules.maxTwenty]"
          :counter="20"
          label="Last name"
          required
        ></v-text-field>

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
      user: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      },

      rules: {
        required: (value) => !!value || 'Required.',
        maxTen: (v) => v.length <= 10 || 'Must be less than 10 characters.',
        maxTwenty: (v) => v.length <= 20 || 'Must be less than 20 characters.',
        email: (v) => /.+@.+/.test(v) || 'E-mail must be valid.',
        minEight: (v) => v.length >= 8 || 'Must be more than 8 characters.',
      },
    }
  },
  methods: {
    userRegistrate() {
      if (this.$refs.form.validate()) {
        this.$router.replace('/login')
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
</style>
