<template>
       <section class="container-fluid section-carousel">
          <!-- ínicio da seção carousel -->
          <div>
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators"  >
                <button 
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active bg-warning"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                  class="bg-warning"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                  class="bg-warning"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                  class="bg-warning"
                ></button>
              </div>
              <div class="carousel-inner" >
                <div class="carousel-item active" data-bs-interval="10000" >
                  <img
                    src="../assets/carrossel_1.png"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h1 class="pb-5">Encotre o melhor orçamento de forma rápida e segura</h1>
                    <h3>
                      Selecione o serviço
                    </h3>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="10000" >
                  <img
                    src="../assets/carrossel_2.png"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                  <h1 class="pb-5">Crie sua conta de forma facilitada</h1>
                    <h3 class="">
                     Preencha os dados
                    </h3>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="10000" >
                  <img
                    src="../assets/carrossel_3.png"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h1 class="pb-5">Seja atendido por um de nossos funcionários</h1>
                    <h3 class="">
                     Receba o orçamento grátis
                    </h3>
                  </div>
                </div>
                 <div class="carousel-item" data-bs-interval="10000" >
                  <img
                    src="../assets/carrossel_4.png"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h1 class="pb-5">Seja atendido por um de nossos funcionários</h1>
                    <h3 class="">
                     Receba o orçamento grátis
                    </h3>
                  </div>
                </div>

                
                
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <!--Fim do Container -->
        </section>
</template>

<script>
    export default{
        name: 'Carousel'
    }
</script>

<style scoped>

</style>
