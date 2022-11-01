<template>
  <div id="nav" class="container">
    <nav class="navbar navbar-expand-lg bg-warning fixed-top">
      <div class="container">
        <a href="#" class="ms-5"
          ><!--Logo** Colocar a largura do tamanho da imagem sempre -->
          <img src="../assets/paivablack.png" width="250" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto me-5">
            <li class="nav-item">
              <a class="nav-link active  " aria-current="page" href="#"
                >Home</a
              >
            </li>
            <li class="nav-item ms-3">
              <a class="nav-link " href="#">Atendimento</a>
            </li>
            <li class="nav-item ms-3">
              <a class="nav-link " href="#">Que-somos</a>
            </li>
            <li class="nav-item ms-3">
              <a class="nav-link" href="#">Faça seu orçamento</a>
            </li>

            <li class="nav-item ms-3">
              <a class="nav-link btn btn-primary" href="#">Entrar</a>
            </li>
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
ul li a{
  color: rgb(5, 5, 5);
  font-weight: 900;
}
.nav-link:hover {
  color: rgb(255, 255, 255);
}
.nav-link:hover{
	border-bottom: 1px solid white;
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
