# Título do projeto

O projeto é um sistema de gerenciamento de biblioteca com um CRUD completo para livros, permitindo cadastrar, consultar, atualizar e remover registros de forma eficiente. Com uma estrutura robusta e interface intuitiva, facilita o controle do acervo e o acesso às informações.

## 🚀 Começando

Faça o clone do repositório
```
git clone https://github.com/LeonardoMelloTrindade/gerenciamento-biblioteca.git
```

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

* [Node](https://nodejs.org/pt) - Ambiente de execução
* [MySQL](https://www.mysql.com/) - Bando de dados
* [Docker](https://www.docker.com/) - Gerenciador de Containers

### 🔧 Instalação

O passo a passo para instalar o necessário do projeto

Instalar as dependências
```
yarn
```

Adicionar as migrations no banco

```
npx prisma migrate dev
```
### ⌨️Rodar Projeto

Para rodar o projeto:

```
yarn start:dev
```

Para rodar via Docker

```
yarn docker:start:dev
```

### ⌨️ E testes de estilo de codificação

Para rodar o eslint use:

```
yarn lint
```

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [NestJs](https://nestjs.com/) - O framework back-end usado
* [Changeset](https://github.com/changesets/changesets) - Gerenciador de versionamento

## ✒️ Autores

* **Leonardo Mello Trindade** - *Desenvedor* - [LeonardoMelloTrindade](https://github.com/LeonardoMelloTrindade)