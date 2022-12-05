<template>
    <div>
        <h1>Andamento do Serviço</h1><br>
        <div class="card" >
            <h4>Detalhes da conta</h4><br>
            <h5 for="exampleInputEmail1" class="form-label">Nome do Cliente:</h5>
            <p>{{servico.nome}}</p>
            <h5 for="exampleInputEmail1" class="form-label">Status:</h5>
            <select v-model="status" class="form-select" aria-label="Default select example">
                <option value="1">Aguardando a data</option>
                <option value="2">Em trabalho</option>
                <option value="3">Aguardando peças</option>
                <option value="4">Pronto</option>
                <option value="5">Entregue</option>
                <option value="6">Cancelado</option>
            </select><br>
            <h5>Serviço:</h5>
            <p>{{servico.nome_servico}}</p>
            <h5>Telefone do cliente:</h5>
            <p>{{servico.telefone}}</p>
            <label for="exampleInputPassword1" class="form-label">Informações:</label>
            <textarea class="form-control" id="descricao" v-model="informacoes_servico" rows="2"></textarea><br>
            <button type="submit" @click="editarAndamento" class="btn button"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;&nbsp;&nbsp;Salvar</button>
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
                servico: [],
                status: null,
                informacoes_servico: "",
            }
        },
        created(){
            this.get();
        },
        methods: {
            async get(){
                await axios.get("http://localhost:3000/ordemservico/" + this.$route.query.idServico).then(response => this.servico = response.data).catch(error => console.log(error)),
                this.status = this.servico.status
            },
            uploadimage(){
                this.imagem = this.$refs.file.files[0];
            },
            async editarAndamento(){
                const headers = {"Content-Type" : "application/json"}
                const body = JSON.stringify({
                    status: this.status,
                    informacoes: this.informacoes_servico
                })
                await axios.patch("http://localhost:3000/ordemservico/" + this.$route.query.idServico, body, {headers}).then(response => this.conta = response.data).catch(error => console.log(error));
                alert('Alteração concluida com sucesso')
                this.$router.push({name: 'ServicosAbertos', query:{id: this.$route.query.idServico}})
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