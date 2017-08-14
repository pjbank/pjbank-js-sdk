'use strict';

const BoletoManager = require('./boleto/BoletoManager');
const ExtratoManager = require('./extrato/Extrato');

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

    Extrato(opcoes = {}) {

        const extrato_conta = new ExtratoManager(this._credencial, this._chave);
        return extrato_conta.gerar(opcoes);

    }

}

module.exports = Recebimento;