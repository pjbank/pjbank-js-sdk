'use strict';

const credenciamentoManager = require('./credenciamento/Conta');
const despesasManager = require('./despesas/Despesas');
const subcontaManager = require('./subconta/Subconta');

const recebimentoManager = require('../recebimento/Recebimento');

class ContaDigital {

    constructor(credencial, chave) {
        this._credencial = credencial;
        this._chave = chave;

        this._contaManager = new credenciamentoManager(this._credencial, this._chave);
        this._despesasManager = new despesasManager(this._credencial, this._chave);
        this._recebimentoManager = new recebimentoManager(this._credencial, this._chave);
    }

    MinhaConta() {
        return this._contaManager.MinhaConta();
    }

    get Despesas() {
        return this._despesasManager;
    }

    get Subcontas() {
        return true;
    }

    get Recebimento() {
        return this._recebimentoManager;

    }



}

module.exports = ContaDigital;