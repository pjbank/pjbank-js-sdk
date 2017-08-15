'use strict';

const debug = require('./lib/utils/debug/pjbank-debug');
const PJBankSDK = require('./lib/pjbank');

const credencial = "1264e7bea04bb1c24b07ace759f64a1bd65c8560";
const chave = "ef947cf5867488f744b82744dd3a8fc4852e529f";

const PJBank = new PJBankSDK(credencial, chave);

const DadosCartao = {
    "nome_cartao": "Cliente Exemplo",
    "numero_cartao": "4012001037141112",
    "mes_vencimento": "05",
    "ano_vencimento": "2018",
    "cpf_cartao": "64111456529",
    "email_cartao": "api@pjbank.com.br",
    "celular_cartao": "978456723",
    "codigo_cvv": "123"
};

PJBank.Recebimento.Cartao.Tokenizar(DadosCartao)
    .then((tokenizacao) => {
        console.log(tokenizacao);
    })
    .catch((err) => {
        console.log(err);
    })