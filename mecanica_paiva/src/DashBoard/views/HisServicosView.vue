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
            <div class="col-md-3 text-end">
                <button type="button" class="btn refrash"><font-awesome-icon icon="fa-solid fa-trash" />&nbsp;&nbsp;&nbsp;Excluir</button>
            </div>
        </div>
        <div class="card" >
            <form action="">
                <table class="table">
                    <thead class="table-light">
                        <tr>
                            <th scope="col"><input @click="selectAll" class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"></th>
                            <th scope="col">Data de serviço</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr class="itens" @click="itens = !itens">
                            <th scope="row"><input :checked="select" class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"></th>
                            <td>24/10/2021</td>
                            <td>Julia Alencar</td>
                            <td>X XXXX-XXXX</td>
                            <td><button type="button" class="btn refrash"><font-awesome-icon icon="fa-solid fa-trash" /></button></td>
                        </tr>
                        <tr v-show="itens">
                            <td colspan="5">
                                <h5>Detalhes</h5><br>
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
    </div>
</template>

<script>
    export default{
        name: 'Emails',
        data(){
            return{
                itens: false,
                select: false,
            }
        },
        methods:{
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
}.itens{
    cursor: pointer;
}
</style>