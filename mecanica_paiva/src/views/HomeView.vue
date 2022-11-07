<template>
  <div>
    <Nav />
    <main>
      <section>
        <div class="container">
          <div class="row" id="principal">
            <div class="col-md-6 d-flex">
              <div class="align-self-center text-dark">
                <h1 class="text-start">Prestando serviços desde 1977.</h1>
                <p class="text-start">
                  Há 45 anos, a Paiva é a oficina de confiança da zona sul de
                  São Paulo. Faça-nos uma visita e venha sentir a diferença,
                  pois quem conhece, indica!
                </p>

                <form class="row g-3">
                  <div class="col-auto">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword2"
                      placeholder="Seu e-mail"
                    />
                  </div>

                  <div class="col-auto">
                    <button type="submit" class="btn btn-dark mb-3">
                      Cadastre-se
                    </button>
                  </div>
                </form>
                <p class="text-start redes">
                  Nossas redes e contatos:
                  <fa
                    class="me-1 whatsapp btn border border-dark"
                    :icon="['fab', 'whatsapp']"
                  />
                  <fa
                    class="me-1 youtube btn border border-dark"
                    :icon="['fab', 'youtube']"
                  />
                  <fa
                    class="me-1 instagram btn border border-dark"
                    :icon="['fab', 'instagram']"
                  />
                  <fa
                    class="me-1 twitter btn border border-dark"
                    :icon="['fab', 'twitter']"
                  />
                  <fa
                    class="me-1 facebook btn border border-dark"
                    :icon="['fab', 'facebook']"
                  />
                </p>
              </div>
            </div>
            <div class="col-md-6 d-none d-md-block">
              <img src="../assets/mecanico_padrao33.png" alt="" />
            </div>
          </div>
        </div>

        <section class="container-fluid section-carousel">
          <!-- ínicio da seção serviços -->
          <div>
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="false"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../assets/carrossel_1.png" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="../assets/carrossel_2.png" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="../assets/carrossel_3.png" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
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
        <!-- Fim dos serviços -->
        <section class="caixa fundo">
          <!-- Ínicio da seção Agenda -->
          <div class="container caixa-fundo">
            <div class="row justify-content-between text-center">
              <div class="col-md-3 ms-4">
                <!--Primeiro caixa -->
                <figure class="config-agenda bg-warning custom-agenda">
                  <img class="class-img" src="../assets/oleo.png" />
                  <ul class="navbar-nav config-texto">
                    <li class="mt-2">Troca de Óleo</li>
                    <li class="mt-2">Telefone: (11) 3443-3434</li>
                    <li class="mt-2">Celular: (11) 97878-5775</li>
                    <li class="mt-2">
                      <a class="btn btn-dark mb-4 mt-4" href="">Agendar</a>
                    </li>
                  </ul>
                </figure>
              </div>

              <div class="col-md-3 ms-4">
                <!--Segundo caixa -->
                <figure class="config-agenda bg-warning custom-agenda">
                  <img class="class-img" src="../assets/oleo.png" />
                  <ul class="navbar-nav config-texto">
                    <li class="mt-2">Troca de Óleo</li>
                    <li class="mt-2">Telefone: (11) 3443-3434</li>
                    <li class="mt-2">Celular: (11) 97878-5775</li>
                    <li class="mt-2">
                      <a class="btn btn-dark mb-4 mt-4" href="">Agendar</a>
                    </li>
                  </ul>
                </figure>
              </div>

              <div class="col-md-3 ms-4">
                <!--Terceira caixa -->
                <figure class="config-agenda bg-warning custom-agenda">
                  <img class="class-img" src="../assets/oleo.png" />
                  <ul class="navbar-nav config-texto">
                    <li class="mt-2">Troca de Óleo</li>
                    <li class="mt-2">Telefone: (11) 3443-3434</li>
                    <li class="mt-2">Celular: (11) 97878-5775</li>
                    <li class="mt-2">
                      <a class="btn btn-dark mb-4 mt-4" href="">Agendar</a>
                    </li>
                  </ul>
                </figure>
              </div>

              <div class="col-md-3 ms-4 mt-4">
                <!--Quarto caixa -->
                <figure class="config-agenda bg-warning custom-agenda">
                  <img class="class-img" src="../assets/oleo.png" />
                  <ul class="navbar-nav config-texto">
                    <li class="mt-2">Troca de Óleo</li>
                    <li class="mt-2">Telefone: (11) 3443-3434</li>
                    <li class="mt-2">Celular: (11) 97878-5775</li>
                    <li class="mt-2">
                      <a class="btn btn-dark mb-4 mt-4" href="">Agendar</a>
                    </li>
                  </ul>
                </figure>
              </div>

              <div class="col-md-3 ms-4 mt-4">
                <!--Quinto caixa -->
                <figure class="config-agenda bg-warning custom-agenda">
                  <img class="class-img" src="../assets/oleo.png" />
                  <ul class="navbar-nav config-texto">
                    <li class="mt-2">Troca de Óleo</li>
                    <li class="mt-2">Telefone: (11) 3443-3434</li>
                    <li class="mt-2">Celular: (11) 97878-5775</li>
                    <li class="mt-2">
                      <a class="btn btn-dark mb-4 mt-4" href="">Agendar</a>
                    </li>
                  </ul>
                </figure>
              </div>

              <div class="col-md-3 ms-4 mt-4">
                <!--Sexto caixa -->
                <figure class="config-agenda bg-warning custom-agenda">
                  <img class="class-img" src="../assets/oleo.png" />
                  <ul class="navbar-nav config-texto">
                    <li class="mt-2">Troca de Óleo</li>
                    <li class="mt-2">Telefone: (11) 3443-3434</li>
                    <li class="mt-2">Celular: (11) 97878-5775</li>
                    <li class="mt-2">
                      <a class="btn btn-dark mb-4 mt-4" href="">Agendar</a>
                    </li>
                  </ul>
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
                  class="border border-warning rounded"
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
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Nav,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 4.5em;
}

 .section-carousel{
  margin-bottom: 30px;
 }

 #principal{
    background: #121d24;
 }



div h1 {
  margin-top: 2em;
  color: white;
}

p {
  color: white;
}
/*Formatação de texto em geral*/
h1 {
  font-weight: 900;
  letter-spacing: -0.05em;
  margin-bottom: 50px;
}
h2 {
  font-size: 3em;
  font-weight: 700;
  letter-spacing: -0.4;
}
h3 {
  font-size: 2em;
  font-weight: 700;
  letter-spacing: -0.04;
}
h4 {
  font-weight: 700;
}
.fa-1,
.fa-2,
.fa-3,
.fa-4 {
  color: white;
  background: #ffc107;
  border: 2px solid red;
  padding: 20px;
  border-radius: 50px;
}
.servicos a {
  color: #ffc107;
  text-decoration: none;
}
.secao-servicos {
  background: white;
  padding-bottom: 120px;
}
.teste {
  line-height: 1.6;
}

.redes {
  font-weight: 700;
  font-size: 18px;
}
.whatsapp {
  color: green;
  font-size: 30px;
}
.facebook {
  color: rgb(25, 0, 247);
  font-size: 30px;
}
.youtube {
  color: rgb(255, 9, 9);
  font-size: 30px;
}
.twitter {
  color: rgb(8, 83, 245);
  font-size: 30px;
}
.instagram {
  color: rgb(255, 255, 255);
  font-size: 30px;
}
.class-img {
  border-radius: 30px 30px 30px 30px;
}

.config-agenda {
  width: 290px;
  border: 0 solid orange;
  border-radius: 30px 30px 30px 30px;
}
.custom-agenda:hover {
  background: #6207e3;
  color: white;
  transition: background 0.6s, color 0.6s;
}
.fundo {
  background: url(../assets/teste3.png);
  background-attachment: fixed;
}
.caixa-fundo {
  margin-top: 0px;
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
  #inputPassword2 {
    width: 23em;
  }
  button {
    margin-left: -1em;
  }
  #principal {
    margin-left: 2em;
  }

  section h4 {
    padding-top: 1em;
    font-size: 24px;
  }

  .sub-titulos {
    position: relative;
    top: -20px;
  }
}
</style>
