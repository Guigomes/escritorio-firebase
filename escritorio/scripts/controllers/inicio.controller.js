angular.module("app").controller("InicioController", InicioController);
angular.module("app").controller("DialogController", DialogController);

function InicioController($location, $anchorScroll, DadosService, Textos, $scope, Noticia) {
  var vm = this;





  Textos.listarServicosPrestados().then((res) => {
    vm.servicosContabeis = res.servicos;
    console.log("res", res);
  }, (erro) => {
    tratarErro(erro);
  });
  vm.goTo = function (local) {

    $location.hash(local);


    $anchorScroll();

    console.log("Textox", Textos);

  };

  Textos.buscarTexto(1).then((res) => {
    vm.textoQuemSomos = res.texto;
    $scope.$apply();
  }, (erro) => {
    tratarErro(erro);
  });


  Textos.buscarTexto(2).then((res) => {
    vm.textoMissao = res.texto;
    $scope.$apply();
  }, (erro) => {
    tratarErro(erro);
  });


  Textos.buscarTexto(3).then((res) => {
    vm.textoVisao = res.texto;
    $scope.$apply();
  }, (erro) => {
    tratarErro(erro);
  });


  Textos.buscarTexto(4).then((res) => {
    vm.textoValores = res.texto.split('|');
    $scope.$apply();
  }, (erro) => {
    tratarErro(erro);
  });

  function tratarErro(err) {
    console.log("erro", err);
  }
  Noticia.listarNoticias().then((noticias) => {

    vm.noticias = [];

    for (var i in noticias) {
      noticias[i].noticia.dataInicio = new Date(noticias[i].noticia.dataInicio);
      noticias[i].noticia.dataFim = new Date(noticias[i].noticia.dataFim);
      vm.noticias.push(noticias[i].noticia);
    }
    $scope.$apply();




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
