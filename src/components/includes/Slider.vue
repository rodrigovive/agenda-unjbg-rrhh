<template>
    <section id="showcase">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item carousel-image-1 active">
                    <div class="container">
                        <div class="carousel-caption d-none d-sm-block text-right mb-5">
                            <h1 class="display-3">Licensiamiento</h1>
                            <p class="lead">Sunedu otorga licensamiento institucional a la Universidad Nacional Jorge Basadre Grohmann.</p>
                            <a href="https://www.sunedu.gob.pe/sunedu-otorga-licenciamiento-institucional-universidad-nacional-jorge-basadre-grohmann/" class="btn btn-danger btn-lg">Mas información</a>
                        </div>
                    </div>
                </div>

                <!--<div class="carousel-item carousel-image-2">
                    <div class="container">
                        <div class="carousel-caption d-none d-sm-block mb-5">
                            <h1 class="display-3">Oficina de Recursos Humanos</h1>
                            <p class="lead">Oficina encargada</p>
                            <a href="#" class="btn btn-primary btn-lg">Learn More</a>
                        </div>
                    </div>
                </div>-->

                <div class="carousel-item carousel-image-3">
                    <div class="container">
                        <div class="carousel-caption d-none d-sm-block text-right mb-5">
                            <h1 class="display-3">UNJBG</h1>
                            <p class="lead">Pagina principal.</p>
                            <a href="http://unjbg.edu.pe/portal/" class="btn btn-success btn-lg">Ingresar</a>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#myCarousel" data-slide="prev" class="carousel-control-prev">
                <span class="carousel-control-prev-icon"></span>
            </a>

            <a href="#myCarousel" data-slide="next" class="carousel-control-next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'Slider',
  }
</script>

<style scoped>

</style>