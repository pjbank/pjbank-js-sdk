'use strict';

const BoletoManager = require('./boleto/Boleto');
const CartaoManager = require('./cartao/Cartao');
const ExtratoManager = require('./extrato/Extrato');

class Recebimento {

    constructor(credencial, chave) {
        this._credencial = credencial;
        this._chave = chave;

        this._Boleto = new BoletoManager(this._credencial, this._chave);
        this._Cartao = new CartaoManager(this._credencial, this._chave);
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
        return this._Cartao;
    }

    Extrato(opcoes = {}) {
        const extratoConta = new ExtratoManager(this._credencial, this._chave);
        return extratoConta.gerar(opcoes);
    }

    get Bancos() {
        return require('./utilitários/Bancos');
    }

}

module.exports = Recebimento;