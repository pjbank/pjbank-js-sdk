'use strict';

const PJBankSDK = require('../../../../lib/pjbank');

const Lab = require('lab');
const lab = exports.lab = Lab.script();

const suite = lab.suite;
const test = lab.test;

const expect = require('chai').expect;
const assert = require('chai').assert;


suite("#Cartão de Crédito", () => {
    
        test('Criando uma transacao sem Token', (done) => {

            const PJBank = new PJBankSDK(credencialCartao, chaveCartao);
            
            PJBank.Recebimento.Cartao.NovaTransacao({
                    numero_cartao: "4012001037141112",
                    nome_cartao: "Cliente Exemplo",
                    mes_vencimento: "05",
                    ano_vencimento: "2018",
                    cpf_cartao: "07727876208",
                    email_cartao: "api@pjbank.com.br",
                    celular_cartao: "",
                    codigo_cvv: "123",
                    valor: 1,
                })
                .then((transacao) => {

                    expect(transacao).to.have.property('status');
                    assert.equal(transacao.status, 201);
                    expect(transacao).to.have.property('msg');
                    assert.equal(transacao.msg, 'Transacao capturada com sucesso');

                    expect(transacao).to.have.property('token_cartao');
                    expect(transacao).to.have.property('tid');
                    expect(transacao).to.have.property('previsao_credito');
                    expect(transacao).to.have.property('tid_conciliacao');
                    expect(transacao).to.have.property('bandeira');
                    expect(transacao).to.have.property('autorizacao');
                    expect(transacao).to.have.property('cartao_truncado');
                    expect(transacao).to.have.property('statuscartao');
                    expect(transacao).to.have.property('tarifa');
                    expect(transacao).to.have.property('taxa');

                    done();

                })
                .catch((err) => {
                    console.log(err);
                    assert.isTrue(false);
                    done();
                });

        });

        test('Criando uma transacao com Token', (done) => {
            
            const PJBank = new PJBankSDK(credencialCartao, chaveCartao);
            
            PJBank.Recebimento.Cartao.NovaTransacao({
                    'token_cartao': "80bafbb311c8ca17b06a6027fe1bcc8ad635602a",
                    'valor': 1,
                })
                .then((transacao) => {

                    expect(transacao).to.have.property('status');
                    assert.equal(transacao.status, 201);
                    expect(transacao).to.have.property('msg');
                    assert.equal(transacao.msg, 'Transacao capturada com sucesso');

                    expect(transacao).to.have.property('token_cartao');
                    expect(transacao).to.have.property('tid');
                    expect(transacao).to.have.property('previsao_credito');
                    expect(transacao).to.have.property('tid_conciliacao');
                    expect(transacao).to.have.property('bandeira');
                    expect(transacao).to.have.property('autorizacao');
                    expect(transacao).to.have.property('cartao_truncado');
                    expect(transacao).to.have.property('statuscartao');
                    expect(transacao).to.have.property('tarifa');
                    expect(transacao).to.have.property('taxa');

                    done();

                })
                .catch((err) => {
                    console.log(err);
                    assert.isTrue(false);
                    done();
                });

        });


        test('Cancelando uma transacao', (done) => {
            
            const PJBank = new PJBankSDK(credencialCartao, chaveCartao);
            
            PJBank.Recebimento.Cartao.NovaTransacao({
                    'token_cartao': "80bafbb311c8ca17b06a6027fe1bcc8ad635602a",
                    'valor': 1,
                })
                .then((transacao) => {

                    expect(transacao).to.have.property('status');
                    assert.equal(transacao.status, 201);
                    expect(transacao).to.have.property('msg');
                    assert.equal(transacao.msg, 'Transacao capturada com sucesso');

                    expect(transacao).to.have.property('tid');


                    PJBank.Recebimento.Cartao.Cancelar(transacao.tid).
                        then((cancelamento) => {

                            assert.equal(cancelamento.status, 200);
                            assert.equal(cancelamento.msg, 'Sucesso.');

                            done();
                        })
                        .catch((err) => {
                            console.log(err);
                            assert.isTrue(false);
                            done();
                        });

                })
                .catch((err) => {
                    console.log(err);
                    assert.isTrue(false);
                    done();
                });

        });

    });