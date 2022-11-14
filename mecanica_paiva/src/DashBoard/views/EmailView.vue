<template>
    <div>
        <h1>E-mails Cadastrados</h1><br>
        <button type="button" class="btn adicionar" @click="edit = !edit"><font-awesome-icon icon="fa-solid fa-plus" />&nbsp;&nbsp;&nbsp;Acidionar e-mail</button>
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
                    <button type="button" class="btn editar" @click="edit = !edit"><font-awesome-icon icon="fa-solid fa-pen" /></button>
                </div>
            </div>
            <hr>
        </div>
    </div>
    <div class="modal" tabindex="-1" v-show="edit">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" @click="edit = !edit"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="row">
                        <div class="col-md-4">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Gmail</option>
                                <option value="1">Outlook</option>
                                <option value="2">Yahoo</option>
                                <option value="3">AOL</option>
                            </select>
                        </div>
                        <div class="col-md-12">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"><br>
                        </div>
                        <div class="col-md-4">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Primario</option>
                                <option value="1">Segundario</option>
                            </select>
                        </div>
                        <div class="col-md-8 text-end">
                            <button type="submit" class="btn btn-primary"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;&nbsp;&nbsp;Salvar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default{
        name: 'Emails',
        data(){
            return{
                edit: false,
            }
        },
    }
</script>

<style scoped>
.modal{
    display: block;
    background-color: #00000054;
}
.modal-dialog{
    margin-top: 30vh;
}
.modal-header{
    color: white;
    background: #121D24;
}
.adicionar{
    color: white;
    background-color: #121D24;
}
.principal{
    border-radius: 50px;
    color: #5894BA;
    border: 2px solid #5894BA;
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