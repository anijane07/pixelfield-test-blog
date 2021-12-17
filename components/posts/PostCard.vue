<template>
  <v-card max-width="350">
    <v-img max-height="200" :src="imageThumb"></v-img>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>
      {{ fullname }}, created on {{ createDate }}
    </v-card-subtitle>
    <v-card-text>{{ content.substring(0, 50) + '...' }}</v-card-text>
    <v-card-actions>
      <v-btn text :to="pathToPost" nuxt>More</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['imageThumb', 'title', 'created', 'content', 'user', 'slug'],
  methods: {
    postDetail() {},
  },
  computed: {
    fullname() {
      return `${this.user.name} ${this.user.surname}`
    },
    createDate() {
      return new Date(Date.parse(this.created)).toLocaleDateString('cs-CZ')
    },
    pathToPost() {
      return `/posts/${this.slug}`
    },
  },
}
</script>

<style scoped>
.v-card {
  margin: 2rem 0;
}
</style>
