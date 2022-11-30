<template>
  <div id="nav" class="container">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <router-link to="/" class="ms-5">
          <!--Logo** Colocar a largura do tamanho da imagem sempre -->
          <img src="@/../public/imagem/navbar/logo.png" width="250" />
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto me-5">
            <li class="nav-item ms-3 pt-3">
              <router-link class="nav-link text-white" to="/">
                <font-awesome-icon class="me-1" icon="fa-regular fa-user" />Atendimento
              </router-link>
            </li>

            <li class="nav-item ms-3 pt-3">
              <router-link class="nav-link text-white" to="/">
                <font-awesome-icon icon="fa-regular fa-pen-to-square" /> Faça
                seu orçamento
              </router-link>
            </li>

            <li class="nav-item ms-3 pt-3">
              <router-link class="nav-link text-white" to="/login">
                <font-awesome-icon class="me-2" icon="fa-solid fa-arrow-right-to-bracket" />Login
              </router-link>
            </li>

            <nav class="nav-item ms-3 pt-3">
              <router-link to="" class="nav-link">
                <font-awesome-icon class="text-light" icon="fa-solid fa-bars" />
              </router-link>
            </nav>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>


<style scoped>
ul li a {
  font-weight: 900;
}

nav {
  background: #121d24;
}

.bars {
  position: relative;
  margin-top: -1px;
  left: 30px;
}

/*Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) {}

/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
  nav {
    padding: 15px 0px;
  }
}

/* Large devices (desktops, 992px and up)*/
@media (min-width: 992px) {}

/* X-Large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {}

/* XX-Large devices (larger desktops, 1400px and up)*/
@media (min-width: 1400px) {}
</style>
