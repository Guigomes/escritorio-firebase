angular.module("app").controller("LoginController", LoginController);

function LoginController($state, Toast) {
  var vm = this;

  vm.entrar = entrar;

  function entrar() {
    if (vm.usuario === "gaspar" && vm.senha === "01051956") {
      $state.go("logado");

    } else {
      Toast.mostrarErro("Usuário ou senha incorretos");
    }


  }
}