'use strict';

const APIClient = require('pjbank-api-client');

const Boleto = require('./Boleto');

class BoletoManager {

    constructor(credencial, chave) {
        this._credencial = credencial;
        this._chave = chave;
    }

    NovoBoleto(boletoItens) {

        boletoItens.credencial = this._credencial;
        boletoItens.chave = this._chave;

        let endpoint = "recebimento/" + boletoItens.credencial + "/transacoes";
        let headers = {
            "Content-type": "application/json",
            "X-CHAVE": boletoItens.chave
        };

        delete boletoItens.chave;
        delete boletoItens.credencial;


        return APIClient.post(endpoint, boletoItens, null, headers);
    }

}


module.exports = BoletoManager;