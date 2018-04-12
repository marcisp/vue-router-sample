<template>
  <div class="container mt-2">
    <app-header></app-header>
    <hr>
    <!--<transition name="fade" >-->
      <!--mode="out-in"-->
      <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  components: {
    'app-header': Header
  }
}
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

