<template>
  <ProductCardDeck />
</template>

<script>
import ProductCardDeck from "../components/products/ProductCardDeck";
import { mapActions } from "vuex";

export default {
  name: "Products",
  components: {
    ProductCardDeck,
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
  created() {
    this.getProducts();
  },
};
</script>

<style></style>
