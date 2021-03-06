
# Emitir um boleto bancário via API para receber em sua *Conta Digital*

## Quickstart com o Boleto bancário da Conta Digital 

> O mínimo que você vai precisar para emissão de boletos bancários via API do PJBank

```javascript
'use strict';

const credencialContaDigital = "d3418668b85cea70aa28965eafaf927cd34d004c";
const chaveContaDigital = "ef947cf5867488f744b82744dd3a8fc4852e529f";

const PJBankSDK = require('pjbank-js-sdk');
const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

PJBank.boleto({
    "nome_cliente" : "Cliente de Exemplo",
    "cpf_cliente" : "29454730000144",
    "valor" : 10.50,
    "vencimento" : "12/30/2019"
})
.then(boleto => console.log(boleto))
.catch(err => console.log(boleto));
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

const credencialContaDigital = "d3418668b85cea70aa28965eafaf927cd34d004c";
const chaveContaDigital = "ef947cf5867488f744b82744dd3a8fc4852e529f";

const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

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

PJBank.boleto(dadosBoleto)
    .then(boleto => console.log(boleto))
    .catch(err => console.log(err));

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

## Emissao de boletos em lotes

> Você pode enviar um lote de até `200` cobranças para gerar um lote. As mesmas devem ser enviadas no parâmetro `cobrancas` dentro de um array`

```javascript

const PJBank = new PJBankSDK(credencialBoleto, chaveBoleto);
PJBank.boleto({
    cobrancas: [{
            "nome_cliente": "Cliente de Exemplo",
            "cpf_cliente": "29454730000144",
            "valor": 10.50,
            "vencimento": "12/30/2019"
        },
        {
            "nome_cliente": "Cliente de Exempl2o",
            "cpf_cliente": "29454730000144",
            "valor": 15.50,
            "vencimento": "12/30/2019"
        }
    ]
})
.then(boletos => console.log(boletos))
.catch(err => console.log(err));
```

### Output 

```json
[
  {
    "status": "201",
    "msg": "Sucesso.",
    "nossonumero": "14889330",
    "id_unico": "14889330",
    "banco_numero": "033",
    "token_facilitador": "abe2658dc12bb4a300cc202b60ec87624a60157d",
    "credencial": "6ef5e5c493f22ef42d1c052e069af5df3060c090",
    "linkBoleto":
      "https://api.pjbank.com.br/boletos/e7551c6ef0481ca0232cf35138ff754bc32e943f",
    "linkGrupo": "",
    "linhaDigitavel": "03399.69925 58700.001488 89330.901011 7 81190000001050"
  },
  {
    "status": "201",
    "msg": "Sucesso.",
    "nossonumero": "14889331",
    "id_unico": "14889331",
    "banco_numero": "033",
    "token_facilitador": "abe2658dc12bb4a300cc202b60ec87624a60157d",
    "credencial": "6ef5e5c493f22ef42d1c052e069af5df3060c090",
    "linkBoleto":
      "https://api.pjbank.com.br/boletos/f7f4e013d11239c4fd47f9736805c2df37d416e5",
    "linkGrupo": "",
    "linhaDigitavel": "03399.69925 58700.001488 89331.701014 9 81190000001550"
  }
]
```