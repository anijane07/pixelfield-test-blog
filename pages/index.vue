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
    <div v-else>
      <PostList :posts="loadedPosts" :totalPages="totalPages" />
      <div class="text-center pagination">
        <v-pagination v-model="page" :length="totalPages"></v-pagination>
      </div>
    </div>
  </section>
</template>

<script>
import PostList from '~/components/posts/PostList.vue'

export default {
  components: { PostList },
  data() {
    return {
      totalPages: 0,
      page: 1,
      pageSize: 6,
      isLoaded: false,
    }
  },
  created() {
    this.loadPosts()
  },
  computed: {
    loadedPosts() {
      return this.$store.getters['posts/loadedPosts']
    },
  },
  watch: {
    page() {
      this.loadPosts()
    },
  },
  methods: {
    async loadPosts() {
      this.isLoaded = false
      const payload = {
        page: this.page,
        pageSize: this.pageSize,
      }
      await this.$store.dispatch('posts/loadPosts', payload)
      this.isLoaded = true
      this.totalPages = this.$store.getters['posts/totalPages']
    },
  },
}
</script>

<style scoped>
.pagination {
  margin-bottom: 4rem;
}

.loading {
  margin: 2rem auto;
}
</style>
