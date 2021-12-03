<template>
  <v-card class="d-md-flex d-block">
    <v-img max-height="260" :src="imageThumb"></v-img>
    <div>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>
        Created on {{ created.toLocaleDateString('cs-CZ') }}
      </v-card-subtitle>
      <v-card-text>{{ content.substring(0, 180) + '...' }}</v-card-text>
    </div>
    <v-card-actions
      class="d-sm-block d-md-flex flex-column justify-space-around align-end mx-8"
    >
      <v-btn color="secondary" :to="pathToPost" nuxt>More</v-btn>
      <v-btn color="secondary" :to="updatePath" nuxt>Update</v-btn>
      <v-btn color="secondary" @click="deletePost">Delete</v-btn>
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

<style scoped></style>
