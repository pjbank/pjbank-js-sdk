'use strict';

const PJBankSDK = require('../../../../lib/pjbank');

const Lab = require('lab');
const lab = exports.lab = Lab.script();

const suite = lab.suite;
const test = lab.test;

const expect = require('chai').expect;
const assert = require('chai').assert;

const faker = require('faker');

suite("#CONTADIGITAL - #RECEBIMENTO #BoletoBancario", () => {

    test('Emitindo um boleto', (done) => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

        PJBank.boleto({
            "nome_cliente": "Cliente de Exemplo",
            "cpf_cliente": "29454730000144",
            "valor": 10.50,
            "vencimento": "12/30/2019"
        }).then((boleto) => {

            expect(boleto).to.have.property('status');
            assert.equal(boleto.status, 201);
            expect(boleto).to.have.property('msg');
            assert.equal(boleto.msg, 'Sucesso.');

            expect(boleto).to.have.property('nossonumero');
            expect(boleto).to.have.property('id_unico');
            expect(boleto).to.have.property('banco_numero');
            expect(boleto).to.have.property('token_facilitador');
            expect(boleto).to.have.property('credencial');
            expect(boleto).to.have.property('linkBoleto');
            expect(boleto).to.have.property('linhaDigitavel');

            done();
        }).catch((err) => {
            console.log(err);
            done(err);
        });

    });


    test('Emitindo boletos em lote', (done) => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);
        PJBank.boleto({
            cobrancas: [{
                    "nome_cliente": "Cliente de Exemplo",
                    "cpf_cliente": "29454730000144",
                    "valor": 10.50,
                    "vencimento": "12/30/2019"
                },
                {
                    "nome_cliente": "Cliente de Exempl2o",
                    "cpf_cliente": "29454730000144",
                    "valor": 15.50,
                    "vencimento": "12/30/2019"
                }
            ]
        }).then((boletos) => {

            expect(boletos).to.be.a('array');
            expect(boletos).to.have.length(2);

            expect(boletos[0]).to.have.property('status');
            assert.equal(boletos[0].status, 201);
            expect(boletos[0]).to.have.property('msg');
            assert.equal(boletos[0].msg, 'Sucesso.');

            expect(boletos[0]).to.have.property('nossonumero');
            expect(boletos[0]).to.have.property('id_unico');
            expect(boletos[0]).to.have.property('banco_numero');
            expect(boletos[0]).to.have.property('token_facilitador');
            expect(boletos[0]).to.have.property('credencial');
            expect(boletos[0]).to.have.property('linkBoleto');
            expect(boletos[0]).to.have.property('linhaDigitavel');

            expect(boletos[1]).to.have.property('nossonumero');
            expect(boletos[1]).to.have.property('id_unico');
            expect(boletos[1]).to.have.property('banco_numero');
            expect(boletos[1]).to.have.property('token_facilitador');
            expect(boletos[1]).to.have.property('credencial');
            expect(boletos[1]).to.have.property('linkBoleto');
            expect(boletos[1]).to.have.property('linhaDigitavel');

            done();
        }).catch((err) => {
            console.log(err);
            done(err);
        });

    });

    test('Imprimindo boletos', (done) => {

        const pedidoNumero = faker.random.number();

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);
        PJBank.boleto({
            "nome_cliente": "Cliente de Exemplo",
            "cpf_cliente": "29454730000144",
            "valor": 10.50,
            "vencimento": "12/30/2019",
            "pedido_numero": pedidoNumero
        }).then((boleto) => {

            expect(boleto).to.have.property('status');
            assert.equal(boleto.status, 201);
            expect(boleto).to.have.property('msg');
            assert.equal(boleto.msg, 'Sucesso.');

            expect(boleto).to.have.property('nossonumero');
            expect(boleto).to.have.property('id_unico');
            expect(boleto).to.have.property('banco_numero');
            expect(boleto).to.have.property('token_facilitador');
            expect(boleto).to.have.property('credencial');
            expect(boleto).to.have.property('linkBoleto');
            expect(boleto).to.have.property('linhaDigitavel');

            PJBank.lote([pedidoNumero])
                .then((lote) => {

                    expect(lote).to.have.property('status');
                    assert.equal(lote.status, 200);

                    expect(lote).to.have.property('linkBoleto');
                    done();

                })
                .catch((err) => {
                    console.log(err);
                    assert.isTrue(false);
                    done(err);
                });

        }).catch((err) => {
            console.log(err);
            done(err);
        });

    });

});