angular.module("app").controller("InicioController", InicioController);
angular.module("app").controller("DialogController", DialogController);

function InicioController($location, $anchorScroll, DadosService, Textos, $scope) {
  var vm = this;


  vm.servicosContabeis = DadosService.servicosContabeis;

  vm.goTo = function (local) {

    $location.hash(local);


    $anchorScroll();

    console.log("Textox", Textos);

  };
  Textos.buscarTexto(1).then((res) => {
    vm.textoQuemSomos = res.texto;
    console.log("Deu certo2", vm.textoQuemSomos);

    $scope.$apply();
  }, (erro) => {
    console.log("Erro", erro);
  });

}



function DialogController($scope, $mdDialog, $mdToast) {
  var vm = this;
  $scope.hide = function () {
    $mdDialog.hide();
  };

  vm.times = [
    {
      codigo: 1,
      nome: "Valor"
    },
    {
      codigo: 2,
      nome: "Mistic"
    },
    {
      codigo: 3,
      nome: "Instinto"
    }
  ];
  $scope.cancel = function () {
    $mdDialog.cancel();
  };

  vm.answer = function (form) {
    if (!form.$valid) {
      $mdToast.show(
        $mdToast
          .simple()
          .textContent("Por favor, informe todos os campo.")
          .position("bottom")
          .hideDelay(3000)
      );
    } else {
      if (vm.nivel > 0 && vm.nivel <= 40) {
        let novoUsuario = {
          apelido: vm.apelido,
          nivel: vm.nivel,
          time: vm.time
        };
        $mdDialog.hide(novoUsuario);
      } else {
        $mdToast.show(
          $mdToast
            .simple()
            .textContent("Por favor, informe um nivel entre 1 e 40.")
            .position("bottom")
            .hideDelay(3000)
        );
      }
    }
  };
}
