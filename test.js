'use strict';

const debug = require('./lib/utils/debug/pjbank-debug');

const PJBankSDK = require('./lib/pjbank');

const credencial = "d3418668b85cea70aa28965eafaf927cd34d004c";
const chave = "ef947cf5867488f744b82744dd3a8fc4852e529f";

const PJBank = new PJBankSDK(credencial, chave);

const dadosBoleto = {
    "vencimento": "12/30/2019",
    "valor": 50.5,
    "juros": 0,
    "multa": 0,
    "desconto": "",
    "nome_cliente": "Cliente de exemplo",
    "cpf_cliente": "62936576000112",
    "endereco_cliente": "Rua Joaquim Vilac",
    "numero_cliente": "509",
    "complemento_cliente": "",
    "bairro_cliente": "Vila Teixeira",
    "cidade_cliente": "Campinas",
    "estado_cliente": "SP",
    "cep_cliente": "13301510",
    "logo_url": "https://pjbank.com.br/assets/images/logo-pjbank.png",
    "texto": "Exemplo de emissão de boleto",
    "grupo": "Boletos",
    "pedido_numero": "99795"
};

PJBank.Recebimento.Boletos.NovoBoleto(dadosBoleto)
    .then((boleto) => {
        console.log(boleto);
        debug.info(boleto);
    })
    .catch((err) => {
        debug.error(err);
    });