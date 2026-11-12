// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mylocationlab.com',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'de', 'pt', 'hi', 'id', 'ja', 'it', 'ru'],
    fallback: {
      es: 'en',
      fr: 'en',
      de: 'en',
      pt: 'en',
      hi: 'en',
      id: 'en',
      ja: 'en',
      it: 'en',
      ru: 'en',
    },
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
      fallbackType: 'rewrite',
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.endsWith('/404.html'),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          fr: 'fr',
          de: 'de',
          pt: 'pt-BR',
          hi: 'hi',
          id: 'id',
          ja: 'ja',
          it: 'it',
          ru: 'ru',
        },
      },
      serialize(item) {
        // Return clean item without identical default changefreq/priority
        return {
          url: item.url,
          lastmod: item.lastmod || new Date('2026-10-29T00:00:00Z'),
          links: item.links,
        };
      },
    }),
  ],
  prefetch: {
    defaultStrategy: 'hover',
    prefetchAll: false,
  },
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
