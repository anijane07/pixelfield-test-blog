<template>
  <PostForm />
</template>

<script>
import PostForm from '~/components/posts/PostForm.vue'

export default {
  components: { PostForm },
  middleware: 'auth',
}
</script>
