import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const data = JSON.parse(
  fs.readFileSync(path.join(root, '.vitepress/theme/data/categories.json'), 'utf8')
)

const mismatches = []
for (const t of data.terms) {
  const htmlPath = path.join(root, '.vitepress/dist/glossaire-a-z', `${t.letter}.html`)
  if (!fs.existsSync(htmlPath)) {
    mismatches.push({ ...t, reason: 'missing-page' })
    continue
  }
  const html = fs.readFileSync(htmlPath, 'utf8')
  if (!html.includes(`id="${t.slug}"`)) {
    // try to find closest id near title text
    const re = new RegExp(`id="([^"]+)"[^>]*>\\s*${t.title.slice(0, 20).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i')
    const m = html.match(re)
    mismatches.push({
      title: t.title,
      letter: t.letter,
      ourSlug: t.slug,
      foundNear: m?.[1] ?? null
    })
  }
}

console.log(JSON.stringify({ total: data.terms.length, mismatches: mismatches.length, sample: mismatches.slice(0, 40) }, null, 2))
