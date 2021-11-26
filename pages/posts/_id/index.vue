<template>
  <section>
    <v-card>
      <PostDetail />
    </v-card>
  </section>
</template>

<script>
import PostDetail from '~/components/posts/PostDetail.vue'
export default {
  components: {
    PostDetail,
  },
}
</script>

<style scoped>
section {
  width: 90%;
  margin: 2rem auto;
}
</style>
