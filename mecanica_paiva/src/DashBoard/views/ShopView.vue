<template>
    <div>
        <h1>Servicos</h1><br>
        <div class="card" >
            <div class="row">
                <div class="col-md-3 caixa" v-for="servico in servicos" :key="servico.id_servico">
                    <!--Primeiro caixa -->
                    <figure class="config-agenda">
                    <img class="class-img" :src="(link + servico.imagem)"/>
                    <div class="sumiu">
                        <h3 class="tf text-center">{{servico.nome}}</h3>
                        <p class="text-center block-with-text">{{servico.descricao}}</p>
                        <router-link :to="{name: 'ContratarServico', query:{idConta: this.$route.query.id, idServico: servico.id_servico}}" class="btn btn-dark btn-servicos">Contratar</router-link>
                    </div>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import md5 from "md5";
    export default{
        name: 'Emails',
        data(){
            return{
                link: "http://localhost:3000/img/servicos/",
                servicos: [],
            }
        },
        created(){
            this.get();
        },
        methods: {
            async get(){
                await axios.get("http://localhost:3000/servicos").then(response => this.servicos = response.data).catch(error => console.log(error))
            }
        }
    }
</script>

<style scoped>
.refrash{
    border: 1px solid #D2D2D2;
}
.card{
    padding: 30px;
    margin-bottom: 20px;
}
.button{
    width: 150px;
    color: white;
    background-color: #121D24;
}
.caixa {
  color: white;
  margin: 15px 0px;
  width: 273px;
  height: 330px;
  position: relative;
  overflow: hidden;
}
.maps {
  margin-bottom: 40px;
}
.block-with-text {
  overflow: hidden;
  position: relative; 
  line-height: 1.2em;
  max-width: 100%;
  max-height: 3.6em; 
  text-align: justify;  
  margin-right: -1em;
  padding-right: 1em;
}.block-with-text:before {
  content: '...';
  position: absolute;
  right: 0;
  bottom: 0;
}.block-with-text:after {
  content: '';
  position: absolute;
  right: 0;
  width: 1em;
  height: 1em;
  margin-top: 0.2em;
  background: white;
}
.caixa .sumiu {
  background: rgba(2, 0, 36, 0.466);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0.534) 0%,
    rgba(255, 238, 0, 0.568) 100%,
    rgba(0, 213, 255, 0.507) 100%
  );
  position: absolute;
  top: 45%;
  left: 10%;
  transform: translate(0%, 445%);
  height: 331px;
  width: 273px;
  transition: 0.5s;
  z-index: 1;
  text-align: center;
  padding: 100px 0;
}

.caixa:hover .sumiu {
  transform: translate(-15px, -150px);
}

.btn-form {
  background-color: #121d24;
  margin-bottom: 20px;
}
</style>