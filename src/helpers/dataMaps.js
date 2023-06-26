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

export const FrappeGanttDataMap = (data) => {

    return data.map(el => {
        return {
            id: `Task ${el.id}`,
            name: el.company,
            start: el.start,
            end: el.end,
            progress: Math.floor(Math.random() * 101),
            dependencies:el.dependencies
        }

    })
}