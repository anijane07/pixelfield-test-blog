<template>
  <v-card class="form-card">
    <PostForm />
  </v-card>
</template>

<script>
import PostForm from '~/components/posts/PostForm.vue'

export default {
  components: { PostForm },
}
</script>

<style scoped>
.form-card {
  width: 80%;
  margin: 5rem auto;
  padding: 2rem;
}
</style>
