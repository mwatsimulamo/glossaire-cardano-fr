<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <div class="gc-404" role="main">
    <p class="gc-404__code" aria-hidden="true">404</p>
    <h1 class="gc-404__title">Page introuvable</h1>
    <p class="gc-404__text">
      La page que vous recherchez n’existe pas ou a été déplacée.
      Revenez à l’accueil ou explorez le glossaire de A à Z.
    </p>
    <div class="gc-404__actions">
      <a class="gc-404__btn gc-404__btn--primary" :href="withBase('/')">
        Retour à l’accueil
      </a>
      <a class="gc-404__btn" :href="withBase('/glossaire-a-z/a')">
        Glossaire A–Z
      </a>
    </div>
  </div>
</template>

<style scoped>
.gc-404 {
  box-sizing: border-box;
  width: 100%;
  max-width: 36rem;
  margin: 0 auto;
  padding: 4rem 1.25rem 5rem;
  text-align: center;
}

@media (min-width: 768px) {
  .gc-404 {
    padding: 5.5rem 1.5rem 7rem;
  }
}

.gc-404__code {
  margin: 0;
  color: var(--vp-c-brand-1);
  font-size: clamp(3.5rem, 10vw, 4.75rem);
  font-weight: 750;
  letter-spacing: -0.03em;
  line-height: 1;
}

.gc-404__title {
  margin: 1rem 0 0;
  color: var(--vp-c-text-1);
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.gc-404__text {
  margin: 0.85rem auto 0;
  max-width: 28rem;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  line-height: 1.6;
}

.gc-404__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.55rem;
  margin-top: 1.75rem;
}

.gc-404__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.35rem;
  padding: 0.45rem 1rem;
  border: 1px solid var(--gc-border, rgba(0, 51, 173, 0.14));
  border-radius: 0;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.84rem;
  font-weight: 650;
  text-decoration: none;
  transition:
    border-color 0.16s ease,
    background-color 0.16s ease,
    color 0.16s ease;
}

.gc-404__btn:hover {
  border-color: var(--gc-border-strong, rgba(0, 51, 173, 0.28));
  background: var(--gc-fill-hover, rgba(0, 51, 173, 0.08));
  color: var(--vp-c-brand-1);
}

.gc-404__btn--primary {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-1);
  color: var(--gc-on-brand, #ffffff);
}

.gc-404__btn--primary:hover {
  border-color: var(--vp-c-brand-3, #002a8f);
  background: var(--vp-c-brand-3, #002a8f);
  color: var(--gc-on-brand, #ffffff);
}

.dark .gc-404__btn {
  background: var(--vp-c-bg-soft);
}
</style>
