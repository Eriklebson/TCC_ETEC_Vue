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

    <div class="col-md-6 botoes">
      <button class="btn border border ms-5" @click="excluir = !excluir">
        <font-awesome-icon
          class="me-1"
          icon="fa-solid fa-circle-xmark"
        />Excluir
      </button>
    </div>
  </div>

  <div class="card">
    <form action="">
      <table class="table">
        <thead class="table-light">
          <tr>
            <th scope="col">
              <input
                @click="selectAll"
                class="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </th>
            <th scope="col">Data</th>
            <th scope="col">Resultado</th>
            <th scope="col">Serviço</th>
            <th scope="col">Funcionário</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr class="itens" @click="itens = !itens">
            <th scope="row">
              <input
                :checked="select"
                class="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </th>
            <td>23/10/2022, 11:56:23</td>
            <td>
              <font-awesome-icon
                class="text-success"
                icon="fa-solid fa-circle"
              />Exito
            </td>
            <td>Troca de óleo</td>
            <td>(11) 9 9999-9999</td>
            <td><font-awesome-icon class="btn" icon="fa-solid fa-trash" /></td>
          </tr>
          
        </tbody>
      </table>
    </form>
  </div>

  <!--Modal -->
  <div class="modal" tabindex="-1" v-show="excluir">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"></h5>
          <button
            @click="excluir = !excluir"
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center">
          <p>Tem certeza que deseja cancelar o agendamento ?</p>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button
            type="button"
            class="btn modal-btn me-3"
            data-bs-dismiss="modal"
          >
            Sim
          </button>
          <button
            type="button"
            class="btn modal-btn"
            @click="excluir = !excluir"
          >
            Não
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "historico",
  data() {
    return {
      exito: "exito",
      excluir: false,
    };
  },
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
