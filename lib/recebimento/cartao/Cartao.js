'use strict';

const APIClient = require('pjbank-api-client');

class Cartao {

    constructor(credencial, chave) {
        this._credencial = credencial;
        this._chave = chave;
    }

    NovaTransacao(dadosPagamento) {

        const endpoint = `recebimentos/${this._credencial}/transacoes`;
        const headers = {
            "X-CHAVE": this._chave
        };

        return APIClient.post(endpoint, dadosPagamento, null, headers);
    }

    Cancelar(tid) {

        const endpoint = `recebimentos/${this._credencial}/transacoes/${tid}`;
        const headers = {
            "Content-type": "application/json",
            "X-CHAVE": this._chave
        };

        return APIClient.delete(endpoint, {}, null, headers);

    }

    Tokenizar(dadosCartao) {
        
        const endpoint = `recebimentos/${this._credencial}/tokens`;
        const headers = {
            "Content-type": "application/json",
            "X-CHAVE": this._chave
        };

        return APIClient.post(endpoint, dadosCartao, null, headers);
    }
}

module.exports = Cartao;
