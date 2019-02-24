(function () {
  "use strict";

  angular.module("app").factory("Textos", Textos);

  function Textos(DadosService) {
    return {
      adicionarTexto: adicionarTexto,
      adicionarFaleConosco: adicionarFaleConosco,

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

    function adicionarFaleConosco(faleconosco) {

      var key = firebase.database().ref().child('faleconosco').push().key;
      return firebase
        .database()
        .ref("faleconosco/" + key)
        .set({
          faleconosco: faleconosco
        }).then(function (response) {}, function (error) {});
    }

    function salvarServicosPrestados(servicos) {

      var servicosSalvar = [];

      for (var i in servicos) {
        let categoria = servicos[i].categoria;
        let servicosIterador = [];
        for (var j in servicos[i].servicos) {
          var servico = servicos[i].servicos[j];

          if (servico.nome !== undefined) {
            servicosIterador.push({
              nome: servico.nome
            });
          }
        }
        servicosSalvar.push({
          categoria: categoria,
          servicos: servicosIterador
        });
      }

      return firebase
        .database()
        .ref("servicos/")
        .set({
          servicos: servicosSalvar
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