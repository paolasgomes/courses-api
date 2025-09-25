# Atividade 2 - API Express com TypeScript

Uma API REST simples construída com Express.js e TypeScript, configurada com ESLint e Prettier para manter a qualidade do código.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **TypeScript** - Superset tipado do JavaScript
- **ESLint** - Linter para identificar problemas no código
- **Prettier** - Formatador de código
- **TSX** - TypeScript executor e watcher

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

## 🔧 Instalação

1. Clone este repositório ou baixe os arquivos
2. Navegue até o diretório do projeto
3. Instale as dependências:

```bash
npm install
```

## 🏃‍♂️ Como Executar

### Modo de Desenvolvimento (com hot reload)

```bash
npm start
```

O servidor será iniciado na porta **3000** e reiniciará automaticamente quando você modificar os arquivos.

### Verificar se está funcionando

Após iniciar o servidor, acesse:

- **URL**: http://localhost:3000/health
- **Resposta esperada**: `{"status":"API rodando com sucesso!"}`

## 🛠️ Scripts Disponíveis

| Comando            | Descrição                                                           |
| ------------------ | ------------------------------------------------------------------- |
| `npm start`        | Inicia o servidor em modo de desenvolvimento com hot reload         |
| `npm run lint`     | Executa o ESLint para verificar problemas no código                 |
| `npm run lint:fix` | Executa o ESLint e corrige automaticamente os problemas encontrados |

## 📁 Estrutura do Projeto

```
atividade-2/
├── src/
│   └── index.ts          # Arquivo principal da aplicação
├── node_modules/         # Dependências (gerado automaticamente)
├── eslint.config.mts     # Configuração do ESLint
├── tsconfig.json         # Configuração do TypeScript
├── package.json          # Informações do projeto e dependências
└── README.md            # Documentação do projeto
```

## 🌐 Rotas da API

### GET /health

- **Descrição**: Endpoint de verificação de saúde da API
- **Resposta**:
  ```json
  {
    "status": "API rodando com sucesso!"
  }
  ```

## 🔍 Configuração do TypeScript

O projeto está configurado com:

- **Target**: ES2022
- **Module**: CommonJS
- **Strict mode**: Habilitado
- **ESModule Interop**: Habilitado para compatibilidade com bibliotecas CommonJS

## 📝 Configuração do ESLint

O projeto usa:

- Configuração padrão do ESLint
- TypeScript ESLint para análise de código TypeScript
- Prettier para formatação automática
- Configuração compatível entre ESLint e Prettier

## 🤝 Como Contribuir

1. Faça suas alterações no código
2. Execute `npm run lint:fix` para garantir que o código esteja formatado corretamente
3. Teste suas alterações executando `npm start`
4. Certifique-se de que o endpoint `/health` ainda funciona

## 🐛 Solução de Problemas

### Erro de porta em uso

Se a porta 3000 estiver em uso, você pode:

1. Parar outros processos que usam a porta 3000
2. Ou modificar a porta no arquivo `src/index.ts` (linha onde está `app.listen(3000)`)

### Problemas com TypeScript

Se houver erros de TypeScript:

1. Verifique se todas as dependências estão instaladas: `npm install`
2. Verifique se o arquivo `tsconfig.json` não foi modificado incorretamente

### Problemas com ESLint

Para corrigir automaticamente problemas de linting:

```bash
npm run lint:fix
```

## 📄 Licença

Este projeto está sob a licença ISC.

---

**Desenvolvido para a disciplina de Tópicos Especiais - 6º Semestre**
