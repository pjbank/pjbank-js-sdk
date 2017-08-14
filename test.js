'use strict';

const debug = require('./lib/utils/debug/pjbank-debug');
const PJBankSDK = require('./lib/pjbank');

const credencial = "1264e7bea04bb1c24b07ace759f64a1bd65c8560";
const chave = "ef947cf5867488f744b82744dd3a8fc4852e529f";

const PJBank = new PJBankSDK(credencial, chave);

PJBank.Recebimento.Cartao.NovaTransacao({
        numero_cartao: "4012001037141112",
        nome_cartao: "Cliente Exemplo",
        mes_vencimento: "05",
        ano_vencimento: "2018",
        cpf_cartao: "07727876208",
        email_cartao: "api@pjbank.com.br",
        celular_cartao: "",
        codigo_cvv: "123",
        valor: 1,
    })
    .then((transacao) => {
        console.log(transacao);
    })
    .catch((err) => {
        console.log(err);
    });