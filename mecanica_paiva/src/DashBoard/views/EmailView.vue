<template>
    <div>
        <h1>E-mails Cadastrados</h1><br>
        <button type="button" class="btn adicionar"><font-awesome-icon icon="fa-solid fa-plus" />&nbsp;&nbsp;&nbsp;Acidionar e-mail</button>
        <br><br>
        <div class="card">
            <div class="row">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-4 img">
                            <img src="../../../public/imagem/gmail.png" alt="">
                        </div>
                        <div class="col-md-8">
                            <h2>Gmail</h2>
                            <p>eriklebson2016@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 text-center">
                    <button type="button" class="btn principal">principal</button>
                </div>
                <div class="col-md-3 text-end">
                    <button type="button" class="btn editar"><font-awesome-icon icon="fa-solid fa-pen" /></button>
                </div>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Emails'
    }
</script>

<style scoped>
.adicionar{
    color: white;
    background-color: #121D24;
}
.principal{
    border-radius: 50px;
    color: #5894BA;
    border: 1px solid #5894BA;
    background-color: #BCE0F8;
}
.editar{
    border: 1px solid #8F8F8F;
}
.card{
    padding: 30px;
}
.img img{
    width: 80px;
}
</style>