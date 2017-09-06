'use strict';

const PJBankSDK = require('../../../../lib/pjbank');

const Lab = require('lab');
const lab = exports.lab = Lab.script();

const suite = lab.suite;
const test = lab.test;

const expect = require('chai').expect;
const assert = require('chai').assert;

const moment = require('moment');


suite("#CONTADIGITAL - #Transacoes", () => {

    test('Criando uma transferência via DOC/TED', (done) => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

        const DadosTransacao = {
            "data_vencimento": moment().format('MM/DD/YYYY'),
            "data_pagamento": moment().format('MM/DD/YYYY'),
            "valor": 20.00,
            "banco_favorecido": "033",
            "agencia_favorecido": "1111",
            "conta_favorecido": "11111",
            "cnpj_favorecido": "45475754000136",
            "nome_favorecido": "Cliente Exemplo",
            "descricao": "Descrição de exemplo",
            "solicitante": "Teste DOC/TED",
            "tipo_conta_favorecido": "corrente"
        };

        PJBank.ContaDigital.transacao(DadosTransacao)
            .then((transacao) => {

                expect(transacao).to.have.property('status');
                assert.equal(transacao.status, 201);

                expect(transacao).to.have.property('msg');
                expect(transacao).to.have.property('id_operacao');
                expect(transacao).to.have.property('data_pagamento');
                assert.equal(transacao.data_pagamento, DadosTransacao.data_pagamento);

                done();
            })
            .catch((err) => {
                console.log(err);
                done(err);
            });

    });


    test('Pagando uma despesa via linha digitável', (done) => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

        const DadosTransacao = {
            "data_vencimento": moment().format('MM/DD/YYYY'),
            "data_pagamento": moment().format('MM/DD/YYYY'),
            "valor": 10.50,
            "codigo_barras": "03399699255873781001843279301014571980000001000"
        };

        PJBank.ContaDigital.transacao(DadosTransacao)
            .then((transacao) => {

                expect(transacao).to.have.property('status');
                assert.equal(transacao.status, 201);

                expect(transacao).to.have.property('msg');
                expect(transacao).to.have.property('id_operacao');
                expect(transacao).to.have.property('data_pagamento');
                assert.equal(transacao.data_pagamento, DadosTransacao.data_pagamento);

                done();
            })
            .catch((err) => {
                console.log(err);
                done(err);
            });

    });


    test('Gerando despesas em lotes', (done) => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

        const Transacoes = [{
                "data_vencimento": moment().format('MM/DD/YYYY'),
                "data_pagamento": moment().format('MM/DD/YYYY'),
                "valor": 20.00,
                "banco_favorecido": "033",
                "agencia_favorecido": "1111-X",
                "conta_favorecido": "11111",
                "cnpj_favorecido": "45475754000136",
                "nome_favorecido": "Cliente Exemplo",
                "identificador": "123123",
                "descricao": "Descrição de exemplo",
                "solicitante": "Teste DOC/TED",
                "tipo_conta_favorecido": "corrente"
            },
            {
                "data_vencimento": moment().format('MM/DD/YYYY'),
                "data_pagamento": moment().format('MM/DD/YYYY'),
                "valor": 10.50,
                "codigo_barras": "03399699255873781001843279301014571980000001000"
            }
        ];

        PJBank.ContaDigital.transacao(Transacoes)
            .then((transacoes) => {
                expect(transacoes).to.be.a('array');

                expect(transacoes[0]).to.have.property('msg');
                expect(transacoes[0]).to.have.property('id_operacao');
                expect(transacoes[0]).to.have.property('data_pagamento');
                expect(transacoes[1]).to.have.property('msg');
                expect(transacoes[1]).to.have.property('id_operacao');
                expect(transacoes[1]).to.have.property('data_pagamento');

                done();

            })
            .catch((err) => {
                console.log(err);
                done(err);
            });
    });


    test('Consultando uma transacão', (done) => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

        PJBank.ContaDigital.status("1000000000709")
            .then(status => {

                expect(status).to.have.property('id_operacao');
                expect(status).to.have.property('status_operacao');
                expect(status).to.have.property('data_pagamento');
                expect(status).to.have.property('autorizacoes_realizadas');
                expect(status).to.have.property('autorizacoes_disponiveis');
                expect(status).to.have.property('autorizacoes_necessarias');
                expect(status).to.have.property('msg');
                expect(status).to.have.property('detalhes');
                expect(status).to.have.property('historico');

                done();
            })
            .catch(err => {
                console.log(err);
                done(err);
            });

    });


    test('Cancelando uma transacão', (done) => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

        const DadosTransacao = {
            "data_vencimento": moment().format('MM/DD/YYYY'),
            "data_pagamento": moment().format('MM/DD/YYYY'),
            "valor": 10.50,
            "codigo_barras": "03399699255873781001843279301014571980000001000"
        };

        PJBank.ContaDigital.transacao(DadosTransacao)
            .then(transacao => {

                PJBank.ContaDigital.cancelar(transacao.id_operacao)
                    .then(cancelamento => {

                        expect(cancelamento).to.have.property('status');
                        expect(cancelamento).to.have.property('msg');
                        assert.equal(cancelamento.status, 200);
                        done();
                    })
                    .catch(err => {
                        console.log(err);
                        done(err);
                    });

            })
            .catch(err => {
                console.log(err);
                done(err);
            });

    });



});