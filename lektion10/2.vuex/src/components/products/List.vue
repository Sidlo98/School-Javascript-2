<template>
  <div>
    <button class="btn" @click="addToPrice">Add</button>
    <button class="btn" @click="subPrice(5)">Sub</button>
    <div class="list">
      <ProductCard
        v-for="product in prodTax"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard";
import { mapGetters } from 'vuex'

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      // products: [
      //   { id: 1, name: "Product 1", price: 200 },
      //   { id: 2, name: "Product 2", price: 299 },
      //   { id: 3, name: "Product 3", price: 500 },
      //   { id: 4, name: "Product 4", price: 100 },
      //   { id: 5, name: "Product 5", price: 2020 },
      //   { id: 6, name: "Product 6", price: 200 },
      //   { id: 7, name: "Product 7", price: 260 },
      //   { id: 8, name: "Product 8", price: 200 },
      //   { id: 9, name: "Product 9", price: 290 },
      //   { id: 10, name: "Product 10", price: 200 },
      //   { id: 11, name: "Product 11", price: 899 },
      //   { id: 12, name: "Product 12", price: 200 },
      //   { id: 13, name: "Product 13", price: 99 },
      //   { id: 14, name: "Product 14", price: 2500 },
      //   { id: 15, name: "Product 15", price: 699 },
      // ],
    };
  },
  methods: {
    addToPrice() {
      // this.$store.state.products.forEach(product => {
      //   product.price += 10
      // })

      this.$store.commit("ADD", 1);
    },
    subPrice(amount) {
      // this.$store.commit('SUB_ASYNC', amount)
      this.$store.dispatch("subAsync", amount);
    },
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    prodTax() {
      // let taxedProducts = this.$store.state.products.map(product => {
      //   return {
      //     id: product.id,
      //     name: product.name + ' + tax',
      //     price: Math.round(product.price + product.price * 0.2)
      //   }
      // })
      // return taxedProducts
      return this.$store.getters.taxedProducts;
    },
    ...mapGetters(['filterdProducts'])
  },
};
</script>

<style scoped>
.card {
  background: #424242;
  display: flex;
  margin: 1rem;
  justify-content: space-between;
}
</style>
