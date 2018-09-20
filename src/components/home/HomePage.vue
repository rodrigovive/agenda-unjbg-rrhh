<template>
    <div>
        <Navbar />
        <Slider />
        <Icon />
        <Video />
        <Calendar />
        <Gallery />
        <Footer />
    </div>
</template>

<script>
  import Navbar from '../includes/Navbar.vue'
  import Slider from './partials/Slider.vue'
  import Icon from './partials/Icon.vue'
  import Video from './partials/VideoPlay.vue'
  import Gallery from './partials/Gallery.vue'
  import Footer from '../includes/Footer.vue'
  import Calendar from '../calendar/Calendar.vue'

  export default {
    name: 'HomePage',
    components: {
      Navbar,
      Slider,
      Icon,
      Video,
      Gallery,
      Calendar,
      Footer
    }
  }
</script>

<style scoped>

</style>