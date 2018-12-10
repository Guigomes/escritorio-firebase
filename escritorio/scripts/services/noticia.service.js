(function () {
  "use strict";

  angular.module("app").factory("Noticia", Noticia);

  function Noticia() {
    return {
      salvarNoticia: salvarNoticia,
      listarNoticias: listarNoticias
    };

    function salvarNoticia(noticia, id) {
      /*
      var database = firebase.database();
      
      var ref = database.Reference;

      let newRef = ref.push();

      */
      console.log("id", id);
      if (id !== undefined) {
        return firebase
          .database()
          .ref("noticia/" + id).push()
          .set({
            noticia: noticia
          });
      } else {
        return firebase
          .database()
          .ref("noticia").push()
          .set({
            noticia: noticia
          });
      }

    }

    function listarNoticias() {

      return firebase.database().ref('noticia/').once("value").then(function (user) {
        return user.val();
      });
    }
  }
})();
