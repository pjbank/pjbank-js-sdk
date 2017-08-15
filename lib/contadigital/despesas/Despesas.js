'use strict';

const APIClient = require('pjbank-api-client');

class Despesas {

    constructor(credencial, chave) {

        this._credencial_conta = credencial;
        this._chave_conta = chave;

    }

    NovaDespesa(dadosDespesa) {

        var remessa;

        if (dadosDespesa.constructor !== Array) {

            remessa = {
                lote: [dadosDespesa]
            };

        } else {

            remessa = {
                lote: dadosDespesa
            };

        }

        let endpoint = "contadigital/" + this._credencial_conta + "/despesas";
        let headers = {
            "Content-type": "application/json",
            "X-CHAVE-CONTA": this._chave_conta
        };

        return APIClient.post(endpoint, remessa, null, headers);

    }

    cancelarDespesa(despesa) {

    }

    historico(opcoes = {}) {

        let endpoint = "contadigital/" + this._credencial_conta + "/despesas";
        let headers = {
            "Content-type": "application/json",
            "X-CHAVE-CONTA": this._chave_conta
        };

        return APIClient.get(endpoint, opcoes, headers);

    }

    detalhes(id_operacao) {

        let endpoint = "contadigital/" + this._credencial_conta + "/despesas/" + id_operacao;
        let headers = {
            "Content-type": "application/json",
            "X-CHAVE-CONTA": this._chave_conta
        };

        return APIClient.get(endpoint, {}, headers);
    }

}

module.exports = Despesas;