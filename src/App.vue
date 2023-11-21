<template>
  <nav>
    <div class="flex header__nav">
      <div class="flex align-items-center">
        <router-link to="/">
          <h1 class="header__nav--heading">
            tu ci kaktus wyrośnie
          </h1>
        </router-link>
      </div>
      <nav class="flex align-items-center">
        <ul class="flex">
          <li class="m-2">
            <a>O nas</a>
          </li>
          <li class="m-2">
            <a>Aktualności</a>
          </li>
          <li class="m-2">
            <a>Galeria</a>
          </li>
          <li class="m-2">
            <a>Zamówienia</a>
          </li>
        </ul>
      </nav>
      <div class="search-box flex">
        <form action="#" class="search">
          <input type="text" class="search__input" placeholder="Szukaj..." />
          <button class="search__button">
            <img class="search__icon" src="@/../images/search.svg" alt="" />
          </button>
        </form>
      </div>
      <div class="header__nav__buttons flex">
        <button class="header__nav__buttons--btn">
          <i class="pi pi-user" />
        </button>
        <button class="header__nav__buttons--btn">
          <i class="pi pi-shopping-bag" /></button>
      </div>
    </div>
  </nav>
  <main class="margin-top-5">
    <RouterView />
  </main>
  <footer class="footer flex">
    <article class="footer__box flex column area-1">
      <h1 class="heading-primary">Kontakt</h1>
      <div class="flex">
        <i class="pi pi-map-marker" />
        <p>ul. Kaktusa 5, 00-000 Ogród</p>
      </div>
      <div class="flex">
        <i class="pi pi-whatsapp" />
        <p>123456789</p>
      </div>
    </article>
    <article class="footer__box area-2">
      <p>Regulamin</p>
      <p>Polityka prywatności</p>
      <p>Zamówienia</p>
      <p>Zwroty</p>
      <p>Reklamacje</p>
      <p>Ochrona Danych Osobowych</p>
      <p>Metody płatności</p>
    </article>
    <article class="footer__box area-3">
      <h1 class="heading-primary">tu ci kaktus wyrośnie</h1>
      <div class="flex">
        <i class="pi pi-instagram" />
        <i class="pi pi-facebook" />
      </div>
    </article>
  </footer>
</template>

