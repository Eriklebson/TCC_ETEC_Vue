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
                                <p v-show="(usuario.tipo_conta == 1)">Administrador</p>
                                <p v-show="(usuario.tipo_conta == 2)">Funcionario</p>
                                <p v-show="(usuario.tipo_conta == 3)">Cliente</p>
                            </td>
                            <td>
                                <router-link :to="{name: 'EditUsuario', query:{id: usuario.id_conta}}" type="button" class="btn refrash"><font-awesome-icon icon="fa-solid fa-pen" /></router-link>
                                <button type="button" class="btn refrash"><font-awesome-icon icon="fa-solid fa-trash" /></button>
                            </td>
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