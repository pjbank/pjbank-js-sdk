# Impressão em lote de boletos

## Gerando uma impressão em lote 


> Você pode especificar vários boletos identificados pelo `pedido_numero` para gerar uma impressão em lote.

```javascript
'use strict';

const credencial = "6ef5e5c493f22ef42d1c052e069af5df3060c090";
const chave = "cfeb3e01f0d7d2217fc5f522f73c67ea56e5a669";

const PJBankSDK = require('pjbank-js-sdk');
const PJBank = new PJBankSDK(credencial, chave);

const MeusBoletos = [
    110, 443
];

PJBank.lote(MeusBoletos)
    .then((lote) => {
        console.log(lote);
    }).catch((err) => {
        console.log(err);
    })
```


### Output de exemplo

```json
{ status: '200',
  linkBoleto: 'https://pjbank.com.br/subadquirente/api/publico/boleto?h=ff95260ed72daccfe232f5a17a4de7d0a4820610' 
}
```