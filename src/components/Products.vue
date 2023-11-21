<template>
  <section class="section">
    <div class="products-heading">
      <h1 class="heading-secondary m-3">Nasze bestsellery</h1>
    </div>
    <div class="products-box">
      <div class="grid-box">
        <div class="products-grid">
          <article v-for="item in products" class="flex column">
            <div>
              <img class="products-box--image" :src="item.image" alt="pizza image" />
            </div>
            <h2 class="products-box--header m-2">
              {{ item.name }}
            </h2>
            <div class="products-grid--basket">
              <p>
                <span>{{ item.price }}</span>
                <span>zł</span>
              </p>
              <button class="products-grid--cart-button flex justify-content-center align-items-center">
                <i class="pi pi-shopping-bag"></i>
                <p class="m-2">Add to cart</p>
              </button>
            </div>
          </article>
        </div>
        <div class="p-3">
          <button class="products-grid--button">
            <i class="pi pi-angle-down" />
            <h5>Rozwiń</h5>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { allProducts } from '@/consts/products'
import { ref } from 'vue'

const products = ref(allProducts)
</script>
