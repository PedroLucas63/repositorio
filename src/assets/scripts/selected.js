//! Script de selecionar a divisão
//* Configurações da página
//? Função que verifica se a divisão apertada não é selecionada
function verifySelectedInformations(clickedInformation) {
   //? Classe de objeto selecionado
   const classSelect = "selected";

   //? Verifica se o botão apertado não é o selecionado
   if (clickedInformation.className !== classSelect) {
      alterSelectedInformations();
   }
}

//? Função que altera a informações selecionadas
function alterSelectedInformations() {
   //? Recebimento das divisões de seleções a serem alteradas
   const academicSelect = document.getElementById("select-academic"); //? Acadêmico
   const professionalSelect = document.getElementById("select-professional"); //? Profissional
   //? Classe de objeto selecionado
   const classSelect = "selected";

   //? Recebimento das divisões de conteúdo a serem escondidas
   const academicInformations = document.getElementById("academic"); //? Acadêmico
   const professionalInformations = document.getElementById("professional"); //? Profissional
   //? Classe de objeto escondido
   const classHide = "display-none";

   //? Altera as classes nas duas divisões
   changeClassInTwoDiv(academicSelect, professionalSelect, classSelect);
   changeClassInTwoDiv(
      academicInformations,
      professionalInformations,
      classHide
   );
}

//? Função que recebe duas divisões e altera qual possui uma classe específica
function changeClassInTwoDiv(div1, div2, alterClass) {
   //? Remove ou adiciona uma classe caso ela exista ou não
   div1.classList.toggle(alterClass);
   div2.classList.toggle(alterClass);
}
