<template>
  <div>
    <v-img max-height="300" :src="post.image"></v-img>
    <article>
      <div class="post-content">
        <div class="post-header">
          <h2>{{ post.title }}</h2>
          <span
            >Last update: {{ post.updated.toLocaleDateString('cs-CZ') }}</span
          >
        </div>
        <p>{{ post.content }}</p>
      </div>
      <div class="post-images">
        <v-img
          class="post-thumb-image"
          v-for="img in post.images"
          :key="img.id"
          :src="img.image_thumb"
          max-height="200"
          max-width="300"
        ></v-img>
      </div>
      <div class="post-author">
        <h3>Author</h3>
        <h4>{{ fullname }}</h4>
        <span>{{ post.user.email }}</span>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        image: 'https://picsum.photos/id/1000/1500/900',
        title: 'Role of Snowing',
        updated: new Date('2015-02-01'),
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio urna, tincidunt ut feugiat sit amet, fringilla ac lacus. Nam a odio ac nulla varius volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse eu leo auctor, porta neque rhoncus, volutpat diam. Mauris tristique feugiat sollicitudin. Aenean dolor nunc, rutrum at ipsum vitae, placerat bibendum sem. Ut lacus dolor, auctor id vestibulum nec, posuere sed orci. Curabitur id fermentum nibh, vitae blandit purus. Aenean id tempus lacusMaecenas congue ornare volutpat. Fusce ultrices scelerisque est, tristique consequat ex pellentesque sed. Nullam ultrices lectus nisl, sed finibus justo mollis ut. Aliquam pharetra dolor nec est cursus consequat a at tortor. In hac habitasse platea dictumst. Nam nec risus placerat nulla convallis vulputate non eget leo. Sed dapibus urna ultricies leo lobortis, quis facilisis augue pretium. Sed ut enim nec dui vestibulum fringilla quis a lectus. Praesent pharetra ornare dolor, ac dictum lectus ullamcorper nec. Maecenas mi elit, dignissim ut lorem vel, imperdiet blandit ex. Curabitur luctus justo sit amet mi bibendum fringilla. Sed vel pretium urna. Sed faucibus, ipsum nec euismod vulputate, nunc lectus viverra tortor, a mattis lorem orci ac nisi. In hac habitasse platea dictumst. Integer eu felis sed purus viverra hendrerit. Proin sed cursus quam. Phasellus ut justo gravida quam pellentesque imperdiet vel sit amet orci. Nullam cursus gravida sem sed gravida. Sed luctus sit amet leo nec vestibulum. Aenean pellentesque, nisi vel ornare mollis, enim nunc mattis leo, at lobortis ante est id quam. Sed volutpat, libero in ultricies porta, nunc nunc gravida risus, quis porta nisi nulla non orci. Aliquam ac augue id nibh porta consequat ut vel tellus. Donec iaculis erat et volutpat blandit. Morbi at semper enim. Cras non sagittis risus. Proin ornare non metus ut imperdiet. Sed ac vehicula eros. Aenean volutpat, tortor ut scelerisque lacinia, sem risus volutpat augue, eu aliquam libero felis id sapien. Fusce neque lacus, laoreet ut consectetur eu, consequat finibus odio. Vestibulum interdum mollis est sed feugiat. In fringilla porta lacinia. Vivamus id nulla eget orci feugiat varius nec a massa. Duis tempor hendrerit quam, non posuere libero fringilla vitae. In hac habitasse platea dictumst. Pellentesque consectetur non ante a porttitor. Vivamus at dui tempus eros convallis pellentesque. Vivamus posuere ultricies nunc sed accumsan. Aliquam semper dignissim diam, non volutpat diam euismod ac. Mauris porta dui vitae elit varius, ac varius dolor ornare. ',
        images: [
          {
            id: 1,
            image_thumb: 'https://picsum.photos/id/1000/367/267',
          },
          {
            id: 2,
            image_thumb: 'https://picsum.photos/id/1000/367/267',
          },
        ],
        user: {
          name: 'Jenny',
          surname: 'Muritz',
          email: 'j.muritz@email.com',
        },
      },
    }
  },
  computed: {
    fullname() {
      return this.post.user.name + ' ' + this.post.user.surname
    },
  },
}
</script>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post-content {
  margin: 2rem;
  text-align: center;
}

.post-header {
  margin-bottom: 1rem;
}
.post-header h2 {
  font-size: 3rem;
}

.post-images {
  display: flex;
  flex-wrap: wrap;
}

.post-thumb-image {
  margin: 0.5rem;
}

.post-author {
  margin: 1rem;
}
</style>
