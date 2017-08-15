# pjbank-js-sdk

![Construcao](https://openclipart.org/image/2400px/svg_to_png/231626/underconstruction.png)

## Instalacão

```
 npm install pjbank-sdk-js
```



```javascript
const PJBankSDK = require('pjbank-sdk-js');
```

## Quickstart

A classe PJBank é uma Factory de outras classes referentes aos servicos oferecidos pelo PJBank.

```javascript
const credencial = "d3418668b85cea70aa28965eafaf927cd34d004c";
const chave = "ef947cf5867488f744b82744dd3a8fc4852e529f";

const PJBank = new PJBankSDK(credencial, chave);
```

### Emitindo um boleto bancário

```javascript
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
    "pedido_numero": "99798"
};

PJBank.Recebimento.Boletos.NovoBoleto(dadosBoleto)
    .then((boleto) => {
        console.log(boleto);
    })
    .catch((err) => {
        console.log(err);
    });

```

#### Resposta 

```json
{ 
  "status": "201",
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

# Documentacão e Exemplos

## Recebimento

### Boleto Bancário 

* [Emitindo boletos bancários](docs/Recebimento/EmitirBoletoBancario.md) 

    * [Quickstart](docs/Recebimento/EmitirBoletoBancario.md#Quickstart-com-o-Boleto-bancário)
    * [Customizacão do Boleto bancário](docs/Recebimento/EmitirBoletoBancario.md#Customizacao-do-Boleto-bancário)

* [Imprimindo boletos em lote](docs/Recebimento/ImpressaoBoletosEmLote.md)


### Cartão de Crédito 

* [Criando transacões de cartão de crédito](docs/Recebimento/TransacaoDeCartao.md) 

    * [Quickstart](docs/Recebimento/TransacaoDeCartao.md#quickstart-rapido)
    * [Cancelamento de uma transacao](docs/Recebimento/TransacaoDeCartao.md#cancelamento-de-uma-transacao)


### Extrato bancário

* [Gerando extratos de recebimento](docs/Recebimento/ExtratoBancario.md)

    * [Quickstart](docs/Recebimento/ExtratoBancario.md#quickstart-do-extrato)
    * [Filtrando por cobrancas liquidadas](docs/Recebimento/ExtratoBancario.md#filtrando-somente-por-cobrancas-liquidadas-no-extrato)
    * [Filtrando o extrato por data](docs/Recebimento/ExtratoBancario.md#filtrando-o-extrato-por-data)
    * [Paginando o extrato](docs/Recebimento/ExtratoBancario.md#paginando-o-extrato)
## Conta Digital 

> Em breve...