## CRUD NodeJS e Python

CRUD simples com backend feito em NodeJS e frontend sem html, apenas com print's do resultado, feito em python.

## Como rodar o backend do NodeJS

```
git clone https://github.com/WadsonPontes/CRUDNodeJSBackPythonFront.git
npm install
```
Altere o arquivo `server\config\database.js` de acordo com seu banco de dados
```
yarn sequelize db:migrate
yarn dev
```
## Como rodar o frontend do Python

Altere o arquivo `client/client.py` de acordo com suas necessidades
```
py client/client.py
```

## Funcionalidades implementadas

- Create
- Find
- Find By Id (embutido no Find)
- Update
- Delete
- Delete All

## Autores

- Wadson Pontes - [@WadsonPontes](https://github.com/WadsonPontes)
