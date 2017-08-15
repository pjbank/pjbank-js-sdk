'use strict';

class Despesas {

    constructor(credencial, chave) {

        this._credencial_conta = credencial;
        this._chave_conta = chave;

    }

    novaDespesa(dadosDespesa) {

        let endpoint = "contadigital/" + this._credencial_conta + "/despesas";
        let headers = {
            "Content-type": "application/json",
            "X-CHAVE-CONTA": this._chave_conta
        };

        return APIClient.post(endpoint, dadosDespesa, null, headers);

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