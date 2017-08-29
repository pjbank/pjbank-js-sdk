# Gerenciando Despesas na Conta Digital

## Gerando uma transacao via DOC/TED

```javascript

    const DadosTransacao = {
        "data_vencimento": "09/30/2017",
        "data_pagamento": "09/30/2017",
        "valor": 20.00,
        "banco_favorecido": "033",
        "agencia_favorecido": "1111",
        "conta_favorecido": "11111",
        "cnpj_favorecido": "45475754000136",
        "nome_favorecido": "Cliente Exemplo",
        "descricao": "Descrição de exemplo",
        "solicitante": "Teste DOC/TED",
        "tipo_conta_favorecido": "corrente"

    };

    PJBank.ContaDigital.Transacao(DadosTransacao)
        .then((transacao) => {
            console.log(transacao)
        })
        .catch((err) => {
            console.log(err);
        });

```

### Output

```json
{
    "status": "201",
    "msg": "Todos os itens foram processados com sucesso.",
    "data": [
        {
            "status": "201",
            "msg": "Despesa cadastrada com sucesso.",
            "id_operacao": "1000000005263"
        }
    ]
}
```

## Pagando uma despesa de Linha Digitável

```javascript

    const DadosTransacao = {
        "data_vencimento": "09/30/2017",
        "data_pagamento": "09/30/2017",
        "valor" : 10.50,
        "codigo_barras" : "03399699255873781001843279301014571980000001000"
    };

    PJBank.ContaDigital.Transacao(DadosTransacao)
        .then((transacao) => {
            console.log(transacao)
        })
        .catch((err) => {
            console.log(err);
        });

```


### Output 

```json

{
    "status": "201",
    "msg": "Todos os itens foram processados com sucesso.",
    "data": [
        {
            "status": "201",
            "msg": "Despesa cadastrada com sucesso.",
            "id_operacao": "1000000000698",
            "data_pagamento": "08/30/2017"
        }
    ]
}

```


## Gerando transacoes em lotes

> É possível gerar mais de uma transacao ao mesmo tempo.

```javascript

    const Despesas = [{
        "data_vencimento": "08/30/2017",
        "data_pagamento": "08/30/2017",
        "valor": 20.00,
        "banco_favorecido": "033",
        "agencia_favorecido": "1111-X",
        "conta_favorecido": "11111",
        "cnpj_favorecido": "45475754000136",
        "nome_favorecido": "Cliente Exemplo",
        "identificador": "123123",
        "descricao": "Descrição de exemplo",
        "solicitante": "Teste DOC/TED",
        "tipo_conta_favorecido": "corrente"
    }, {
        "data_vencimento": "08/30/2017",
        "data_pagamento": "08/30/2017",
        "valor": 10.00,
        "banco_favorecido": "033",
        "agencia_favorecido": "1111-X",
        "conta_favorecido": "11111",
        "cnpj_favorecido": "45475754000136",
        "nome_favorecido": "Cliente Exemplo2",
        "identificador": "123123",
        "descricao": "Descrição de exemplo2",
        "solicitante": "Teste DOC/TED",
        "tipo_conta_favorecido": "corrente"
    }];

    PJBank.ContaDigital.Transacao(Despesas)
        .then((transacoes) => {
            console.log(transacoes);
        })
        .catch((err) => {
            console.log(err);
        });

``` 

### Output

```json
[
    {
        "status": "201",
        "msg": "Despesa cadastrada com sucesso.",
        "identificador": "123123",
        "id_operacao": "1000000004234"
    },
    {
        "status": "201",
        "msg": "Despesa cadastrada com sucesso.",
        "identificador": "123124",
        "id_operacao": "1000000004234"
    }
]

```

## Cancelando transacoes na Conta Digital

> Também é possível gerar o cancelamento de uma transacao informando o campo `id_operacao` retornado ao criar a mesma.

```javascript

    PJBank.ContaDigital.cancelarTransacao("1000000000709")
        .then((cancelamento) => {
            console.log(cancelamento);
        })
        .catch((err) => {
            console.log(err);
        });

```

### Output

```json

{
    "status": "200",
    "msg": "Todos os itens foram processados com sucesso.",
    "data": [
        {
            "status": "200",
            "msg": "Despesa #123123 cancelada com sucesso."
        }
    ]
}

```