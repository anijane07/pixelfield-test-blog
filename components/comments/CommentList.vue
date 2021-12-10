<template>
  <div>
    <CommentCard
      v-for="comment in comments"
      :key="comment.id"
      :user="comment.user"
      :created="comment.created_on"
      :text="comment.text"
    />
  </div>
</template>

<script>
import CommentCard from '~/components/comments/CommentCard.vue'

export default {
  components: {
    CommentCard,
  },
  props: {
    comments: Array,
  },
  // data() {
  //   return {
  //     comments: [
  //       {
  //         user: {
  //           avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  //           name: 'John',
  //           surname: 'Trem',
  //           email: 'j.trem@email.com',
  //         },
  //         created_on: new Date('2018-11-21'),
  //         text: 'Nice post, I would like to get other post by you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio urna, tincidunt ut feugiat sit amet, fringilla ac lacus. Nam a odio ac nulla varius volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse eu leo auctor, porta neque rhoncus, volutpat diam. Mauris tristique feugiat sollicitudin. Aenean dolor nunc, rutrum at ipsum vitae, placerat bibendum sem. Ut lacus dolor, auctor id vestibulum nec, posuere sed orci. Curabitur id fermentum nibh, vitae blandit purus. Aenean id tempus lacusMaecenas congue ornare volutpat. Fusce ultrices scelerisque est.',
  //       },
  //       {
  //         user: {
  //           avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  //           name: 'Greg',
  //           surname: 'Uno',
  //           email: 'g.uno@email.com',
  //         },
  //         created_on: new Date('2015-11-21'),
  //         text: 'Nice post, I would like to get other post by you. ',
  //       },
  //       {
  //         user: {
  //           avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  //           name: 'Robin',
  //           surname: 'Dreeg',
  //           email: 'r.dreeg@email.com',
  //         },
  //         created_on: new Date('2018-02-03'),
  //         text: 'Nice post, I would like to get other post by you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio urna, tincidunt ut feugiat sit amet, fringilla ac lacus. Nam a odio ac nulla varius volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse eu leo auctor, porta neque rhoncus, volutpat diam. Mauris tristique feugiat sollicitudin. Aenean dolor nunc, rutrum at ipsum vitae, placerat bibendum sem. Ut lacus dolor, auctor id vestibulum nec, posuere sed orci. Curabitur id fermentum nibh, vitae blandit purus. Aenean id tempus lacusMaecenas congue ornare volutpat. Fusce ultrices scelerisque est.',
  //       },
  //     ],
  //   }
  // },
}
</script>
