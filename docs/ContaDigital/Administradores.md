# Gerenciamento Administradores

## Convidando uma pessoa física para administrar a Conta Digital

```javascript
PJBank.ContaDigital.Administradores.convidar(email)
    .then(convite => {
        console.log(convite);
    })
    .catch(err => {
        console.log(err);
    });
```

### Output 

```json
{
  "status": "200",
  "msg": "Convite enviado com sucesso. Sujeito a aprovação."
}
```

## Listando os Administradores da Conta Digital

```javascript
PJBank.ContaDigital.Administradores.listar()
    .then(administradores => {
        console.log(administradores);
    })
    .catch(err => {
        console.log(err);
        done(err);
    });

```

### Output

```json
[
  {
    "nome": "Matheus Fidelis",
    "socio": "true",
    "status": "Ativo",
    "imagem": "",
    "email": "matheus.fidelis@superlogica.com"
  }
]
```

## Desativando um Administrador da Conta Digital

```javascript
```

### Output

```json
```