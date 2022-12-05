<template>
    <div>
        <h1>Serviços</h1>
        <br>
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
                            <th scope="col">Data de serviço</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Status</th>
                            <th scope="col">Serviço</th>
                            <th scope="col">Telefone</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr class="itens" v-for="servico in servicos" :key="servico.id_ordem">
                            <td>{{moment(String(servico.data_abertura)).format('MM/DD/YYYY HH:mm')}}</td>
                            <td>{{servico.nome}}</td>
                            <td v-if="(servico.status == 1)"><font-awesome-icon class="text-secondary" icon="fa-solid fa-circle" />&nbsp;&nbsp;Aguardando a data</td>
                            <td v-if="(servico.status == 2)"><font-awesome-icon class="text-info" icon="fa-solid fa-circle" />&nbsp;&nbsp;Em trabalho</td>
                            <td v-if="(servico.status == 3)"><font-awesome-icon class="text-warning" icon="fa-solid fa-circle" />&nbsp;&nbsp;Aguardando peças</td>
                            <td v-if="(servico.status == 4)"><font-awesome-icon class="text-success" icon="fa-solid fa-circle" />&nbsp;&nbsp;Pronto</td>
                            <td v-if="(servico.status == 5)"><font-awesome-icon class="text-success" icon="fa-solid fa-circle" />&nbsp;&nbsp;Finalizado</td>
                            <td v-if="(servico.status == 6)"><font-awesome-icon class="text-danger" icon="fa-solid fa-circle" />&nbsp;&nbsp;Cancelado</td>
                            <td>{{servico.nome_servico}}</td>
                            <td>{{servico.telefone}}</td>
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
            console.log()
        },
        methods:{
            async get(){
                await axios.get("http://localhost:3000/ordemservico/agendados/finalizados").then(response => this.servicos = response.data).catch(error => console.log(error))
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
}.itens{
    cursor: pointer;
}
</style>