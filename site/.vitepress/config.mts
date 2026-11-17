import { defineConfig } from 'vitepress'

const glossaryLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')

const glossarySidebarItems = glossaryLetters.map((letter) => ({
  text: letter.toUpperCase(),
  link: `/glossaire-a-z/${letter}`
}))

export default defineConfig({
  lang: 'fr-FR',
  title: 'Glossaire Cardano',
  description:
    'Ressource éducative communautaire qui explique les termes, technologies et mécanismes de l’écosystème Cardano en français simple.',

  // Évite les pages GitBook héritées (README / SUMMARY) dans le build
  srcExclude: ['README.md', 'SUMMARY.md', '.gitbook/**'],

  cleanUrls: true,

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Glossaire Cardano',

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
    langMenuLabel: 'Changer de langue'
  }
})
