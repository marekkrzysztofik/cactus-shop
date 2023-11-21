<template>
  <main class="section">
    <Header />
    <Categories />
    <Features />
    <Products />
  </main>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const hiddenElements = document.querySelectorAll('.hidden') as NodeListOf<HTMLElement>;
  hiddenElements.forEach((el: HTMLElement) => observer.observe(el));
})

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
