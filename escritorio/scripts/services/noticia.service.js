(function () {
  "use strict";

  angular.module("app").factory("Noticia", Noticia);

  function Noticia() {
    return {
      salvarNoticia: salvarNoticia,
      listarNoticias: listarNoticias
    };

    function salvarNoticia(noticia) {
      /*
      var database = firebase.database();
      
      var ref = database.Reference;

      let newRef = ref.push();

      */
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
