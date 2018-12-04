(function () {
  "use strict";

  angular.module("app").factory("Textos", Textos);

  function Textos() {
    return {
      adicionarTexto: adicionarTexto,
      buscarTexto: buscarTexto,
      salvarServicosPrestados: salvarServicosPrestados,
      listarServicosPrestados: listarServicosPrestados
    };

    function adicionarTexto(id, texto) {
      return firebase
        .database()
        .ref("textos/" + id)
        .set({
          texto: texto
        });
    }

    function salvarServicosPrestados(servicos) {
      return firebase
        .database()
        .ref("servicos/")
        .set({
          servicos: servicos
        });
    }

    function listarServicosPrestados() {

      return firebase.database().ref('servicos/').once("value").then(function (user) {
        return user.val();
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
