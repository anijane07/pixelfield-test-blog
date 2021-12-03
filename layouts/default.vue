<template>
  <v-app>
    <div>
      <v-toolbar height="60">
        <v-toolbar-title><h1>Blog</h1></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn text to="/" nuxt>Home</v-btn>
          <v-btn text to="/posts/user" nuxt>My Posts</v-btn>
          <v-btn text to="/register" nuxt>Register</v-btn>
          <v-btn text to="/login" nuxt>Login</v-btn>
          <v-btn text @click="logout">Logout</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <Nuxt />
    <v-footer app bottom absolute padless>
      <v-col class="text-right"> Pixelfield Test Issue - Jana Schořová </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  methods: {
    logout() {},
  },
}
</script>

<style scoped>
h1 {
  font-size: 24pt;
  font-weight: 300;
}
</style>
