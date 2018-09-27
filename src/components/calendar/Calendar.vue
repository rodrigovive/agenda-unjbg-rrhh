<template>
    <section id="gallery" class="py-5">
        <div class="container">
            <full-calendar :config="config" :events="events"/>
        </div>
    </section>

</template>

<script>
  import moment from 'moment'
  export default {
    name: 'Calendar',
    data () {
      return {
        events: [
          {
            title: 'test',
            allDay: true,
            start: moment(),
            end: moment().add(1, 'd'),
            editable: false
          },
          {
            title: 'another test',
            start: moment().add(2,'d'),
            end: moment().add(2, 'd').add(2, 'h'),
            editable: false
          },
        ],
        config: {
          locale: 'es',
        },
      }
    }
  }
</script>

<style scoped>

</style>