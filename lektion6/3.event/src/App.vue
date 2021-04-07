<template>
  <div>
    <Hero />
    <div class="container mt-5">
      <div class="row">
        <div class="col-6">
          <SignIn />
        </div>
        <div class="col-6">
          <SignUp />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "./components/Hero";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

export default {
  name: "App",
  components: {
    Hero,
    SignIn,
    SignUp,
  },
};
</script>

<style></style>
