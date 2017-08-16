'use strict';

const APIClient = require('pjbank-api-client');
class Subconta {

    constructor(credencial, chave) {
        this._credencial = credencial;
        this._chave = chave;
    }

    informacoes(hash_conta) {

        let endpoint = `contadigital/${this._credencial_conta}/subconta/${hash_conta}`;
        let headers = {
            "Content-type": "application/json",
            "X-CHAVE-CONTA": this._chave_conta
        };

        return APIClient.get(endpoint, {}, headers);
    }

    criarSubconta(dadosSubconta) {
        let endpoint = `contadigital/${this._credencial_conta}/subconta`;
        let headers = {
            "Content-type": "application/json",
            "X-CHAVECONTA": this._chave_conta
        };

        return APIClient.post(endpoint, dadosSubconta, null, headers);
    }

    adicionarSaldo(hash_conta, valor) {

        let endpoint = `contadigital/${this._credencial_conta}/subconta/${hash_conta}`;

        let postData = {
            "valor": valor
        };

        let headers = {
            "Content-type": "application/json",
            "X-CHAVECONTA": this._chave_conta
        };

        return APIClient.post(endpoint, postData, null, headers);
    }


}

module.exports = Subconta;