<template>
  <div class="p">
    <header>
      <div class="header flex justify-content-center">
          <Slider />
        <div class="header__card flex column">
          <div class="header__text-box flex column br-15">
            <h2 class="header__text-box--heading">
              Dalej się zastanawiasz jaką roślinę chcesz?
            </h2>
            <p class="header__text-box--text">
              Mało czasu żeby dbać o domową florę? Wprowadź do swojej
              przestrzeni sukulenty i poczuj połączenie z naturą. Pakujemy nasze
              rośliny w profesjonalny sposób.
            </p>
            <img src="@/../images/arrow-down.svg" alt="" />
          </div>
          <div class="header__button">
            <a href="#section-tours" class="btn1 btn1--white btn1--animated"
              >Sprawdź naszą ofertę</a
            >
          </div>
        </div>
      </div>
    </header>
    <div class="hidden products flex column">
      <h1 class="heading-secondary m-3">
        Który typ rośliny Ciebie interesuje?
      </h1>
      <div class="flex justify-content-center">
        <div class="flex column m-1">
          <div class="products--box flex m-2 position-relative">
            <img class="products--img" src="@/../images/zielone.jpg" alt="" />
            <div class="products--text flex m-2">
              <h2>Zielone</h2>
            </div>
          </div>

          <div class="products--box flex m-2 position-relative">
            <img class="products--img" src="@/../images/kwitnace.jpg" alt="" />
            <div class="products--text flex m-2">
              <h2>Kwitnące</h2>
            </div>
          </div>
        </div>
        <div class="flex column m-1">
          <div class="products--box flex m-2 position-relative">
            <img class="products--img" src="@/../images/sukulent.jpg" alt="" />
            <div class="products--text flex m-2">
              <h2>Sukulenty</h2>
            </div>
          </div>

          <div class="products--box flex m-2 position-relative">
            <img class="products--img" src="@/../images/kaktus.jpg" alt="" />
            <div class="products--text flex m-2">
              <h2>Kaktusy</h2>
            </div>
          </div>
        </div>
        <div class="flex column m-1">
          <div class="products--box flex m-2 position-relative">
            <img class="products--img" src="@/../images/susza.jpeg" alt="" />
            <div class="products--text flex m-2">
              <h2>Słoneczne miejsca</h2>
            </div>
          </div>

          <div class="products--box flex m-2 position-relative">
            <img class="products--img" src="@/../images/cien.jpg" alt="" />
            <div class="products--text flex m-2">
              <h2>Zacienione</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="heading-secondary m-3 hidden">Nasze bestsellery</h1>
    <div class="products-box hidden">
      <div class="grid-box">
        <div class="products-grid">
          <div v-for="item in products" class="products-grid__item flex column">
            <div class="products-grid__item--image-box">
              <img
                class="products-grid__item--image"
                :src="item.image"
                alt="pizza image"
              />
            </div>
            <h2 class="products-grid__item--header m-2">
              {{ item.name }}
            </h2>
            <div class="products-grid__item--basket">
              <p class="products-grid__item--price">
                <span>{{ item.price }}</span>
                <span>zł</span>
              </p>

              <button
                class="products-grid__item--basket--box flex"
                @click="addToBasket(item)"
              >
                <i class="pi pi-shopping-bag"></i>
                <p class="m-2">Add to cart</p>
              </button>
            </div>
          </div>
        </div>
        <div class="p-3">
          <button
            v-if="!dropdown"
            @click="productsShow"
            class="products-grid--button"
          >
            <i class="pi pi-angle-down" />
            <h5>Rozwiń</h5>
          </button>
          <button
            v-if="dropdown"
            @click="productsHide"
            class="products-grid--button"
          >
            <i class="pi pi-angle-up" />
            <h5>Zwiń</h5>
          </button>
        </div>
      </div>
    </div>
    <div class="hidden features">
      <div class="">
        <h1 class="features--heading heading-primary">Sklep z roślinami online</h1>
        <p>To miejsce dla pasjonatów roślin</p>
        <div class="features__box">
          <div class="features__box--item">
            <img
              src="@/../images/Pakujemy-z-czulością-uproszczone-128-2.png"
              alt=""
              class="img"
            />
            <h2 class="features__box--heading">Pakujemy z czułością</h2>
            <div class="features__box--description">
              <p class="opis">
                Korzystamy z biodegradowalnych materiałów i opatulamy rośliny
                tak, by dotarły do Ciebie nienaruszone. Udało nam się to już
                ponad 100 000 razy!
              </p>
            </div>
          </div>
          <div class="features__box--item">
            <img
              src="@/../images/wysylamy-rosliny-na-cala-polske.png"
              alt=""
              class="img"
            />
            <h2 class="features__box--heading">Wysyłamy na całą Polskę</h2>
            <div class="features__box--description">
              <p class="opis">
                Ponad 99% naszych paczek dociera do celu już następnego dnia po
                nadaniu. Niezależnie od tego, w które miejsce je wezwiesz. Aha,
                wysyłamy od poniedziałku do czwartku.
              </p>
            </div>
          </div>
          <div class="features__box--item">
            <img
              src="@/../images/roslinna-pomoc-jak-leczyc-rosliny.png"
              alt=""
              class="img"
            />
            <i class="fas fa-heart fu"></i>
            <h2 class="features__box--heading">Doradzamy i wspieramy</h2>
            <div class="features__box--description">
              <p class="opis">
                Zawsze możesz liczyć na pomoc naszych roślinnych doradców, a
                jeśli zamówienie nie spełni Twoich oczekiwań, otrzymasz zwrot
                lub rekompensatę.
              </p>
            </div>
          </div>
          <div class="features__box--item">
            <img src="@/../images/znizka-na-rosliny.png" alt="" class="img" />
            <i class="fas fa-heart fu"></i>
            <h2 class="features__box--heading">Zniżki</h2>
            <div class="features__box--description">
              <p class="opis">
                Możesz otrzymać nawet 15% rabatu na roślinne zakupy! Wystarczy,
                że założysz konto w Małej Szklarni i… to tyle - możesz korzystać
                ze zniżki dla pasjonatów.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { allProducts } from './products'
import { useStore } from '@/stores/store'

const dropdown = ref(false)
const store = useStore()
onMounted(() => {
  const hiddenElements = document.querySelectorAll(
    '.hidden'
  ) as NodeListOf<HTMLElement>
  hiddenElements.forEach((el: HTMLElement) => observer.observe(el))
})
const addToBasket = (data) => {
  store.basket.push(data)
  console.log(data)
  // console.log(store.basket)
  //   store.$reset()
}

const products = ref(allProducts.slice(0, 4))
const productsShow = () => {
  products.value = allProducts
  dropdown.value = true
}
const productsHide = () => {
  products.value = allProducts.slice(0, 4)
  dropdown.value = false
}
const observer = new IntersectionObserver(
  (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        const currentEl = entry.target as HTMLElement
        currentEl.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  }
)
</script>
