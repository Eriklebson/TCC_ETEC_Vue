<template>
  <h1>Histórico</h1>

  <div class="row">
    <div class="col-md-6">
      <select class="form-select" aria-label="Default select example">
        <option selected>Todos os Serviços</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <font-awesome-icon class="btn reaload" icon="fa-solid fa-rotate" />
    </div>
  </div>

  <div class="card">
    <form action="">
      <table class="table">
        <thead class="table-light">
          <tr>
            <th scope="col">Data</th>
            <th scope="col">Status</th>
            <th scope="col">Serviço</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr class="itens" v-for="servico in servicos" :key="servico.id_ordem">
            <td>{{moment(String(servico.data_abertura)).format('MM/DD/YYYY HH:mm')}}</td>
            <td v-if="(servico.status == 1)"><font-awesome-icon class="text-secondary" icon="fa-solid fa-circle" />&nbsp;&nbsp;Aguardando a data</td>
            <td v-if="(servico.status == 2)"><font-awesome-icon class="text-info" icon="fa-solid fa-circle" />&nbsp;&nbsp;Em trabalho</td>
            <td v-if="(servico.status == 3)"><font-awesome-icon class="text-warning" icon="fa-solid fa-circle" />&nbsp;&nbsp;Aguardando peças</td>
            <td v-if="(servico.status == 4)"><font-awesome-icon class="text-success" icon="fa-solid fa-circle" />&nbsp;&nbsp;Pronto</td>
            <td v-if="(servico.status == 5)"><font-awesome-icon class="text-success" icon="fa-solid fa-circle" />&nbsp;&nbsp;Finalizado</td>
            <td>{{servico.nome_servico}}</td>
          </tr>
          
        </tbody>
      </table>
    </form>
  </div>
</template>


<script>
import moment from 'moment';
import axios from "axios";
export default {
  name: "historico",
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
      await axios.get("http://localhost:3000/ordemservico/agendado/finalizados/" + this.$route.query.id).then(response => this.servicos = response.data).catch(error => console.log(error))
    }
  }
};
</script>


<style scoped>
.form-select {
  width: 35%;
}
.card{
    padding: 30px;
    margin-bottom: 20px;
}
.modal {
  display: block;
  background-color: #00000054;
}
.modal-dialog {
  margin-top: 40vh !important;
  width: 500px !important;
  margin: auto;
  max-width: none;
}

.modal-header {
  background-color: #0c1318;
}

.modal-btn {
  color: #f5f5f5;
  background-color: #0c1318;
}

.reaload {
  position: relative;
  left: 180px;
  top: -37px;
  border: 1px solid gray;
  padding: 10px;
}

.botoes {
  position: relative;
  left: 250px;
}

.agenda {
  width: 955px;
  margin-left: 0px;
}

.form-check-label,
.contato,
.status,
.status-pendente,
.ajuste {
  padding: 10px;
}
.servicos {
  padding-top: 10px;
}
.status {
  position: relative;
  right: 25px;
}

.status-pendente {
  position: relative;
  right: 15px;
}

.resultado {
  padding-top: 10px;
}

.contato {
  position: relative;
  right: 40px;
}
.pai-agendamentos {
  width: 955px;
  height: 70%;
}

.form-check-input {
  position: relative;
  top: 5px;
  left: 5px;
  padding: 10px;
}
</style>
