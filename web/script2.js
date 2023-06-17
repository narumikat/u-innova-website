document.addEventListener("DOMContentLoaded", function() {
  const spinningTexts = document.querySelectorAll('.text--spinning');

  // Define o número de rotações desejado antes de parar a animação
  const numRotations = 3;

  // Variável para rastrear o número de rotações completas
  let completedRotations = 0;

  // Função para verificar se a animação foi completada
  function checkAnimationComplete() {
    completedRotations++;

    // Verifica se o número de rotações completas é igual ao número desejado
    if (completedRotations === numRotations) {
      spinningTexts.forEach(function (text) {
        text.style.animationPlayState = 'paused'; // Pausa a animação
      });
    }
  }

  // Adiciona o evento
