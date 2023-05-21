import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: (): State => {
    return {
      basket: [],
    }
  },
  getters: {
    pricesSum(): number {
      const prices: number[] = []
      this.basket.forEach((product) => {
        prices.push(parseInt(product.price) * parseInt(product.quantity))
      })
      return prices.reduce((a, b) => a + b)
    },
  },
  persist: {
    enabled: true,
  },
})
