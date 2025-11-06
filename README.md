# Bot Slack - /antunas-me

Bot de Slack que responde ao slash command `/antunas-me` com um aforismo aleatório do Antunes.

## Instalação

1. Instalar dependências:
```bash
npm install
```

2. Configurar variáveis de ambiente (opcional):
```bash
cp .env.example .env
# Editar .env e adicionar o SLACK_VERIFICATION_TOKEN se necessário
```

## Configuração no Slack

1. Aceder a [Slack API Apps](https://api.slack.com/apps)
2. Criar uma nova app ou selecionar uma existente
3. Ir a **Slash Commands** no menu lateral
4. Clicar em **Create New Command**
5. Configurar:
   - **Command**: `/antunas-me`
   - **Request URL**: `https://seu-dominio.com/antunas-me` (ou usar ngrok para desenvolvimento local)
   - **Short Description**: `Retorna um aforismo aleatório do Antunes`
   - **Usage Hint**: (deixar em branco)

6. Na secção **Basic Information**, copiar o **Verification Token** e adicionar ao `.env` como `SLACK_VERIFICATION_TOKEN`

7. Instalar a app no workspace:
   - Ir a **Install App** no menu lateral
   - Clicar em **Install to Workspace**
   - Autorizar as permissões necessárias

## Executar

### Desenvolvimento (com auto-reload):
```bash
npm run dev
```

### Produção:
```bash
npm start
```

## Desenvolvimento Local com ngrok

Para testar localmente, usar ngrok para expor o servidor:

```bash
# Instalar ngrok (se ainda não tiver)
# macOS: brew install ngrok
# ou baixar de https://ngrok.com/

# Iniciar o servidor
npm start

# Noutro terminal, iniciar ngrok
ngrok http 3000

# Copiar a URL HTTPS fornecida pelo ngrok (ex: https://abc123.ngrok.io)
# Usar esta URL no Request URL do slash command no Slack
```

## Funcionalidades

- Responde imediatamente ao comando `/antunas-me`
- Retorna uma frase aleatória em maiúsculas
- Resposta visível no canal (não é ephemeral)
- Lista de 29 aforismos do Antunes

## Estrutura

- `index.js` - Servidor Express e lógica do bot
- `package.json` - Dependências e scripts
- `.env.example` - Exemplo de variáveis de ambiente
- `README.md` - Este ficheiro

