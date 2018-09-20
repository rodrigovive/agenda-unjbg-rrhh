<template>
    <header id="page-header">
        <div class="container">
            <div class="row">
                <div class="col-md-6 m-auto text-center">
                    <h1 v-once>{{title}}</h1>
                    <p>{{subtitle}}</p>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        title: '',
        subtitle: ''
      }
    }
  }
</script>

<style scoped>

</style>