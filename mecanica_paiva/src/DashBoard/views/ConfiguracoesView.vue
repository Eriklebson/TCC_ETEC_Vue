<template>
    <div>
        <h1>Configurações</h1><br>
        <div class="card" >
            <h4>Detalhes da conta</h4>
            <label for="exampleInputEmail1" class="form-label">Foto de perfil:</label>
            <input type="file" @change="uploadimage" ref="file" class="form-control" id="inputGroupFile01"><br>
            <label for="exampleInputEmail1" class="form-label">Nome:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="nome"><br>
            <label for="exampleInputEmail1" class="form-label">Email:</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email"><br>
            <button type="submit" @click="editarDetalhes" class="btn button"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;&nbsp;&nbsp;Salvar</button>
        </div>
        <div class="card" >
            <h4>Endereço</h4>
            <label for="exampleInputEmail1" class="form-label">CEP:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="04941-175"><br>
            <label for="exampleInputEmail1" class="form-label">Identificação:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Escola"><br>
            <label for="exampleInputEmail1" class="form-label">Logradouro:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Estr. da Baronesa"><br>
            <label for="exampleInputEmail1" class="form-label">Número:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="1695"><br>
            <label for="exampleInputEmail1" class="form-label">Completemento:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value=""><br>
            <label for="exampleInputEmail1" class="form-label">Refencia:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="ETEC"><br>
            <label for="exampleInputEmail1" class="form-label">Bairro:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Jardim Angela"><br>
            <label for="exampleInputEmail1" class="form-label">Cidade:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="São Paulo"><br>
            <label for="exampleInputEmail1" class="form-label">UF:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="SP"><br>
            <button type="submit" class="btn button"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;&nbsp;&nbsp;Salvar</button>
        </div>
        <div class="card" >
            <h4>Senha</h4>
            <label for="exampleInputEmail1" class="form-label">Senha atual:</label>
            <input type="password" class="form-control" id="senha" aria-describedby="emailHelp" v-model="senhaAtual" required><br>
            <label for="exampleInputEmail1" class="form-label">Nova senha:</label>
            <input type="password" class="form-control" id="senha" aria-describedby="emailHelp" v-model="novaSenha" required><br>
            <label for="exampleInputEmail1" class="form-label">Confirmar senha:</label>
            <input type="password" class="form-control" id="nome" aria-describedby="emailHelp" v-model="confSenha" required><br>
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
                senhaAtual: null,
                novaSenha: null,
                confSenha: null,
            }
        },
        created(){
            this.get();
        },
        methods: {
            async get(){
                await axios.get("http://localhost:3000/contas/" + this.$route.query.id).then(response => this.usuario = response.data).catch(error => console.log(error)),
                this.nome = this.usuario.nome
                this.email = this.usuario.email
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