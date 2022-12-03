<template>
    <div>
        <h1>Editar Usuario</h1><br>
        <div class="card" >
            <h4>Detalhes da conta</h4>
            <h5 for="exampleInputEmail1" class="form-label">Nome:</h5>
            <p>{{nome}}</p>
            <h5 for="exampleInputEmail1" class="form-label">Email:</h5>
            <p>{{email}}</p>
            <label for="exampleInputEmail1" class="form-label">Tipo da Conta:</label>
            <select v-model="tipoconta" class="form-select" aria-label="Default select example">
                <option value="1">Administrador</option>
                <option value="2">Funcionario</option>
                <option value="3">Cliente</option>
            </select><br>
            <button type="submit" class="btn button" @click="editar"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;&nbsp;&nbsp;Salvar</button>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default{
        name: 'Emails',
        data(){
            return{
                itens: false,
                usuario: [],
                nome: "",
                email: "",
                tipoconta: "",
            }
        },
        async created(){
            await axios.get("http://localhost:3000/contas/" + this.$route.query.id).then(response => this.usuario = response.data).catch(error => console.log(error))
            this.nome = this.usuario.nome
            this.email = this.usuario.email
            this.tipoconta = this.usuario.tipo_conta
        },
        methods:{
            async editar(){
                const headers = {"Content-Type" : "application/json"}
                const body = JSON.stringify({
                    tipo_conta: this.tipoconta,
                })
                await axios.patch("http://localhost:3000/contas/editPermision/" + this.$route.query.id, body, {headers}).then(response => console.log(response)).catch(error => console.log(error))
                alert("Conta editada");
            }
        }
        
    }
</script>

<style scoped>
.refrash{
    border: 1px solid #D2D2D2;
}
.card{
    padding: 30px;
    margin-bottom: 20px;
}
.button{
    width: 150px;
    color: white;
    background-color: #121D24;
}
</style>