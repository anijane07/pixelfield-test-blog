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
      <span>{{ createDate }}</span>
    </div>
    <div class="comment-right-side">
      <div class="comment-content">
        <p>{{ text }}</p>
      </div>
      <div v-if="userComment" class="comment-delete">
        <v-btn @click="deleteComment"
          ><v-icon left>mdi-trash-can</v-icon>Delete</v-btn
        >
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ['user', 'created', 'text', 'id'],
  computed: {
    fullname() {
      return `${this.user.name} ${this.user.surname}`
    },
    createDate() {
      return new Date(Date.parse(this.created)).toLocaleDateString('cs-CZ')
    },
    userComment() {
      return this.$auth.loggedIn && this.$auth.user.email === this.user.email
    },
  },
  methods: {
    async deleteComment() {
      await this.$store.dispatch('comments/deleteComment', this.id)
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

@media only screen and (max-width: 1000px) {
  article {
    flex-direction: column;
  }

  .comment-avatar {
    margin: 0;
  }
  .comment-person {
    text-align: center;
  }

  .comment-right-side {
    flex-direction: column;
  }
}
</style>
