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
    image: 'https://zielony-parapet.pl/36087-thickbox_default/opuntia-microdasys-albata-opuncja.jpg',
    quantity: 1
  },
  {
    name: 'SANSEWERIA SANSEVIERIA',
    price: 28,
    image: 'https://zielony-parapet.pl/17252-thickbox_default/zamioculcas-zamiifolia-supernova-zamiokulkas-zamiolistny.jpg',
    quantity: 1
  },
  {
    name: 'KAKTUS OPUNCJA',
    price: 28,
    image: 'https://zielony-parapet.pl/36087-thickbox_default/opuntia-microdasys-albata-opuncja.jpg',
    quantity: 1
  },
  {
    name: 'ZAMIOCULCAS ZAMIOFOLIA',
    price: 24,
    image: 'https://zielony-parapet.pl/17252-thickbox_default/zamioculcas-zamiifolia-supernova-zamiokulkas-zamiolistny.jpg',
    quantity: 1
  }
]