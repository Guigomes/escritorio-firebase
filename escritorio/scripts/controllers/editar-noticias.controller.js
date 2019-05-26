angular.module("app").controller("EditarNoticiasController", EditarNoticiasController);

function EditarNoticiasController(DadosService, Noticia, Toast, $scope, $mdDialog, $state) {
  var vm = this;
  vm.textoQuemSomos = DadosService.textoQuemSomos;
  vm.servicosContabeis = DadosService.servicosContabeis;
  vm.abrirNovaNoticia = abrirNovaNoticia;
  vm.editarNoticia = editarNoticia;
  vm.excluirNoticia = excluirNoticia;

  vm.acionarMenu = acionarMenu;

  function acionarMenu(state) {
    $state.go(state);
  }

  listarNoticias();

  function listarNoticias() {
    Noticia.listarNoticias().then(function (noticias) {

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

  function excluirNoticia(ev, noticia) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
      .title('Exclusão de notícia')
      .textContent('Tem certeza que deseja excluir a notícia?')
      .targetEvent(ev)
      .ok('Sim')
      .cancel('Não');

    $mdDialog.show(confirm).then(function () {
      Noticia.atualizarNoticia(null, noticia.id).then(function (response) {
        Toast.mostrarMensagem("Notícia excluída com sucesso");

        listarNoticias();
      }, function (err) {

        Toast.mostrarErro("Erro ao excluir notícia. " + err);
      });

    }, function () {
      $scope.status = 'You decided to keep your debt.';
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