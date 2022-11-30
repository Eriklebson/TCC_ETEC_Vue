<template>
    <div>
        <h1>Configurações</h1><br>
        <div class="card" >
            <h4>Detalhes da conta</h4>
            <form action="">
                <label for="exampleInputEmail1" class="form-label">Nome</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Erik"><br>
                <button type="submit" class="btn button"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;&nbsp;&nbsp;Salvar</button>
            </form>
        </div>
        <div class="card" >
            <h4>Senha</h4>
            <form action="">
                <label for="exampleInputEmail1" class="form-label">Senha</label>
                <input type="password" class="form-control" id="senha" aria-describedby="emailHelp"><br>
                <label for="exampleInputEmail1" class="form-label">Nome</label>
                <input type="password" class="form-control" id="nome" aria-describedby="emailHelp"><br>
                <button type="submit" class="btn button"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;&nbsp;&nbsp;Salvar</button>
            </form>
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
.button{
    color: white;
    background-color: #121D24;
}
</style>