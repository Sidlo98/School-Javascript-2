<template>
 <div>
   <Navbar />
   <nav><h1>HELLOOOO</h1></nav>
 </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
   Navbar
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  width: 80%;
  margin: auto;
}
.mt-5 {
  margin-top: 3rem;
}
nav {
  background: chocolate;
}
</style>
