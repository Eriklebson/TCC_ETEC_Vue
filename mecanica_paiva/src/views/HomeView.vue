<template>
  <main>
    <section>
      <div class="container">
        <div class="row" id="principal">
          <div class="col-md-6 d-flex">
            <div class="align-self-center text-dark">
              <h1 class="text-white ms-5">Prestando serviços desde 1977.</h1>
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
          <div class="col-md-3 caixa" v-for="servico in servicos" :key="servico.id_servico">
            <!--Primeiro caixa -->
            <figure class="config-agenda">
              <img class="class-img" :src="(link + servico.imagem)"/>
              <div class="sumiu">
                <h3 class="tf text-center">{{servico.nome}}</h3>
                <p class="text-center block-with-text">{{servico.descricao}}</p>
                <button class="btn btn-dark btn-servicos">Contratar</button>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <!-- Fim da seção Agenda -->

    <!--banner whats -->
    <section class="banner">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../../public/imagem/contate_nos/whatsapp_image.png"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <div class="text-whats text-start">
                <h1 class="">Enviar uma mensagem via Whatasapp</h1>
                <button class="btn btn-success rounded btn-whats">
                  Clique Aqui
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--banner whats fim-->

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.226583646936!2d-46.77097899203496!3d-23.715038671906676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4db47a05d83b%3A0xa8159e238a90ad1b!2sMecanica%20Paiva%26AutoEletrica!5e0!3m2!1spt-BR!2sbr!4v1668960835434!5m2!1spt-BR!2sbr"
              width="500"
              height="300"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <p>
              <strong>
                Estr. da Cumbica, 2b - Cidade Ipava, São Paulo - SP -
              </strong>
              <strong>CEP: 04941-175 </strong><br />
              <strong>Tel: (11)6667-7777 </strong>
            </p>
          </div>

          <div class="col-md-6 border border-dark teste">
            <form class="">
              <div class="d-flex justify-content-between contrate">
                <h3>Contrate-nos</h3>
                <img src="../../public/imagem/contate_nos/carIcon.png" alt="" />
              </div>
              <div class="mb-3 ms-4 me-5 mt-5">
                <label for="exampleInputEmail1" class="form-label">Nome</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby=""
                />
              </div>

              <div class="mb-3 ms-4 me-5 me-1">
                <label for="exampleInputPassword1" class="form-label"
                  >E-mail</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 ms-4 me-5 me-1">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >Mensagem</label
                >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button
                type="submit"
                class="btn btn-dark ms-4 btn-form text-white"
              >
                Enviar
              </button>
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
import axios from "axios";
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
  data() {
    return {
      link: "http://localhost:3000/img/servicos/",
      servicos: [],
    }
  },
  async created(){
    await axios.get("http://localhost:3000/servicos").then(response => this.servicos = response.data).catch(error => console.log(error))
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 4.5em;
}
.banner {
  margin-top: 40px;
}
.text-whats {
  position: relative;
  right: 190px;
  width: 500px;
}
.btn-whats {
  position: relative;
  left: 220px;
  top: -44px;
  background-color: #00b721;
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

#whats {
  margin-top: 30px;
}
.caixa {
  color: white;
  margin: 15px 0px;
  width: 273px;
  height: 330px;
  position: relative;
  overflow: hidden;
}
.maps {
  margin-bottom: 40px;
}
.block-with-text {
  overflow: hidden;
  position: relative; 
  line-height: 1.2em;
  max-width: 100%;
  max-height: 3.6em; 
  text-align: justify;  
  margin-right: -1em;
  padding-right: 1em;
}.block-with-text:before {
  content: '...';
  position: absolute;
  right: 0;
  bottom: 0;
}.block-with-text:after {
  content: '';
  position: absolute;
  right: 0;
  width: 1em;
  height: 1em;
  margin-top: 0.2em;
  background: white;
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

.btn-form {
  background-color: #121d24;
  margin-bottom: 20px;
}
.teste {
  padding: -0px;
}
.contrate {
  background: #121d24;
  color: white;
  padding: 20px;
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
