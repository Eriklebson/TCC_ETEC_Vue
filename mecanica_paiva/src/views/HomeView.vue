<template>
  <main>
    <section>
      <div class="container">
        <div class="row" id="principal">
          <div class="col-md-6 d-flex">
            <div class="align-self-center text-dark">
              <h1 class="text-start text-white">
                Prestando serviços desde 1977.
              </h1>
            </div>
          </div>
          <div class="col-md-6 d-none d-md-block mt-5">
            <img
              src="../../public/imagem/navbar/mecanico.png"
              style="height: 400px"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <Carousel />

    <section class="fundo">
      <!-- Ínicio da seção Agenda -->
      <div class="container">
        <h1 class="text-center">Confira todos os serviços do Paiva</h1>
        <div class="row justify-content-around servicos">
          <div class="col-md-3 caixa">
            <!--Primeiro caixa -->
            <figure class="config-agenda">
              <img
                class="class-img"
                src="../../public/imagem/servicos/servico_1.png"
              />
              <div class="sumiu">
                <h3 class="tf text-center">Troca de óleo</h3>
                <p class="">
                  A média de intervalo entre as trocas de 10.000 km ou 12 meses
                  de uso
                </p>

                <button class="btn btn-dark btn-servicos">Contratar</button>
              </div>
            </figure>
          </div>

          <div class="col-md-3 caixa">
            <!--Segundo caixa -->
            <figure class="config-agenda">
              <img
                class="class-img"
                src="../../public/imagem/servicos/servico_2.png"
              />
              <div class="sumiu">
                <h3 class="tf text-center">Troca de óleo</h3>
                <p class="">
                  A média de intervalo entre as trocas de 10.000 km ou 12 meses
                  de uso
                </p>

                <button class="btn btn-dark btn-servicos">Contratar</button>
              </div>
            </figure>
          </div>

          <div class="col-md-3 caixa">
            <!--Terceira caixa -->
            <figure class="config-agenda">
              <img
                class="class-img"
                src="../../public/imagem/servicos/servico_3.png"
              />
              <div class="sumiu">
                <h3 class="tf text-center">Troca de óleo</h3>
                <p class="">
                  A média de intervalo entre as trocas de 10.000 km ou 12 meses
                  de uso
                </p>

                <button class="btn btn-dark btn-servicos">Contratar</button>
              </div>
            </figure>
          </div>

          <div class="col-md-3 caixa">
            <!--Quarto caixa -->
            <figure class="config-agenda">
              <img
                class="class-img"
                src="../../public/imagem/servicos/servico_4.png"
              />
              <div class="sumiu">
                <h3 class="tf text-center">Troca de óleo</h3>
                <p class="">
                  A média de intervalo entre as trocas de 10.000 km ou 12 meses
                  de uso
                </p>

                <button class="btn btn-dark btn-servicos">Contratar</button>
              </div>
            </figure>
          </div>
        </div>
         <!-- Ínicio da seção Agenda -->
      
        <div class="row justify-content-around servicos">
          <div class="col-md-3 caixa">
            <!--Primeiro caixa -->
            <figure class="config-agenda">
              <img
                class="class-img"
                src="../../public/imagem/servicos/servico_1.png"
              />
              <div class="sumiu">
                <h3 class="tf text-center">Troca de óleo</h3>
                <p class="">
                  A média de intervalo entre as trocas de 10.000 km ou 12 meses
                  de uso
                </p>

                <button class="btn btn-dark btn-servicos">Contratar</button>
              </div>
            </figure>
          </div>

          <div class="col-md-3 caixa">
            <!--Segundo caixa -->
            <figure class="config-agenda">
              <img
                class="class-img"
                src="../../public/imagem/servicos/servico_2.png"
              />
              <div class="sumiu">
                <h3 class="tf text-center">Troca de óleo</h3>
                <p class="">
                  A média de intervalo entre as trocas de 10.000 km ou 12 meses
                  de uso
                </p>

                <button class="btn btn-dark btn-servicos">Contratar</button>
              </div>
            </figure>
          </div>

          <div class="col-md-3 caixa">
            <!--Terceira caixa -->
            <figure class="config-agenda">
              <img
                class="class-img"
                src="../../public/imagem/servicos/servico_3.png"
              />
              <div class="sumiu">
                <h3 class="tf text-center">Troca de óleo</h3>
                <p class="">
                  A média de intervalo entre as trocas de 10.000 km ou 12 meses
                  de uso
                </p>

                <button class="btn btn-dark btn-servicos">Contratar</button>
              </div>
            </figure>
          </div>

          <div class="col-md-3 caixa">
            <!--Quarto caixa -->
            <figure class="config-agenda">
              <img
                class="class-img"
                src="../../public/imagem/servicos/servico_4.png"
              />
              <div class="sumiu">
                <h3 class="tf text-center">Troca de óleo</h3>
                <p class="">
                  A média de intervalo entre as trocas de 10.000 km ou 12 meses
                  de uso
                </p>

                <button class="btn btn-dark btn-servicos">Contratar</button>
              </div>
            </figure>
          </div>
        </div>
      </div>

    </section>

    
    <!-- Fim da seção Agenda -->
    <section id="whats">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../../public/imagem/contate_nos/whatsapp_image.png" class="d-block w-100" alt="...">
    </div> 
  </div>
</div>
    </section>

    <section class="bg-white maps">
      <!--Ínicio do Mapa da Oficina -->
      <div class="container">
        <!--Ínicio container -->
        <div class="row">
          <!--Ínicio da Row/grid -->
          <div class="col-md-6">
            <h1>Localização</h1>
            <!--Ínicio Mapa-->
            <iframe
              class="border border-warning rounded mt-5"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.3999703898203!2d-46.768539484913845!3d-23.697406772515766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5212f9627de5%3A0x1c5ccd29c1a3e96a!2sEtec%20Jardim%20%C3%82ngela!5e0!3m2!1spt-BR!2sbr!4v1637707051920!5m2!1spt-BR!2sbr"
              width="500"
              height="300"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
            <p>
              <strong>
                End: Estr. da Baronesa, 1695 - Jd. Nakamura, São Paulo
              </strong>
              <strong>CEP: 04941-175 </strong><br />
              <strong>Tel: (11)6667-7777 </strong>
            </p>
          </div>

          <div class="col-md-6 border border-dark teste">
            <form class="">
              <div class="d-flex justify-content-between contrate ">
                <h1>Contrate-nos</h1>
                <img src="../../public/imagem/contate_nos/carIcon.png" alt="">
              </div>
              <div class="mb-3 ms-1 me-1">
                <label for="exampleInputEmail1" class="form-label"
                  >Nome</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby=""
                />
                
              </div>

              <div class="mb-3 mb-3 ms-1 me-1">
                <label for="exampleInputPassword1" class="form-label"
                  >E-mail</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 mb-3 ms-1 me-1">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >Mensagem</label
                >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary ms-1">Submit</button>
            </form>
          </div>
          <!--Fim Mapa-->
        </div>
        <!--Fim da Row/grid -->
      </div>
      <!--Fim do coitaner-->
    </section>


    <!--Fim do Mapa da Oficina -->
  </main>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import Carousel from "@/components/Carousel.vue";

export default {
  name: "HomeView",
  components: {
    Nav,
    Footer,
    Carousel,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 4.5em;
}
.fundo {
  background: white;
}
.section-carousel {
  margin: 0px;
  padding: 0px;
  margin-bottom: 30px;
}
section,
#principal {
  background: #121d24;
}

.servicos {
  margin-top: 50px;
}
.tf {
  margin-top: 120px;
  border-bottom: 5px solid rgb(231, 231, 231);
}

.btn-servicos {
  margin-left: 80px;
  margin-top: 10px;
}

.contrate{
 background: #121D24;
 color: white;
 
}
.teste{
  padding: 0px;
}

#whats{
  margin-top: 30px;
}
.caixa {
  margin: 15px 0px;
  width: 273px;
  height: 330px;
  position: relative;
  overflow: hidden;
}
.maps{
  margin-bottom: 40px;
}

.caixa .sumiu {
  background: rgba(2, 0, 36, 0.466);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0.534) 0%,
    rgba(255, 238, 0, 0.568) 100%,
    rgba(0, 213, 255, 0.507) 100%
  );
  position: absolute;
  top: 45%;
  left: 10%;
  transform: translate(0%, 445%);
  height: 331px;
  width: 273px;
  transition: 0.5s;
  z-index: 1;
}

.caixa:hover .sumiu {
  transform: translate(-15px, -150px);
}

/*Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) {
}

/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
}

/*Responsive*/

/******************************************/
/*Extra small devices (portrait phones, less than 576px)*/
@media (max-width: 575.98px) {
}

/* Small devices (landscape phones, 576px and up*/
@media (min-width: 576px) and (max-width: 768.98px) {
}

/* Medium devices (tablets, 768px and up*/
@media (min-width: 768px) and (max-width: 991.98px) {
}

/*Large devices (desktops, 992px and up*/
@media (min-width: 992px) and (max-width: 1199.98px) {
}

/* Extra large devices (large desktops, 1200px and up*/
@media (min-width: 1200px) and (max-width: 1380.98px) {
}
</style>
