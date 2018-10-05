<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container">
            <a href="" class="navbar-brand">Agenda de actividades de la UNJBG</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navNavbar"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item" exact>
                        <router-link class="nav-link" :to="{name: 'HomePage'}" exact>Inicio</router-link>
                    </li>
                    <li class="nav-item" exact>
                        <router-link class="nav-link" :to="{name: 'ContactPage'}" exact>Contacto</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
  export default {
    name: 'Navbar',
  }
</script>

<style scoped>

</style>