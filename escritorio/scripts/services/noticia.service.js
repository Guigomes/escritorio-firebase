(function () {
  "use strict";

  angular.module("app").factory("Noticia", Noticia);

  function Noticia() {
    return {
      salvarNoticia: salvarNoticia,
      atualizarNoticia: atualizarNoticia,
      listarNoticias: listarNoticias
    };

    function atualizarNoticia(noticia, id) {
      var updates = {};
      updates['/noticia/' + id] = {
        noticia: noticia
      };

      return firebase.database().ref().update(updates);

    }

    function salvarNoticia(noticia) {
      return firebase
        .database()
        .ref("noticia").push()
        .set({
          noticia: noticia
        });


    }

    function listarNoticias() {

      return firebase.database().ref('noticia/').once("value").then(function (user) {
        return user.val();
      });
    }
  }
})();