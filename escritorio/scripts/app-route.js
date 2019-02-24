angular
  .module("app")
  .config(function ($mdThemingProvider, $stateProvider, $urlRouterProvider, $mdDateLocaleProvider, $locationProvider) {
    $mdThemingProvider
      .theme("default")
      .primaryPalette("blue")
      .accentPalette("red");

    $locationProvider.html5Mode(true);

    // Example of a French localization.
    $mdDateLocaleProvider.months = ['janeiro', 'fevereiro', 'março', "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    $mdDateLocaleProvider.shortMonths = ['jan', 'fev', 'mar', "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
    $mdDateLocaleProvider.days = ["domingo", 'segunda', 'terça', 'quarta', "quinta", "sexta", "sábado"];
    $mdDateLocaleProvider.shortDays = ['D', 'S', 'T', "Q", "Q", "S", "S"];
    $mdDateLocaleProvider.firstDayOfWeek = 0;

    $mdDateLocaleProvider.parseDate = function (dateString) {
      var m = moment(dateString, 'DD/MM/YYYY', true);
      return m.isValid() ? m.toDate() : new Date(NaN);
    };


    $mdDateLocaleProvider.formatDate = function (date) {
      if (date !== undefined) {

        var m = moment(date);
        return m.isValid() ? m.format('DD/MM/YYYY') : '';
      } else {
        return "";
      }
    };
    $stateProvider
      .state("/", {
        url: "/",
        name: "/",
        params: {
          msgSistema: null
        },
        views: {
          viewContent: {
            controller: "InicioController",
            controllerAs: "vm",
            templateUrl: "./pages/inicio.html"
          }
        }
      })
      .state("admin", {
        url: "/admin",
        name: "admin",
        views: {
          viewContent: {
            controller: "LoginController",
            controllerAs: "vm",
            templateUrl: "/pages/login.html"
          }
        }
      }).state("logado", {
        url: "/logado",
        name: "logado",
        views: {
          viewContent: {
            controller: "AdminController",
            controllerAs: "vm",
            templateUrl: "/pages/admin.html",
          }
        }
      }).state("editar", {
        url: "/editar",
        name: "editar",
        views: {
          viewContent: {
            controller: "EditarController",
            controllerAs: "vm",
            templateUrl: "/pages/editar.html",
          }
        }
      }).state("editar-noticias", {
        url: "/editar-noticias",
        name: "editarNoticias",
        views: {
          viewContent: {
            controller: "EditarNoticiasController",
            controllerAs: "vm",
            templateUrl: "/pages/noticias.html",
          }
        }
      }).state("mudanca", {
        url: "/mudanca/:id",
        name: "mudanca",
        views: {
          viewContent: {
            controller: "MudancaController",
            controllerAs: "vm",
            templateUrl: "/pages/mudanca.html",
          }
        }
      });

    $urlRouterProvider.otherwise("/");
  });

angular.module("app").filter('reverse', function () {
  return function (items) {
    if (items !== undefined) {
      return items.slice().reverse();
    }
  };
});