<template>
  <div class="container mt-3">
    <AddCustomerForm />
    <CustomerList />
  </div>
</template>

<script>
import AddCustomerForm from "../components/customer/AddCustomerForm";
import CustomerList from "../components/customer/CustomerList";
export default {
  components: {
    AddCustomerForm,
    CustomerList,
  },
};
</script>

<style></style>
