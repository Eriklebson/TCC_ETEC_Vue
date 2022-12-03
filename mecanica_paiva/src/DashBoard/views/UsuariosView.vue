<template>
    <div>
        <h1>Usuarios Cadastrados no Sistema</h1><br>
        <div class="card" >
            <form action="">
                <table class="table">
                    <thead class="table-light">
                        <tr>
                            <th scope="col"><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"></th>
                            <th scope="col">ID</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Email</th>
                            <th scope="col">Tipo da Conta</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr class="itens" v-for="usuario in usuarios" :key="usuario.id_conta" @click="itens = !itens">
                            <th scope="row"><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"></th>
                            <td>{{usuario.id_conta}}</td>
                            <td>{{usuario.nome}}</td>
                            <td>{{usuario.email}}</td>
                            <td>
                                <select class="form-select" aria-label="Default select example">
                                    <option value="1" :selected="(usuario.tipo_conta == 1)">Administrador</option>
                                    <option value="2" :selected="(usuario.tipo_conta == 2)">Funcionario</option>
                                    <option value="3" :selected="(usuario.tipo_conta == 3)">Cliente</option>
                                </select>
                            </td>
                            <td><button type="button" class="btn refrash"><font-awesome-icon icon="fa-solid fa-trash" /></button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default{
        name: 'Emails',
        data(){
            return{
                usuarios: [],
                itens: false,
            }
        },
        async created(){
            await axios.get("http://localhost:3000/contas").then(response => this.usuarios = response.data).catch(error => console.log(error))
        }
    }
</script>

<style scoped>
.card{
    padding: 30px;
}
</style>