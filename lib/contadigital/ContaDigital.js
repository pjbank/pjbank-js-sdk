'use strict';

//Conta Digital
const administradoresManager = require('./administradores/Administradores');
const credenciamentoManager = require('./credenciamento/Conta');
const transacoesManager = require('./transacoes/Transacoes');
const subcontaManager = require('./subconta/Subconta');

//Recebimento
const recebimentoManager = require('../recebimento/Recebimento');

/**
 * Conta Digital 
 * Classe responsável por gerenciar e fornecer uma interface de acesso 
 * as funcionalidades da Conta Digital do PJBank
 */
class ContaDigital {

    /**
     * Constructor Conta Digital
     * @param {*} credencial - Credencial utilizada pela Conta Digital
     * @param {*} chave - Chave de autenticacão da Conta Digital
     */
    constructor(credencial, chave) {
        this._credencial = credencial;
        this._chave = chave;

        this._administradoresManager = new administradoresManager(this._credencial, this._chave);
        this._recebimentoManager = new recebimentoManager(this._credencial, this._chave);
        this._transacoesManager = new transacoesManager(this._credencial, this._chave);
        this._contaManager = new credenciamentoManager(this._credencial, this._chave);
        this._subcontasManager = new subcontaManager(this._credencial, this._chave);
    }

    /**
     * Modulo de recebimentos da Conta Digital
     * Responsável pela emissão de boletos bancários e 
     * transacões de Cartão de crédito
     */
    get Recebimento() {
        return this._recebimentoManager;
    }

    /**
     * Modulo de Subcontas da Conta Digital
     */
    get Subcontas() {
        return this._subcontasManager;
    }

    /**
     * Módulo de administradores da Conta Digital
     */
    get Administradores() {
        return this._administradoresManager;
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