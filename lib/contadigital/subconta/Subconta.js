'use strict';

const APIClient = require('pjbank-api-client');
class Subconta {

    constructor(credencial, chave) {
        this._credencial = credencial;
        this._chave = chave;
    }

    subconta(hash_conta) {

        const endpoint = `contadigital/${this._credencial}/subcontas/${hash_conta}`;
        const headers = {
            "X-CHAVE-CONTA": this._chave
        };

        return APIClient.get(endpoint, {}, headers);
    }

    criarSubconta(dadosSubconta) {
        
        const endpoint = `contadigital/${this._credencial}/subcontas`;
        const headers = {
            "X-CHAVE-CONTA": this._chave
        };

        return APIClient.post(endpoint, dadosSubconta, null, headers);
    }

    adicionarSaldo(hash_conta, valor) {

        const endpoint = `contadigital/${this._credencial}/subcontas/${hash_conta}`;

        const postData = {
            "valor": valor
        };

        const headers = {
            "X-CHAVE-CONTA": this._chave
        };

        return APIClient.post(endpoint, postData, null, headers);
    }


}

module.exports = Subconta;
