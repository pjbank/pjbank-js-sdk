'use strict';

const APIClient = require('pjbank-api-client');

class Extrato {

    constructor(credencial, chave) {
        this._credencial = credencial;
        this._chave = chave;
    }

    gerar(opcoes = {}) {

        const endpoint = `recebimentos/${this._credencial}/transacoes`;

        const headers = {
            "Content-type": "application/json",
            "X-CHAVE": this._chave
        };

        return APIClient.get(endpoint, opcoes, headers);
    }
}

module.exports = Extrato;
