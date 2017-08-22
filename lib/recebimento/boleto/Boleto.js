'use strict';

const APIClient = require('pjbank-api-client');

class Boleto {

    constructor(credencial, chave) {
        this._credencial = credencial;
        this._chave = chave;
    }

    NovoBoleto(boletoItens) {

        let endpoint = `recebimentos/${this._credencial}/transacoes`;
        let headers = {
            "Content-type": "application/json",
            "X-CHAVE": this._chave
        };

        return APIClient.post(endpoint, boletoItens, null, headers);
    }

    Imprimir(IdsDosBoletos) {

        let endpoint = `recebimentos/${this._credencial}/transacoes/lotes`;

        let boletos = {
            'pedido_numero': IdsDosBoletos
        };

        let headers = {
            "Content-type": "application/json",
            "X-CHAVE": this._chave
        };

        return APIClient.post(endpoint, boletos, {}, headers);
    }

}


module.exports = Boleto;