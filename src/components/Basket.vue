<template>
  <div class="basket flex justify-content-center">
    <h1 v-if="store.basket.length===0" class="m-2"><i class="pi pi-shopping-bag" /> Twój koszyk aktualnie jest pusty.</h1>
    <div class="flex column">
      <div
        v-for="product in store.basket"
        class="flex justify-content-between"
      >
        <div class="flex align-items-center">
          <img :src="product.image" class="basket--img br-15" alt="" />
          <div>
            <h2>{{ product.name }}</h2>
            <p class="m-0">
              Cena za sztukę:
              {{  product.price + ' zł' }}
            </p>
          </div>
        </div>
        <div class="flex align-items-center">
          <div class="quantity-box flex br-15">
            <button
              @click="add(store.basket.indexOf(product))"
              class="btn-icon"
            >
              <i class="pi pi-plus"></i>
            </button>
            <h5 class="m-0">{{ product.quantity }}</h5>
            <button
              @click="subtract(store.basket.indexOf(product))"
              class="btn-icon"
            >
              <i class="pi pi-minus"></i>
            </button>
          </div>
          <button
            @click="deleteProduct(store.basket.indexOf(product))"
            class="bin-icon br-radius-20 btn-icon-danger m-1"
          >
            <i class="pi pi-ban"></i>
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="store.basket.length > 0"
      class="basket__payment flex flex-column m-3 br-15"
    >
      <h1 class="m-1">Do zapłaty</h1>
      <div class="flex justify-content-end">
        <p class="m-2">Razem: <h1 class="m-0">
          {{  store.pricesSum + ' zł' }}
        </h1></p>
      </div>
     <button class="basket__payment--btn br-15">Wybierz dostawę i płatność</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from '@/stores/store'

const store = useStore()

const deleteProduct = (id: number) => {
  store.basket.splice(id, 1)
}
const add = (id: number) => {
  let quantity = parseInt(store.basket[id].quantity)
  quantity += 1
  store.basket[id].quantity = quantity
}
const subtract = (id: number) => {
  let quantity = parseInt(store.basket[id].quantity)
  if (quantity > 1) {
    quantity -= 1
  }
  store.basket[id].quantity = quantity
}
</script>
