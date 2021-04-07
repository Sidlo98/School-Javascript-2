<template>
  <div class="card mb-4">

      <!--Card image-->
      <div class="view overlay">
        <img class="card-img-top" :src="imgUrl"
          alt="Card image cap">
        <a href="#!">
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

      <!--Card content-->
      <div class="card-body">

        <!--Title-->
        <h4 class="card-title">{{ title }}</h4>
        <!--Text-->
        <p class="card-text">{{ body }}</p>
        <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
        <button type="button" class="btn btn-light-blue btn-md">Read more</button>

      </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: false,
      default: 'En standard text'
  },
    body: {
    type: String,
    required: false,
    default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos alias nesciunt animi nam ad, sit aliquam qui illo! Et fugiat ex natus autem possimus ducimus alias, reprehenderit sit. Voluptas, ducimus!'
  },
    imgUrl: {
      type: String,
      required: false,
      default: '@/assets/img/3.jpg'
    }
    
  }}
</script>

<style>

</style>