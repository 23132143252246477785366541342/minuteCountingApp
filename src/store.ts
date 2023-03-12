import { createStore } from '@udecode/zustood';

interface sessionStoreTemplate {
    day: number,
    week: number,
    total: number
    lastAuth: Date
}

export const sessionStore = createStore("sessionStore")<sessionStoreTemplate>(
    {
        day: 0,
        week: 0,
        total: 0,
        lastAuth: new Date("2023/03/12")
    },
    {
        persist: {
            enabled: true
        }
    }
)