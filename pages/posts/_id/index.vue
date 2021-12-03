<template>
  <section>
    <v-card>
      <div>
        <PostDetail />
      </div>
      <h3 class="comments-title">Comments</h3>
      <CommentList />
    </v-card>
  </section>
</template>

<script>
import PostDetail from '~/components/posts/PostDetail.vue'
import CommentList from '~/components/comments/CommentList.vue'

export default {
  components: {
    PostDetail,
    CommentList,
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
section {
  width: 90%;
  margin: 2rem auto 4rem auto;
}
.v-card {
  padding-bottom: 0.5rem;
}
.comments-title {
  margin-left: 1rem;
}
</style>
