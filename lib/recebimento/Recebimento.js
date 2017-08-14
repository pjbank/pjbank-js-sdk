'use strict';

const BoletoManager = require('./boleto/BoletoManager');

class Recebimento {

    constructor(credencial, chave) {
        this._credencial = credencial;
        this._chave = chave;

        this._Boleto = new BoletoManager(this._credencial, this._chave);
    }

    get credencial() {
        return this._credencial;
    }

    get chave() {
        return this._chave;
    }

    get Boletos() {
        return this._Boleto;
    }

    get Cartao() {

    }

}

module.exports = Recebimento;