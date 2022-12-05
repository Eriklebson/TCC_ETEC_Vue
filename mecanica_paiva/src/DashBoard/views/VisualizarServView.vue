<template>
    <div>
        <h1>Descrição do serviço em andamento</h1><br>
        <div class="card" >
            <h4>Do serviço</h4><br>
            <h5 for="exampleInputEmail1" class="form-label">Serviço:</h5>
            <p>{{servico.nome_servico}}</p><br>
            <h5 for="exampleInputEmail1" class="form-label">Valor:</h5>
            <p>{{servico.valor}}</p><br>
            <h5 for="exampleInputEmail1" class="form-label">Descrição:</h5>
            <p>{{servico.descricao}}</p><br>
            <h5>Imformações/Peças para comprar:</h5>
            <p>{{servico.informacoes}}</p><br>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import axios from "axios";
    export default{
        name: 'Emails',
        data(){
            return{
                servico: [],
                veiculos: [],
                veiculo: "",
                dia: '',
                hora: '',
                data: new Date().toLocaleDateString(),
                dataatual: '',
                status: false,
            }
        },
        created(){
            this.get();
            this.dataatual = moment(String(this.data)).format('yyyy-DD-MM')
        },
        methods: {
            async get(){
                await axios.get("http://localhost:3000/ordemservico/agendado/visualizar/" + this.$route.query.idServico).then(response => this.servico = response.data).catch(error => console.log(error))
                await axios.get("http://localhost:3000/veiculos/cliente/" + this.$route.query.idConta).then(response => this.veiculos = response.data).catch(error => console.log(error))
            },
            async marcar(){
                console.log(this.veiculo);
                const headers = {"Content-Type" : "application/json"}
                const body = JSON.stringify({
                    data_abertura: this.dia + ' ' + this.hora,
                    status: 1,
                    id_veiculo: this.veiculo,
                    id_servico: this.$route.query.idServico,
                    id_conta: this.$route.query.idConta,
                })
                await axios.post("http://localhost:3000/ordemservico", body, { headers }).then(response => this.status = response.data.status).catch(error => console.log(error))
                if(this.status){
                    alert("Agendado com sucesso");
                    this.$router.push({name: 'Shop', query:{id: this.$route.query.idConta}})
                }
                else{
                    alert("Você não preencheu algum campo ou a data é indisponivel");
                }
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