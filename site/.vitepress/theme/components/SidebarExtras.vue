<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const { page } = useData()

const show = computed(() => {
  const path = page.value.relativePath
  return (
    path.startsWith('glossaire-a-z/') ||
    path === 'documentation.md' ||
    path === 'contribuer.md'
  )
})

const links = [
  {
    label: 'Documentation',
    href: '/documentation',
    match: 'documentation.md'
  },
  {
    label: 'Contribuer',
    href: '/contribuer',
    match: 'contribuer.md'
  }
]
</script>

<template>
  <nav v-if="show" class="gc-sidebar-extras" aria-label="Ressources">
    <a
      v-for="link in links"
      :key="link.href"
      class="gc-sidebar-extras__btn"
      :class="{ 'is-active': page.relativePath === link.match }"
      :href="withBase(link.href)"
    >
      {{ link.label }}
    </a>
  </nav>
</template>
