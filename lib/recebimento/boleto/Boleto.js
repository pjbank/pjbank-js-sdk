'use strict';

const APIClient = require('pjbank-api-client');

class Boleto {

    constructor(credencial, chave) {
        this._credencial = credencial;
        this._chave = chave;
    }

    NovoBoleto(boletoItens) {

        const endpoint = `recebimentos/${this._credencial}/transacoes`;
        const headers = {
            "Content-type": "application/json",
            "X-CHAVE": this._chave
        };

        return APIClient.post(endpoint, boletoItens, null, headers);
    }

    Imprimir(IdsDosBoletos) {

        const endpoint = `recebimentos/${this._credencial}/transacoes/lotes`;

        const boletos = {
            'pedido_numero': IdsDosBoletos
        };

        const headers = {
            "Content-type": "application/json",
            "X-CHAVE": this._chave
        };

        return APIClient.post(endpoint, boletos, {}, headers);
    }

}


module.exports = Boleto;
