<template>
    <div>
        <Slider />
        <Icon />
        <Video />
        <Calendar />
        <Gallery />
    </div>
</template>

<script>
  import Slider from './partials/Slider.vue'
  import Icon from './partials/Icon.vue'
  import Video from './partials/VideoPlay.vue'
  import Gallery from './partials/Gallery.vue'
  import Calendar from '../calendar/Calendar.vue'

  export default {
    name: 'HomePage',
    components: {
      Slider,
      Icon,
      Video,
      Gallery,
      Calendar,
    }
  }
</script>

<style scoped>

</style>