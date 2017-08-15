'use strict';

const debug = require('./lib/utils/debug/pjbank-debug');
const PJBankSDK = require('./lib/pjbank');

const credencial = "1264e7bea04bb1c24b07ace759f64a1bd65c8560";
const chave = "ef947cf5867488f744b82744dd3a8fc4852e529f";

const PJBank = new PJBankSDK(credencial, chave);

console.log(PJBank.Recebimento.Bancos);