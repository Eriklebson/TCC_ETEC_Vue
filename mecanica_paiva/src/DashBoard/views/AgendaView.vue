<template>
  <h1>Agenda</h1>
  <br>
 <div class="card">
    <form action="">
      <table class="table">
        <thead class="table-light">
          <tr>
            <th scope="col">Agendado</th>
            <th scope="col">Status</th>
            <th scope="col">Serviço</th>
            <th scope="col">Contato Paiva</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr class="itens" v-for="servicoAgendado in servicosAgendados" :key="servicoAgendado.id_ordem">
            <td>{{moment(String(servicoAgendado.data_abertura)).format('MM/DD/YYYY HH:mm')}}</td>
            <td v-if="(servicoAgendado.status == 1)"><font-awesome-icon class="text-secondary" icon="fa-solid fa-circle" />&nbsp;&nbsp;Aguardando a data</td>
            <td v-if="(servicoAgendado.status == 2)"><font-awesome-icon class="text-info" icon="fa-solid fa-circle" />&nbsp;&nbsp;Em trabalho</td>
            <td v-if="(servicoAgendado.status == 3)"><font-awesome-icon class="text-warning" icon="fa-solid fa-circle" />&nbsp;&nbsp;Aguardando peças</td>
            <td v-if="(servicoAgendado.status == 4)"><font-awesome-icon class="text-success" icon="fa-solid fa-circle" />&nbsp;&nbsp;Pronto</td>
            <td>{{servicoAgendado.nome_servico}}</td>
            <td>(11) 9 9999-9999</td> 
            <td>
              <router-link :to="{name: 'VisualizarServico', query:{idServico: servicoAgendado.id_ordem, idConta: this.$route.query.id}}" type="button" class="btn border"><font-awesome-icon icon="fa-solid fa-eye" />&nbsp;&nbsp;Visualizar</router-link>
            </td> 
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
    name: 'agenda',
    directives: { moment },
    data() {
      return {
        servicosAgendados: [],
      }
    },
    created(){
      this.moment = moment;
      this.get();
      console.log()
    },
    methods: {
      async get(){
        await axios.get("http://localhost:3000/ordemservico/agendado/" + this.$route.query.id).then(response => this.servicosAgendados = response.data).catch(error => console.log(error))
      },
    },
}
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
.modal-header{
  background-color: #0C1318;
}
.modal-btn{
  color: #f5f5f5;
  background-color: #0C1318;
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

</style>
