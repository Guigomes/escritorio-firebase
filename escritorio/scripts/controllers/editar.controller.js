angular.module("app").controller("EditarController", EditarController);

function EditarController($scope, Textos, Toast, $mdDialog, $state) {
  var vm = this;

  vm.adicionarValor = adicionarValor;
  vm.adicionarNovoServico = adicionarNovoServico;
  vm.adicionarNovaCategoria = adicionarNovaCategoria;
  vm.editarCategoria = editarCategoria;
  vm.excluirCategoria = excluirCategoria;
  vm.acionarMenu = acionarMenu;

  function acionarMenu(state) {
    $state.go(state);
  }
  init();

  function init() {


    Textos.listarServicosPrestados().then(function (res) {

      let servicos = res.servicos;


      vm.servicosPrestados = servicos;

    }, function (erro) {
      tratarErro(erro);
    });


    Textos.buscarTexto(1).then(function (res) {
      vm.textoQuemSomos = res.texto;
      $scope.$apply();

    }, function (erro) {});


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


  }


  function excluirCategoria(ev, index) {

    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
      .title('Exclusão de categoria')
      .textContent('Tem certeza que deseja excluir essa categoria?')
      .targetEvent(ev)
      .ok('Sim')
      .cancel('Não');


    $mdDialog.show(confirm).then(function () {
      vm.servicosPrestados.splice(index, 1);
      Textos.salvarServicosPrestados(vm.servicosPrestados).then(function (response) {
        Toast.mostrarMensagem("categoria excluida com sucesso");
      }, function (err) {
        Toast.mostrarErro("Erro ao excluir notícia. " + err);
      });


    }, function () {
      $scope.status = 'You decided to keep your debt.';
    });

  }

  function adicionarValor(index) {

    if (index === vm.valores.length - 1) {
      vm.valores.push({
        texto: ""
      });
    }
  }


  function editarCategoria(ev, servico, index) {
    $mdDialog.show({
        controller: NovoServicoDialogController,
        controllerAs: "vm",
        templateUrl: 'pages/novo-servico-dialog.html',

        targetEvent: ev,
        clickOutsideToClose: true,
        locals: {
          items: servico
        },
      })
      .then(function (answer) {

        // listarNoticias();
        Textos.salvarServicosPrestados(vm.servicosPrestados).then(function (response) {
          Toast.mostrarMensagem("Serviços salvos com sucesso");
        }, function (err) {
          Toast.mostrarErro("Erro ao salvar serviços. " + err);
        });


      }, function () {
        $scope.status = 'You cancelled the dialog.';
      });
    /*
    vm.servicosPrestados.push({});
    
    */
  }

  function adicionarNovaCategoria(ev) {
    $mdDialog.show({
        controller: NovoServicoDialogController,
        controllerAs: "vm",
        templateUrl: 'pages/novo-servico-dialog.html',

        targetEvent: ev,
        clickOutsideToClose: true,
        locals: {
          items: undefined
        },
      })
      .then(function (servico) {
        vm.servicosPrestados.push(servico);
        Textos.salvarServicosPrestados(vm.servicosPrestados).then(function (response) {
          Toast.mostrarMensagem("Serviços salvos com sucesso");
        }, function (err) {
          Toast.mostrarErro("Erro ao salvar serviços. " + err);
        });


      }, function () {
        $scope.status = 'You cancelled the dialog.';
      });
    /*
    vm.servicosPrestados.push({});
    
    */
  }


  function adicionarNovoServico(index1, index2) {


    if (index2 == vm.servicosPrestados[index1].servicos.length - 1) {
      vm.servicosPrestados[index1].servicos.push("");
    }



  }

  Textos.buscarTexto(4).then(function (res) {
    let valores = res.texto.split('|');

    vm.valores = [];

    for (var i in valores) {
      vm.valores.push({
        texto: valores[i]
      });
    }




    $scope.$apply();
  }, function (erro) {
    tratarErro(erro);
  });


  vm.salvar = salvar;

  function salvar() {



    let textoValor = "";

    for (var i in vm.valores) {
      if (vm.valores[i].texto != "") {
        textoValor += vm.valores[i].texto + "|";
      }
    }

    Textos.adicionarTexto(4, textoValor).then(function (response) {
      //   Toast.mostrarMensagem("Textos salvos com sucesso");
    }, function (err) {
      Toast.mostrarErro("Erro ao salvar textos. " + err);
    });

    Textos.adicionarTexto(2, vm.textoMissao).then(function (response) {
      //     Toast.mostrarMensagem("Textos salvos com sucesso");
    }, function (err) {
      Toast.mostrarErro("Erro ao salvar textos. " + err);
    });

    Textos.adicionarTexto(3, vm.textoVisao).then(function (response) {
      //    Toast.mostrarMensagem("Textos salvos com sucesso");
    }, function (err) {
      Toast.mostrarErro("Erro ao salvar textos. " + err);
    });

    Textos.adicionarTexto(1, vm.textoQuemSomos).then(function (response) {
      //    Toast.mostrarMensagem("Textos salvos com sucesso");
    }, function (err) {
      Toast.mostrarErro("Erro ao salvar textos. " + err);
    });
    Toast.mostrarMensagem("Textos salvos com sucesso");
    init();
  }


}