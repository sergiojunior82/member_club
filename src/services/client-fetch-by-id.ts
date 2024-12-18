
import { apiConfig } from "./api-config"

export async function clientFetchById({ id }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/clients`);
    const data = await response.json();

    const clientById = data.find((client: any) => client.id === id);

    return clientById || null; // Retorna null caso não encontre
    
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao buscar o cliente.");
  }
  
}