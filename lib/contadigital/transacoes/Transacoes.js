'use strict';

const APIClient = require('pjbank-api-client');

class Despesas {

    constructor(credencial, chave) {

        this._credencial_conta = credencial;
        this._chave_conta = chave;

    }

    /**
     * Gera uma nova transacão na Conta Digital
     * @param {*} dadosTransacao object
     */
    NovaTransacao(dadosTransacao) {

        var remessa;

        if (dadosTransacao.constructor !== Array) {

            remessa = {
                lote: [dadosTransacao]
            };

        } else {

            remessa = {
                lote: dadosTransacao
            };

        }

        const endpoint = `contadigital/${this._credencial_conta}/transacoes`;
        const headers = {
            "X-CHAVE-CONTA": this._chave_conta
        };

        return APIClient.post(endpoint, remessa, null, headers);

    }

    cancelarTransacao(id_operacao) {

        const endpoint = `contadigital/${this._credencial_conta}/transacoes/${id_operacao}`;
        const headers = {
            "X-CHAVE-CONTA": this._chave_conta
        };

        return APIClient.delete(endpoint, {}, null, headers);
    }

    Extrato(opcoes = {}) {

        const endpoint = `contadigital/${this._credencial_conta}/transacoes`;
        const headers = {
            "X-CHAVE-CONTA": this._chave_conta
        };

        opcoes.formato = "json";

        return APIClient.get(endpoint, opcoes, headers);

    }

    Detalhes(id_operacao) {

        const endpoint = `contadigital/${this._credencial_conta}/transacoes/${id_operacao}`;
        const headers = {
            "X-CHAVE-CONTA": this._chave_conta
        };

        return APIClient.get(endpoint, {}, headers);
    }

}

module.exports = Despesas;
