<template>
    <Nav :conta="conta"/>
    <div class="row">
        <div class="col-md-3 menu">
            <Menu :conta="conta"/>
        </div>
        <div class="col-md-9 itens">
            <h3 v-if="!$route.path.includes('/DashBoard/')">Bem vindo {{conta.nome}}</h3>
            <router-view />
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import Nav from "@/DashBoard/components/NavDashBoard.vue";
    import Menu from "@/DashBoard/components/MenuDashBoard.vue";
    export default{
        name: 'DashBoard',
        components: {
            Nav,
            Menu,
        },
        data(){
            return{
                conta: [],
            }
        },
        async created(){
            //Bloquear a rota da DashBoard para entrar so quando logar
            /*if(this.$route.query.id == null){
                this.$router.push("/")
            }
            else{
                await axios.get("http://localhost:3000/contas/" + this.$route.query.id).then(response => this.conta = response.data).catch(error => console.log(error))
            }*/

            //remover essa linha quando tudo tiver pronto e habilitar a de cima
            await axios.get("http://localhost:3000/contas/" + this.$route.query.id).then(response => this.conta = response.data).catch(error => console.log(error))
        }
    }
</script>

<style scoped>
.row{
    max-width: 100%;
}
.itens{
    padding: 20px;
}
.container-fluid{
    padding-left: 0px;
    padding-right: 0px;
}
</style>