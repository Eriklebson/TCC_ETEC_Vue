<template>
  <main>
    <div class="row container">
      <div class="col-md-6 container">
        <img class="carro" src="../../public/imagem/navbar/logo.png" alt="" />
        <h1>Faça seu login na plataforma</h1>
      </div>

      <div class="col-md-6 caixa">
        <form class="margin-form" @submit.prevent="entrar">
          <div class="mb-3">
            <input type="email" placeholder="E-mail" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="input_email" required/>
            <img class="img-1" src="../../public/imagem/login/EnvelopeSimple.png" alt="" />
          </div>
          <div class="mb-1">
            <input placeholder="Senha" type="password" class="form-control" id="exampleInputPassword1" v-model="input_senha" required/>
            <img class="img-1" src="../../public/imagem/login/LockKey.png" alt="" />
            <p><a href="#">Esqueci minha senha</a></p>
          </div>
          <button type="submit" class="btn entrar">Entrar</button>

          <div class="mt-3">
            <span class="ms-5">Não tem uma conta?</span><span class="ms-1">
              <router-link class="text-warning " to="/cadastro">Registre-se </router-link>
            </span>
          </div>

          <div class="mt-5">
            <span class="">Ou entre com </span><span class="ms-1">
              <img class="img-2" src="../../public/imagem/login/GoogleChromeLogo.png" alt="" />
              <button class="btn google">Google</button>
            </span>
          </div>

        </form>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data(){
    return{
      conta: [],
      input_email: "",
      input_senha: "",
    }
  },
  methods:{
    async entrar(){
      const headers = {"Content-Type" : "application/json"}
      const body = JSON.stringify({
          email: this.input_email,
          senha: this.input_senha,
      })
      await axios.post("http://localhost:3000/contas/autenticacao", body, {headers}).then(response => this.conta = response.data).catch(error => console.log(error))
      if(this.conta.autenticado == true){
        this.$router.push({name: 'DashBoard', query:{id: this.conta.id_conta}})
      }
      else{
        alert("Credenciais Invalidas")
      }
    }
  }
};
</script>

<style scoped>
.caixa {
  width: 460px;
  height: 460px;
  background-color: #15222b;
  border-radius: 40px;

}

.margin-form {
  margin-left: 50px;
  margin-top: 50px;

}

.container {
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
}

input {
  width: 352px;
  height: 50px;
}

main {
  background-color: #121d24;
  padding-top: 40px;
  padding-bottom: 10px;
}

h1 {
  color: #fff;
  width: 310px;
}

a {
  color: yellow;
  text-decoration: none;
}

#exampleInputEmail1 {
  padding-left: 40px;
  background-color: #161515;
  color: #fff;
}

#exampleInputPassword1 {
  padding-left: 40px;
  background-color: #161515;
  color: #fff;
}

.btn {
  color: yellow;
  background-color: #161515;
}

span {
  color: #fff;
}

.carro {
  position: relative;
  top: -40px;
}

.entrar {
  width: 352px;
  height: 50px;
}


.google {
  width: 222px;
  height: 50px;
}

.img-1 {
  position: relative;
  top: -40px;
  left: 10px;
}

.img-2 {
  position: relative;
  left: 80px;
}
</style>