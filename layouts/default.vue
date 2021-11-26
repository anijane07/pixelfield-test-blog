<template>
  <v-app>
    <div>
      <v-toolbar height="60">
        <v-toolbar-title><h1>Blog</h1></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn text to="/" nuxt>Home</v-btn>
          <v-btn text to="/auth/register" nuxt>Register</v-btn>
          <v-btn text to="/auth/login" nuxt>Login</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <Nuxt />
  </v-app>
</template>

<style scoped>
h1 {
  font-size: 24pt;
  font-weight: 300;
}
</style>
