<template>
    <div>
        <h1>Serviços em andamento</h1><br>
        <div class="row justify-content-between">
            <div class="col-md-3">
                <div class="row">
                    <div class="col-md-9">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Todos os serviços</option>
                            <option value="1">Mais recentes</option>
                            <option value="2">Mais antigos</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <button type="button" class="btn refrash"><font-awesome-icon icon="fa-solid fa-rotate-right" /></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" >
            <form action="">
                <table class="table">
                    <thead class="table-light">
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Situação</th>
                            <th scope="col">Serviço</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr class="itens" v-for="servico in servicos" :key="servico.id_ordem">
                            <td>{{servico.nome}}</td>
                            <td v-if="(servico.status == 1)"><font-awesome-icon class="text-secondary" icon="fa-solid fa-circle" />&nbsp;&nbsp;Aguardando a data</td>
                            <td v-if="(servico.status == 2)"><font-awesome-icon class="text-info" icon="fa-solid fa-circle" />&nbsp;&nbsp;Em trabalho</td>
                            <td v-if="(servico.status == 3)"><font-awesome-icon class="text-warning" icon="fa-solid fa-circle" />&nbsp;&nbsp;Aguardando peças</td>
                            <td v-if="(servico.status == 4)"><font-awesome-icon class="text-success" icon="fa-solid fa-circle" />&nbsp;&nbsp;Pronto</td>
                            <td>{{servico.nome_servico}}</td>
                            <td>{{servico.telefone}}</td>
                            <td><router-link :to="{name: 'AndamentoServico', query:{idServico: servico.id_ordem, idConta: this.$route.query.id}}" class="btn"><font-awesome-icon icon="fa-solid fa-pen" /></router-link></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import axios from "axios";
    export default{
        name: 'Emails',
        data(){
            return{
                servicos: [],
            }
        },
        created(){
            this.moment = moment;
            this.get();
            console.log(this.servicos);
        },
        methods:{
            async get(){
                await axios.get("http://localhost:3000/ordemservico/agendados/all").then(response => this.servicos = response.data).catch(error => console.log(error))
            },
            selectAll(){
                if(this.select == true){
                    this.select = false
                }
                else {
                    this.select = true
                }
            }
        }
    }
</script>

<style scoped>
.refrash{
    border: 1px solid #D2D2D2;
}
.adicionar{
    color: white;
    background-color: #121D24;
}
.col-md-3{
    margin-bottom: 10px;
}
.editar{
    border: 1px solid #8F8F8F;
}
.card{
    padding: 30px;
    margin-bottom: 20px;
}
.img img{
    width: 80px;
}
.itens{
    cursor: pointer;
}
.button{
    border-radius: 50px;
    color: #5894BA;
    border: 1px solid #5894BA;
    background-color: #BCE0F8;
}
.ok{
    color: green;
}
.pendente{
    color: red;
}
</style>