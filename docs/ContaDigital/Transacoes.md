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

    PJBank.ContaDigital.transacao(DadosTransacao)
        .then(transacao => {
            console.log(transacao)
        })
        .catch(err => {
            console.log(err);
        });

```

### Output

```json
{
    "status": "201",
    "msg": "Despesa cadastrada com sucesso.",
    "id_operacao": "1000000005263"
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

    PJBank.ContaDigital.transacao(DadosTransacao)
        .then(transacao => {
            console.log(transacao)
        })
        .catch(err => {
            console.log(err);
        });

```


### Output 

```json
{
    "status": "201",
    "msg": "Despesa cadastrada com sucesso.",
    "id_operacao": "1000000000698",
    "data_pagamento": "08/30/2017"
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

    PJBank.ContaDigital.transacao(Despesas)
        .then(transacoes => {
            console.log(transacoes);
        })
        .catch(err => {
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
        .then(cancelamento => {
            console.log(cancelamento);
        })
        .catch(err => {
            console.log(err);
        });

```

### Output

```json
{
    "status": "200",
    "msg": "Despesa #123123 cancelada com sucesso."
}
```


## Consultando o status de uma transacão na Conta Digital

> Você pode consultar o status e o histórico de aprovacão de uma transacão diretamente pelo SDK. 

```javascript

    PJBank.ContaDigital.status("1000000000709")
        .then(transacao => {
            console.log(transacao);
        })
        .catch(err => {
            console.log(err);
        });

```


### Output

```json
{
    "nome_empresa": "RAJ LTDA",
    "cnpj": "14986640000127",
    "email": "bruno.reyller@superlogica.com",
    "telefone": "1932323232",
    "cep": "13045080",
    "endereco": "Rua Lucas Nogueira Garcês, 214",
    "numero": "214",
    "bairro": "Jd. Centenário",
    "complemento": "Jd. Centenário",
    "cidade": "Campinas",
    "estado": "SP",
    "status": "ativa"
}
```


## Gerando um extrato de transacões

```javascript

    const opcoes = {
        data_inicio : "09/01/2018",
        data_fim : "01/30/1018"
    }

    PJBank.ContaDigital.extrato(opcoes)
        .then(extrato => {
            console.log(extrato);
        })
        .catch(err => {
            console.log(err);
        });

```

### Output

```json
[
    {
        "status": "Aprovado",
        "cnpj_favorecido": "",
        "favorecido": "",
        "data": "08/28/2017",
        "valor": "-0.03",
        "historico": "Transferência para cartão #9385 Matheus S Fidelis",
        "id": "1000000000638",
        "identificador": "73",
        "tipo_transacao": "Pagamento"
    },
    {
        "status": "Aprovado",
        "cnpj_favorecido": "",
        "favorecido": "",
        "data": "08/25/2017",
        "valor": "-0.03",
        "historico": "Transferência para cartão #9385 Matheus S Fidelis",
        "id": "1000000000637",
        "identificador": "72",
        "tipo_transacao": "Pagamento"
    }
]
```