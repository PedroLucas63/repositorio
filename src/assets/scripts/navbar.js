//! Script do menu navbar
//* Configurações
//? Função de modificar situação do menu
function toggleMenu() {
   //? Recebe os elementos a serem modificados e os elementos de modificação
   const iconMenu = document.getElementById("iconMenu"); //? Ícone do menu
   const acceptedClasses = ["gg-menu", "gg-close"]; //? Classes aceitas
   const navMenu = document.getElementById("nav-menu"); //? Menu navbar
   const acceptedDisplays = ["block", "none"]; //? Style Displays aceitos

   //? Altera a classe do icone do menu com uma função externa
   changeClass(iconMenu, acceptedClasses);
   //? Altera o style display do menu com uma função externa
   changeDisplay(navMenu, acceptedDisplays);
}

//? Função que altera a classe de elemento dado duas classes definidas
function changeClass(element, classes) {
   //? Verifica se a classe usada é a primeira
   if (element.className === classes[0]) {
      element.className = classes[1]; //? Substitui pelo outro
   } else {
      element.className = classes[0]; //? Substitui pelo outro
   }
}

//? Função que altera o display de elemento dado dois display definidas
function changeDisplay(element, displays) {
   //? Verifica se o display usado é o primeiro
   if (element.style["display"] === displays[0]) {
      element.style["display"] = displays[1]; //? Substitui pelo outro
   } else {
      element.style["display"] = displays[0]; //? Substitui pelo outro
   }
}