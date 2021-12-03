<template>
  <PostForm :post="post" />
</template>

<script>
import PostForm from '~/components/posts/PostForm.vue'

export default {
  components: { PostForm },
  computed: {
    post() {
      return {
        title: 'Snow Eve',
        image: 'https://picsum.photos/id/1000/367/267',
        content:
          'Pellentesque accumsan consequat lorem sit amet eleifend. Integer elementum justo convallis leo vestibulum, nec suscipit tortor sodales. Praesent non magna est. Sed egestas vitae dui sit amet vehicula. Mauris et tincidunt nibh, vel pretium enim. Duis justo nulla, elementum dapibus nisi non, molestie tristique ligula. Nulla magna felis, pharetra quis suscipit sed, porttitor facilisis odio. Proin luctus interdum orci, ut varius tortor. Proin diam est, vestibulum a tortor non, mattis cursus elit. Quisque eu eleifend quam. ',
      }
      //dispatch podle id z parametru
    },
  },
}
</script>
