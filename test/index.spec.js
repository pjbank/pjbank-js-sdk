'use strict ';

const lab = exports.lab = require('lab').script();

global.expect = require('chai').expect;
global.assert = require('chai').assert;

global.test = lab.test;
global.suite = lab.suite;


//Configs - Credenciais de Teste
global.credencialBoleto = "6ef5e5c493f22ef42d1c052e069af5df3060c090";
global.chaveBoleto = "cfeb3e01f0d7d2217fc5f522f73c67ea56e5a669";

global.credencialCartao = "1264e7bea04bb1c24b07ace759f64a1bd65c8560";
global.chaveCartao = "ef947cf5867488f744b82744dd3a8fc4852e529f";

global.credencialContaDigital = "d10e14d9b8c239e262cb3631308a6ad259aa03ec";
global.chaveContaDigital = "b63ed7d648d1d014495b05b4444b532006457d6d";