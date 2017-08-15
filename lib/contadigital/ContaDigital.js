'use strict';

const credenciamento = require('./credenciamento/Conta');
const despesasManager = require('./despesas/Despesas');

class ContaDigital {

    constructor(credencial, chave) {
        this._credencial = credencial;
        this._chave = chave;

        this._conta = new credenciamento(this._credencial, this._chave);
        this._despesasManager = new despesasManager(this._credencial, this._chave);
    }

    MinhaConta() {
        return this._conta.MinhaConta();
    }

    get Despesas() {
        return this._despesasManager;
    }

    get Subcontas() {
        return true;
    }

}

module.exports = ContaDigital;