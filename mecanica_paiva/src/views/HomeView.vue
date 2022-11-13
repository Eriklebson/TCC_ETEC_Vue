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
      <div class="container-fluid">
        <h1 class="text-center">Confira todos os serviços do Paiva</h1>
        <div class="row justify-content-around servicos">
          <div class="col-md-3 caixa">
            <!--Primeiro caixa -->
            <figure class="config-agenda custom-agenda">
              <img
                class="class-img"
                src="../../public/imagem/servicos/servico_1.png"
              />
            </figure>
          </div>

          <div class="col-md-3 caixa">
            <!--Segundo caixa -->
            <figure class="config-agenda ">
              <img
                class="class-img "
                src="../../public/imagem/servicos/servico_2.png"
              />
              <div class="sumiu" >
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
            </figure>
          </div>

          <div class="col-md-3 caixa">
            <!--Quarto caixa -->
            <figure class="config-agenda">
              <img
                class="class-img"
                src="../../public/imagem/servicos/servico_4.png"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
    <!-- Fim da seção Agenda -->

    <section class="bg-white">
      <!--Ínicio do Mapa da Oficina -->
      <div class="container">
        <!--Ínicio container -->
        <div class="row">
          <!--Ínicio da Row/grid -->
          <div class="col-md-12">
            <!--Ínicio Mapa-->
            <iframe
              class="border border-warning rounded mt-5"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.3999703898203!2d-46.768539484913845!3d-23.697406772515766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5212f9627de5%3A0x1c5ccd29c1a3e96a!2sEtec%20Jardim%20%C3%82ngela!5e0!3m2!1spt-BR!2sbr!4v1637707051920!5m2!1spt-BR!2sbr"
              width="1130"
              height="340"
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
section, #principal{
  background: #121d24;
}

.servicos {
  margin-top: 50px;
}
.tf{
  margin-top: 120px;
  border-bottom: 5px solid rgb(231, 231, 231);
}

.btn-servicos {
  margin-left: 80px;
  margin-top: 10px;
}



.caixa { 
  width: 273px;
  height: 330px;
  position: relative;
 
  overflow: hidden;
}

div .sumiu{
  background-color: yellow;
  position: absolute;
  top: 45%;
  left: 10%;
  transform: translate(0%, 445%);
  height: 331px;
  width: 273px;
  transition: .5s;
  z-index: 1;
  
}

div:hover .sumiu{
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
