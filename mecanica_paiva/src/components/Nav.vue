<template>
  <div id="nav" class="container">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <a href="#" class="ms-5"
          ><!--Logo** Colocar a largura do tamanho da imagem sempre -->
          <img src="@/../public/imagem/navbar/logo.png" width="250" />
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
            
            <li class="nav-item ms-3 pt-3">
              
              <a class="nav-link text-white" href="#">
                <fa
                  class=" me-2 user btn border border-white bg-white"
                  :icon="['fas', 'user']"
                />Atendimento</a>
              
            </li>
            
            <li class="nav-item ms-3 pt-3">
              <a class="nav-link text-white" href="#"><fa class="me-2 btn bg-white" :icon="['fas', 'bars']"/>Faça seu orçamento</a>
            </li>

            <li class="nav-item ms-3 pt-3">
              <a class="nav-link btn text-white" href="#"><fa class="btn bg-white me-2 " :icon="['fas', 'arrow-right-to-bracket']" /> Login</a>
            </li>

            <nav class="nav-item ms-3 pt-3" >    
              <a href="" class="nav-link "><fa
                  class=" bars btn border border-white bg-white"
                  :icon="['fas', 'bars']"
                /></a>   
                
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
ul li a{

  font-weight: 900;
}



nav{
  background: #121D24;
}
.bars{
  position: relative;
  margin-top: -1px;
  left: 30px;
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
