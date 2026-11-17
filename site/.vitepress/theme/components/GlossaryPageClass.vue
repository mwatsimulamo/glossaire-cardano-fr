<script setup lang="ts">
import { computed, onBeforeUnmount, watchEffect } from 'vue'
import { onContentUpdated, useData } from 'vitepress'

const { page } = useData()

const isGlossary = computed(() =>
  page.value.relativePath.startsWith('glossaire-a-z/')
)

function enhanceSourceLinks(root: ParentNode | null) {
  if (!root) return

  // Ne pas retraiter les boutons déjà générés
  if (root.querySelector('.gc-src')) {
    // Contenu partiellement enrichi : n’agir que sur les <p> restants
  }

  const paragraphs = Array.from(root.querySelectorAll('p'))
  const sourceParas: HTMLParagraphElement[] = []

  for (const p of paragraphs) {
    if (!(p instanceof HTMLParagraphElement)) continue
    if (p.closest('.gc-cat-block, .gc-src')) continue

    const links = Array.from(p.querySelectorAll(':scope > a'))
    if (!links.length) continue

    const text = (p.textContent || '').replace(/\s+/g, ' ').trim()
    const linkText = links.map((a) => (a.textContent || '').trim()).join(' ')
    const remainder = text
      .replace(/^→\s*/, '')
      .replace(linkText, '')
      .trim()

    const isArrowSource = text.startsWith('→')
    const isLoneExternal =
      links.length === 1 &&
      !remainder &&
      /^https?:\/\//i.test((links[0] as HTMLAnchorElement).href)

    if (!isArrowSource && !isLoneExternal) continue
    sourceParas.push(p)
  }

  let i = 0
  while (i < sourceParas.length) {
    const group = [sourceParas[i]]
    let j = i + 1
    while (
      j < sourceParas.length &&
      sourceParas[j].previousElementSibling === group[group.length - 1]
    ) {
      group.push(sourceParas[j])
      j += 1
    }

    const wrap = document.createElement('div')
    wrap.className = 'gc-src'
    group[0].before(wrap)

    for (const p of group) {
      for (const a of Array.from(p.querySelectorAll(':scope > a'))) {
        a.classList.add('gc-src__btn')
        a.setAttribute('target', '_blank')
        a.setAttribute('rel', 'noopener noreferrer')
        wrap.appendChild(a)
      }
      p.remove()
    }

    i = j
  }
}

function applyPageClasses() {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  const path = page.value.relativePath

  root.classList.toggle('gc-glossary', path.startsWith('glossaire-a-z/'))
  root.classList.toggle('gc-documentation', path === 'documentation.md')
  root.classList.toggle('gc-contribuer', path === 'contribuer.md')
}

function enhanceCurrentDoc() {
  if (typeof document === 'undefined') return
  applyPageClasses()
  const doc = document.querySelector('.VPDoc .main .vp-doc')
  enhanceSourceLinks(doc)
}

watchEffect(() => {
  // Réagit au changement de page (classes html)
  void page.value.relativePath
  applyPageClasses()
})

onContentUpdated(() => {
  enhanceCurrentDoc()
})

onBeforeUnmount(() => {
  if (typeof document === 'undefined') return
  document.documentElement.classList.remove(
    'gc-glossary',
    'gc-documentation',
    'gc-contribuer',
    'gc-category-mode'
  )
})
</script>

<template>
  <!-- Classes de page + boutons sources -->
</template>
