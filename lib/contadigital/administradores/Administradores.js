'use strict';

const APIClient = require('pjbank-api-client');

class Administradores {

    constructor(credencial, chave) {
        this._credencial_conta = credencial;
        this._chave_conta = chave;
    }

    convidar(email) {

        let endpoint = `contadigital/${this._credencial_conta}/administradores`;

        let headers = {
            "X-CHAVE-CONTA": this._chave_conta
        };

        const body = {
            email: email
        };

        return APIClient.post(endpoint, body, null, headers);

    }

    desativar(email) {

        let endpoint = `contadigital/${this._credencial_conta}/administradores/${email}`;

        let headers = {
            "X-CHAVE-CONTA": this._chave_conta
        };

        return APIClient.delete(endpoint, {}, null, headers);

    }

    listar() {

        let endpoint = `contadigital/${this._credencial_conta}/administradores`;

        let headers = {
            "X-CHAVE-CONTA": this._chave_conta
        };

        return APIClient.get(endpoint, {}, headers);

    }


}

module.exports = Administradores;