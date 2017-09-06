'use strict';

const PJBankSDK = require('../../../../lib/pjbank');

const Lab = require('lab');
const lab = exports.lab = Lab.script();

const suite = lab.suite;
const test = lab.test;

const expect = require('chai').expect;
const assert = require('chai').assert;

const moment = require('moment');


suite("#CONTADIGITAL - #Extrato", () => {

    test('Gerando o extrato de transacões filtrado por data', (done) => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

        const opcoes = {
            data_inicio: "09/01/2017",
            data_fim: "09/04/2017"
        };

        PJBank.ContaDigital.extrato(opcoes)
            .then(extrato => {
                expect(extrato).to.be.a('array');
                done();
            })
            .catch(err => {
                console.log(err);
                done(err);
            });

    });

});