<template>
    <section id="gallery" class="py-5">
        <div class="container">
            <full-calendar :config="config" :events="activities"/>
        </div>
    </section>

</template>

<script>
  // import moment from 'moment'
  import {mapActions, mapState } from 'vuex'
  export default {
    created() {
      this.getActivities().then(()=>{
          this.$root.isLoading = false;
        })
    },
    computed: {
      ...mapState({
        activities: state => state.activities.activities
      })
    },
    methods: {
      ...mapActions({
        getActivities: "getActivities"
      }),
      changeView(view) {
        this.$refs.calendar.fireMethod('changeView', view)
      },
    },
    name: 'Calendar',
    data () {
      return {
        // events: [],
        config: {
          locale: 'es',
          defaultView: 'month'
        },
      }
    }
  }
</script>

<style scoped>

</style>