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
        vm.noticia.tipo = 2;

        vm.title = "Nova Notícia";
    }


    vm.tipos = [{
        value: 1,
        texto: "Texto"

    }, {
        value: 2,
        texto: "Link"
    }];


    vm.minDate = new Date();
    vm.salvarNoticia = salvarNoticia;

    function salvarNoticia() {


        vm.noticia.dataInicio.setHours(0);
        vm.noticia.dataInicio = vm.noticia.dataInicio.toString();
        if (vm.noticia.dataFim !== undefined && vm.noticia.dataFim !== "") {

            vm.noticia.dataFim.setHours(0);
            vm.noticia.dataFim = vm.noticia.dataFim.toString();
        } else {
            vm.noticia.dataFim = "";
        }


        let noticiaSalvar = {
            dataFim: vm.noticia.dataFim,

            dataInicio: vm.noticia.dataInicio,

            textoNoticia: vm.noticia.textoNoticia,

            titulo: vm.noticia.titulo,

            tipo: vm.noticia.tipo

        }

        if (!vm.isEditar) {
            Noticia.salvarNoticia(noticiaSalvar).then(function (response) {
                Toast.mostrarMensagem("Notícia salva com sucesso");

                $mdDialog.hide("Notícia salva com sucesso");

            }, function (err) {
                $mdDialog.cancel();

                Toast.mostrarErro("Erro ao salvar notícia. " + err);
            });
        } else {
            Noticia.atualizarNoticia(noticiaSalvar, vm.noticia.id).then(function (response) {
                Toast.mostrarMensagem("Notícia alterada com sucesso");

                $mdDialog.hide("Notícia alterada com sucesso");

            }, function (err) {
                $mdDialog.cancel();

                Toast.mostrarErro("Erro ao salvar notícia. " + err);
            });
        }

    }

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

}