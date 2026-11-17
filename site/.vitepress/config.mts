import { defineConfig, type HeadConfig } from 'vitepress'
import letterDescriptions from './data/letter-descriptions.json'

const SITE_URL = 'https://glosscardano-fr.vercel.app'
const SITE_TITLE = 'Glossaire Cardano'
const OG_IMAGE = `${SITE_URL}/og-glossaire.jpg`

const glossaryLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')

const glossarySidebarItems = glossaryLetters.map((letter) => ({
  text: letter.toUpperCase(),
  link: `/glossaire-a-z/${letter}`
}))

/** URL canonique unique par page (alignée sur cleanUrls). */
function canonicalFor(relativePath: string): string {
  const path = relativePath.replace(/(?:(^|\/)index)?\.md$/, '$1')
  return new URL(path, `${SITE_URL}/`).href
}

function hasHeadTag(
  head: HeadConfig[],
  tag: string,
  attr: 'rel' | 'property' | 'name',
  value: string
): boolean {
  return head.some(
    (entry) =>
      entry[0] === tag &&
      typeof entry[1] === 'object' &&
      entry[1] !== null &&
      attr in entry[1] &&
      (entry[1] as Record<string, string>)[attr] === value
  )
}

export default defineConfig({
  lang: 'fr-FR',
  title: SITE_TITLE,
  description:
    'Ressource éducative communautaire qui explique les termes, technologies et mécanismes de l’écosystème Cardano en français simple.',

  // Évite les pages GitBook héritées (README / SUMMARY) dans le build
  srcExclude: ['README.md', 'SUMMARY.md', '.gitbook/**'],

  cleanUrls: true,

  head: [
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'M-U0z26dUY1BChlGu4C8-GcuKQXisF5vaCjTCC6fPOY'
      }
    ],
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      }
    ]
  ],

  sitemap: {
    hostname: SITE_URL,
    transformItems(items) {
      return items.filter((item) => !item.url.includes('404'))
    }
  },

  transformHead({ pageData, page }) {
    const is404 =
      pageData.isNotFound === true ||
      page === '404.md' ||
      pageData.relativePath === '404.md'

    if (!is404) return

    return [
      ['meta', { name: 'robots', content: 'noindex, follow' }],
      [
        'meta',
        {
          name: 'description',
          content:
            'Page introuvable — Glossaire Cardano en français. Retournez à l’accueil ou explorez le glossaire A–Z.'
        }
      ]
    ]
  },

  transformPageData(pageData) {
    // Ne pas appliquer canonical / OG de contenu à la page 404
    if (pageData.isNotFound || pageData.relativePath === '404.md') {
      return
    }

    const canonical = canonicalFor(pageData.relativePath)
    const head = (pageData.frontmatter.head ??= []) as HeadConfig[]

    // Descriptions uniques pour les pages A–Z (termes réellement présents)
    const letterMatch = pageData.relativePath.match(
      /^glossaire-a-z\/([a-z])\.md$/
    )
    if (letterMatch) {
      const letter = letterMatch[1] as keyof typeof letterDescriptions
      const letterDescription = letterDescriptions[letter]
      if (letterDescription) {
        pageData.description = letterDescription
        pageData.frontmatter.description = letterDescription
      }
    }

    const description =
      pageData.description ||
      (typeof pageData.frontmatter.description === 'string'
        ? pageData.frontmatter.description
        : '') ||
      'Ressource éducative communautaire qui explique les termes, technologies et mécanismes de l’écosystème Cardano en français simple.'

    const title = pageData.title
      ? `${pageData.title} | ${SITE_TITLE}`
      : SITE_TITLE

    // Canonical unique
    if (!hasHeadTag(head, 'link', 'rel', 'canonical')) {
      head.push(['link', { rel: 'canonical', href: canonical }])
    }

    // Open Graph
    if (!hasHeadTag(head, 'meta', 'property', 'og:title')) {
      head.push(['meta', { property: 'og:title', content: title }])
    }
    if (!hasHeadTag(head, 'meta', 'property', 'og:description')) {
      head.push(['meta', { property: 'og:description', content: description }])
    }
    if (!hasHeadTag(head, 'meta', 'property', 'og:type')) {
      head.push(['meta', { property: 'og:type', content: 'website' }])
    }
    if (!hasHeadTag(head, 'meta', 'property', 'og:url')) {
      head.push(['meta', { property: 'og:url', content: canonical }])
    }
    if (!hasHeadTag(head, 'meta', 'property', 'og:image')) {
      head.push(['meta', { property: 'og:image', content: OG_IMAGE }])
    }

    // Twitter Cards
    if (!hasHeadTag(head, 'meta', 'name', 'twitter:card')) {
      head.push(['meta', { name: 'twitter:card', content: 'summary_large_image' }])
    }
    if (!hasHeadTag(head, 'meta', 'name', 'twitter:title')) {
      head.push(['meta', { name: 'twitter:title', content: title }])
    }
    if (!hasHeadTag(head, 'meta', 'name', 'twitter:description')) {
      head.push(['meta', { name: 'twitter:description', content: description }])
    }
    if (!hasHeadTag(head, 'meta', 'name', 'twitter:image')) {
      head.push(['meta', { name: 'twitter:image', content: OG_IMAGE }])
    }
  },

  themeConfig: {
    logo: '/logo.png',
    siteTitle: SITE_TITLE,

    // Nav centrée sur le glossaire ; Doc / Contribuer vivent sous les lettres
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Glossaire A-Z', link: '/glossaire-a-z/a' }
    ],

    sidebar: {
      '/glossaire-a-z/': [
        {
          text: 'Glossaire',
          items: glossarySidebarItems
        }
      ],
      // Garder la grille lettres + boutons aussi sur Doc / Contribuer
      '/documentation': [
        {
          text: 'Glossaire',
          items: glossarySidebarItems
        }
      ],
      '/contribuer': [
        {
          text: 'Glossaire',
          items: glossarySidebarItems
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Rechercher',
            buttonAriaLabel: 'Rechercher'
          },
          modal: {
            displayDetails: 'Afficher la liste détaillée',
            resetButtonTitle: 'Réinitialiser la recherche',
            backButtonTitle: 'Fermer la recherche',
            noResultsText: 'Aucun résultat pour',
            footer: {
              selectText: 'sélectionner',
              selectKeyAriaLabel: 'Entrée',
              navigateText: 'naviguer',
              navigateUpKeyAriaLabel: 'Flèche haut',
              navigateDownKeyAriaLabel: 'Flèche bas',
              closeText: 'fermer',
              closeKeyAriaLabel: 'Échap'
            }
          }
        }
      }
    },

    outline: {
      label: 'Termes',
      level: 2
    },

    aside: true,

    docFooter: {
      prev: 'Précédent',
      next: 'Suivant'
    },

    darkModeSwitchLabel: 'Apparence',
    lightModeSwitchTitle: 'Passer en mode clair',
    darkModeSwitchTitle: 'Passer en mode sombre',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Retour en haut',
    langMenuLabel: 'Changer de langue',

    notFound: {
      code: '404',
      title: 'Page introuvable',
      quote:
        'La page que vous recherchez n’existe pas ou a été déplacée.',
      link: '/',
      linkLabel: 'Retour à l’accueil',
      linkText: 'Retour à l’accueil'
    }
  }
})
