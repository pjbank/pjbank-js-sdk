'use strict';

const PJBankSDK = require('../../../../lib/pjbank');

const Lab = require('lab');
const lab = exports.lab = Lab.script();

const suite = lab.suite;
const test = lab.test;

const expect = require('chai').expect;
const assert = require('chai').assert;

suite("#RECEBIMENTOS - #Credenciamento", () => {

    test('Credenciamento de uma conta para receber com Cartão de Crédito', (done) => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

        const dadosEmpresa = {
            "nome_empresa": "Empresa de Exemplo",
            "conta_repasse": "99999-9",
            "agencia_repasse": "0001",
            "banco_repasse": "001",
            "cnpj": "50282264000153",
            "ddd": "19",
            "telefone": "40096830",
            "email": "atendimento@pjbank.com.br",
            "cartao": true
        };

        PJBank.credenciar(dadosEmpresa)
            .then(credenciais => {
                console.log(credenciais);
                expect(credenciais).to.have.property('status');
                expect(credenciais).to.have.property('msg');
                expect(credenciais).to.have.property('credencial');
                expect(credenciais).to.have.property('chave');
                assert.equal(credenciais.status, 201);
                done();
            })
            .catch(err => {
                console.log(err);
                done(err);
            });


    });

});