<template>
  <v-card class="user-post-card">
    <v-img max-width="300" :src="imageThumb"></v-img>
    <div>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>
        Created on {{ created.toLocaleDateString('cs-CZ') }}
      </v-card-subtitle>
      <v-card-text>{{ content.substring(0, 700) + '...' }}</v-card-text>
    </div>
    <v-card-actions>
      <v-btn text :to="pathToPost" nuxt>More</v-btn>
      <v-btn text :to="updatePath" nuxt>Update</v-btn>
      <v-btn text @click="deletePost">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    id: Number,
    slug: String,
    imageThumb: String,
    title: String,
    created: Date,
    content: String,
  },
  computed: {
    pathToPost() {
      return `/posts/${this.slug}`
    },
    updatePath() {
      return `/posts/${this.slug}/edit`
    },
  },
  methods: {
    deletePost() {},
  },
}
</script>

<style scoped>
.user-post-card {
  display: flex;
}

.v-card__actions {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  margin: 1rem 2rem 1rem 2rem;
}

.v-btn {
  background-color: #1976d2;
  color: white;
}
</style>
