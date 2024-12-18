import { getElement } from '../../utils/dom-utils'

export function fidelityCardLoad({ client }: { client: any }) {
  const idCard = getElement<HTMLDivElement>(".id-card")
  const id = idCard.querySelector<HTMLParagraphElement>("p")

  id!.textContent = `ID: ${client.id}`

  // Seleciona todas as divs com a classe 'cut-card'
  const cutCards = document.querySelectorAll<HTMLDivElement>(".cut-card");

  // Reseta todas as divs para o estado inicial (limpa o conteúdo)
  cutCards.forEach((cutCard, index) => {
    // Limpa o conteúdo da div
    cutCard.innerHTML = "";
  
    // Se for a última div, recoloca o ícone
    if (index === cutCards.length - 1) {
      const icon = document.createElement("i");
      icon.classList.add("ph-fill", "ph-gift");
      cutCard.appendChild(icon);
    }
  });

   // Itera sobre o histórico de agendamentos
  client.appointmentHistory.forEach((appointment, index) => {
    // Verifica se existe uma div correspondente para marcar
    if (cutCards[index]) {
      const cutCard = cutCards[index];

      // Verifica se existe um ícone <i> dentro da div
      const icon = cutCard.querySelector("i");
      if (icon) {
        // Remove o ícone <i>
        icon.remove();
      }

      // Cria o elemento <img>
      const imgElement = document.createElement("img");
      imgElement.classList.add("pin-check");
      imgElement.src = "./src/assets/PinCheck.png";
      imgElement.alt = "Pin Check";

      // Adiciona a imagem na div correspondente
      cutCard.appendChild(imgElement);
    }
  });
}