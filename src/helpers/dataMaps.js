import { dateFormater } from "./dateConverter"

export const ReactChronoDataMap = (data) => {
    return data.map(el => {
        return {
            title: dateFormater(el.start),
            cardTitle: el.position,
            cardSubtitle: el.company,
            cardDetailedText: el.description
        }

    })
}