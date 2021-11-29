<template>
  <v-form>
    <v-text-field v-model="title" label="Title" required></v-text-field>
    <v-file-input
      v-model="image"
      accept="image/png, image/jpeg, image/bmp"
      placeholder="Pick an image"
      prepend-icon="mdi-camera"
      label="Image"
    >
    </v-file-input>

    <v-textarea v-model="content" label="Content" required> </v-textarea>
    <v-btn>{{ edit ? 'Edit' : 'Create' }}</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      edit: false,
      title: '',
      image: null,
      content: '',
    }
  },
}
</script>
