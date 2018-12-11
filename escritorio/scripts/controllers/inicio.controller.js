angular.module("app").controller("InicioController", InicioController);

function InicioController($location, $anchorScroll, $interval, Textos, $scope, Noticia, DadosService) {
  var vm = this;


  /*
    let a = DadosService.servicosContabeis;
  
    Textos.salvarServicosPrestados(a);
    */
  Noticia.listarNoticias().then((noticias) => {

    vm.noticias = [];

    for (var i in noticias) {
      noticias[i].noticia.dataInicio = new Date(noticias[i].noticia.dataInicio);
      if (noticias[i].noticia.dataFim !== undefined && noticias[i].noticia.dataFim != null && noticias[i].noticia.dataFim != "") {

        noticias[i].noticia.dataFim = new Date(noticias[i].noticia.dataFim);
      } else {
        noticias[i].noticia.dataFim = null;
      }
      console.log("NOTICIA", noticias[i]);
      console.log('hoje', new Date());
      console.log(noticias[i].noticia.dataInicio <= new Date());
      if (noticias[i].noticia.dataInicio <= new Date() && (noticias[i].noticia.dataFim == null || noticias[i].noticia.dataFim >= new Date())) {
        vm.noticias.push(noticias[i].noticia);
      }

    }

    if (vm.noticias.length > 0) {
      var indexNoticia = 0;
      vm.noticiaAtual = vm.noticias[0];

      $interval(function () {
        if (vm.noticias.length - 1 === indexNoticia) {
          indexNoticia = 0;
        } else {
          indexNoticia++;
        }
        vm.noticiaAtual = vm.noticias[indexNoticia];
      }, 3000);
    }
    $scope.$apply();

    console.log("vm.noticiad", vm.noticias);



  });

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


