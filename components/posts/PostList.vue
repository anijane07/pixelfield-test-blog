<template>
  <article>
    <PostCard
      v-for="post in posts"
      :key="post.id"
      :imageThumb="post.image_thumb"
      :title="post.title"
      :created="post.created_on"
      :content="post.content"
      :user="post.user"
      :slug="post.slug"
    />
  </article>
</template>

<script>
import PostCard from '~/components/posts/PostCard.vue'

export default {
  components: { PostCard },
  props: {
    posts: Array,
    totalPages: Number,
  },
}

/* page: 1,
      pagesCount: 6,
      posts: [
        {
          id: 1,
          image_thumb: 'https://picsum.photos/id/1000/367/267',
          title: 'Role of Snowing',
          slug: 'role-of-snowing',
          created_on: new Date('2015-02-01'),
          content:
            'Phasellus ac erat placerat, molestie libero non, venenatis libero. Donec sit amet magna erat. Quisque aliquet ullamcorper nunc id suscipit. Nam faucibus massa mollis erat facilisis.',
          user: {
            name: 'John',
            surname: 'Snow',
          },
        },
        {
          id: 2,
          image_thumb: 'https://picsum.photos/id/1006/367/267',
          title: 'To The Sky',
          slug: 'to-the-sky',
          created_on: new Date('2017-07-24'),
          content:
            'Phasellus ac erat placerat, molestie libero non, venenatis libero. Donec sit amet magna erat. Quisque aliquet ullamcorper nunc id suscipit. Nam faucibus massa mollis erat facilisis.',
          user: {
            name: 'Jenny',
            surname: 'Muritz',
          },
        },
        {
          id: 3,
          image_thumb: 'https://picsum.photos/id/1011/367/267',
          title: 'With Water in Winter',
          created_on: new Date('2019-01-12'),
          content:
            'Phasellus ac erat placerat, molestie libero non, venenatis libero. Donec sit amet magna erat. Quisque aliquet ullamcorper nunc id suscipit. Nam faucibus massa mollis erat facilisis.',
          user: {
            name: 'Conny',
            surname: 'Rodiguez',
          },
        },
        {
          id: 4,
          image_thumb: 'https://picsum.photos/id/1016/367/267',
          title: 'Red Light',
          created_on: new Date('2015-09-21'),
          content:
            'Phasellus ac erat placerat, molestie libero non, venenatis libero. Donec sit amet magna erat. Quisque aliquet ullamcorper nunc id suscipit. Nam faucibus massa mollis erat facilisis.',
          user: {
            name: 'George',
            surname: 'Yetemen',
          },
        },
        {
          id: 5,
          image_thumb: 'https://picsum.photos/id/1018/367/267',
          title: 'Depressed Weather',
          created_on: new Date('2018-10-10'),
          content:
            'Phasellus ac erat placerat, molestie libero non, venenatis libero. Donec sit amet magna erat. Quisque aliquet ullamcorper nunc id suscipit. Nam faucibus massa mollis erat facilisis.',
          user: {
            name: 'Mela',
            surname: 'Unitla',
          },
        },
        {
          id: 6,
          image_thumb: 'https://picsum.photos/id/1020/367/267',
          title: 'Animals World',
          created_on: new Date('2020-01-23'),
          content:
            'Phasellus ac erat placerat, molestie libero non, venenatis libero. Donec sit amet magna erat. Quisque aliquet ullamcorper nunc id suscipit. Nam faucibus massa mollis erat facilisis.',
          user: {
            name: 'Lenny',
            surname: 'Threamin',
          },
        },
      ], */
</script>

<style scoped>
article {
  width: 70%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
