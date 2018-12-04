angular.module("app").controller("EditarController", EditarController);

function EditarController($scope, Textos, Toast) {
  var vm = this;

  vm.adicionarValor = adicionarValor;

 

  function adicionarValor(index){
   
    if(index === vm.valores.length -1){
      vm.valores.push({
        texto: ""
      });  }
  }

  Textos.buscarTexto(1).then((res) => {
    vm.textoQuemSomos = res.texto;
    $scope.$apply();

  }, (erro) => {
    console.log("Erro", erro);
  });



  Textos.buscarTexto(4).then((res) => {
    let valores = res.texto.split('|');

    vm.valores = [];

    for(var i in valores){
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

    for(var i in vm.valores){
      if(vm.valores[i].texto != ""){
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

