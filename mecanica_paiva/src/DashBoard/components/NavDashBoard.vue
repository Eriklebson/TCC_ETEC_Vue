<template>
    <div id="nav" class="container-fluid">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a href="/" class="ms-5"
            ><!--Logo** Colocar a largura do tamanho da imagem sempre -->
            <img src="@/../public/imagem/navbar/logo.png" width="250" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto me-5">
              <li class="nav-item ms-3 pt-3 text-center">
                <img class="perfil" :src="(link + conta.imagem)" alt="">
              </li>
              <li class="nav-item ms-3 pt-3 text-center">
                <a class="nav-link text-white" href="#">Bem-Vindo, {{conta.nome}}</a>
              </li>
              <li class="nav-item ms-3 pt-3 fw-bold text-center">
                <a class="nav-link text-white" href="#">Ajuda</a>
              </li>
              <li class="nav-item ms-3 pt-3 fw-bold text-center">
                <router-link class="nav-link btn text-white" to="/">Sair</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
</template>
  
<script>
  export default {
    props: ['conta'],
    name: "Nav",
    data() {
    return {
      link: "http://localhost:3000/img/usuario/",
    }
  },
  };
</script>
  
  
<style scoped>
nav{
    background: #121D24;
}
.perfil{
  border-radius: 50px;
  width: 40px;
  height: 40px;
}
/*Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) {  }
 
/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
    nav{
    padding: 15px 0px;
  }
}
  
/* Large devices (desktops, 992px and up)*/
@media (min-width: 992px) {  }
  
/* X-Large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {  }
  
/* XX-Large devices (larger desktops, 1400px and up)*/
@media (min-width: 1400px) {  }
</style>