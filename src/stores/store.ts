import { defineStore } from 'pinia'


export const store = defineStore('counter', {
    state: () => ({
        count: 1,
        name: 'Eduardo',
        powerGenerated: false,
    }),
    getters: {
        doubleCount: (state) => {
            return state.count * 2
        }
    },
    actions: {
        increment() {
            this.count++
        },
        setGenerator(status: boolean) {
            this.powerGenerated = status
        }
    },
})