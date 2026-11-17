import { computed, ref } from 'vue'
import data from '../data/categories.json'

export const activeCategoryId = ref<string | null>(null)

export const categories = computed(() =>
  data.categories.map((cat) => ({
    ...cat,
    count: data.counts[cat.id as keyof typeof data.counts] ?? 0
  }))
)

export function selectCategory(id: string) {
  activeCategoryId.value = activeCategoryId.value === id ? null : id
}

export function clearCategory() {
  activeCategoryId.value = null
}

export function termsForActiveCategory() {
  const id = activeCategoryId.value
  if (!id) return []
  return data.terms
    .filter((t) => t.category === id)
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title, 'fr', { sensitivity: 'base' }))
}

export function activeCategoryLabel() {
  return data.categories.find((c) => c.id === activeCategoryId.value)?.label ?? ''
}
