<template>
  <img class="signup-logo" src="./assets/signup-logo-removebg-preview.png" alt="Signup Logo">
  <SignUp></SignUp>
</template>

<script>
import SignUp from './components/SignUp.vue';
export default {
  name: 'App',
  components: {
    SignUp
  }
}
</script>

<style>
#app {
  text-align: center;
}
.signup-logo {
  height: 190px;
}
</style>
