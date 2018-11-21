angular.module("app").controller("EditarNoticiasController", EditarNoticiasController);

function EditarNoticiasController(DadosService) {
  var vm = this;


  vm.textoQuemSomos = DadosService.textoQuemSomos;
  vm.servicosContabeis = DadosService.servicosContabeis;

  vm.paginaInicial = "pages/inicio.html";

}

