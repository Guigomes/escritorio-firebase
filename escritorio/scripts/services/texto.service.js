(function() {
  "use strict";

  angular.module("app").factory("Textos", Textos);

  function Textos() {
    return {
      adicionarTexto: adicionarTexto
    };

    function adicionarTexto(id, texto) {
     alert("TESTE");
      return firebase
        .database()
        .ref("textos/" + id)
        .set({
          texto: texto
        });
    }

    function buscarUsuario(userId) {
      if (userId === undefined) {
        let usuario = Usuario.getUsuario();
        userId = usuario.uid;
      }
      return firebase
        .database()
        .ref("/users/" + userId)
        .once("value")
        .then(function(user) {
          return user.val();
        });
    }
  }
})();
