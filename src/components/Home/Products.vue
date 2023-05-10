<template>
  <div class="p">
    <div class="products-box">
      <div class="grid-box">
        <div class="products-grid">
          <div v-for="item in allProducts" class="flex column">
            <div>
              <img
                class="products-box--image"
                :src="item.image"
                alt="pizza image"
              />
            </div>
            <h2 class="products-box--header m-2">
              {{ item.name }}
            </h2>
            <div class="products-grid--basket">
              <p>
                <span>{{ item.price }}</span>
                <span>zł</span>
              </p>
              <button
                class="products-grid--cart-button flex justify-content-center align-items-center"
                @click="addToBasket(item)"
              >
                <i class="pi pi-shopping-bag"></i>
                <p class="m-2">Add to cart</p>
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import { allProducts } from './products';

</script>