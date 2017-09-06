# Consultar os dados cadastrais da sua Conta Digital

```javascript
    const PJBank = new PJBankSDK(credencialContaDigital, chaveContaDigital);

    PJBank.ContaDigital.MinhaConta()
        .then((dadosConta) => {
            console.log(dadosConta);
        })
        .catch((err) => {
            console.log(err);
        });
```

### Output

```json
   { "nome_empresa": "Exemplo Conta Digital",
     "cnpj": "27661036000172",
     "email": "api@pjbank.com.br",
     "telefone": "19987652345",
     "cep": "13032525",
     "endereco": "Rua Joaquim Vilac",
     "numero": "501",
     "bairro": "Vila Teixeira",
     "complemento": "",
     "cidade": "Campinas",
     "estado": "SP",
     "status": "inativa" 
   }

```