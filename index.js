const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parse do body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Lista de aforismos do Antunes
const AFORISMOS = [
  'UNLUCKY',
  'HABITAT NATURAL, CONA',
  'FAZ O TRUQUE DA COBRA ZOROLHA',
  'HABEMOS PAPA',
  'FACADAS DOEM MENOS',
  'PODE ESTAR BONITO, MAS BEM QUE ME PODEM CRAVAR COM ELE NOS COLHÕES',
  'DEPOIS UM GAJO METE MEIO MANGALHO E VEM LOGO O ESTÁDIO ABAIXO',
  'ZÉ DOS DOGS, SIGA',
  'UM RABO É COMO UM ESTÁDIO DE FUTEBOL, INTERESSA QUE SEJA BONITO, MAS O QUE CONTA SÃO OS ACESSOS',
  'COM PELO À MOSTRA, MESMO A MACHO',
  'FDS, A MALTA FALHA COMO AS NOTAS DE MIL',
  'EU SOU DE TADIM',
  'Ó LETO, AJUDA-ME AQUI',
  'TADIM, QUE JÁ ESTEVE NA SEGUNDA DIVISÃO',
  'TU QUERES ENSINAR O PAI A TER FILHOS!',
  'ESTOU TESO COMO UM FILHO DA PUTA DE UM CARAPAU!',
  'CHAPADA DE MÃO ABERTA NA CONA',
  'MIJO DE BORLA, SAGRES 1,20 NÃO PERCEBO',
  'ISTO É CADA MERDA QUE VEJO QUE QUANDO VOU CAGAR ATÉ MEIJO',
  'ISTO DO ANDROID NEM É BOM, NEM É MAU, É UMA MERDA',
  'VAIS TER DE LEVAR COM ELE, FAZ PARTE',
  'OUTRA PUTA PARA CONTAR AOS NETOS',
  'POR ESTE ANDAR VAIS PARA SANTA CONA DO ASSOBIO',
  'NUNCA CONFUNDAM UM PÉ DE CABRA COM UMA CABRA DE PÉ',
  'QUEM DIZ QUE PINAR É BOM, É PORQUE NUNCA MIJOU AFLITINHO',
  'DEUS DÁ NOZES A QUEM NÃO TEM DENTES',
  'DEUS DÁ DENTES A QUEM NÃO TEM NOZES!',
  'CAIRAM-ME OS QUILHÕES AGORA',
  'O MAIA IR AO TOMORROWLAND JOGAR PADEL É O MESMO QUE IR ÀS PUTAS E PEDIR UM ABRAÇO'
];

// Função para escolher um aforismo aleatório
function getAforismoAleatorio() {
  const indice = Math.floor(Math.random() * AFORISMOS.length);
  return AFORISMOS[indice];
}

// Endpoint para o slash command
app.post('/antunas-me', (req, res) => {
  // Verificar se o token corresponde (opcional mas recomendado para segurança)
  const token = req.body.token;
  const slackToken = process.env.SLACK_VERIFICATION_TOKEN;
  
  if (slackToken && token !== slackToken) {
    return res.status(401).send('Unauthorized');
  }

  // Obter aforismo aleatório
  const aforismo = getAforismoAleatorio();

  // Responder imediatamente ao Slack
  // O response_type "in_channel" torna a resposta visível no canal
  res.json({
    response_type: 'in_channel',
    text: aforismo
  });
});

// Endpoint de health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Endpoint do slash command: http://localhost:${PORT}/antunas-me`);
});

