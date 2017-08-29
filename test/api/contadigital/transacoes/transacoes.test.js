'use strict';

const PJBankSDK = require('../../../../lib/pjbank');

const Lab = require('lab');
const lab = exports.lab = Lab.script();

const suite = lab.suite;
const test = lab.test;

const expect = require('chai').expect;
const assert = require('chai').assert;


suite("#CONTADIGITAL - #Transacoes", () => {

    test('Criando uma transferência via DOC/TED', (done) => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

        const DadosTransacao = {
            "data_vencimento": "09/30/2017",
            "data_pagamento": "09/30/2017",
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

                expect(transacao).to.have.property('data');
                expect(transacao.data).to.be.a('array');
                expect(transacao.data[0]).to.have.property('msg');
                expect(transacao.data[0]).to.have.property('id_operacao');
                expect(transacao.data[0]).to.have.property('data_pagamento');
                assert.equal(transacao.data[0].data_pagamento, DadosTransacao.data_pagamento);

                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            });

    });


    test('Pagando uma despesa via linha digitável', (done) => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

        const DadosTransacao = {
            "data_vencimento": "09/30/2017",
            "data_pagamento": "09/30/2017",
            "valor": 10.50,
            "codigo_barras": "03399699255873781001843279301014571980000001000"
        };

        PJBank.ContaDigital.transacao(DadosTransacao)
            .then((transacao) => {

                expect(transacao).to.have.property('status');
                assert.equal(transacao.status, 201);

                expect(transacao).to.have.property('data');
                expect(transacao.data).to.be.a('array');
                expect(transacao.data[0]).to.have.property('msg');
                expect(transacao.data[0]).to.have.property('id_operacao');
                expect(transacao.data[0]).to.have.property('data_pagamento');
                assert.equal(transacao.data[0].data_pagamento, DadosTransacao.data_pagamento);

                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            });

    });


    test('Gerando despesas em lotes', (done) => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

        const Transacoes = [{
                "data_vencimento": "08/30/2017",
                "data_pagamento": "08/30/2017",
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
                "data_vencimento": "09/30/2017",
                "data_pagamento": "09/30/2017",
                "valor": 10.50,
                "codigo_barras": "03399699255873781001843279301014571980000001000"
            }
        ];

        PJBank.ContaDigital.transacao(Transacoes)
            .then((transacoes) => {

                expect(transacoes).to.have.property('status');
                assert.equal(transacoes.status, 201);

                expect(transacoes).to.have.property('data');
                expect(transacoes.data).to.be.a('array');

                expect(transacoes.data[0]).to.have.property('msg');
                expect(transacoes.data[0]).to.have.property('id_operacao');
                expect(transacoes.data[0]).to.have.property('data_pagamento');
                expect(transacoes.data[1]).to.have.property('msg');
                expect(transacoes.data[1]).to.have.property('id_operacao');
                expect(transacoes.data[1]).to.have.property('data_pagamento');

                done();

            })
            .catch((err) => {
                console.log(err);
                done();
            });



    });


    test('Consultando uma transacão', (done) => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

        PJBank.ContaDigital.status("1000000000709")
            .then(status => {

                expect(status).to.have.property('status');
                assert.equal(status.status, 200);

                expect(status).to.have.property('data');
                expect(status.data).to.be.a('array');

                expect(status.data[0]).to.have.property('id_operacao');
                expect(status.data[0]).to.have.property('status_operacao');
                expect(status.data[0]).to.have.property('data_pagamento');
                expect(status.data[0]).to.have.property('aprovacoes_confirmadas');
                expect(status.data[0]).to.have.property('qtd_aprovacoes');
                expect(status.data[0]).to.have.property('msg');

                done();
            })
            .catch(err => {
                console.log(err);
                done();
            });

    });


    test('Cancelando uma transacão', (done) => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

        const DadosTransacao = {
            "data_vencimento": "09/30/2017",
            "data_pagamento": "09/30/2017",
            "valor": 10.50,
            "codigo_barras": "03399699255873781001843279301014571980000001000"
        };

        PJBank.ContaDigital.transacao(DadosTransacao)
            .then(transacao => {

                PJBank.ContaDigital.cancelar(transacao.data[0].id_operacao)
                    .then(cancelamento => {

                        expect(cancelamento).to.have.property('status');
                        expect(cancelamento).to.have.property('msg');
                        assert.equal(cancelamento.status, 200);

                        expect(cancelamento).to.have.property('data');
                        expect(cancelamento.data).to.be.a('array');

                        done();
                    })
                    .catch(err => {
                        console.log(err);
                        done();
                    });

            })
            .catch(err => {
                console.log(err);
                done();
            });

    });



});