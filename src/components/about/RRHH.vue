<template>
    <div>
        <Header />
        <section id="about" class="py-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h1>Acerca de la oficina de Recursos Humanos</h1>
                        <p>Informacion sobre la oficina</p>
                        <p>Deberes</p>
                    </div>
                    <div class="col-md-6">
                        <img src="" alt="" class="about-img img-fluid rounded-circle d-none d-md-block">
                    </div>
                </div>
            </div>
        </section>

        <!-- ICON BOXES -->
        <section id="icon-boxes" class="p-5">
            <div class="container">
                <div class="row mb-4">
                    <div class="col-md-4">
                        <div class="card bg-danger text-center text-white">
                            <div class="card-body">
                                <i class="fa fa-building"></i>
                                <h3>Ubicacion</h3>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, architecto.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card bg-danger text-center text-white">
                            <div class="card-body">
                                <i class="fa fa-bullhorn"></i>
                                <h3>Lorem ipsum</h3>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, architecto.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card bg-danger text-center text-white">
                            <div class="card-body">
                                <i class="fa fa-comments"></i>
                                <h3>Lorem ipsum</h3>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, architecto.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <Testimonial />
    </div>

</template>

<script>
  import Header from '../includes/Header.vue'
  import Testimonial from './partials/Testimonial.vue'
  export default {
    components: {
      Header,
      Testimonial,
    },
    name: 'AboutPage',
  }
</script>

<style scoped>

</style>