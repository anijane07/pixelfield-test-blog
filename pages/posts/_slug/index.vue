<template>
  <section>
    <div v-if="!isLoaded" class="text-center loading">
      <v-progress-circular
        :size="80"
        :width="8"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
    <v-card v-else>
      <div>
        <PostDetail :post="post" />
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
    return {
      isLoaded: false,
    }
  },
  created() {
    this.getPostDetail()
  },
  computed: {
    post() {
      console.log(this.$store.getters['posts/currentPost'])
      return this.$store.getters['posts/currentPost']
    },
  },
  methods: {
    async getPostDetail() {
      this.isLoaded = false
      await this.$store.dispatch('posts/getPost', this.$route.params.slug)
      this.isLoaded = true
      console.log(this.$store.getters['posts/currentPost'])
    },
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
