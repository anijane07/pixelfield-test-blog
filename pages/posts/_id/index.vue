<template>
  <section>
    <v-card>
      <PostDetail />
      <h3>Comments</h3>
      <CommentCard :user="user" :created="created_on" :text="text" />
    </v-card>
  </section>
</template>

<script>
import PostDetail from '~/components/posts/PostDetail.vue'
import CommentCard from '~/components/comments/CommentCard.vue'

export default {
  components: {
    PostDetail,
    CommentCard,
  },
  data() {
    return {
      user: {
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
        name: 'John',
        surname: 'Trem',
        email: 'j.trem@email.com',
      },
      created_on: new Date('2018-11-21'),
      text: 'Nice post, I would like to get other post by you.',
    }
  },
}
</script>

<style scoped>
section {
  width: 90%;
  margin: 2rem auto;
}
</style>
