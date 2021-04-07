<template>
  <div class="container my-5 py-5 ">
  <section class="text-center px-md-5 mx-md-5 dark-grey-text">
    <div class="row mb-5">
      <div class="col-md-4 mx-auto">
        <div class="view mb-4 pb-2">
          <!-- v-on:vilket mus even vi vill använda ="functionen" -->
          <img v-on:mouseover="handleMouse" src="https://mdbootstrap.com/img/illustrations/undraw_connected_world_wuay.svg" class="img-fluid" alt="smaple image">
        </div>
      </div>
    </div>
    <button v-on:click="clickFunction" type="button" class="btn btn-deep-purple btn-rounded">Design your site now</button>
  </section>
</div>
</template>

<script>
export default {
  name: 'Hero',
  methods: {
    handleMouse() {
      console.log('Du hovrade över bilden')
    },
    clickFunction() {
       console.log('Du klickade på knappen')
    }
  }
}
</script>

<style>

</style>