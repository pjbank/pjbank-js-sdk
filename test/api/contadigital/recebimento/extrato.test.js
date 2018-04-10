'use strict';

const PJBankSDK = require('../../../../lib/pjbank');

const Lab = require('lab');
const lab = exports.lab = Lab.script();

const suite = lab.suite;
const test = lab.test;

const expect = require('chai').expect;
const assert = require('chai').assert;


suite("#CONTADIGITAL - #RECEBIMENTO - #Extrato", () => {

    test('Gerando extrato somente pagos', (done) => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);
        PJBank.extrato({ "pago": "true" })
            .then((extrato) => {
                expect(extrato).to.be.a('array');
                done();
            })
            .catch((err) => {
                console.log(err);
                done(err);
            });
    });

    test('Gerando extrato filtrado entre datas', (done) => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);
        PJBank.extrato({
                'data_inicio': '07/25/2017',
                'data_fim': '07/25/2017'
            })
            .then((extrato) => {
                expect(extrato).to.be.a('array');
                done();
            })
            .catch((err) => {
                console.log(err);
                done(err);
            });
    });

});