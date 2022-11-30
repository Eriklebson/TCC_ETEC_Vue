<template>
    <div>
        <h1>Gerenciar</h1><br>
        <div>
            <p>
                <button type="button" class="btn refrash">Geral</button>&nbsp;
                <button type="button" class="btn refrash">Clientes</button>&nbsp;
                <button type="button" class="btn refrash">Funcionarios</button>&nbsp;
            </p>
        </div>
        <div class="card" >
            <h4>Sua conta</h4>
            <p>Administrador</p>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Emails',
        data(){
            return{
                itens: false,
            }
        },
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
</style>