export interface Product {
  name: string
  price: number
  image: string
  quantity: number
}

export const allProducts: Array<Product> = [
  {
    name: 'ZAMIOCULCAS ZAMIOFOLIA',
    price: 24,
    image: '/images/kaktus1.webp',
    quantity: 1
  },
  {
    name: 'SANSEWERIA SANSEVIERIA',
    price: 28,
    image: '/images/kaktus3.webp',
    quantity: 1
  },
  {
    name: 'KAKTUS OPUNCJA',
    price: 28,
    image: '/images/kaktus2.webp',
    quantity: 1
  },
  {
    name: 'ZAMIOCULCAS ZAMIOFOLIA',
    price: 24,
    image: '/images/kaktus1.webp',
    quantity: 1
  }
]