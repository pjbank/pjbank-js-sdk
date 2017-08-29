'use strict';

const credenciamentoManager = require('./credenciamento/Conta');
const transacoesManager = require('./transacoes/Transacoes');
const subcontaManager = require('./subconta/Subconta');

const recebimentoManager = require('../recebimento/Recebimento');

class ContaDigital {

    constructor(credencial, chave) {
        this._credencial = credencial;
        this._chave = chave;

        this._contaManager = new credenciamentoManager(this._credencial, this._chave);
        this._transacoesManager = new transacoesManager(this._credencial, this._chave);
        this._recebimentoManager = new recebimentoManager(this._credencial, this._chave);
    }


    get Recebimento() {
        return this._recebimentoManager;

    }

    Transacao(dadosTransacao) {
        return this._transacoesManager.NovaTransacao(dadosTransacao);
    }

}

module.exports = ContaDigital;