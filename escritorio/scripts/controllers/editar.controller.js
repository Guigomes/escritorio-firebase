angular.module("app").controller("EditarController", EditarController);

function EditarController($scope, Textos, Toast) {
  var vm = this;




  Textos.buscarTexto(1).then((res) => {
    vm.textoQuemSomos = res.texto;
    $scope.$apply();

    console.log("Deu certo2", vm.textoQuemSomos);
  }, (erro) => {
    console.log("Erro", erro);
  });

  vm.salvar = salvar;

  function salvar() {


    Textos.adicionarTexto(1, vm.textoQuemSomos).then((response) => {
      Toast.mostrarMensagem("Textos salvos com sucesso");
    }, (err) => {
      Toast.mostrarErro("Erro ao salvar textos. " + err);
    });

  }


}

