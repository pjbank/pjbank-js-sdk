"use strict";

const PJBankSDK = require("./lib/pjbank");

const PJBank = new PJBankSDK("eb2af021c5e2448c343965a7a80d7d090eb64164", "a834d47e283dd12f50a1b3a771603ae9dfd5a32c");

PJBank.developer(true);

const DadosTransacao = {
    data_vencimento: "09/30/2017",
    data_pagamento: "09/30/2017",
    valor: 20.0,
    banco_favorecido: "033",
    agencia_favorecido: "1111",
    conta_favorecido: "11111",
    cnpj_favorecido: "45475754000136",
    nome_favorecido: "Cliente Exemplo",
    identificador: "123123",
    descricao: "Descrição de exemplo",
    solicitante: "Teste DOC/TED",
    tipo_conta_favorecido: "corrente"
};

PJBank.ContaDigital.transacao(DadosTransacao)
    .then((transacao) => {
        console.log(transacao);
    })
    .catch(err => {
        console.log(err);
    });

// 'use strict';
// const request = require('request');

// request.post("https://api.pjbank.com.br/contadigital/eb2af021c5e2448c343965a7a80d7d090eb64164/transacoes", {
//     json: {
//         "lote": [{
//             "data_vencimento": "09/30/2017",
//             "data_pagamento": "09/30/2017",
//             "valor": 20,
//             "banco_favorecido": "033",
//             "agencia_favorecido": "1111",
//             "conta_favorecido": "11111",
//             "cnpj_favorecido": "45475754000136",
//             "nome_favorecido": "Cliente Exemplo",
//             "identificador": "123123",
//             "descricao": "Descrição de exemplo",
//             "solicitante": "Teste DOC/TED",
//             "tipo_conta_favorecido": "corrente"
//         }]
//     },
//     "headers": {
//         "content-type": "application/json",
//         "X-CHAVE-CONTA": "a834d47e283dd12f50a1b3a771603ae9dfd5a32c"
//     }
// }, function(err, res) {
//     console.log(err, res.body);
// });