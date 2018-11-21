angular.module("app").controller("AdminController", AdminController);

function AdminController(DadosService, $state) {
  var vm = this;


  vm.textoQuemSomos = DadosService.textoQuemSomos;
  vm.servicosContabeis = DadosService.servicosContabeis;

  vm.paginaInicial = "pages/inicio.html";

  vm.acionarMenu = acionarMenu;

  function acionarMenu(state) {
    $state.go(state);
  }
}

