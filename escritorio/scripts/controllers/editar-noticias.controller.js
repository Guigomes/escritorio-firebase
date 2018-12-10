angular.module("app").controller("EditarNoticiasController", EditarNoticiasController);

function EditarNoticiasController(DadosService, Noticia, Toast, $scope, $mdDialog) {
  var vm = this;
  vm.textoQuemSomos = DadosService.textoQuemSomos;
  vm.servicosContabeis = DadosService.servicosContabeis;
  vm.abrirNovaNoticia = abrirNovaNoticia;
  vm.editarNoticia = editarNoticia;
  listarNoticias();

  function listarNoticias() {
    Noticia.listarNoticias().then((noticias) => {

      vm.noticias = [];

      for (var i in noticias) {
        noticias[i].noticia.dataInicio = new Date(noticias[i].noticia.dataInicio);
        if (noticias[i].noticia.dataFim !== undefined && noticias[i].noticia.dataFim != null && noticias[i].noticia.dataFim != "") {
          noticias[i].noticia.dataFim = new Date(noticias[i].noticia.dataFim);
        }
        noticias[i].noticia.id = i;
        vm.noticias.push(noticias[i].noticia);
      }
      $scope.$apply();
    });
  }
  function abrirNovaNoticia(ev) {
    $mdDialog.show({
      controller: DialogController,
      controllerAs: "vm",
      templateUrl: 'pages/principal.html',

      targetEvent: ev,
      clickOutsideToClose: true,
      locals: {
        items: undefined
      },
    })
      .then(function (answer) {
        listarNoticias();

      }, function () {
        $scope.status = 'You cancelled the dialog.';
      });
  }
  function editarNoticia(ev, noticia) {
    $mdDialog.show({
      controller: DialogController,
      controllerAs: "vm",
      templateUrl: 'pages/principal.html',

      targetEvent: ev,
      clickOutsideToClose: true,
      locals: {
        items: noticia
      },
    })
      .then(function (answer) {
        listarNoticias();

      }, function () {
        $scope.status = 'You cancelled the dialog.';
      });
  }

}

