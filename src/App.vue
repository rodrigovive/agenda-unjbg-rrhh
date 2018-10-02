<template>
  <div id="app">
    <loading :active.sync="$root.isLoading"
             :is-full-page=true></loading>
    <Navbar />

    <router-view></router-view>
    <Footer />

  </div>
</template>

<script>
import Navbar from './components/includes/Navbar.vue'
import Footer from './components/includes/Footer.vue'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {

  name: 'app',
  components: {
    Navbar,
    Footer,
    'loading': Loading
  }
}
</script>

<style>

</style>
