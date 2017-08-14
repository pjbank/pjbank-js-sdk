'use strict';

const APIClient = require('pjbank-api-client');
class Cartao {

    constructor(credencial, chave) {
        this._credencial = credencial;
        this._chave = chave;
    }

    NovaTransacao(dadosPagamento) {

        let endpoint = "recebimento/" + this._credencial + "/transacoes";
        let headers = {
            "Content-type": "application/json",
            "X-CHAVE": this._chave
        };

        return APIClient.post(endpoint, dadosPagamento, null, headers);
    }

    Cancelar(tid) {

        let endpoint = "recebimento/" + this._credencial + "/transacoes/" + tid;
        let headers = {
            "Content-type": "application/json",
            "X-CHAVE": this._chave
        };

        return APIClient.delete(endpoint, {}, null, headers);

    }

    Tokenizar(dadosCartao) {

        let endpoint = "recebimento/" + this._credencial + "/transacoes";
        let headers = {
            "Content-type": "application/json",
            "X-CHAVE": this._chave
        };

        return APIClient.post(endpoint, dadosCartao, null, headers);
    }
}

module.exports = Cartao;