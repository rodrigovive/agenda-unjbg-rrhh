<template>
    <div>
        <Header />
        <section id="contact" class="py-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card p-4">
                            <div class="card-body">
                                <h4>Informacion de la oficina</h4>
                                <p>Datos Referencia</p>
                                <h4>Direccion</h4>
                                <p>Direccion oficina</p>
                                <h4>Email</h4>
                                <p>test@test.com</p>
                                <h4>Celular</h4>
                                <p>(555) 555-5555</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card p-4">
                            <div class="card-body">
                                <h3 class="text-center">Por favor complete este formulario para contactarnos</h3>
                                <hr>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Nombres">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Apellidos">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Email">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Telefono">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <textarea class="form-control" placeholder="Mensaje"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <input type="submit" class="btn btn-outline-danger btn-block">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Staff />
    </div>
</template>

<script>
  import Staff from './Staff.vue'
  import Header from '../includes/Header.vue'
  export default {
    name: 'RRHH',
    components: {
      Header,
      Staff
    }
  }
</script>

<style scoped>

</style>