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
      })
    },
    name: 'Calendar',
    data () {
      return {
        // events: [],
        config: {
          locale: 'es',
        },
      }
    }
  }
</script>

<style scoped>

</style>