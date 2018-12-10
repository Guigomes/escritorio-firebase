angular.module("app").controller("EditarController", EditarController);

function EditarController($scope, Textos, Toast) {
  var vm = this;

  vm.adicionarValor = adicionarValor;
vm.adicionarNovoServico =adicionarNovoServico;
vm.adicionarNovaCategoria = adicionarNovaCategoria;


 init();

function init(){


  Textos.listarServicosPrestados().then((res) => {

    let servicos = res.servicos;

    console.log("servicos", servicos);
    
    for(var i in servicos){
     
        servicos[i].servicos.push("");
    }
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

function adicionarValor(index){
   
  if(index === vm.valores.length -1){
    vm.valores.push({
      texto: ""
    });  }
}


function adicionarNovaCategoria(){
  vm.servicosPrestados.push({});
}


  function adicionarNovoServico(index1, index2){
 

if(index2 == vm.servicosPrestados[index1].servicos.length -1){
  vm.servicosPrestados[index1].servicos.push("");
}
    

    
  }

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

