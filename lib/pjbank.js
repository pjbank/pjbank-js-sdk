'use strict';

const Recebimento = require('./recebimento/Recebimento');
const ContaDigital = require('./contadigital/ContaDigital');

class PJBank {

    constructor(credencial, chave) {
        this._credencial = credencial;
        this._chave = chave;

        this._Recebimento = new Recebimento(this._credencial, this._chave);
        this._ContaDigital = new ContaDigital(this._credencial, this._chave);
    }

    get Recebimento() {
        return this._Recebimento;
    }

    get ContaDigital() {
        return this._ContaDigital;
    }

    get Subcontas() {
        return this._ContaDigital.Subcontas;
    }

    developer(flag) {

        if (flag === true) {
            process.env['PJBANK_DEVELOPER_MODE'] = true;
        } else {
            process.env['PJBANK_DEVELOPER_MODE'] = false;
        }

    }

    credenciar(dadosEmpresa) {
        return this._Recebimento.credenciar(dadosEmpresa);
    }

    tokenizar(dadosCartao) {
        return this._Recebimento.Cartao.Tokenizar(dadosCartao);
    }

    boleto(dadosBoleto) {
        return this._Recebimento.Boletos.NovoBoleto(dadosBoleto);
    }

    lote(boletos) {
        return this._Recebimento.Boletos.Imprimir(boletos);
    }

    transacao(dadosTransacao) {
        return this._Recebimento.Cartao.NovaTransacao(dadosTransacao);
    }

    cancelar(transacoes) {
        return this._Recebimento.Cartao.Cancelar(transacoes);
    }

    extrato(dadosExtrato) {
        return this._Recebimento.Extrato(dadosExtrato);
    }
}

module.exports = PJBank;