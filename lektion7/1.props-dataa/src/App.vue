<template>
  <div>
    <Navbar />
    <div class="output container">
      {{ message }}
      <Functions class="mt-5" />
      <Input class="mt-5" />
      <Computed class="mt-5" />
    </div>
    <Footer msg="message" />
    <Footer :msg="message" />
    <Footer :msg="randomMsg" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Functions from "./components/Functions";
import Input from "./components/Input";
import Computed from "./components/Computed";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Functions,
    Input,
    Computed,
  },
  data() {
    return {
      message: "Ett meddelande från våran data",
      messages: ["1", "2", "3", "4", "5"],
    };
  },
  computed: {
    randomMsg() {
      let nr = Math.floor(Math.random() * 4)
      return this.messages[nr]
    },
  },
  methods: {
    //  randomMsg() {
    //   let nr = Math.floor(Math.random() * 4)
    //   return this.messages[nr]
    // },
  },
  created() {
    
  }
};
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
.output {
  min-height: 500px;
}
</style>
