//! Script global da página
//* Configurações
//? Definição do tempo de pulsação:
let timePerPulse = 450;

//? Intervalo de tempo de 450ms para editar o conteúdo da span
setInterval(() => {
   //? Recebe o primeiro elemento span da página
   const spanBar = document.getElementById("home-bar");

   //? Verifica se o span contêm a /
   if (spanBar.textContent === "/") {
      spanBar.textContent = ""; // Remove a barra
   } else {
      spanBar.textContent = "/"; // Adiciona a barra
   }
}, timePerPulse);

//? Função que aleatoriza url a redirecionar o usuário
function urlRandomizer() {
   //? Lista de URL's a serem acessadas
   const urls = ["https://coolors.co/",
      "https://stackoverflow.com/",
      "https://emojipedia.org/",
      "https://www.youtube.com/"];

   //? Define o índice do primeiro elemento de uma lista
   const firstElementIndice = 0;

   //? Recebe um número aleatório entre o primeiro indice e o tamanho da lista
   const numberRandomizer = randNumber(firstElementIndice, urls.length);

   //? Altera a localização da página para a url aleatória
   window.location.href = urls[numberRandomizer];
}

//? Função de randomizar um número a partir do tempo (random())
function randNumber(init, end) {
   const timeNow = Date.now(); //? Tempo desde 1970 em milissegundos
   const quantNumbers = end - init; //? Recebe a quantidade de números
   //? Recebe o resto da divisão do tempo atual com a quantidade de 
   //? números e soma com o número inicial
   const numberRandomizer = (timeNow % quantNumbers) + init;

   return numberRandomizer; //? Retorna o número randomizado
}
