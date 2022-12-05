<template>
  <h1>Meus carros</h1>
  <!--Botões carros -->
  <div class="mb-3">
    <div class="">
      <button @click="cadastrar = !cadastrar" class="btn border border me-2 adc-car"><font-awesome-icon
          icon="fa-solid fa-car" /> Adicionar carro</button>
      <button class="btn btn-danger border border"><font-awesome-icon icon="fa-solid fa-car" class="me-1" />Remover
        carro</button>
    </div>
  </div>

  <div class="card">
    <form action="">
      <table class="table">
        <thead class="table-light">
          <tr>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Placa</th>
            <th scope="col">Ano</th>
            <th scope="col">Potência</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr class="itens" v-for="veiculo in veiculos" :key="veiculo.id_veiculo">
            <td>{{veiculo.marca}}</td>
            <td>{{veiculo.modelo}}</td>
            <td>{{veiculo.placa}}</td>
            <td>{{veiculo.ano}}</td>
            <td>{{veiculo.potencia}}</td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
  <div class="modal" tabindex="-1" v-show="cadastrar">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"
            @click="(cadastrar = !cadastrar)"></button>
        </div>
        <div class="modal-body row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Placa:</label>
              <input type="text" class="form-control" id="email" v-model="placa" aria-describedby="emailHelp">
            </div>
          </div>
          <div class="col-md-6">
            <label for="exampleInputEmail1" class="form-label">Marca:</label>
            <input type="text" class="form-control" id="email" v-model="marca" aria-describedby="emailHelp">
          </div>
          <div class="col-md-6">
            <label for="exampleInputEmail1" class="form-label">Modelo:</label>
            <input type="text" class="form-control" id="email" v-model="modelo" aria-describedby="emailHelp">
          </div>
          <div class="col-md-6">
            <label for="exampleInputEmail1" class="form-label">Potencia:</label>
            <input type="text" class="form-control" v-maska="'#.#'" id="preco" v-model="potencia"><br>
          </div>
          <div class="col-md-6">
            <label for="exampleInputEmail1" class="form-label">Cor:</label>
            <input type="text" class="form-control" id="email" v-model="cor" aria-describedby="emailHelp">
          </div>
          <div class="col-md-6">
            <label for="exampleInputEmail1" class="form-label">Ano:</label>
            <input type="text" class="form-control" id="preco" v-model="ano"><br>
          </div>
          <div class="text-end">
            <button @click="salvar" class="btn adicionar"><font-awesome-icon
                icon="fa-solid fa-check" />&nbsp;&nbsp;&nbsp;Salvar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { maska } from 'maska';
export default {
  directives: { maska },
  name: "carros",
  data() {
    return {
      veiculos: [],
      cadastrar: false,
      placa: "",
      marca: "",
      modelo: "",
      potencia: "",
      cor: "",
      ano: "",
    };
  },
  created() {
    this.get();
  },
  methods: {
    async get() {
      await axios.get("http://localhost:3000/veiculos/cliente/" + this.$route.query.id).then(response => this.veiculos = response.data).catch(error => console.log(error))
    },
    async salvar() {
      const headers = { "Content-Type": "application/json" }
      const body = JSON.stringify({
        placa: this.placa,
        marca: this.marca,
        modelo: this.modelo,
        potencia: this.potencia,
        ano: this.cor,
        cor: this.ano,
        id_conta: this.$route.query.id,
        id_peca: null,
        id_status: null,
      })
      await axios.post("http://localhost:3000/veiculos", body, { headers }).then(response => this.conta = response.data).catch(error => console.log(error))
    }
  }
};
</script>

<style scoped>
.card {
  padding: 30px;
  margin-bottom: 20px;
}

.adc-car {
  background-color: #0c1318;
  color: white;
}

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

.adicionar {
  color: white;
  background-color: #121D24;
}
</style>
