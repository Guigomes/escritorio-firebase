angular.module("app").controller("EditarController", EditarController);

function EditarController($scope, Textos, Toast, $mdDialog) {
  var vm = this;

  vm.adicionarValor = adicionarValor;
  vm.adicionarNovoServico = adicionarNovoServico;
  vm.adicionarNovaCategoria = adicionarNovaCategoria;
  vm.editarCategoria = editarCategoria;
  vm.excluirCategoria = excluirCategoria;
  init();

  function init() {


    Textos.listarServicosPrestados().then((res) => {

      let servicos = res.servicos;

      console.log("servicos", servicos);

      /*
      for (var i in servicos) {
        vm.servicosPrestados.push({});

        servicos[i].servicos.push("");
      }*/
      vm.servicosPrestados = servicos;

    }, (erro) => {
      tratarErro(erro);
    });


    Textos.buscarTexto(1).then((res) => {
      vm.textoQuemSomos = res.texto;
      $scope.$apply();

    }, (erro) => {
      console.log("Erro", erro);
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
      Textos.salvarServicosPrestados(vm.servicosPrestados).then((response) => {
        Toast.mostrarMensagem("categoria excluida com sucesso");
      }, (err) => {
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
        console.log("Servicos", vm.servicosPrestados[index]);

        console.log("Servico", answer);
        // listarNoticias();
        Textos.salvarServicosPrestados(vm.servicosPrestados).then((response) => {
          Toast.mostrarMensagem("Serviços salvos com sucesso");
        }, (err) => {
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
        console.log("Servicos Prestados", vm.servicosPrestados);
        Textos.salvarServicosPrestados(vm.servicosPrestados).then((response) => {
          Toast.mostrarMensagem("Serviços salvos com sucesso");
        }, (err) => {
          Toast.mostrarErro("Erro ao salvar serviços. " + err);
        });

        console.log("Servico a ser salvo", servico);

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

  Textos.buscarTexto(4).then((res) => {
    let valores = res.texto.split('|');

    vm.valores = [];

    for (var i in valores) {
      vm.valores.push({
        texto: valores[i]
      });
    }
    vm.valores.push({
      texto: ""
    });




    $scope.$apply();
  }, (erro) => {
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

    Textos.adicionarTexto(4, textoValor).then((response) => {
      Toast.mostrarMensagem("Textos salvos com sucesso");
    }, (err) => {
      Toast.mostrarErro("Erro ao salvar textos. " + err);
    });


    Textos.adicionarTexto(1, vm.textoQuemSomos).then((response) => {
      Toast.mostrarMensagem("Textos salvos com sucesso");
    }, (err) => {
      Toast.mostrarErro("Erro ao salvar textos. " + err);
    });

  }


}

