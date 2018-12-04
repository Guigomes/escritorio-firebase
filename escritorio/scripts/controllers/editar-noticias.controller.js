angular.module("app").controller("EditarNoticiasController", EditarNoticiasController);

function EditarNoticiasController(DadosService, Noticia, Toast, $scope, $mdDialog) {
  var vm = this;


  vm.textoQuemSomos = DadosService.textoQuemSomos;
  vm.servicosContabeis = DadosService.servicosContabeis;
  vm.salvarNoticia = salvarNoticia;
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
      templateUrl: 'pages/nova-noticia-dialog.html',

      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
      .then(function (answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function () {
        $scope.status = 'You cancelled the dialog.';
      });
  }
  function salvarNoticia() {

    vm.noticia.dataInicio = vm.noticia.dataInicio.toString();
    vm.noticia.dataFim = vm.noticia.dataFim.toString();
    console.log("Noticia", vm.noticia);
    Noticia.salvarNoticia(vm.noticia).then((response) => {
      Toast.mostrarMensagem("Notícia salva com sucesso");
    }, (err) => {
      Toast.mostrarErro("Erro ao salvar notícia. " + err);
    });


  }
}

