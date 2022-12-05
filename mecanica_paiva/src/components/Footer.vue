<template>
  <!--Ínicio rodapé-->
  <footer class="caixa">
    <!--Ínicio rodapé-->
    <div class="container mb-3 text-white">
      <div class="row text-start">
        <div class="col-md-4">
          <h3>Contato</h3>
          <a href="" class="me-2 mt-1 text-white">
            <font-awesome-icon icon="fa-solid fa-phone" />
          </a>
          <span>Tel: (11)-3423-1215</span>
          <p>
            <a href="" class="me-2 mt-1 text-white"><font-awesome-icon icon="fa-solid fa-envelope" /></a>
            <span>Contato@Contato.com.br</span>
          </p>

          <p>
            <font-awesome-icon class="btn text-light icons me-2" icon="fa-brands fa-square-facebook" />
            <font-awesome-icon class="btn text-light icons me-2" icon="fa-brands fa-linkedin" />
            <font-awesome-icon class="btn text-light icons" icon="fa-brands fa-square-instagram" />
          </p>
          
      
        </div>

        <div class="col-md-4">
          <ul class="navbar-nav">
            <h3>Responsável Técnico</h3>
            <li>Eriklebson</li>
            <li>Jefferson</li>
            <li>Sanches</li>
            <li>Wesley</li>
          </ul>
        </div>

        <div class="col-md-4">
          <h3>Entre em contato</h3>

          <ul class="navbar-nav">
           <li class="mt-2">Segunda: Sexta 8:00 - 18:00</li>
            <li class="mt-2">Sábado: 8:00 - 12:00</li>
            <li class="mt-2">Fechado para Almoço 12:00 - 13:00</li>
          </ul>
        </div>
      </div>
    </div>

    <footer class="text-center text-white ft">
      <!--Ínicio Copyright-->
      <!--para apararecer o símbolo de copyright use o &copy;-->
      &copy; Copyright 2022 | PaivaAutoElétrica&Mecânica | <span class="text-warning">Todos os direitos reservados.</span><br>
      <img class="mt-1" src="../../public/imagem/footer/carIcon.png" alt="">
     
    </footer>
  </footer>
  <!--Fim rodapé-->
  <!--Fim rodapé-->
</template>

<script>
export default {
  name: "Footer",
};
</script>


<style scoped>

.container{
  padding-top: 30px;
}

.caixa{
  background-color: #121D24;
}

.icons{
  padding: 0px;
  font-size: 20px;
}
.ft{
  background-color: #15222B;
  padding: 40px 0px;
}


/*Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) {
}

/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
  nav {
    padding: 15px 0px;
  }
}

/* Large devices (desktops, 992px and up)*/
@media (min-width: 992px) {
}

/* X-Large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {
}

/* XX-Large devices (larger desktops, 1400px and up)*/
@media (min-width: 1400px) {
}
</style>
