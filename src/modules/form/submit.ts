import dayjs from "dayjs"

import { clientFetchById } from "../../services/client-fetch-by-id"
import { historyLoad } from "./history-load";
import { fidelityCardLoad } from "./fidelity-card-load";
import { getElement } from '../../utils/dom-utils'
import { remainingLoad } from "./remaining-load";


const form = getElement<HTMLFormElement>("form");
const inputId = getElement<HTMLInputElement>(".input-id")
const imgProfile = getElement<HTMLImageElement>(".img-profile");
const clientName = getElement<HTMLElement>(".client-name");
const dateSince = getElement<HTMLElement>(".date-since");

form.onsubmit = async (event) => {
  event.preventDefault(); 

  const id = inputId.value

  try {
    // Aguarda o resultado da busca pelo cliente
    const client = await clientFetchById({ id: id });

    historyLoad({ client })
    fidelityCardLoad({ client })
    remainingLoad({ client })

    // Verifica se o cliente existe antes de tentar acessar o nome
    if (client) {
      clientName.textContent = client.name; // Atualiza o conteúdo do <p>
      dateSince.textContent = `Cliente desde: ${client.clientSince}`
    } else {
      alert("Cliente não encontrado!");
    }
  } catch (error) {
    console.error("Erro ao buscar cliente:", error);
  }
}