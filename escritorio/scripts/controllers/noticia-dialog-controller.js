
angular.module("app").controller("DialogController", DialogController);

function DialogController($scope, $mdDialog, Toast, Noticia, items) {
    var vm = this;
    $scope.hide = function () {
        $mdDialog.hide();
    };
    vm.items = items;

    if (vm.items !== undefined) {
        vm.noticia = vm.items;
        vm.title = "Editar Notícia";
    } else {
        vm.noticia = {};
        vm.noticia.dataInicio = new Date();
        vm.noticia.dataFim = undefined;
        vm.title = "Nova Notícia";
    }

    vm.minDate = new Date();
    vm.salvarNoticia = salvarNoticia;

    function salvarNoticia() {




        vm.noticia.dataInicio = vm.noticia.dataInicio.toString();
        if (vm.noticia.dataFim !== undefined) {
            vm.noticia.dataFim = vm.noticia.dataFim.toString();
        } else {
            vm.noticia.dataFim = "";
        }

        console.log("noticia", vm.noticia);

        let noticiaSalvar = {
            dataFim: vm.noticia.dataFim,

            dataInicio: vm.noticia.dataInicio,

            textoNoticia: vm.noticia.textoNoticia,

            titulo: vm.noticia.titulo,



        }
        Noticia.salvarNoticia(noticiaSalvar, vm.noticia.id).then((response) => {
            Toast.mostrarMensagem("Notícia salva com sucesso");

            $mdDialog.hide("Notícia salva com sucesso");

        }, (err) => {
            $mdDialog.cancel();

            Toast.mostrarErro("Erro ao salvar notícia. " + err);
        });


    }

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

}
