<template>
  <div class="flex justify-content-around header__nav">
    <div class="flex align-items-center">
      <h1 class="header__nav--heading">tu ci kaktus wyrośnie</h1>
    </div>
    <nav class="flex align-items-center">
      <ul class="flex">
        <li class="m-2">
          <a class="" href="#footer">O nas</a>
        </li>
        <li class="m-2">
          <a class="" href="#cars">Aktualności</a>
        </li>
        <li class="m-2">
          <a class="" href="#pricing">Galeria</a>
        </li>
        <li class="m-2">
          <a class="" href="#cta">Zamówienia</a>
        </li>
      </ul>
    </nav>
  </div>
  <RouterView />
  <footer class="footer flex">
    <div class="footer__box">
      <h1>Mała Szklarnia to miejsce dla każdego roślinomaniaka.</h1>
      <p>
        Odwiedź nasz sklep z roślinami we Wrocławiu i Krakowie lub zamów rośliny
        doniczkowe online z bezpieczną i szybką wysyłką kurierską
      </p>
    </div>
    <div class="footer__box">
      <h1>About us</h1>
      <p>Regulamin</p>
      <p>Polityka prywatności</p>
      <p>Zamówienia</p>
      <p>Zwroty</p>
      <p>Reklamacje</p>
      <p>Ochrona Danych Osobowych</p>
      <p>Metody płatności</p>
    </div>
    <div class="footer__box">
      <h1>About us</h1>
      <p>Regulamin</p>
      <p>Polityka prywatności</p>
      <p>Zamówienia</p>
      <p>Zwroty</p>
      <p>Reklamacje</p>
      <p>Ochrona Danych Osobowych</p>
      <p>Metody płatności</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
