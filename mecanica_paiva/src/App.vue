<template>
  <nav>
    <Nav/>
    <Footer/>
     <router-view/>
  </nav>
 
</template>


<script>
  import Nav from './components/Nav.vue'
  import Footer from './components/Footer.vue'

  export default{
    components:{
      Nav,
      Footer,
    }
  }
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}



nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
