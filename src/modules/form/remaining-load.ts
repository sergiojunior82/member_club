import { getElement } from '../../utils/dom-utils'

export function remainingLoad({ client }: { client: any }) {

  const remainingCuts = getElement<HTMLDivElement>(".remaining-cuts")

  const restCuts = remainingCuts.querySelector("p")

  restCuts!.textContent = `${client.loyaltyCard.cutsRemaining}`

  const span = document.createElement("span")
  span.textContent =" cortes restantes"

  restCuts?.append(span)

  const cutsTo = getElement<HTMLSpanElement>(".total-cuts")
  cutsTo.textContent = `${client.loyaltyCard.totalCuts} de ${client.loyaltyCard.cutsNeeded}`

  updateBarFill(client.loyaltyCard.totalCuts, client.loyaltyCard.cutsNeeded)


}

function updateBarFill(totalCuts: number, cutsNeeded: number) {
  // Seleciona o elemento da barra de progresso
  const barFill = document.querySelector<HTMLDivElement>(".bar-cuts-fill");

  if (!barFill) {
    console.error("Elemento '.bar-cuts-fill' não encontrado no DOM.");
    return;
  }

  // Calcula a largura como porcentagem
  const progressPercentage = Math.min((totalCuts / cutsNeeded) * 100, 100);

  // Define a largura da barra de progresso
  barFill.style.width = `${progressPercentage}%`;

  // (Opcional) Atualiza o texto de cortes realizados
  const cuts = document.querySelector<HTMLSpanElement>(".total-cuts");
  if (totalCuts) {
    cuts!.textContent = `${totalCuts} de ${cutsNeeded}`;
  }
}