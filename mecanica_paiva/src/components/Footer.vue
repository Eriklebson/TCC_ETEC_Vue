<template>
   <!--Ínicio rodapé-->
  <footer class="caixa bg-warning"> <!--Ínicio rodapé-->
  <div class="container mb-3 text-white">
    <div class="row  text-center">
      <div class="col-md-4">    
        <h3>Whatsapp</h3>
        <a href="" class="btn btn-outline-dark me-1 mt-1"> 
          <fa class="me-1 whatsapp btn" :icon="['fab', 'whatsapp']" />
        </a>
        <span>Tel: (11)-981620578</span> 
      </div>

      <div class="col-md-4">
        <ul class="navbar-nav">
          <h3>Horários</h3>
          <li class="mt-2">Segunda:  Sexta 8:00 - 18:00</li>
          <li class="mt-2">Sábado: 8:00 - 12:00</li>
          <li class="mt-2">Fechado para Almoço 12:00 - 13:00</li>
        </ul>
      </div>

      <div class="col-md-4">
        <h3>Entre em contato</h3>
        
        <ul class="navbar-nav">
          <li class="mt-2">Tel: (11)-981620578</li>
          <li class="mt-2">Tel: (11)-981620578</li>
          <li class="mt-2">E-mail: ErickPaivaLaravel@gmail.com</li>
        </ul>
      </div>
    </div>
  </div>

  <footer class="text-center text-white bg-warning"> <!--Ínicio Copyright-->
  <!--para apararecer o símbolo de copyright use o &copy;-->
  &copy; Copyright 2022 | PaivaAutoElétrica&Mecânica | Todos os direitos reservados.
</footer>
</footer> <!--Fim rodapé-->
  <!--Fim rodapé-->
</template>

<script>
export default {
  name: "Footer",
};
</script>


<style scoped>

.whatsapp{
	color: white;
	background: #1a1919;
	border-radius: 60px;
  font-size: 20px;
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
