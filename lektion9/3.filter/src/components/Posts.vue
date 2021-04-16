<template>
  <div >
    <div v-if="posts.length">
      <div v-for="post in posts" :key="post.id" class="card mb-3 p-4">
          <h2 v-color>{{ post.title | to-upper }}</h2>
          <p v-color>{{ post.body | shorten }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: ['posts'],
  filters: {
    toUpper(value) {
      return value.toUpperCase()
    },
    shorten(value) {
      return value.slice(0, 100) + '...'
    }
  },
  directives: {
    color: {
      bind(el) {
        el.style.color = '#' + Math.random().toString().slice(2, 8)
      }
    }
  }
}
</script>

<style>

</style>