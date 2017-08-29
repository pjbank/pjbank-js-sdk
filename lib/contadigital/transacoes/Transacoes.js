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

        let endpoint = `contadigital/${this._credencial_conta}/transacoes`;
        let headers = {
            "Content-type": "application/json",
            "X-CHAVE-CONTA": this._chave_conta
        };

        return APIClient.post(endpoint, remessa, null, headers);

    }

    cancelarDespesa(despesa) {

        var remessa;

        if (despesa.constructor !== Array) {

            remessa = {
                "id_operacao": [despesa]
            };

        } else {

            remessa = {
                "id_operacao": despesa
            };

        }

        let endpoint = `contadigital/${this._credencial_conta}/despesas`;
        let headers = {
            "Content-type": "application/json",
            "X-CHAVE-CONTA": this._chave_conta
        };

        return APIClient.delete(endpoint, remessa, null, headers);
    }

    historico(opcoes = {}) {

        let endpoint = `contadigital/${this._credencial_conta}/despesas`;
        let headers = {
            "Content-type": "application/json",
            "X-CHAVE-CONTA": this._chave_conta
        };

        return APIClient.get(endpoint, opcoes, headers);

    }

    detalhes(id_operacao) {

        let endpoint = `contadigital/${this._credencial_conta}/despesas/${id_operacao}`;
        let headers = {
            "Content-type": "application/json",
            "X-CHAVE-CONTA": this._chave_conta
        };

        return APIClient.get(endpoint, {}, headers);
    }

}

module.exports = Despesas;