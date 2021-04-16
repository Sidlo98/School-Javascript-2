<template>
  <div>
    <h1>404 not found</h1>
    <p>please enter a valind address</p>
  </div>
</template>

<script>


export default {
  name: '404',
  created() {
    setTimeout(() => {
      this.$router.push('/')
    }, 4000)
  }
}
</script>

<style>

</style>