<template>
    <section class="container-fluid menu">
        <ul>
            <router-link to="/DashBoard"><li><font-awesome-icon icon="fa-solid fa-envelope" />&nbsp;&nbsp;&nbsp;E-mail</li></router-link>
            <router-link to="*"><li><font-awesome-icon icon="fa-solid fa-box" />&nbsp;&nbsp;&nbsp;Serviços</li></router-link>
            <router-link to="*"><li><font-awesome-icon icon="fa-solid fa-clock-rotate-left" />&nbsp;&nbsp;&nbsp;Historico de E-mail</li></router-link>
            <router-link to="*"><li><font-awesome-icon icon="fa-solid fa-user-group" />&nbsp;&nbsp;&nbsp;Cliente</li></router-link>
            <router-link to="*"><li><font-awesome-icon icon="fa-solid fa-chart-line" />&nbsp;&nbsp;&nbsp;Estatísticas</li></router-link>
            <router-link to="*"><li><font-awesome-icon icon="fa-solid fa-house" />  &nbsp;&nbsp;&nbsp;Geranciar</li></router-link>
            <router-link to="*"><li><font-awesome-icon icon="fa-solid fa-gear" />&nbsp;&nbsp;&nbsp;Configurações</li></router-link>
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
        text-align: start;
    }
    .menu li:hover{
        background-color: rgb(112, 112, 112);
    }
    .menu a{
        color: black;
        text-decoration: none;
    }
</style>