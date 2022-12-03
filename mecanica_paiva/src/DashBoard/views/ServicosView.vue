<template>
    <div>
        <h1>Serviços</h1><br>
        <p><button type="button" class="btn adicionar" @click="visualizar = !visualizar"><font-awesome-icon icon="fa-solid fa-eye" />&nbsp;&nbsp;&nbsp;Pre-visualização</button>&nbsp;&nbsp;&nbsp;<button type="button" class="btn adicionar" @click="(cadastrar = !cadastrar)"><font-awesome-icon icon="fa-solid fa-plus" />&nbsp;&nbsp;&nbsp;Adicionar Serviço</button></p>
        <br>
        <div class="card" v-for="servico in servicos" :key="servico.id_servico">
            <div class="row">
                <div class="col-md-9">
                    <div class="row d-flex align-items-center">
                        <div class="col-md-4 img">
                            <img src="../../../public/imagem/manutencao.png" alt="">
                        </div>
                        <div class="col-md-8">
                            <h2>{{servico.nome}}</h2>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 text-end">
                    <button type="button" class="btn editar" @click="excluir(servico.id_servico)"><font-awesome-icon icon="fa-solid fa-trash" /></button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal" tabindex="-1" v-show="cadastrar">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"
                        @click="(cadastrar = !cadastrar)"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Imagem</label>
                        <input type="file" @change="uploadimage" ref="file" class="form-control" id="inputGroupFile01">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nome do Serviço</label>
                        <input type="text" class="form-control" id="email" v-model="nome_servico" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Preço</label>
                        <input type="text" v-maska="['R$ #.##','R$ ##.##', 'R$ ###.##', 'R$ ####.##']" class="form-control" id="preco" v-model="preco_servico">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Descrição</label>
                        <textarea class="form-control" id="descricao" v-model="descricao_servico" rows="2"></textarea>
                    </div>
                    <div class="text-end">
                        <button @click="salvar" class="btn adicionar"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;&nbsp;&nbsp;Salvar</button>
                    </div>
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
                        <div class="col-md-3" v-for="servico in servicos" :key="servico.id_servico">
                            <div class="imagem">
                                <img v-bind:src="link + servico.imagem" alt="">
                                <div class="sobre text-center">
                                    <h4>{{servico.nome}}</h4>
                                    <hr>
                                    <p class="block-with-text">{{servico.descricao}}</p>
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
import {maska} from 'maska';
import axios from "axios";
export default {
    name: 'Emails',
    directives:{maska},
    data() {
        return {
            link: "http://localhost:3000/img/servicos/",
            servicos: [],
            delete: [],
            imagem: "",
            cadastrar: false,
            visualizar: false,
            edit: false,
            nome_servico: "",
            preco_servico: "",
            descricao_servico: "",
        }
    },
    created(){
        this.get();
    },
    methods: {
        async get(){
            await axios.get("http://localhost:3000/servicos").then(response => this.servicos = response.data).catch(error => console.log(error))
        },
        uploadimage(){
            this.imagem = this.$refs.file.files[0];
        },
        async salvar() {
            const form = new FormData();
            form.append('imagem', this.imagem);
            form.append('nome', this.nome_servico);
            form.append('valor', this.preco_servico);
            form.append('descricao', this.descricao_servico);
            const response = await axios({
                method: 'post',
                url: 'http://localhost:3000/servicos',
                data: form,
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
                },
            })
            this.imagem = "",
            this.nome_servico = "",
            this.preco_servico = "",
            this.descricao_servico = "",
            this.post();
            this.cadastrar = false;
        },
        async excluir(id_servico){
            await axios.delete("http://localhost:3000/servicos/" + id_servico).then(response => this.delete = response.data).catch(error => console.log(error))
            this.post();
        }
    }
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
.block-with-text {
  overflow: hidden;
  position: relative; 
  line-height: 1.2em;
  max-height: 3.6em; 
  text-align: justify;  
  margin-right: -1em;
  padding-right: 1em;
}.block-with-text:before {
  content: '...';
  position: absolute;
  right: 0;
  bottom: 0;
}.block-with-text:after {
  content: '';
  position: absolute;
  right: 0;
  width: 1em;
  height: 1em;
  margin-top: 0.2em;
  background: white;
}
</style>