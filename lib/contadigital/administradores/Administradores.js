'use strict';

const APIClient = require('pjbank-api-client');

class Administradores {

    constructor(credencial, chave) {
        this._credencial_conta = credencial;
        this._chave_conta = chave;
    }

    convidar(email) {

        const endpoint = `contadigital/${this._credencial_conta}/administradores`;

        const headers = {
            "X-CHAVE-CONTA": this._chave_conta
        };

        const body = {
            email: email
        };

        return APIClient.post(endpoint, body, null, headers);

    }

    desativar(email) {

        const endpoint = `contadigital/${this._credencial_conta}/administradores/${email}`;

        const headers = {
            "X-CHAVE-CONTA": this._chave_conta
        };

        return APIClient.delete(endpoint, {}, null, headers);

    }

    listar() {

        const endpoint = `contadigital/${this._credencial_conta}/administradores`;

        const headers = {
            "X-CHAVE-CONTA": this._chave_conta
        };

        return APIClient.get(endpoint, {}, headers);

    }


}

module.exports = Administradores;
