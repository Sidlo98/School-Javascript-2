<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer"

export default {
  components: {
    Navbar,
    Footer
  },
};
</script>

<style></style>
