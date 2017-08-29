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

    /**
     * Gera uma nova transacão
     * @param {*} dadosTransacao 
     */
    transacao(dadosTransacao) {
        return this._transacoesManager.NovaTransacao(dadosTransacao);
    }

    /**
     * Retorna os detalhes de uma transacao
     * @param {*} id_operacao 
     */
    status(id_operacao) {
        return this._transacoesManager.Detalhes(id_operacao);
    }

    /**
     * Cancela uma transacao pelo id_operacao
     */
    cancelar(id_operacao) {
        return this._transacoesManager.cancelarTransacao(id_operacao);
    }

    /**
     * Gera o extrato da Conta Digital
     * @param {*} opcoes 
     */
    extrato(opcoes = {}) {
        return this._transacoesManager.Extrato(opcoes);
    }

}

module.exports = ContaDigital;