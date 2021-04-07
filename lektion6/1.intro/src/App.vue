<template>
  <div>
    <Navbar />
    <Hero />
    <Testimonials />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/navigation/Navbar"
import Footer from "./components/navigation/Footer"
import Hero from "./components/Hero"
import Testimonials from "./components/testimonials/Testimonials"

export default {
  components: {
    Navbar,
    Footer,
    Hero,
    Testimonials
  }
}

</script>

<style>

</style>
