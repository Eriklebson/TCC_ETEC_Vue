<template>
  <h1>Meus carros</h1>
  <!--Botões carros -->
  <div class="mb-3">
    <div class="">
      <button class="btn border border me-2 adc-car">
        <font-awesome-icon icon="fa-solid fa-car" /> Adicionar carro
      </button>
      <button class="btn btn-danger border border">
        <font-awesome-icon icon="fa-solid fa-car" class="me-1" />Remover carro
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
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Placa</th>
            <th scope="col">Ano</th>
            <th scope="col">Potência</th>
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
            <td>Renault</td>
            <td><font-awesome-icon class="text-success" icon="fa-solid fa-circle" />Sandero</td>
            <td>Bra2E19</td>
            <td>2013</td>
            <td>106v</td>
            
          </tr>
          <tr v-show="itens">
            <td colspan="5">
              <h5>Detalhes</h5>
              <br />
              <p>Nome: Julia Alencar</p>
              <p>E-mail: julia123@teste.com</p>
              <p>X XXXX-XXXX</p>
              <p>Data de Nascimento: 11/11/2000</p>
              <p>Endereço: etec jardim angela</p>
              <p>Número: 11</p>
              <h5>Situação</h5>
              <p>Data: 11/11/2022</p>
              <p>Horário: 15:40</p>
              <p>Serviço: Troca de óleo</p>
            </td>
          </tr>
        </tbody>
        
      </table>
    </form>
  </div>
</template>

<script>
export default {
  name: "carros",
  data() {
    return {};
  },
};
</script>

<style scoped>

.card{
    padding: 30px;
    margin-bottom: 20px;
}
.adc-car {
  background-color: #0c1318;
  color: white;
}


</style>
