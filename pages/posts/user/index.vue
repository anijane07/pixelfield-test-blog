<template>
  <section>
    <div class="new-post">
      <v-btn color="primary" to="/posts/create" nuxt>Add New Post</v-btn>
    </div>
    <article class="user-posts">
      <PostUserCard
        :id="id"
        :slug="slug"
        :imageThumb="imageThumb"
        :title="title"
        :created="created"
        :content="content"
      />
    </article>
  </section>
</template>

<script>
import PostUserCard from '~/components/posts/PostUserCard.vue'

export default {
  components: { PostUserCard },
  data() {
    return {
      id: 72,
      slug: 'snow-eve',
      imageThumb: 'https://picsum.photos/id/1000/367/267',
      title: 'Snow Eve',
      created: new Date('2011-01-07'),
      content:
        'Pellentesque accumsan consequat lorem sit amet eleifend. Integer elementum justo convallis leo vestibulum, nec suscipit tortor sodales. Praesent non magna est. Sed egestas vitae dui sit amet vehicula. Mauris et tincidunt nibh, vel pretium enim. Duis justo nulla, elementum dapibus nisi non, molestie tristique ligula. Nulla magna felis, pharetra quis suscipit sed, porttitor facilisis odio. Proin luctus interdum orci, ut varius tortor. Proin diam est, vestibulum a tortor non, mattis cursus elit. Quisque eu eleifend quam. ',
    }
  },
}
</script>

<style scoped>
.new-post {
  width: 90%;
  margin: 2rem auto;
  display: flex;
  justify-content: flex-end;
}

.user-posts {
  width: 80%;
  margin: 2rem auto;
}
</style>
