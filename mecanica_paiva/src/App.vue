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
<<<<<<< HEAD
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
=======
>>>>>>> 104c57e9a2dc8463fff9dfa6c15211aed6438ec2

</style>
