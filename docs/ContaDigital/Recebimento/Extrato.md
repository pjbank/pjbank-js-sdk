# Gerar um extrato dos recebimentos realizados em sua *Conta Digital*

## Quickstart do Extrato

> Mínimo do extrato da conta

```javascript

const PJBankSDK = require('pjbank-js-sdk');
const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

PJBank.extrato()
    .then((extrato) => {
        console.log(extrato);
    })
    .catch((err) => {
        console.log(err);
    });

```

### Output

```json
[
    {
        "tid": "2017000006910010645792",
        "valor": "10",
        "valor_liquido": "9.65",
        "pedido_numero": "",
        "autorizada": "1",
        "cancelada": "0",
        "parcelas": "2",
        "data_transacao": "08\/14\/2017",
        "data_cancelamento": "",
        "motivo_cancelamento": "",
        "previsao_credito": "09\/15\/2017",
        "convenio_proprio": "",
        "tid_conciliacao": "1006993069000AC0A60A",
        "msg_erro": "",
        "msg_erro_estorno": ""
    },
    {
        "tid": "2017000006910010639169",
        "valor": "3119.15",
        "valor_liquido": "0",
        "pedido_numero": "21839",
        "autorizada": "0",
        "cancelada": "0",
        "parcelas": "1",
        "data_transacao": "08\/14\/2017",
        "data_cancelamento": "",
        "motivo_cancelamento": "",
        "previsao_credito": "",
        "convenio_proprio": "",
        "tid_conciliacao": "",
        "msg_erro": "",
        "msg_erro_estorno": ""
    }
]
```

## Filtrando somente por cobrancas liquidadas no extrato 

```javascript

const opcoesExtrato = {
    pago: true
};

PJBank.extrato(opcoesExtrato)
    .then((extrato) => console.log(extrato))
    .catch((err) => console.log(err));

```

## Filtrando o extrato por data

> As datas devem ser informadas no formato `MM/DD/AAAA`

```javascript
const opcoesExtrato = {
    data_inicio: '07/25/2017',
    data_fim: '07/25/2017'
};

PJBank.extrato(opcoesExtrato)
    .then((extrato) => console.log(extrato))
    .catch((err) => console.log(err));
```

## Paginando o extrato

> Limite: 50 por `pagina`

```javascript
const opcoesExtrato = {
    pagina : 2
};

PJBank.extrato(opcoesExtrato)
    .then((extrato) => console.log(extrato))
    .catch((err) => console.log(err));
```
