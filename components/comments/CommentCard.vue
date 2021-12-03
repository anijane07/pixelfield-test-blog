<template>
  <article>
    <div class="comment-avatar">
      <v-avatar size="80">
        <v-img :src="user.avatar"></v-img>
      </v-avatar>
    </div>
    <div class="comment-person">
      <h4>{{ fullname }}</h4>
      <span>{{ user.email }}</span
      ><br />
      <span>{{ created.toLocaleDateString('cs-CZ') }}</span>
    </div>
    <div class="comment-right-side">
      <div class="comment-content">
        <p>{{ text }}</p>
      </div>
      <div class="comment-delete">
        <v-btn><v-icon left>mdi-trash-can</v-icon>Delete</v-btn>
      </div>
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
  border-radius: 2px;
  background-color: aliceblue;
  display: flex;
  align-items: center;
}

.comment-avatar {
  margin-left: 2rem;
}

.comment-person {
  margin: 0 2rem 0 2rem;
}

.comment-person span {
  opacity: 0.7;
}

.comment-right-side {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.comment-content {
  margin: 1rem 2rem 1rem 2rem;
}

.comment-delete {
  margin: 0rem 2rem 1rem 2rem;
}
</style>
