'use strict';

const APIClient = require('pjbank-api-client');
class Subconta {

    constructor(credencial, chave) {
        this._credencial = credencial;
        this._chave = chave;
    }

    subconta(hash_conta) {

        let endpoint = `contadigital/${this._credencial}/subcontas/${hash_conta}`;
        let headers = {
            "X-CHAVE-CONTA": this._chave
        };

        return APIClient.get(endpoint, {}, headers);
    }

    criarSubconta(dadosSubconta) {
        let endpoint = `contadigital/${this._credencial}/subcontas`;
        let headers = {
            "X-CHAVE-CONTA": this._chave
        };

        return APIClient.post(endpoint, dadosSubconta, null, headers);
    }

    adicionarSaldo(hash_conta, valor) {

        let endpoint = `contadigital/${this._credencial}/subcontas/${hash_conta}`;

        let postData = {
            "valor": valor
        };

        let headers = {
            "X-CHAVE-CONTA": this._chave
        };

        return APIClient.post(endpoint, postData, null, headers);
    }


}

module.exports = Subconta;