'use strict';

const PJBankSDK = require('../../../../lib/pjbank');

const Lab = require('lab');
const lab = exports.lab = Lab.script();

const suite = lab.suite;
const test = lab.test;

const expect = require('chai').expect;
const assert = require('chai').assert;

const faker = require('faker');

suite("#CONTADIGITAL - #Administradores", () => {

    test('Convidando um socio para aprovar pela Conta Digital', done => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);
        const email = faker.internet.email();

        PJBank.ContaDigital.Administradores.convidar(email)
            .then(convite => {
                expect(convite).to.have.property('status');
                expect(convite).to.have.property('msg');
                done();
            })
            .catch(err => {
                console.log(err);
                done(err);
            });
    });

    test('Listando os administradores da Conta Digital', done => {

        const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

        PJBank.ContaDigital.Administradores.listar()
            .then(administradores => {
                expect(administradores).to.be.a('array');
                done();
            })
            .catch(err => {
                console.log(err);
                done(err);
            });
    });

});