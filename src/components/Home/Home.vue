<template>
  <div class="p">
    <header>
      <div class="header flex">
        <div class="header__slider">
          <Slider />
        </div>
        <div class="header__add flex column">
          <div class="header__text-box flex column br-15">
            <h2 class="m-3">Dalej się zastanawiasz jaką roślinę chcesz?</h2>
            <p>Mało czasu żeby dbać o domową florę? Wprowadź do swojej przestrzeni sukulenty i poczuj połączenie z naturą. Pakujemy nasze rośliny w profesjonalny sposób. </p>
            <img src="@/../images/arrow-down.svg" alt="">
          </div>
          <div class="header__button">
            <a href="#section-tours" class="btn1 btn1--white btn1--animated"
              >Sprawdź naszą ofertę</a
            >
          </div>
        </div>
      </div>
    </header>

    <h1 class="heading-secondary m-3">Najpopularniejsze produkty</h1>
    <div class="grid-box">
      <div class="products-grid">
        <div class="products-grid__item flex column">
          <div class="products-grid__item--image-box">
            <img
              class="products-grid__item--image"
              src="/images/kaktus1.webp"
              alt="pizza image"
            />
          </div>
          <h2 class="products-grid__item--header m-2">
            ZAMIOCULCAS ZAMIOFOLIA
          </h2>
          <div class="products-grid__item--basket">
            <p class="products-grid__item--price">
              <span>24,00</span>
              <span>zł</span>
            </p>
            <div class="products-grid__item--basket--box flex">
              <img
                class="products-grid__item--basket--box-img"
                src="/images/cart.svg"
                alt="cart icon"
              />
              <h5 class="margin-0">Add to cart</h5>
            </div>
          </div>
        </div>
        <div class="products-grid__item flex column">
          <div class="products-grid__item--image-box">
            <img
              class="products-grid__item--image"
              src="/images/kaktus2.webp"
              alt="pizza image"
            />
          </div>
          <h2 class="products-grid__item--header m-2">KAKTUS OPUNCJA</h2>
          <div class="products-grid__item--basket">
            <p class="products-grid__item--price">
              <span>24,00</span>
              <span>zł</span>
            </p>
            <div class="products-grid__item--basket--box flex">
              <img
                class="products-grid__item--basket--box-img"
                src="/images/cart.svg"
                alt="cart icon"
              />
              <h5 class="margin-0">Add to cart</h5>
            </div>
          </div>
        </div>
        <div class="products-grid__item flex column">
          <div class="products-grid__item--image-box">
            <img
              class="products-grid__item--image"
              src="/images/kaktus3.webp"
              alt="pizza image"
            />
          </div>
          <h2 class="products-grid__item--header m-2">
            SANSEWERIA SANSEVIERIA
          </h2>
          <div class="products-grid__item--basket">
            <p class="products-grid__item--price">
              <span>24,00</span>
              <span>zł</span>
            </p>
            <div class="products-grid__item--basket--box flex">
              <img
                class="products-grid__item--basket--box-img"
                src="/images/cart.svg"
                alt="cart icon"
              />
              <h5 class="margin-0">Add to cart</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="features">
      <div class="">
        <h1 class="features--heading">Sklep z roślinami online</h1>
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
    <h1 class="heading-secondary m-3">Zapoznaj się z naszymi</h1>
    <div class="products flex">
      <div class="products__left-side flex m-2">
        <div class="products--text flex m-2">
          <h2>Profesjonalne metody pakowania</h2>
        </div>
      </div>
      <div class="products__right-side flex m-2">
        <div class="products__right-side--top flex m-1">
          <div class="products--text flex m-2">
            <h2>Sukulenty</h2>
          </div>
        </div>
        <div class="products__right-side--bottom flex m-1">
          <div class="products--text flex m-2">
            <h2>Kaktusy</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
