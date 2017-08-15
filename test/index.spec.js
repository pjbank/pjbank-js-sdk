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

global.credencialContaDigital = "7b2e8dcd4890db09f8272aa5650bf42e8b06d8ac";
global.chaveContaDigital = "13254b2c9faa3ce5b783e371da4e232f581badf5";