<template>
  <section>
    <v-card>
      <div v-if="!isLoadedPost" class="text-center loading">
        <v-progress-circular
          :size="80"
          :width="8"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>
      <div v-else>
        <PostDetail :post="post" />
      </div>
      <h3 class="comments-title">Comments</h3>
      <div v-if="!isLoadedComments" class="text-center loading">
        <v-progress-circular
          :size="60"
          :width="6"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>
      <div v-else>
        <CommentList :comments="comments" />
        <div class="text-center pagination">
          <v-pagination v-model="page" :length="totalPages"></v-pagination>
        </div>
        <div class="comment-form">
          <h4>Comment {{ post.title }}</h4>
          <v-form ref="form" v-model="valid" @submit.prevent="commentPost">
            <v-textarea
              outlined
              v-model="text"
              :rules="[rules.required]"
              label="Text"
              required
            ></v-textarea>
            <v-btn type="submit">Comment</v-btn>
          </v-form>
        </div>
      </div>
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
      isLoadedPost: false,
      isLoadedComments: false,
      page: 1,
      totalPages: 0,
      pageSize: 5,

      valid: false,
      rules: {
        required: (value) => !!value || 'Required.',
      },
      text: '',
    }
  },
  created() {
    this.getPostDetail()
    this.loadComments()
  },
  computed: {
    post() {
      return this.$store.getters['posts/currentPost']
    },
    comments() {
      return this.$store.getters['comments/loadedComments']
    },
  },
  watch: {
    page() {
      this.loadComments()
    },
  },
  methods: {
    async getPostDetail() {
      this.isLoadedPost = false
      await this.$store.dispatch('posts/getPost', this.$route.params.slug)
      this.isLoadedPost = true
    },
    async loadComments() {
      const payload = {
        slug: this.$route.params.slug,
        page: this.page,
        pageSize: this.pageSize,
      }
      this.isLoadedComments = false
      await this.$store.dispatch('comments/loadComments', payload)
      this.totalPages = this.$store.getters['comments/totalPages']
      this.isLoadedComments = true
    },
    async commentPost() {
      await this.$store.dispatch('comments/createComment', {
        text: this.text,
        post: this.post.id,
      })
      this.loadComments()
      //okno uspesne okomentovano
      //this.$router.push(`/posts/${this.post.slug}`)
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
.pagination {
  margin-bottom: 4rem;
}

.comment-form {
  width: 90%;
  margin: auto;
}
</style>
