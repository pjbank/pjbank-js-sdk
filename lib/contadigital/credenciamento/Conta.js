'use strict';

const APIClient = require('pjbank-api-client');

class Conta {

    constructor(credencial, chave) {

        this._credencial_conta = credencial;
        this._chave_conta = chave;

    }

    MinhaConta() {

        let endpoint = `contadigital/${this._credencial_conta}`;
        let headers = {
            "Content-type": "application/json",
            "X-CHAVE-CONTA": this._chave_conta
        };

        return APIClient.get(endpoint, {}, headers);
    }

    adicionarSaldo(valor) {

        let endpoint = `contadigital/${this._credencial}`;

        let postData = {
            "valor": valor
        };

        let headers = {
            "X-CHAVE-CONTA": this._chave
        };

        return APIClient.post(endpoint, postData, null, headers);
    }



}

module.exports = Conta;