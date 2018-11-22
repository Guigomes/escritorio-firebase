angular.module("app").controller("EditarNoticiasController", EditarNoticiasController);

function EditarNoticiasController(DadosService, Noticia, Toast) {
  var vm = this;


  vm.textoQuemSomos = DadosService.textoQuemSomos;
  vm.servicosContabeis = DadosService.servicosContabeis;
  vm.salvarNoticia = salvarNoticia;
  Noticia.listarNoticias().then((noticias) => {
    for (var i in noticias) {
      console.log("Noticia " + i + 1, noticias[i]);
    }

  });;
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

