<template>
    <section class="container-fluid menu">
        <ul>
            <router-link to="/DashBoard"><li><font-awesome-icon icon="fa-regular fa-envelope" />&nbsp;&nbsp;&nbsp;E-mail</li></router-link>
            <router-link to="/DashBoard/Servicos"><li><font-awesome-icon icon="fa-solid fa-box" />&nbsp;&nbsp;&nbsp;Serviços</li></router-link>
            <router-link to="/DashBoard/hisEmail"><li><font-awesome-icon icon="fa-solid fa-clock-rotate-left" />&nbsp;&nbsp;&nbsp;Historico de E-mail</li></router-link>
            <router-link to="/DashBoard/Clientes"><li><font-awesome-icon icon="fa-solid fa-user-group" />&nbsp;&nbsp;&nbsp;Cliente</li></router-link>
            <router-link to="/DashBoard/Estatisticas"><li><font-awesome-icon icon="fa-solid fa-chart-line" />&nbsp;&nbsp;&nbsp;Estatísticas</li></router-link>
            <router-link to="/DashBoard/Gerenciar"><li><font-awesome-icon icon="fa-solid fa-house" />  &nbsp;&nbsp;&nbsp;Gerenciar</li></router-link>
            <router-link to="/Configuracoes"><li><font-awesome-icon icon="fa-solid fa-gear" />&nbsp;&nbsp;&nbsp;Configurações</li></router-link>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'Menu',
    }
</script>

<style scoped>
    .menu{
        background-color: #FAFAFA;
        height: 89vh;
    }
    .menu h3{
        padding: 20px;     
    }
    .menu ul{
        padding: 20px 0;
        margin: 0;
        list-style: none;
    }
    .menu li{
        padding: 5px 20px;
        transition: 0.5s;
    }
    .menu li:hover{
        background-color: rgb(112, 112, 112);
    }
    .menu a{
        color: black;
        text-decoration: none;
    }
</style>