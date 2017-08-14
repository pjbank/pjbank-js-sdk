'use strict';

const Recebimento = require('./recebimento/Recebimento');
const ContaDigital = require('./contadigital/ContaDigital');

class PJBank {
    constructor(credencial, chave) {
        this._credencial = credencial;
        this._chave = chave;

        this._Recebimento = new Recebimento(this._credencial, this._chave);
        this._ContaDigital = new ContaDigital(this._credencial, this._chave);
    }

    get Recebimento() {
        return this._Recebimento;
    }

    get ContaDigital() {
        return this._ContaDigital;
    }
}



module.exports = PJBank;