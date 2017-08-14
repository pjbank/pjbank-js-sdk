
# Emitir um boleto bancário via API 

## Quickstart com o Boleto bancário 

> O mínimo que você vai precisar para emissão de boletos bancários via API do PJBank

```javascript
'use strict';

const credencial = "d3418668b85cea70aa28965eafaf927cd34d004c";
const chave = "ef947cf5867488f744b82744dd3a8fc4852e529f";

const PJBankSDK = require('pjbank-js-sdk');
const PJBank = new PJBankSDK(credencial, chave);

PJBank.Recebimento.Boletos.NovoBoleto({
    "nome_cliente" : "Cliente de Exemplo",
    "cpf_cliente" : "29454730000144",
    "valor" : 10.50,
    "vencimento" : "12/30/2019"
}).then((boleto) => {
        console.log(boleto);
    }).catch((err) => {
        console.log(boleto);
    });
```

## Customizacao do Boleto bancário

> Você pode utilizar outros parametros para emitir o boleto via SDK. Você pode por exemplo: 

* Incluir taxas de `juros`, `multas` e `descontos` no boleto. 
* Inserir um `logo_url` personalizado na impressão de seu boleto bancário. 
* Inserir um `texto` livre no corpo do seu boleto para o cliente
* incluir um `pedido_numero` para controle do seu lado da integracão.

```javascript

'use strict';

const PJBankSDK = require('pjbank-js-sdk');

const credencial = "d3418668b85cea70aa28965eafaf927cd34d004c";
const chave = "ef947cf5867488f744b82744dd3a8fc4852e529f";

const PJBank = new PJBankSDK(credencial, chave);

const dadosBoleto = {
    "vencimento": "12/30/2019",
    "valor": 50.5,
    "juros": 0,
    "multa": 0,
    "desconto": "",
    "nome_cliente": "Cliente de exemplo",
    "cpf_cliente": "62936576000112",
    "endereco_cliente": "Rua Joaquim Vilac",
    "numero_cliente": "509",
    "complemento_cliente": "",
    "bairro_cliente": "Vila Teixeira",
    "cidade_cliente": "Campinas",
    "estado_cliente": "SP",
    "cep_cliente": "13301510",
    "logo_url": "https://pjbank.com.br/assets/images/logo-pjbank.png",
    "texto": "Exemplo de emissão de boleto",
    "grupo": "Boletos",
    "pedido_numero": "99795"
};

PJBank.Recebimento.Boletos.NovoBoleto(dadosBoleto)
    .then((boleto) => {
        console.log(boleto);
        debug.info(boleto);
    })
    .catch((err) => {
        debug.error(err);
    });

```

### Output de Exemplo

```json

{ "status": "201",
  "msg": "Sucesso.",
  "nossonumero": "10647852",
  "id_unico": "10647852",
  "banco_numero": "033",
  "token_facilitador": "abe2658dc12bb4a300cc202b60ec87624a60157d",
  "credencial": "d3418668b85cea70aa28965eafaf927cd34d004c",
  "linkBoleto": "https://pjbank.com.br/subadquirente/api/publico/boleto?i=ac0e56cb6327716148026058dbd766405a956b81",
  "linkGrupo": "https://pjbank.com.br/subadquirente/api/publico/boleto?g=cea7286b0db4f1f950ed9725bcfad201f7e60e87",
  "linhaDigitavel": "03399.69925 58700.001066 47852.401018 4 81190000005050" 
}

```