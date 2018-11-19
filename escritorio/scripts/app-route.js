angular
  .module("app")
  .config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {
    $mdThemingProvider
      .theme("default")
      .primaryPalette("red")
      .accentPalette("blue");

    $stateProvider
      .state("/", {
        url: "/",
        name: "/",
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
            templateUrl: "/pages/admin.html"
          }
        }
      });

    $urlRouterProvider.otherwise("/");
  });

angular.module("app").run(run);

function run($window, $rootScope, Authentication) {
  const beforeinstallprompt = function(e) {
    promptEvent = e;
    promptEvent.preventDefault();
    $rootScope.$broadcast("available");

    console.log("before4");
    Authentication.setPromptEvent(promptEvent);
    ga("send", "event", "install", "available");

    return false;
  };

  const installed = function(e) {
    Authentication.setPromptEvent(null);

    // This fires after onbeforinstallprompt OR after manual add to homescreen.
    ga("send", "event", "install", "installed");
  };

  $window.addEventListener("beforeinstallprompt", beforeinstallprompt);
  $window.addEventListener("appinstalled", installed);
}
