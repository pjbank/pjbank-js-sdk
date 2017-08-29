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

global.credencialContaDigital = "eb2af021c5e2448c343965a7a80d7d090eb64164";
global.chaveContaDigital = "a834d47e283dd12f50a1b3a771603ae9dfd5a32c";