import { defineStore } from 'pinia'

interface Product {
  name: string
  type: string
  animal: string
  price: number
}

interface BasketItem extends Product {
  quantity: number
}

interface State {
  products: Product[]
  type: string[]
  animals: string[]
  basket: BasketItem[]
  searchTerm: string
}

interface Getters {
  filteredProducts: Product[]
  pricesSum: number
  pricesEuSum: number
}

export const useStore = defineStore('store', {
  state: (): State => {
    return {
      products: [],
      type: ['na ziemi', 'na drzewie'],
      animals: ['pies'],
      basket: [],
      searchTerm: '',
    }
  },
  getters: {
    filteredProducts(): Product[] {
      return this.products.filter(
        (product) =>
          product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          product.type.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          product.animal
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()) ||
          product.price.toString().includes(this.searchTerm)
      )
    },
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
}) as Store<State, Getters>
