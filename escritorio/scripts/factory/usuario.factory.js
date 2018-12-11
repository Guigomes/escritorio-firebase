(function () {
  "use strict";

  angular.module("app").factory("DadosService", DadosService);

  function DadosService() {
    var vm = this;

    vm.servicosContabeis = [
      {
        categoria: "Departamento Fiscal",
        servicos: [
          { nome: "Orientação e controle de aplicação dos dispositivos legais vigentes sejam Federais, Estaduais ou Municipais" },
          { nome: "Apuração e controle dos impostos Federais, Estaduais e Municipais" },
          { nome: "Escrituração de registros fiscais de todos os livros e arquivos eletrônicos/ magnéticos obrigatórios perante os órgãos competentes" },
          { nome: "Escrituração do registro fiscal do ISS" },
          { nome: "Atendimento das demais exigências previstas na legislação" },
          { nome: "Atendimento a fiscalizações" }
        ]
      },
      {
        categoria: "Departamento Societário",
        servicos: [
          { nome: "Elaboração de Contratos Sociais/ Estatutos" },
          { nome: "Abertura, baixa e regularização de empresas" },
          { nome: "Alvarás de funcionamento e sanitários" },
          { nome: "Registro de vigilância sanitária, CRM, e demais órgãos competentes" },
          { nome: "Alteração Contratual/ Estatutos" },
          { nome: "Obtenção de Certidões Negativas junto aos Órgãos competentes" }
        ]
      },
      {
        categoria: "Departamento Contábil",
        servicos: [
          { nome: "Classificação Contábil de acordo com normas e princípios contábeis vigentes" },
          { nome: "Emissão de Balancetes" },
          { nome: "Elaboração de Balanço Patrimonial e Demonstração de Resultado do Exercício" },
          { nome: "Elaboração das Declarações obrigatórias" },
          { nome: "Declaração Imposto de Renda Pessoa Jurídica" }
        ]
      },
      {
        categoria: "Assessoria Tributária",
        servicos: [
          { nome: "Planejamento tributário visando redução da carga tributária de forma legal e segura" },
          { nome: "Assessoramento permanente na elucidação das mais diversas dúvidas tributárias" },
          { nome: "Acompanhamento em tempo real a sua empresa de caráter preventivo" },
          { nome: "Disponibilização de profissionais capacitados para Reuniões e no auxílio na tomada de decisões" },
          { nome: "Revisão de impostos pagos em bases periódicos" }
        ]
      },
      {
        categoria: "Serviço de Coleta",
        servicos: [
          { nome: "Disponibilização de funcionário para efetuar a coleta e entrega dos documentos, ficando a cargo do cliente somente a separação dos mesmos na data prevista." }
        ]
      },
      {
        categoria: "Departamento Pessoal",
        servicos: [
          { nome: "Confecção de Contrato de experiência" },
          { nome: "Representação da empresa perante Sindicatos" },
          { nome: "Comunicação admissão e demissão ao Ministério Público" },
          { nome: "Confecção da Folha de Pagamento e Contracheque" },
          { nome: "FGTS | INSS" },
          { nome: "Rescisões trabalhistas com acompanhamento no sindicato" },
          { nome: "Recibo de férias" },
          { nome: "Carta de apresentação de empregados" },
          { nome: "Seguro desemprego" },
          { nome: "Recibo de responsabilidade de salário família" },
          { nome: "Recibo de vale transporte" },
          { nome: "Guia Sindical patronal e Empregado" },
          { nome: "Comprovante de rendimento (empregador e empregado)" },
          { nome: "Quadro de Horário de Empregado" },
          { nome: "Décimo terceiro salário" },
          { nome: "Atendimento a fiscalizações" }
        ]
      }
    ];

    vm.textoQuemSomos =
      "Criado em 1993 com o intuito de auxiliar os empresários a gerir suas empresas de maneira mais eficaz e econômica, o Escritório Contábil Aquarius hoje com mais de 25 anos no mercado, conta com uma profunda experiência nos mais diversos ramos do setor empresarial. Com uma equipe capacitada e experiente, prestamos serviços nas áreas contábil, fiscal, departamento pessoal, consultoria, assessoria tributária, dentre outros, proporcionando aos clientes um suporte completo, que abrange não só as necessidades do dia a dia, mas também todas aquelas necessárias para tomadas de decisões emergentes. Em constante atualização com a legislação e as tendências do mercado, nossos profissionais prestam toda assessoria necessária para que sua empresa otimize os custos visando uma maior lucratividade.";
    var service = {

      servicosContabeis: vm.servicosContabeis,
      textoQuemSomos: vm.textoQuemSomos
    };

    return service;
  }
})();
