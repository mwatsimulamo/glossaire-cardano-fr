<script setup lang="ts">
import { withBase } from 'vitepress'

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

const cards = [
  {
    title: 'Glossaire A-Z',
    details:
      'Parcourez les définitions lettre par lettre et clarifiez le vocabulaire de Cardano.',
    link: '/glossaire-a-z/a',
    label: 'Explorer',
    accent: 'blue'
  },
  {
    title: 'Documentation',
    details:
      'Retrouvez les sources et références pour aller plus loin dans l’écosystème.',
    link: '/documentation',
    label: 'Consulter',
    accent: 'teal'
  },
  {
    title: 'Contribuer',
    details:
      'Améliorez le glossaire français, ou signalez un terme officiel à y traduire.',
    link: '/contribuer',
    label: 'Participer',
    accent: 'navy'
  }
]
</script>

<template>
  <section class="gc-home" aria-label="Parcourir le glossaire">
    <div class="gc-home__inner">
      <header class="gc-home__header">
        <h2 class="gc-home__title">Commencer ici</h2>
      </header>

      <div class="gc-cards">
        <a
          v-for="card in cards"
          :key="card.link"
          class="gc-card"
          :class="`gc-card--${card.accent}`"
          :href="withBase(card.link)"
        >
          <span class="gc-card__glow" aria-hidden="true" />
          <h3 class="gc-card__title">{{ card.title }}</h3>
          <p class="gc-card__details">{{ card.details }}</p>
          <span class="gc-card__cta">{{ card.label }} →</span>
        </a>
      </div>

      <header class="gc-home__header gc-home__header--alphabet">
        <h2 class="gc-home__title gc-home__title--alphabet">
          Explorez Cardano de A à Z, une lettre à la fois.
        </h2>
      </header>

      <nav class="gc-alphabet" aria-label="Lettres du glossaire">
        <a
          v-for="letter in letters"
          :key="letter"
          class="gc-letter"
          :href="withBase(`/glossaire-a-z/${letter}`)"
        >
          {{ letter.toUpperCase() }}
        </a>
      </nav>

      <div class="gc-home__disclaimer">
        <p class="gc-home__note">
          <strong>Ce glossaire est une initiative communautaire indépendante.</strong>
          Les termes présentés sont traduits et adaptés à partir de glossaires
          officiels anglophones, afin de les rendre accessibles au public
          francophone.
        </p>
        <a class="gc-home__sources" :href="withBase('/documentation')">
          Voir les sources
        </a>
      </div>
    </div>
  </section>
</template>
