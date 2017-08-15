'use strict';

const PJBankSDK = require('../../../../lib/pjbank');

const Lab = require('lab');
const lab = exports.lab = Lab.script();

const suite = lab.suite;
const test = lab.test;

const expect = require('chai').expect;
const assert = require('chai').assert;

suite("#CONTADIGITAL - #Informacões da Conta", () => {

    test('Retornando as infos da conta', (done) => {


        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

        PJBank.ContaDigital.MinhaConta()
            .then((dadosConta) => {

                expect(dadosConta).to.have.property('status');
                assert.equal(dadosConta.status, 200);

                expect(dadosConta).to.have.property('msg');
                assert.equal(dadosConta.msg, 'Sucesso');

                expect(dadosConta).to.have.property('data');
                expect(dadosConta.data).to.have.property('nome_empresa');
                expect(dadosConta.data).to.have.property('email');
                expect(dadosConta.data).to.have.property('telefone');
                expect(dadosConta.data).to.have.property('cep');
                expect(dadosConta.data).to.have.property('endereco');
                expect(dadosConta.data).to.have.property('numero');
                expect(dadosConta.data).to.have.property('bairro');
                expect(dadosConta.data).to.have.property('complemento');
                expect(dadosConta.data).to.have.property('cidade');
                expect(dadosConta.data).to.have.property('estado');
                expect(dadosConta.data).to.have.property('status');

                done();
            })
            .catch((err) => {
                console.log(err);
                assert.isTrue(false);
                done();
            });

    });

});