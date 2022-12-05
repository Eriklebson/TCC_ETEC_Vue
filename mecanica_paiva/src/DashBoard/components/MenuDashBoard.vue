<template>
    <section class="container-fluid menu">
        <ul v-if="conta.tipo_conta == 1">
            <router-link :to="{name: 'Usuarios', query:{id: conta.id_conta}}"><li><font-awesome-icon icon="fa-solid fa-user-group" />&nbsp;&nbsp;&nbsp;Usuarios</li></router-link>
            <router-link :to="{name: 'Servicos', query:{id: conta.id_conta}}"><li><font-awesome-icon icon="fa-solid fa-box" />&nbsp;&nbsp;&nbsp;Serviços</li></router-link>
            <router-link :to="{name: 'ServicosAbertos', query:{id: conta.id_conta}}"><li><font-awesome-icon icon="fa-solid fa-toolbox" />&nbsp;&nbsp;&nbsp;Servicos em Aberto</li></router-link>
            <router-link :to="{name: 'hisServicos', query:{id: conta.id_conta}}"><li><font-awesome-icon icon="fa-solid fa-clock-rotate-left" />&nbsp;&nbsp;&nbsp;Historico de Serviços</li></router-link>
            <router-link :to="{name: 'Gerenciar', query:{id: conta.id_conta}}"><li><font-awesome-icon icon="fa-solid fa-house" />  &nbsp;&nbsp;&nbsp;Gerenciar</li></router-link>
            <router-link :to="{name: 'Configuracoes', query:{id: conta.id_conta}}"><li><font-awesome-icon icon="fa-solid fa-gear" />&nbsp;&nbsp;&nbsp;Configurações</li></router-link>
        </ul>
        <ul v-else>
            <router-link :to="{name: 'Shop', query:{id: conta.id_conta}}"><li><font-awesome-icon icon="fa-solid fa-cart-shopping" />&nbsp;&nbsp;&nbsp;Serviços</li></router-link>
            <router-link :to="{name: 'Agenda', query:{id: conta.id_conta}}"><li><font-awesome-icon icon="fa-solid fa-box" />&nbsp;&nbsp;&nbsp;Agenda</li></router-link>
            <router-link :to="{name: 'Historico', query:{id: conta.id_conta}}"><li><font-awesome-icon icon="fa-solid fa-clock-rotate-left" />&nbsp;&nbsp;&nbsp;Histórico</li></router-link>
            <router-link :to="{name: 'Carros', query:{id: conta.id_conta}}"><li><font-awesome-icon icon="fa-solid fa-car" />&nbsp;&nbsp;&nbsp;Meus carros</li></router-link>
            <router-link :to="{name: 'Configuracoes', query:{id: conta.id_conta}}"><li><font-awesome-icon icon="fa-solid fa-gear" />&nbsp;&nbsp;&nbsp;Configurações</li></router-link>
        </ul>
    </section>
</template>

<script>
    export default {
        props: ['conta'],
        name: 'Menu',
    }
</script>

<style scoped>
    .menu{
        background-color: #FAFAFA;
        height: 100%;
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