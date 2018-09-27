<template>
    <header id="page-header">
        <div class="container">
            <div class="row">
                <div class="col-md-6 m-auto text-center">
                    <h1 v-once>{{title}}</h1>
                    <p v-once>{{subtitle}}</p>
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
        title: 'Oficina de Relaciones Publicas',
        subtitle: 'Universidad Nacional Jorge Basadre Grohmann'
      }
    }
  }
</script>

<style scoped>

</style>