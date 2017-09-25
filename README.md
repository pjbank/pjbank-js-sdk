# pjbank-js-sdk

[![Build Status](https://travis-ci.org/pjbank/pjbank-js-sdk.svg?branch=master)](http://travis-ci.org/pjbank/pjbank-js-sdk)

![Construcao](https://openclipart.org/image/2400px/svg_to_png/231626/underconstruction.png)

## Instalacão

```
 npm install @pjbank/pjbank-js-sdk
```

```javascript
const PJBankSDK = require('@pjbank/pjbank-sdk-js');
```

## Quickstart

A classe PJBank é uma Factory de outras classes referentes aos servicos oferecidos pelo PJBank.

```javascript
const credencial = "d3418668b85cea70aa28965eafaf927cd34d004c";
const chave = "ef947cf5867488f744b82744dd3a8fc4852e529f";

const PJBank = new PJBankSDK(credencial, chave);
```

## Usando o ambiente de sandbox

Para realizar os requests para o ambiente de sandbox, basta:

```javascript
PJBank.developer(true);
```

### Exemplo - Emissão de boleto

```javascript
PJBank.boleto({
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

Para mais informações consulte a [documentação da nossa API](http://docs.pjbank.com.br)

## Recebimento

### Boleto Bancário 

* [Emitindo boletos bancários](docs/Recebimento/EmitirBoletoBancario.md) 
    * [Credenciamento](docs/Recebimento/EmitirBoletoBancario.md#Credenciamento)
    * [Quickstart](docs/Recebimento/EmitirBoletoBancario.md#Quickstart-com-o-Boleto-bancário)
    * [Customizacão do Boleto bancário](docs/Recebimento/EmitirBoletoBancario.md#Customizacao-do-Boleto-bancário)

* [Imprimindo boletos em lote](docs/Recebimento/ImpressaoBoletosEmLote.md)


### Cartão de Crédito 

* [Criando transacões de cartão de crédito](docs/Recebimento/TransacaoDeCartao.md) 
    * [Credenciamento](docs/Recebimento/TransacaoDeCartao.md#Credenciamento)
    * [Criando uma transação com os dados do cartão](docs/Recebimento/TransacaoDeCartao.md#quickstart-rapido)
    * [Criando uma transação utilizando um Token](docs/Recebimento/TransacaoDeCartao.md#gerando-uma-transacao-utilizando-um-token)
    
    * [Criando uma transacão parcelada no cartão](docs/Recebimento/TransacaoDeCartao.md#gerando-uma-transação-parcelada-no-cartão)
    * [Cancelamento de uma transação](docs/Recebimento/TransacaoDeCartao.md#cancelamento-de-uma-transacao)
    * [Tokenizando um cartão](docs/Recebimento/TransacaoDeCartao.md#tokenizando-um-cartao-de-credito)


### Extrato bancário

* [Gerando extratos de recebimento](docs/Recebimento/ExtratoBancario.md)

    * [Quickstart](docs/Recebimento/ExtratoBancario.md#quickstart-do-extrato)
    * [Filtrando por cobrancas liquidadas](docs/Recebimento/ExtratoBancario.md#filtrando-somente-por-cobrancas-liquidadas-no-extrato)
    * [Filtrando o extrato por data](docs/Recebimento/ExtratoBancario.md#filtrando-o-extrato-por-data)
    * [Paginando o extrato](docs/Recebimento/ExtratoBancario.md#paginando-o-extrato)


## Conta Digital 

> Disponibilizamos também a cobertura da API Da Conta Digital do PJBank via SDK! 


### Transações 

* [Como fazer uma transferência DOC/TED via Conta Digital](docs/ContaDigital/Transacoes.md#Gerando-uma-transacao-via-DOC/TED)
* [Como pagar um boleto ou uma conta com código de barras via Conta Digital](docs/ContaDigital/Transacoes.md#Pagando-uma-despesa-de-Linha-Digitavel)
* [Gerando transacões em lotes](docs/ContaDigital/Transacoes.md#Gerando-transacoes-em-lotes)
* [Como cancelar uma transacão na Conta Digital](docs/ContaDigital/Transacoes.md#Cancelando-transacoes-na-Conta-Digital)


### Extratos da Conta Digital

* [Como consultar o extrato de transacões da Conta Digital](docs/ContaDigital/Transacoes.md#Gerando-um-extrato-de-transacoes)


### Subcontas

* [Como criar uma nova Subconta](docs/ContaDigital/Subcontas.md#Criando-uma-Subconta)
* [Consultando os dados de uma Subconta](docs/ContaDigital/Subcontas.md#Consultando-os-dados-de-uma-Subconta)
* [Criando um boleto bancário para adicionar saldo a uma Subconta](docs/ContaDigital/Subcontas.md#Criando-um-boleto-bancario-para-adicionar-saldo-a-uma-subconta)
* [Realizando transferências de saldo para subcontas](docs/ContaDigital/Subcontas.md#Realizando-uma-transferência-de-saldo-para-uma-Subconta)


### Administradores

* [Convidando uma pessoa física para administrar a Conta Digital](docs/ContaDigital/Administradores.md#Convidando-uma-pessoa-física-para-administrar-a-Conta-Digital)
* [Listando os Administradores da Conta Digital](docs/ContaDigital/Administradores.md#Listando-os-Administradores-da-Conta-Digital)
* [Listando os Administradores da Conta Digital](docs/ContaDigital/Administradores.md#Desativando-um-Administrador-da-Conta-Digital)
