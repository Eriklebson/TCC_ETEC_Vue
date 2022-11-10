<template>
    <Nav />
    <div class="row">
        <div class="col-md-2">
            <Menu />
        </div>
        <div class="col-md-10 itens">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Nav from "@/DashBoard/components/NavDashBoard.vue";
    import Menu from "@/DashBoard/components/MenuDashBoard.vue";
    export default{
        name: 'DashBoard',
        components: {
            Nav,
            Menu,
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
</style>