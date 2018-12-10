angular.module("app").controller("EditarNoticiasController", EditarNoticiasController);

function EditarNoticiasController(DadosService, Noticia, Toast, $scope, $mdDialog) {
  var vm = this;


  vm.textoQuemSomos = DadosService.textoQuemSomos;
  vm.servicosContabeis = DadosService.servicosContabeis;
  vm.abrirNovaNoticia = abrirNovaNoticia;



  Noticia.listarNoticias().then((noticias) => {

    vm.noticias = [];

    for (var i in noticias) {
      noticias[i].noticia.dataInicio = new Date(noticias[i].noticia.dataInicio);
      noticias[i].noticia.dataFim = new Date(noticias[i].noticia.dataFim);
      vm.noticias.push(noticias[i].noticia);
    }
    $scope.$apply();

    console.log("vm.noticiad", vm.noticias);



  });

  function abrirNovaNoticia(ev) {
    $mdDialog.show({
      controller: DialogController,
      controllerAs: "vm",
      templateUrl: 'pages/principal.html',

      targetEvent: ev,
      clickOutsideToClose: true
    })
      .then(function (answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function () {
        $scope.status = 'You cancelled the dialog.';
      });
  }

}

