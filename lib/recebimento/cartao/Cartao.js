'use strict';

const APIClient = require('pjbank-api-client');
class Cartao {

    constructor(credencial, chave) {
        this._credencial = credencial;
        this._chave = chave;
    }

    NovaTransacao(dadosPagamento) {

        let endpoint = `recebimentos/${this._credencial}/transacoes`;
        let headers = {
            "X-CHAVE": this._chave
        };

        return APIClient.post(endpoint, dadosPagamento, null, headers);
    }

    Cancelar(tid) {

        let endpoint = `recebimentos/${this._credencial}/transacoes/${tid}`;
        let headers = {
            "Content-type": "application/json",
            "X-CHAVE": this._chave
        };

        return APIClient.delete(endpoint, {}, null, headers);

    }

    Tokenizar(dadosCartao) {
        let endpoint = `recebimentos/${this._credencial}/tokens`;
        let headers = {
            "Content-type": "application/json",
            "X-CHAVE": this._chave
        };

        return APIClient.post(endpoint, dadosCartao, null, headers);
    }
}

module.exports = Cartao;