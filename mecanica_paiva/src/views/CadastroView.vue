<template>
  <main>
    <div class="container caixa-maior">
      <div class="row">
        <div class="col-md-6 caixa">
          <form class="margin-form">
            <!--Seu e-mail -->
            <h3 class="mb-5 text-white">Crie sua conta</h3>
            <div class="mb-1">
              <input
                type="email"
                placeholder="Seu E-mail"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <img
                class="img-1"
                src="../../public/imagem/login/EnvelopeSimple.png"
                alt=""
              />
            </div>

            <!--Seu Nome -->
            <div class="mb-1">
              <input
                type="email"
                placeholder="Seu nome"
                class="form-control"
                id="exampleInputUser2"
                aria-describedby="emailHelp"
              />
              <img
                class="img-1"
                src="../../public/imagem/cadastro/User.png"
                alt=""
              />
            </div>
            <!--Sua senha -->
            <div class="mb-1">
              <input
                type="password"
                placeholder="Sua Senha"
                class="form-control"
                id="exampleInputPassword1"
                aria-describedby="emailHelp"
              />
              <img
                class="img-1"
                src="../../public/imagem/login/LockKey.png"
                alt=""
              />
            </div>

            <!--Confirme sua senha -->
            <div class="mb-1">
              <input
                placeholder="Confirme sua senha"
                type="password"
                class="form-control"
                id="exampleInputPassword2"
              />
              <img
                class="img-1"
                src="../../public/imagem/login/LockKey.png"
                alt=""
              />
            </div>

            <!--CheckBox-->
            <div>
              <div class="form-check border border-white mb-5 mt-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label me-5 text-white"
                  for="flexCheckDefault"
                >
                  Não sou um robô
                </label>

                <img
                  src="../../public/imagem/cadastro/logos_recaptcha.png"
                  alt=""
                />
              </div>
            </div>

            <div class="mt-3 mb-5 termos">
              <span class="ms-1">Ao se registrar, você aceita nossos</span>
              <span class="ms-2"><a href="#">termos de uso</a></span>
              <span class="ms-1">e a nossa</span>
              <span class="ms-2"><a href="#">Política de privacidade.</a></span>
            </div>

            <button type="submit" class="btn cadastrar">cadastrar</button>
          </form>
        </div>

        <!--Logo e texto -->
        <div class="col-md-6 texto-img">
          <img class="carro" src="../../public/imagem/navbar/logo.png" alt="" />
          <h1>Mais de 20 mil cliente satisfeitos </h1>
          <p class="text-white recomendam">
            Junte aos milhares de pessoas de utilizam do serviço e decomendam
          </p>
          <div class="mt-5"> <img src="../../public/imagem/cadastro/ArrowLeft.png" alt=""> <router-link class="text-warning " to="/login">Voltar para Login </router-link></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Cadastro",
};
</script>


<style scoped>
.caixa {
  width: 460px;
  height: 760px;
  background-color: #15222b;
}
.margin-form {
  margin-left: 50px;
  margin-top: 50px;
}
.container {
  margin-top: 100px;
  margin-bottom: 100px;
}
main, .caixa-maior {
  background-color: #121d24;
  padding-top: 40px;
  padding-bottom: 10px;
}

.caixa-maior{
    margin-right: 40px;
}
h1 {
  color: #fff;
  width: 310px;
}
a {
  color: yellow;
  text-decoration: none;
}

.form-check {
  width: 272px;
  height: 70px;
  margin-left: 40px;
}

.form-check-input {
  width: 31px;
  height: 27px;
}
.form-check {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.termos {
  margin-left: 10px;
  width: 332px;
}

#exampleInputEmail1,
#exampleInputUser2,
#exampleInputPassword1,
#exampleInputPassword2 {
  padding-left: 40px;
  background-color: #161515;
  color: #fff;
  width: 352px;
  height: 50px;
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

.cadastrar {
  width: 352px;
  height: 50px;
  text-transform: uppercase;
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

.texto-img {
  margin-left: 110px;
  margin-top: 105px;
}

.recomendam{
    margin-top: 20px;
    width: 300px;
}

</style>