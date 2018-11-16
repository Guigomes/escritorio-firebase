(function() {
  "use strict";

  angular.module("app").factory("DadosService", DadosService);

  function DadosService() {
    var vm = this;

    vm.servicosContabeis = [
      {
        categoria: "Departamento Fiscal",
        servicos: [
          "Orientação e controle de aplicação dos dispositivos legais vigentes sejam Federais, Estaduais ou Municipais",
          "Apuração e controle dos impostos Federais, Estaduais e Municipais",
          "Escrituração de registros fiscais de todos os livros e arquivos eletrônicos/ magnéticos obrigatórios perante os órgãos competentes",
          "Escrituração do registro fiscal do ISS",
          "Atendimento das demais exigências previstas na legislação",
          "Atendimento a fiscalizações"
        ]
      },
      {
        categoria: "Departamento Societário",
        servicos: [
          "Elaboração de Contratos Sociais/ Estatutos",
          "Abertura, baixa e regularização de empresas",
          "Alvarás de funcionamento e sanitários",
          "Registro de vigilância sanitária, CRM, e demais órgãos competentes",
          "Alteração Contratual/ Estatutos",
          "Obtenção de Certidões Negativas junto aos Órgãos competentes"
        ]
      },
      {
        categoria: "Departamento Contábil",
        servicos: [
          "Classificação Contábil de acordo com normas e princípios contábeis vigentes",
          "Emissão de Balancetes",
          "Elaboração de Balanço Patrimonial e Demonstração de Resultado do Exercício",
          "Elaboração das Declarações obrigatórias",
          "Declaração Imposto de Renda Pessoa Jurídica"
        ]
      },
      {
        categoria: "Assessoria Tributária",
        servicos: [
          "Planejamento tributário visando redução da carga tributária de forma legal e segura",
          "Assessoramento permanente na elucidação das mais diversas dúvidas tributárias",
          "Acompanhamento em tempo real a sua empresa de caráter preventivo",
          "Disponibilização de profissionais capacitados para Reuniões e no auxílio na tomada de decisões",
          "Revisão de impostos pagos em bases periódicos"
        ]
      },
      {
        categoria: "Serviço de Coleta",
        servicos: [
          "Disponibilização de funcionário para efetuar a coleta e entrega dos documentos, ficando a cargo do cliente somente a separação dos mesmos na data prevista."
        ]
      },
      {
        categoria: "Departamento Pessoal",
        servicos: [
          "Confecção de Contrato de experiência",
          "Representação da empresa perante Sindicatos",
          "Comunicação admissão e demissão ao Ministério Público",
          "Confecção da Folha de Pagamento e Contracheque",
          "FGTS | INSS",
          "Rescisões trabalhistas com acompanhamento no sindicato",
          "Recibo de férias",
          "Carta de apresentação de empregados",
          "Seguro desemprego",
          "Recibo de responsabilidade de salário família",
          "Recibo de vale transporte",
          "Guia Sindical patronal e Empregado",
          "Comprovante de rendimento (empregador e empregado)",
          "Quadro de Horário de Empregado",
          "Décimo terceiro salário",
          "Atendimento a fiscalizações"
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
