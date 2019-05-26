angular.module("app").controller("AdminController", AdminController);

function AdminController(Textos, Noticia, $state, $interval, $scope) {
  var vm = this;

  init();

  vm.paginaInicial = "pages/inicio.html";

  vm.acionarMenu = acionarMenu;

  function acionarMenu(state) {
    $state.go(state);
  }

  function init() {
    vm.progressQuemSomos = true;
    vm.progressVisao = true;
    vm.progressMissao = true;
    vm.progressValores = true;



    vm.animarAviso = "animated shake delay-2s infinite";

    $interval(function () {
      vm.animarAviso = vm.animarAviso == "" ? "animated shake delay-2s infinite" : "";

    }, 5000);
    /*
      let a = DadosService.servicosContabeis;
    
      Textos.salvarServicosPrestados(a);
      */
    Noticia.listarNoticias().then(function (noticias) {

      vm.noticias = [];

      for (var i in noticias) {
        noticias[i].noticia.dataInicio = new Date(noticias[i].noticia.dataInicio);
        if (noticias[i].noticia.dataFim !== undefined && noticias[i].noticia.dataFim != null && noticias[i].noticia.dataFim != "") {

          noticias[i].noticia.dataFim = new Date(noticias[i].noticia.dataFim);
        } else {
          noticias[i].noticia.dataFim = null;
        }

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




    });

    Textos.listarServicosPrestados().then(function (res) {
      vm.servicosContabeis = res.servicos;
    }, function (erro) {
      tratarErro(erro);
    });


    Textos.buscarTexto(1).then(function (res) {
      vm.textoQuemSomos = res.texto;
      vm.progressQuemSomos = false;
      $scope.$apply();
    }, function (erro) {
      tratarErro(erro);
    });


    Textos.buscarTexto(2).then(function (res) {
      vm.textoMissao = res.texto;
      vm.progressMissao = false;

      $scope.$apply();
    }, function (erro) {
      tratarErro(erro);
    });


    Textos.buscarTexto(3).then(function (res) {
      vm.textoVisao = res.texto;
      vm.progressVisao = false;

      $scope.$apply();
    }, function (erro) {
      tratarErro(erro);
    });


    Textos.buscarTexto(4).then(function (res) {
      vm.textoValores = res.texto.split('|');
      vm.progressValores = false;

      $scope.$apply();
    }, function (erro) {
      tratarErro(erro);
    });


    Noticia.listarNoticias().then(function (noticias) {

      vm.noticias = [];

      for (var i in noticias) {
        noticias[i].noticia.dataInicio = new Date(noticias[i].noticia.dataInicio);
        noticias[i].noticia.dataFim = new Date(noticias[i].noticia.dataFim);
        vm.noticias.push(noticias[i].noticia);
      }
      $scope.$apply();




    });

  }
}