<template>
  <h1>Agenda</h1>

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
            <td><button type="button" class="btn border" @click="cancelar = !cancelar"><font-awesome-icon class="me-1" icon="fa-solid fa-circle-xmark" />Cancelar</button></td> 
            <!--Modal -->
            <div class="modal" tabindex="-1" v-show="cancelar">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title"></h5>
                    <button  @click="cancelar = !cancelar" type="button" class="btn-close btn-close-white " data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body text-center">
                    <p>Tem certeza que deseja cancelar o agendamento ?</p>
                  </div>
                  <div class="modal-footer d-flex justify-content-center">
                    <button type="button" class="btn modal-btn me-3" data-bs-dismiss="modal">Sim</button>
                    <button type="button" class="btn modal-btn"  @click="cancelar = !cancelar" >Não</button>
                  </div>
                </div>
              </div>
            </div>             
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
        cancelar: false,
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
