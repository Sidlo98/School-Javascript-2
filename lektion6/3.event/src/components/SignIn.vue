<template>
  <!-- Material form login -->
  <div class="card">
    <h5 class="card-header info-color white-text text-center py-4">
      <strong>Sign in</strong>
    </h5>

    <!--Card content-->
    <div class="card-body px-lg-5 pt-0">
      <!-- Form -->
      <form class="text-center" style="color: #757575;" action="#!" @submit.prevent="handleSubmit">
        <!-- Email -->
        <div class="md-form">
          <input
            type="email"
            id="materialLoginFormEmail"
            class="form-control"
            ref="email"
            @keyup="handleChange"
          />
          <label for="materialLoginFormEmail">E-mail</label>
        </div>

        <!-- Password -->
        <div class="md-form">
          <input
            type="password"
            id="materialLoginFormPassword"
            class="form-control"
            v-model="password"
          />
          <label for="materialLoginFormPassword">Password</label>
        </div>

        <div class="d-flex justify-content-around">
          <div>
            <!-- Remember me -->
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="materialLoginFormRemember"
              />
              <label class="form-check-label" for="materialLoginFormRemember"
                >Remember me</label
              >
            </div>
          </div>
          <div>
            <!-- Forgot password -->
            <a href="">Forgot password?</a>
          </div>
        </div>

        <!-- Sign in button -->
        <button
          class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
          type="submit"
        >
          Sign in
        </button>

        <!-- Register -->
        <p>
          Not a member?
          <a href="">Register</a>
        </p>

        <div>{{ email }}</div>
        <div>{{ password }}</div>

      </form>
      <!-- Form -->
    </div>
  </div>
  <!-- Material form login -->
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      // e.preventDefault();
      console.log(this.email, this.password)
      // this.email = ''
      this.password = ''
    },
    handleChange() {
      // console.log(this.$refs.email)
      this.email = this.$refs.email.value
    
    }
  }
};
</script>

<style></style>
