'use strict';

const PJBankSDK = require('../../../../lib/pjbank');

const Lab = require('lab');
const lab = exports.lab = Lab.script();

const suite = lab.suite;
const test = lab.test;

const expect = require('chai').expect;
const assert = require('chai').assert;

const moment = require('moment');

suite("#CONTADIGITAL - #Subcontas", () => {

    test('Criando uma Subconta', done => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

        const dadosSubconta = {
            data_nascimento: "06/01/1995",
            sexo: "M",
            tipo: "cartao_corporativo",
            valor: "7.50",
            cnpj: "24351345000158",
            nome_cartao: "Cliente de teste",
            email: "api@pjbank.com.br"
        };

        PJBank.Subcontas.criarSubconta(dadosSubconta)
            .then(subconta => {

                expect(subconta).to.have.property('id_unico');
                expect(subconta).to.have.property('link_boleto');
                expect(subconta).to.have.property('linha_digitavel');
                expect(subconta).to.have.property('subconta');
                expect(subconta).to.have.property('numero_cartao');

                done();
            })
            .catch(err => {
                console.log(err);
                done(err);
            });

    });


    test('Consultando dados de uma Subconta', done => {
        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

        const subconta = "c912936cf31980ca84c23194f64b27fedfe0d718";

        PJBank.Subcontas.subconta(subconta)
            .then(infos => {

                expect(infos).to.have.property('nome_cartao');
                expect(infos).to.have.property('documento');
                expect(infos).to.have.property('email');
                expect(infos).to.have.property('data_inicio');
                expect(infos).to.have.property('data_bloqueio');
                expect(infos).to.have.property('cep');
                expect(infos).to.have.property('endereco');
                expect(infos).to.have.property('bairro');
                expect(infos).to.have.property('complemento');
                expect(infos).to.have.property('cidade');
                expect(infos).to.have.property('estado');
                expect(infos).to.have.property('numero_cartao');

                done();
            })
            .catch(err => {
                console.log(err);
                done(err);
            });

    });

    test('Adicionando saldo a uma Subconta', done => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);
        const subconta = "c912936cf31980ca84c23194f64b27fedfe0d718";
        const valorDeSaldo = 150.30;

        PJBank.Subcontas.adicionarSaldo(subconta, valorDeSaldo)
            .then(boleto => {
                expect(boleto).to.have.property('id_unico');
                expect(boleto).to.have.property('link_boleto');
                expect(boleto).to.have.property('linha_digitavel');
                done();
            })
            .catch(err => {
                done(err);
            });

    });


    test('Realizando uma transferência de saldo para a subconta', done => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);
        const subconta = "c912936cf31980ca84c23194f64b27fedfe0d718";
        const valorDeSaldo = 150.30;

        const dadosTransacao = {
            'conta_destino': subconta,
            'data_pagamento': moment().format('MM/DD/YYYY'),
            'valor': 15.50
        };

        PJBank.ContaDigital.transacao(dadosTransacao)
            .then(transacao => {
                expect(transacao).to.have.property('msg');
                expect(transacao).to.have.property('id_operacao');
                expect(transacao).to.have.property('data_pagamento');
                done();
            })
            .catch(err => {
                console.log(err);
                done(err);
            });

    });

});