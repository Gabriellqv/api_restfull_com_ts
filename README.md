# 🚀 API RESTful com TypeScript

Uma API RESTful moderna e robusta desenvolvida com TypeScript, seguindo as melhores práticas de desenvolvimento e arquitetura de software.

## 📋 Sobre o Projeto

Este projeto é uma API RESTful completa construída com TypeScript, oferecendo uma base sólida para desenvolvimento de aplicações backend escaláveis e manuteníveis. A API segue os princípios REST e implementa padrões de arquitetura limpa.

## ✨ Funcionalidades

- 🔒 Arquitetura RESTful completa
- 📝 TypeScript para tipagem estática
- 🛠️ Configuração modular e organizada
- 🧹 Code quality com Biome
- 📦 Estrutura de projeto escalável
- 🔍 Type-safe em todo o código

## 🛠️ Tecnologias Utilizadas

- **TypeScript** - Linguagem de programação com tipagem estática
- **Node.js** - Runtime JavaScript
- **Biome** - Linter e formatter rápido e moderno
- **Express** (assumido) - Framework web para Node.js
- **Outras dependências** - Conforme definido no `package.json`

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendado)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🚀 Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/Gabriellqv/api_restfull_com_ts.git
cd api_restfull_com_ts
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as configurações necessárias:

```env
PORT=3000
NODE_ENV=development
# Adicione outras variáveis conforme necessário
```

### 4. Execute o projeto em modo de desenvolvimento

```bash
npm run dev
```

A API estará disponível em `http://localhost:3000` (ou a porta configurada).

### 5. Build do projeto

```bash
npm run build
```

O código TypeScript será compilado para JavaScript na pasta `dist/`.

### 6. Execute em produção

```bash
npm start
```

## 📁 Estrutura do Projeto

```
api_restfull_com_ts/
├── config/           # Arquivos de configuração
├── src/              # Código fonte da aplicação
│   ├── controllers/  # Controladores das rotas
│   ├── models/       # Modelos de dados
│   ├── routes/       # Definição de rotas
│   ├── middleware/   # Middlewares customizados
│   ├── services/     # Lógica de negócio
│   ├── utils/        # Funções utilitárias
│   └── app.ts        # Arquivo principal da aplicação
├── .gitignore        # Arquivos ignorados pelo Git
├── biome.json        # Configuração do Biome
├── package.json      # Dependências e scripts
├── tsconfig.json     # Configuração TypeScript
└── README.md         # Este arquivo
```

## 🎯 Endpoints da API

A API segue os padrões REST. Exemplos de endpoints:

- `GET /api/resource` - Listar recursos
- `GET /api/resource/:id` - Obter recurso específico
- `POST /api/resource` - Criar novo recurso
- `PUT /api/resource/:id` - Atualizar recurso
- `DELETE /api/resource/:id` - Deletar recurso

*Nota: Os endpoints específicos podem variar conforme a implementação.*

## 🧪 Testes

Para executar os testes:

```bash
npm test
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento
- `npm run build` - Compila o TypeScript para JavaScript
- `npm start` - Inicia o servidor em modo produção
- `npm run lint` - Executa o linter (Biome)
- `npm run format` - Formata o código (Biome)

## 📝 Code Quality

Este projeto utiliza [Biome](https://biomejs.dev/) para garantir qualidade e consistência do código:

- **Linting** - Identifica problemas no código
- **Formatting** - Formata o código automaticamente
- **Type checking** - Verificação de tipos do TypeScript

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👤 Autor

**Gabriel L. Queiroz Vieira**

- GitHub: [@Gabriellqv](https://github.com/Gabriellqv)
---
