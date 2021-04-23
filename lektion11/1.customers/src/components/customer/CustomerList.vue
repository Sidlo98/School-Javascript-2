<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Customer Name</th>
        <th scope="col">Status</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <Customer v-for="(customer, index) in customers" :key="index" :customer="customer" :id="index"/>
    </tbody>
  </table>
</template>

<script>
import Customer from './Customer'
import { mapGetters } from 'vuex'
export default {
  components: {
    Customer
  },
  computed: {
    ...mapGetters(['customers'])
  }
};
</script>

<style></style>
