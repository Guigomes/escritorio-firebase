(function () {
  "use strict";

  angular.module("app").factory("Textos", Textos);

  function Textos() {
    return {
      adicionarTexto: adicionarTexto,
      buscarTexto: buscarTexto
    };

    function adicionarTexto(id, texto) {
      return firebase
        .database()
        .ref("textos/" + id)
        .set({
          texto: texto
        });
    }

    function buscarTexto(textoId) {

      return firebase
        .database()
        .ref("/textos/" + textoId)
        .once("value")
        .then(function (user) {
          return user.val();
        });
    }
  }
})();
