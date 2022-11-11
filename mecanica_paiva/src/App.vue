<template>
  <nav>
    <Nav v-if="!$route.path.includes('/DashBoard')"/>
    <router-view/>
    <Footer v-if="!$route.path.includes('/DashBoard')"/>
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

</style>