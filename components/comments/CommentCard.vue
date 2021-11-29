<template>
  <article>
    <div class="comment-avatar">
      <v-avatar size="62">
        <v-img :src="user.avatar"></v-img>
      </v-avatar>
    </div>
    <div class="comment-person">
      <h4>{{ fullname }}</h4>
      <span>{{ user.email }}</span
      ><br />
      <span>{{ created.toLocaleDateString('cs-CZ') }}</span>
    </div>
    <div class="comment-content">
      <p>{{ text }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: ['user', 'created', 'text'],
  computed: {
    fullname() {
      return `${this.user.name} ${this.user.surname}`
    },
  },
}
</script>

<style scoped>
article {
  margin: 1rem;
  padding: 1rem;
  background-color: aliceblue;
  display: flex;
}

.comment-person {
  display: block;
}
</style>
