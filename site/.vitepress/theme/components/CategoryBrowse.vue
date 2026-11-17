<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, watch } from 'vue'
import { useData, withBase } from 'vitepress'
import {
  activeCategoryId,
  activeCategoryLabel,
  categories,
  clearCategory,
  selectCategory,
  termsForActiveCategory
} from '../composables/categoryFilter'

const { page } = useData()

const isGlossary = computed(() =>
  page.value.relativePath.startsWith('glossaire-a-z/')
)

const activeTerms = computed(() =>
  termsForActiveCategory().map((t) => ({
    ...t,
    href: withBase(`/glossaire-a-z/${t.letter}#${t.slug}`)
  }))
)

const label = computed(() => activeCategoryLabel())

function setCategoryMode(active: boolean) {
  if (typeof document === 'undefined') return
  const root = document.querySelector('.VPDoc .main .vp-doc') as HTMLElement | null
  if (root) root.hidden = active
  document.documentElement.classList.toggle('gc-category-mode', active)
}

function onSelect(id: string) {
  selectCategory(id)
}

watch(activeCategoryId, async (id) => {
  await nextTick()
  const active = !!id && isGlossary.value
  setCategoryMode(active)
  if (active) {
    const panel = document.querySelector('.gc-cats__panel--main')
    panel?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
})

watch(
  () => page.value.relativePath,
  async () => {
    clearCategory()
    await nextTick()
    setCategoryMode(false)
  }
)

onBeforeUnmount(() => {
  setCategoryMode(false)
})
</script>

<template>
  <section
    v-if="isGlossary"
    class="gc-cat-block"
    aria-label="Parcourir par catégorie"
  >
    <div class="gc-cat-bar">
      <p class="gc-cat-block__label">Catégories</p>
      <div class="gc-cat-chips" role="group" aria-label="Filtrer par catégorie">
        <button
          v-for="cat in categories"
          :key="cat.id"
          type="button"
          class="gc-cat-chip"
          :class="{ 'is-active': activeCategoryId === cat.id }"
          :aria-pressed="activeCategoryId === cat.id"
          @click="onSelect(cat.id)"
        >
          <span class="gc-cat-chip__title">{{ cat.label }}</span>
          <span class="gc-cat-chip__count">{{ cat.count }}</span>
        </button>
      </div>
    </div>

    <div v-if="activeCategoryId" class="gc-cats__panel gc-cats__panel--main">
      <p class="gc-cats__total">
        {{ activeTerms.length }} termes
        <span class="gc-cats__total-label">· {{ label }}</span>
      </p>

      <article
        v-for="term in activeTerms"
        :id="`cat-${term.slug}`"
        :key="term.title"
        class="gc-term"
      >
        <h2 class="gc-term__title">
          <a class="gc-term__anchor" :href="term.href">{{ term.title }}</a>
        </h2>
        <div class="gc-term__body" v-html="term.html" />
      </article>
    </div>
  </section>
</template>
