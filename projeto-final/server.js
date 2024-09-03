// Importa módilo http do node (ele da ferramentas para criar servidores web)
const http = require('http');

// isso (http.createServer()) = Cria servidor http 
// isso (createServer()) recebe dunção callback como argumento que executa a cada aquisição
//req = infos sobre requisição do cliente como o método HTTP (GET, POST, etc.), a URL,etc
//res = resposta do servidor para o cliente
const server = http.createServer((req, res) => {

  // Definindo cabeçalhos de resposta 200 = OK
  res.statusCode = 200; 

  // (Content-Type) = define cabeçalho
  // (application/json) = define resposta com conteúdo JSON
  res.setHeader('Content-Type', 'application/json');

  // OBJ JS (dadosPessoais), que contem o conteudo que queremos enviar em JSON
  const dadosPessoais = {
    "nome": "Leticia Cristina",
    "idade": 19,
    "descrição": "Sou uma pessoa extrovertida, gosto de carros, corinthias e jogar com meus amigos.",
    "gênero": "Feminino",
    "país": "Brasil"
  };

  // converte (dadosPessoais) em string JSON usando função (JSON.stringify())
  // (res.end) = envia essa string JSON como resposta ao cliente
  res.end(JSON.stringify(dadosPessoais));
});

// (server.listen(3000, () => { ... });) =  Fazendo o servidor ouvir na porta 3000 e pronto para receber requisições
// a função callback dentro da (server.listen()) sera executada avisando que pode receber requisições
server.listen(3000, () => {
  console.log('Servidor rodando em <http://localhost:3000/>');
});