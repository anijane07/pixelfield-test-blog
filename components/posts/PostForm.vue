<template>
  <v-form ref="form" v-model="valid" @submit.prevent="postSubmit">
    <v-text-field
      v-model="title"
      :rules="[rules.required]"
      label="Title"
      required
    ></v-text-field>
    <v-file-input
      v-model="image"
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
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      edit: false,
      title: '',
      image: null,
      content: '',

      rules: {
        required: (value) => !!value || 'Required.',
      },
    }
  },
  methods: {
    postSubmit() {
      if (this.$refs.form.validate()) {
        this.$router.replace('/')
      }
    },
  },
}
</script>
