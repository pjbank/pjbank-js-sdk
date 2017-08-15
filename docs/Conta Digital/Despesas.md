# Gerenciando Despesas na Conta Digital

## Gerando uma despesa via DOC/TED

```javascript
    const Despesa = {
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

    };

    PJBank.ContaDigital.Despesas.NovaDespesa(Despesa)
        .then((despesa) => {
            console.log(despesa)
        })
        .catch((err) => {
            console.log(err);
        });

});
```

### Output

```json
{
    "status": "201",
    "msg": "Despesa cadastrada com sucesso.",
    "identificador": "123123",
    "id_operacao": "1000000004234",
}
```


## Gerando despesas em lotes

> É possível gerar mais de uma despesa ao mesmo tempo.

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

    PJBank.ContaDigital.Despesas.NovaDespesa(Despesas)
        .then((despesas) => {
            console.log(despesas);
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

# Cancelando despesas na Conta Digital

> Também é possível gerar o cancelamento de uma despesa

```javascript
```