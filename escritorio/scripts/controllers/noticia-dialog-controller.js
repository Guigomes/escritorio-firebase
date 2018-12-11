
angular.module("app").controller("DialogController", DialogController);

function DialogController($scope, $mdDialog, Toast, Noticia, items) {
    var vm = this;
    $scope.hide = function () {
        $mdDialog.hide();
    };
    vm.items = items;
    vm.isEditar = false;
    if (vm.items !== undefined) {
        vm.isEditar = true;
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


        let noticiaSalvar = {
            dataFim: vm.noticia.dataFim,

            dataInicio: vm.noticia.dataInicio,

            textoNoticia: vm.noticia.textoNoticia,

            titulo: vm.noticia.titulo,



        }

        if (!vm.isEditar) {
            Noticia.salvarNoticia(noticiaSalvar).then((response) => {
                Toast.mostrarMensagem("Notícia salva com sucesso");

                $mdDialog.hide("Notícia salva com sucesso");

            }, (err) => {
                $mdDialog.cancel();

                Toast.mostrarErro("Erro ao salvar notícia. " + err);
            });
        } else {
            Noticia.atualizarNoticia(noticiaSalvar, vm.noticia.id).then((response) => {
                Toast.mostrarMensagem("Notícia alterada com sucesso");

                $mdDialog.hide("Notícia alterada com sucesso");

            }, (err) => {
                $mdDialog.cancel();

                Toast.mostrarErro("Erro ao salvar notícia. " + err);
            });
        }

    }

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

}
