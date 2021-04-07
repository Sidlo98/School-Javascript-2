<template>
    <!-- Card deck -->
  <div class="card-deck">
  
      <Card :imgUrl="imgOne" title="Hej" body="heeeeeeeeeeeeedaoijasdajdpajsdajd apjd apjsd apsj asddapsdjdd"/>
      <Card :imgUrl="imgTwo" title="Hej2" body="heeeeeeeeeeeeedaoijasdajapsj asddapsdjdd"/>
      <Card :imgUrl="imgThree" />
   
  </div>
  <!-- Card deck -->
</template>

<script>
import Card from './Card'

export default {
  data() {
    return {
      imgOne: require('@/assets/img/1.jpg'),
      imgTwo: require('@/assets/img/2.jpg'),
      imgThree: require('@/assets/img/3.jpg')
      
      }
  },
  name: 'CardDeck',
  components: {
    Card
  }
}
</script>

<style>

</style>