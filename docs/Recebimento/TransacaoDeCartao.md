
# Criar uma transacão de Cartão de Crédito via API

## Quickstart rápido

> O mínimo que você vai precisar para gerar um pagamento via cartão 

```javascript
const PJBank = new PJBankSDK(credencial, chave);

PJBank.Recebimento.Cartao.NovaTransacao({
        numero_cartao: "4012001037141112",
        nome_cartao: "Cliente Exemplo",
        mes_vencimento: "05",
        ano_vencimento: "2018",
        cpf_cartao: "07727876208",
        email_cartao: "api@pjbank.com.br",
        celular_cartao: "",
        codigo_cvv: "123",
        valor: 1,
    })
    .then((transacao) => {
        console.log(transacao);
    })
    .catch((err) => {
        console.log(err);
    });
```


### Output 
```json

{ 
    "status": "201",
    "token_cartao": "cb3e702e1fa20366bf9eb1da7eabd64f471c2dee",
    "tid": "2017000006910010656310",
    "previsao_credito": "09/15/2017",
    "msg": "Transacao capturada com sucesso",
    "tid_conciliacao": "1006993069000AC0F48A",
    "bandeira": "visa",
    "autorizacao": "123456",
    "cartao_truncado": "4012********1112",
    "statuscartao": "200",
    "tarifa": "0.07",
    "taxa": "7" 
}

```


## Cancelamento de uma transacao 

> Você pode facilmente cancelar uma transacão de Cartão de Crédito informando o `tid` gerado na criacão da mesma.

```javascript
const PJBank = new PJBankSDK(credencial, chave);

PJBank.Recebimento.Cartao.Cancelar("2017000006910010656914")
    .then((cancelamento) => {
        console.log(cancelamento)
    })
    .catch((err) => {
        console.log(err);
    })
```

### Output 

```json
{
    "status": "200",
    "msg": "Sucesso."
}
```