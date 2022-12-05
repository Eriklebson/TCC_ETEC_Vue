<template>
    <div>
        <h1>Configurações</h1><br>
        <div class="card" >
            <h4>Detalhes da conta</h4>
            <label for="file" class="form-label">Foto de perfil:</label>
            <input type="file" @change="uploadimage" ref="file" class="form-control" id="file"><br>
            <label for="nome" class="form-label">Nome:</label>
            <input type="text" class="form-control" id="nome" v-model="nome"><br>
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" v-model="email"><br>
            <button type="submit" @click="editarDetalhes" class="btn button"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;&nbsp;&nbsp;Salvar</button>
        </div>
        <div class="card" >
            <h4>Endereço</h4>
            <label for="cep" class="form-label">CEP:</label>
            <div class="input-group mb-3">
                <input type="text" class="form-control" id="cep" placeholder="CEP" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="cep">
                <button class="btn btn-outline-secondary" @click="produrarcep()" type="button" id="button-addon2">Procurar</button>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <label for="identificacao" class="form-label">Identificação:</label>
                    <input type="text" class="form-control" id="identificacao" v-model="identificacao"><br>
                </div>
                <div class="col-md-6">
                    <label for="logradouro" class="form-label">Logradouro:</label>
                    <input type="text" class="form-control" id="logradouro" v-model="logradouro" :disabled="ativo"><br>
                </div>
                <div class="col-md-6">
                    <label for="numero" class="form-label">Número:</label>
                    <input type="text" class="form-control" id="numero" v-model="numero"><br>
                </div>
                <div class="col-md-6">
                    <label for="complemento" class="form-label">Completemento:</label>
                    <input type="text" class="form-control" id="complemento" v-model="complemento"><br>
                </div>
                <div class="col-md-6">
                    <label for="refencia" class="form-label">Referencia:</label>
                    <input type="text" class="form-control" id="referencia" v-model="referencia"><br>
                </div>
                <div class="col-md-6">
                    <label for="bairro" class="form-label">Bairro:</label>
                    <input type="text" class="form-control" id="bairro" v-model="bairro" :disabled="ativo"><br>
                </div>
                <div class="col-md-6">
                    <label for="cidade" class="form-label">Cidade:</label>
                    <input type="text" class="form-control" id="cidade" v-model="cidade" :disabled="ativo"><br>
                </div>
                <div class="col-md-6">
                    <label for="uf" class="form-label">UF:</label>
                    <input type="text" class="form-control" id="uf" v-model="uf" :disabled="ativo"><br>
                </div>
            </div>
            <button type="submit" class="btn button" @click="salvarEndereco"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;&nbsp;&nbsp;Salvar</button>
        </div>
        <div class="card" >
            <h4>Senha</h4>
            <label for="senhaatual" class="form-label">Senha atual:</label>
            <input type="password" class="form-control" id="senhaatual" v-model="senhaAtual"><br>
            <label for="novasenha" class="form-label">Nova senha:</label>
            <input type="password" class="form-control" id="novasenha" v-model="novaSenha"><br>
            <label for="confsenha" class="form-label">Confirmar senha:</label>
            <input type="password" class="form-control" id="confsenha" v-model="confSenha"><br>
            <button @click="editarSenha" type="submit" class="btn button"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;&nbsp;&nbsp;Salvar</button>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import md5 from "md5";
    export default{
        name: 'Emails',
        data(){
            return{
                itens: false,
                usuario: [],
                imagem: "",
                nome: "",
                email: "",
                cep: "",
                identificacao: "",
                logradouro: "",
                numero: "",
                complemento: "",
                referencia: "",
                bairro: "",
                cidade: "",
                uf: "",
                logradouros: [],
                endereco: [],
                senhaAtual: null,
                novaSenha: null,
                confSenha: null,
                ativo: false,
                status: false,
            }
        },
        created(){
            this.get();
        },
        methods: {
            async produrarcep(){
                await axios.get("http://localhost:3000/logradouro/" + this.cep).then(response => this.logradouros = response.data).catch(error => console.log(error)),
                this.logradouro = this.logradouros.descricao
                this.cidade = this.logradouros.descricao_cidade
                this.bairro = this.logradouros.descricao_bairro
                this.uf = this.logradouros.UF
                this.ativo = true
            },
            async get(){
                await axios.get("http://localhost:3000/contas/" + this.$route.query.id).then(response => this.usuario = response.data).catch(error => console.log(error)),
                await axios.get("http://localhost:3000/endereco/cliente/" + this.$route.query.id).then(response => this.endereco = response.data).catch(error => console.log(error)),
                this.nome = this.usuario.nome
                this.email = this.usuario.email
                this.cep = this.endereco.cep
                this.identificacao = this.endereco.identificacao
                this.logradouro = this.endereco.logradouro
                this.numero = this.endereco.numero
                this.complemento = this.endereco.complemento
                this.referencia = this.endereco.referencia
                this.cidade = this.endereco.cidade
                this.bairro = this.endereco.bairro
                this.uf = this.endereco.uf
            },
            uploadimage(){
                this.imagem = this.$refs.file.files[0];
            },
            async editarDetalhes() {
                const form = new FormData();
                form.append('nome', this.nome);
                form.append('email', this.email);
                form.append('imagem', this.imagem);
                const response = await axios({
                    method: 'patch',
                    url: 'http://localhost:3000/contas/editContaDetalhes/' + this.$route.query.id,
                    data: form,
                    headers: {
                        'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
                    },
                })
                alert("Detalhes alterados com sucesso!")
            },
            async salvarEndereco(){
                const headers = {"Content-Type" : "application/json"}
                const body = JSON.stringify({
                    cep: this.cep,
                    identificacao: this.identificacao,
                    logradouro: this.logradouro,
                    numero: this.numero,
                    complemento: this.complemento,
                    referencia: this.refencia,
                    bairro: this.bairro,
                    cidade: this.cidade,
                    uf: this.uf,
                    id_conta: this.$route.query.id,
                })
                await axios.post("http://localhost:3000/endereco", body, {headers}).then(response => this.status = response.data).catch(error => console.log(error))
                if(this.status){
                    alert("Endereço salvo com Sucesso")
                }
                else{
                    alert("Não foi possivel salvar os dados verifique os campos e tente novamente")
                }
            },
            async editarSenha(){
                const headers = {"Content-Type" : "application/json"}
                const body = JSON.stringify({
                    senha: this.novaSenha,
                })
                if(md5(this.senhaAtual) == this.usuario.senha){
                    if(this.novaSenha == this.confSenha){
                        await axios.patch("http://localhost:3000/contas/alterarSenha/" + this.$route.query.id, body, {headers}).then(response => this.conta = response.data).catch(error => console.log(error))
                        console.log("entrou");
                    }
                    else{
                        alert("A confirmação se senha tem que ser igual a nova senha")
                    }
                }
                else{
                    alert("Senha atual digitar não corresponde com a cadastrada");
                }
            }
        }
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
    width: 150px;
    color: white;
    background-color: #121D24;
}
</style>