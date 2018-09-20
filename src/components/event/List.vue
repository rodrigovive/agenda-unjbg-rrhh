<template>
    <section id="blog" class="py-3">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card-columns">

                        <div class="card">
                            <img src="http://www.lorempixel.com/500/500/city/1" alt="" class="card-img-top img-fluid">
                            <div class="card-body">
                                <h4 class="card-title">Evento Nombre</h4>
                                <small class="text-muted">Evento por realizar</small>
                                <hr>
                                <p class="card-text">Breve description del evento</p>
                            </div>
                        </div>

                        <div class="card p-3">
                            <blockquote class="car-body card-blockquote">
                                <p>Invitacion : .</p>
                                <footer>
                                    <small class="text-muted">Personas encargadas o expositores<cite title="Source Title">Candidato</cite></small>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'List',
  }
</script>

<style scoped>

</style>