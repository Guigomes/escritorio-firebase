
angular.module("app").controller("NovoServicoDialogController", NovoServicoDialogController);

function NovoServicoDialogController($scope, $mdDialog, Toast, Noticia, items) {
    var vm = this;
    vm.salvarCategoria = salvarCategoria;
    vm.adicionarNovoServico = adicionarNovoServico;
    vm.items = items;
    if (vm.items != undefined) {
        vm.title = "Editar Categoria";
        vm.servico = vm.items;
    } else {
        vm.servico = {
            categoria: "",
            servicos: [{
                nome: ""
            }]
        }
        vm.title = "Nova Categoria";
    }


    function adicionarNovoServico(index) {
        if (index === vm.servico.servicos.length - 1) {
            vm.servico.servicos.push({});
        }
    }
    function salvarCategoria() {


        $mdDialog.hide(vm.servico);

    }

}
