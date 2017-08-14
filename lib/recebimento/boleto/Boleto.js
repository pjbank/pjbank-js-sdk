'use strict';

const APIClient = require('pjbank-api-client');

class Boleto {

    constructor(credencial, chave) {
        this._credencial = credencial;
        this._chave = chave;
    }

    NovoBoleto(boletoItens) {

        boletoItens.credencial = this._credencial;
        boletoItens.chave = this._chave;

        let endpoint = "recebimento/" + this._credencial + "/transacoes";
        let headers = {
            "Content-type": "application/json",
            "X-CHAVE": boletoItens.chave
        };

        delete boletoItens.chave;
        delete boletoItens.credencial;


        return APIClient.post(endpoint, boletoItens, null, headers);
    }

    Imprimir(IdsDosBoletos) {

        let endpoint = "recebimento/" + this._credencial + "/transacoes/imprimir";

        let boletos = {
            'pedido_numero': IdsDosBoletos
        };

        let headers = {
            "Content-type": "application/json",
            "X-CHAVE": this._chave
        };

        return APIClient.post(endpoint, boletos, null, headers);
    }

}


module.exports = Boleto;