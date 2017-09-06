# Criando Subcontas em sua Conta Digital

## Criando uma Subconta


```javascript

const dadosSubconta = {
    data_nascimento: "06/01/1995",
    sexo: "M",
    tipo: "cartao_corporativo",
    valor: "7.50",
    cnpj: "24351345000158",
    nome_cartao: "Cliente de teste",
    email: "api@pjbank.com.br"
};

PJBank.Subcontas.criarSubconta(dadosSubconta)
    .then(subconta => {
        console.log(subconta)
    })
    .catch(err => {
        console.log(err);
    });

```

### Output

```json
{
  "id_unico": "11800292",
  "link_boleto": "https://api.pjbank.com.br/boletos/6cfd513c643794c1a34250ad03bd9d4c2729b26b",
  "linha_digitavel": "34191.09115 80029.290162 62793.980004 1 72760000000850",
  "subconta": "d0ecbd8ab1678d79b702c7d2ab09621fc8563a48",
  "numero_cartao": "462068******8527"
}
```

## Consultando os dados de uma Subconta


```javascript
const subconta = "c912936cf31980ca84c23194f64b27fedfe0d718";

PJBank.Subcontas.subconta(subconta)
    .then(infos => {
        console.log(infos);
    })
    .catch(err => {
        console.log(err);
    });
```

```json
{
  "nome_cartao": "Cliente de Teste",
  "documento": "43906026833",
  "email": "api@pjbank.com",
  "data_inicio": "",
  "data_bloqueio": "",
  "cep": "13045080",
  "endereco": "Rua Lucas Nogueira Garcês, 214",
  "numero": "214",
  "bairro": "Jd. Centenário",
  "complemento": "",
  "cidade": "Campinas",
  "estado": "SP",
  "numero_cartao": "462068******9559",
  "telefone": "1932323232",
  "status_cartao": "Pendente",
  "nm_boletos_carga_pendentes": "29"
}
```

## Criando um boleto bancario para adicionar saldo a uma Subconta

```javascript

const subconta = "c912936cf31980ca84c23194f64b27fedfe0d718";
const valorDeSaldo = 150.30;

PJBank.Subcontas.adicionarSaldo(subconta, valorDeSaldo)
    .then(boleto => {
        console.log(boleto)
    })
    .catch(err => {
        console.log(err);
    });

```

### Output

```json
{
    "id_unico": "11820091",
    "link_boleto": "https://api.pjbank.com.br/boletos/aed6ad8c0eeddf9a979855e0ac65c5c225d8adc1",
    "linha_digitavel": "34191.09115 82009.110162 62793.980004 9 72760000090100"
}
```

## Realizando uma transferência de saldo para uma Subconta

```javascript
const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);
const subconta = "c912936cf31980ca84c23194f64b27fedfe0d718";
const valorDeSaldo = 150.30;

const dadosTransacao = {
    'conta_destino': subconta,
    'data_pagamento': moment().format('MM/DD/YYYY'),
    'valor': 15.50
};

PJBank.ContaDigital.transacao(dadosTransacao)
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
    "status": "201",
    "msg": "Despesa cadastrada com sucesso.",
    "id_operacao": "1000000001401",
    "data_pagamento": "09/10/2017"
}
```

## Desativando um administrador na Conta Digital

```javascript

const email = "api@pjbank.com.br";

PJBank.ContaDigital.desativar(email)
    .then(status => {
        console.log(status);
    })
    .catch(err => {
        console.log(err);
    });
```