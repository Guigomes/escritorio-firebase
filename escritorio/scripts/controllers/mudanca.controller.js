angular.module("app").controller("MudancaController", MudancaController);

function MudancaController($stateParams) {
  var vm = this;

  

    vm.id = $stateParams.id;
  
  
}
