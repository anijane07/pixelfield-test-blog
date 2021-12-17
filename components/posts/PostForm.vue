<template>
  <v-card class="form-card">
    <h2>{{ edit ? 'Edit Post' : 'Create Post' }}</h2>
    <v-form ref="form" v-model="valid" @submit.prevent="postSubmit">
      <v-text-field
        v-model="title"
        :rules="[rules.required]"
        label="Title"
        required
      ></v-text-field>
      <v-img max-width="300" v-if="image" :src="image"></v-img>
      <p v-if="image">You can reupload you image here:</p>
      <v-file-input
        @change="handleFile"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pick an image"
        prepend-icon="mdi-camera"
        label="Image"
      >
      </v-file-input>

      <v-textarea
        v-model="content"
        :rules="[rules.required]"
        label="Content"
        required
      >
      </v-textarea>
      <v-btn type="submit">{{ edit ? 'Edit' : 'Create' }}</v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  data() {
    return {
      valid: false,
      edit: this.post ? true : false,
      title: this.post?.title || '',
      image: this.post?.image || '',
      content: this.post?.content || '',

      rules: {
        required: (value) => !!value || 'Required.',
      },
    }
  },
  methods: {
    handleFile(file) {
      this.image = file
    },
    postSubmit() {
      if (this.$refs.form.validate()) {
        if (this.edit) {
        } else {
          let formData = new FormData()
          formData.append('title', this.title)
          formData.append('content', this.content)
          formData.append('image', this.image)
          this.$store.dispatch('posts/createPost', formData)
        }
        this.$router.replace('/')
      }
    },
  },
}
</script>

<style scoped>
h2 {
  margin-bottom: 2rem;
  text-align: center;
}

.form-card {
  width: 80%;
  margin: 5rem auto;
  padding: 2rem;
}

@media only screen and (max-width: 450px) {
  .form-card {
    width: 98%;
  }
}
</style>
