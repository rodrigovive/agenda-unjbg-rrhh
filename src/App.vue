<template>
  <div id="app">
    <Navbar />
    <Slider />
  </div>
</template>

<script>
import Navbar from './components/includes/Navbar.vue'
import Slider from './components/includes/Slider.vue'
export default {
  name: 'app',
  components: {
    Navbar,
    Slider
  }
}
</script>

<style>

</style>
