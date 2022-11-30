<template>
    <div>
        <h1>Serviços</h1><br>
        <p><button type="button" class="btn adicionar" @click="visualizar = !visualizar"><font-awesome-icon icon="fa-solid fa-eye" />&nbsp;&nbsp;&nbsp;Pre-visualização</button>&nbsp;&nbsp;&nbsp;<button type="button" class="btn adicionar" @click="edit = !edit"><font-awesome-icon icon="fa-solid fa-plus" />&nbsp;&nbsp;&nbsp;Adicionar Serviço</button></p>
        <br>
        <div class="card" v-for="servico in servicos" :key="servico.title">
            <div class="row">
                <div class="col-md-9">
                    <div class="row d-flex align-items-center">
                        <div class="col-md-4 img">
                            <img src="../../../public/imagem/manutencao.png" alt="">
                        </div>
                        <div class="col-md-8">
                            <h2>{{ servico.title }}</h2>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 text-end">
                    <button type="button" class="btn editar" @click="edit = !edit"><font-awesome-icon icon="fa-solid fa-pen" /></button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal" tabindex="-1" v-show="edit">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"
                        @click="edit = !edit"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <form>
                            <div class="input-group mb-3">
                                <label class="input-group-text" for="inputGroupFile01">Upload</label>
                                <input type="file" class="form-control" id="inputGroupFile01">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Nome do Serviço</label>
                                <input type="text" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Descrição</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                            </div>
                            <div class="text-end">
                                <button type="submit" class="btn adicionar"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;&nbsp;&nbsp;Salvar</button>
                            </div>
                        </form>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="modal" tabindex="-1" v-show="visualizar">
        <div class="modal-dialog visualizar">
            <div class="modal-content visualizar-content">
                <div class="modal-header">
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"
                        @click="visualizar = !visualizar"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="imagem">
                                <img src="../../../public/imagem/servicos/servico_1.png" alt="">
                                <div class="sobre text-center">
                                    <h4>Troca de oleo</h4>
                                    <hr>
                                    <p>A média de intervalo entre as trocas é de 10.000 km ou 12 meses de uso</p>
                                    <button type="button" class="btn btn-blacktransparent">Contratar</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="imagem">
                                <img src="../../../public/imagem/servicos/servico_1.png" alt="">
                                <div class="sobre text-center">
                                    <h4>Troca de oleo</h4>
                                    <hr>
                                    <p>A média de intervalo entre as trocas é de 10.000 km ou 12 meses de uso</p>
                                    <button type="button" class="btn btn-blacktransparent">Contratar</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="imagem">
                                <img src="../../../public/imagem/servicos/servico_1.png" alt="">
                                <div class="sobre text-center">
                                    <h4>Troca de oleo</h4>
                                    <hr>
                                    <p>A média de intervalo entre as trocas é de 10.000 km ou 12 meses de uso</p>
                                    <button type="button" class="btn btn-blacktransparent">Contratar</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="imagem">
                                <img src="../../../public/imagem/servicos/servico_1.png" alt="">
                                <div class="sobre text-center">
                                    <h4>Troca de oleo</h4>
                                    <hr>
                                    <p>A média de intervalo entre as trocas é de 10.000 km ou 12 meses de uso</p>
                                    <button type="button" class="btn btn-blacktransparent">Contratar</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="imagem">
                                <img src="../../../public/imagem/servicos/servico_1.png" alt="">
                                <div class="sobre text-center">
                                    <h4>Troca de oleo</h4>
                                    <hr>
                                    <p>A média de intervalo entre as trocas é de 10.000 km ou 12 meses de uso</p>
                                    <button type="button" class="btn btn-blacktransparent">Contratar</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="imagem">
                                <img src="../../../public/imagem/servicos/servico_1.png" alt="">
                                <div class="sobre text-center">
                                    <h4>Troca de oleo</h4>
                                    <hr>
                                    <p>A média de intervalo entre as trocas é de 10.000 km ou 12 meses de uso</p>
                                    <button type="button" class="btn btn-blacktransparent">Contratar</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="imagem">
                                <img src="../../../public/imagem/servicos/servico_1.png" alt="">
                                <div class="sobre text-center">
                                    <h4>Troca de oleo</h4>
                                    <hr>
                                    <p>A média de intervalo entre as trocas é de 10.000 km ou 12 meses de uso</p>
                                    <button type="button" class="btn btn-blacktransparent">Contratar</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="imagem">
                                <img src="../../../public/imagem/servicos/servico_1.png" alt="">
                                <div class="sobre text-center">
                                    <h4>Troca de oleo</h4>
                                    <hr>
                                    <p>A média de intervalo entre as trocas é de 10.000 km ou 12 meses de uso</p>
                                    <button type="button" class="btn btn-blacktransparent">Contratar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Emails',
    data() {
        return {
            edit: false,
            visualizar: false,
            servicos: [
                { title: 'Troca de óleo' },
                { title: 'Alinhamento' },
                { title: 'Troca embreagem' },
                { title: 'Troca bicos injetores' },
            ]
        }
    },
}
</script>

<style scoped>
.modal {
    display: block;
    background-color: #00000054;
}

.modal-dialog {
    margin-top: 20vh !important;
    overflow: hidden;
    width: 600px !important;
    margin: auto;
    max-width: none;
}

.modal-header {
    color: white;
    background: #121D24;
}

.visualizar {
    overflow: hidden;
    margin-top: 5vh !important;
    width: 900px !important;
    margin: auto;
    max-width: none;
}

.visualizar-content {
    width: 900px !important;
}

.adicionar {
    color: white;
    background-color: #121D24;
}

.principal {
    border-radius: 50px;
    color: #5894BA;
    border: 2px solid #5894BA;
    background-color: #BCE0F8;
}

.imagem img {
    width: 100%;
    transition: 0.5s;
}

.imagem {
    position: relative;
    border-radius: 5px;
    background: rgb(2, 0, 36);
    background: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(255, 239, 0, 0.8463760504201681) 100%, rgba(0, 212, 255, 1) 100%);
    transition: 0.5s;
    height: 100%;
}

.imagem:hover img {
    -webkit-filter: opacity(50%);
}

.col-md-3 {
    margin-bottom: 10px;
}

.sobre {
    width: 199px;
    height: 0px;
    transform: translate(0%, 445%);
    visibility: hidden;
    position: absolute;
    padding: 0 20px;
    color: white;
    transition: 0.5s;
}

.imagem:hover .sobre {
    visibility: visible;
    margin-top: -220px;
}

.btn-blacktransparent {
    color: white;
    background-color: rgba(0, 0, 0, 0.623);
}

.editar {
    border: 1px solid #8F8F8F;
}

.card {
    padding: 30px;
    margin-bottom: 20px;
}

.img img {
    width: 80px;
}
</style>