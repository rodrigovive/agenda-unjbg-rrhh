<template>
  <div id="app">
    <Navbar />
    <Slider />
    <Icon />
    <Video />
    <Gallery />
    <Footer />
  </div>
</template>

<script>
  window.$ = require('jquery')
  window.JQuery = require('jquery')

import Navbar from './components/includes/Navbar.vue'
import Slider from './components/home/Slider.vue'
import Icon from './components/home/Icon.vue'
import Video from './components/home/VideoPlay.vue'
import Gallery from './components/home/Gallery.vue'
import Footer from './components/includes/Footer.vue'
// import Testimonial from './components/home/Testimonial.vue'
export default {
  name: 'app',
  components: {
    Navbar,
    Slider,
    Icon,
    Video,
    Gallery,
    // Testimonial,
    Footer
  }
}
</script>

<style>

</style>
