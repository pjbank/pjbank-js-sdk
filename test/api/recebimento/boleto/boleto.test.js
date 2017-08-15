'use strict';

const PJBankSDK = require('../../../../lib/pjbank');

const Lab = require('lab');
const lab = exports.lab = Lab.script();

const suite = lab.suite;
const test = lab.test;

const expect = require('chai').expect;
const assert = require('chai').assert;

const faker = require('faker');

suite("#Boleto Bancário", () => {

    test('Emitindo um boleto', (done) => {
        
        const PJBank = new PJBankSDK(credencialBoleto, chaveBoleto);

        PJBank.Recebimento.Boletos.NovoBoleto({
            "nome_cliente" : "Cliente de Exemplo",
            "cpf_cliente" : "29454730000144",
            "valor" : 10.50,
            "vencimento" : "12/30/2019"
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
                assert.isTrue(false);
                console.log(err);
                done();
            });

    });

    test('Imprimindo boletos', (done) => {

        const pedidoNumero = faker.random.number();

        const PJBank = new PJBankSDK(credencialBoleto, chaveBoleto);

        PJBank.Recebimento.Boletos.NovoBoleto({
            "nome_cliente" : "Cliente de Exemplo",
            "cpf_cliente" : "29454730000144",
            "valor" : 10.50,
            "vencimento" : "12/30/2019",
            "pedido_numero" : pedidoNumero
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


                PJBank.Recebimento.Boletos.Imprimir([pedidoNumero])
                    .then((lote) => {
 
                        expect(lote).to.have.property('status');
                        assert.equal(lote.status, 200);

                        expect(lote).to.have.property('linkBoleto');
                        done();

                    })
                    .catch((err) => {
                        console.log(err);
                        assert.isTrue(false);
                        done();
                    });

            }).catch((err) => {
                console.log(err);
                assert.isTrue(false);
                done();
            });

    });

});