import { getElement } from '../../utils/dom-utils'


export function historyLoad({ client }: { client: any }) {

  const historyList = getElement<HTMLDivElement>(".history-list") 

  console.log("O elemento .history-list nao foi carregado na DOM")

  historyList.innerHTML = "";

  console.log(client)

  const header = getElement<HTMLDivElement>(".header-history")
  console.log(header)
  const totalCuts = header.querySelector("span")
  totalCuts!.textContent = `${client.loyaltyCard.totalCuts} cortes`

  client.appointmentHistory.forEach((appointment: { date: string; time: string }) => {
    const historyCard = document.createElement("div")
    historyCard.classList.add("history-card")
    historyList.append(historyCard);

    const dateHour = document.createElement("div")
    dateHour.classList.add("date-hour")
    historyCard.append(dateHour)

    const date = document.createElement("p")
    date.textContent = `${appointment.date}`
    dateHour.append(date)

    const time = document.createElement("span")
    time.textContent = `${appointment.time}`
    dateHour.append(time)

    const circleCheck = document.createElement("div")
    circleCheck.classList.add("circle-check")
    historyCard.append(circleCheck)

    const circle = document.createElement("div")
    circle.classList.add("circle")
    circleCheck.append(circle)

    const icon = document.createElement("i")
    icon.classList.add("ph", "ph-seal-check")
    circleCheck.append(icon)
  });
}