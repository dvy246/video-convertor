# Repository File Structure — conversordevideo.com

This document outlines the directory and file organization of the `conversordevideo.com` project.

---

```
conversordevideo/
├── public/
│   ├── _headers                  # Strict COOP/COEP headers for SharedArrayBuffer
│   ├── favicon.svg               # Emerald video icon SVG
│   ├── llms.txt                  # Machine-readable LLM context standard
│   ├── manifest.json             # PWA web manifest
│   ├── robots.txt                # Search bot directives + sitemap references
│   └── sw.js                     # Offline caching service worker (Network-First HTML)
├── src/
│   ├── components/
│   │   ├── converter/            # Interactive React island components (Dark & Light support)
│   │   │   ├── ConverterApp.tsx      # Master state machine & file handler (accepts `lang` prop)
│   │   │   ├── FileDropZone.tsx      # Drag & drop area with accessibility & localized text
│   │   │   ├── FormatSelector.tsx    # Format buttons (MP4, MP3, GIF, WebM, etc.)
│   │   │   ├── PresetSelector.tsx    # Smart presets (WhatsApp, Reels, HD, Compress Balanced, Compress Extreme)
│   │   │   ├── ConversionProgress.tsx# Live progress bar, frame counter & cancel
│   │   │   ├── ResultCard.tsx        # File diff, preview, download, embed generator
│   │   │   └── PrivacyBadge.tsx      # 100% local trust indicator
│   │   ├── layout/               # Global Layout Components
│   │   │   ├── Header.astro          # Navigation with LanguageSwitcher & mobile drawer ('ConversordeVídeo')
│   │   │   ├── LanguageSwitcher.astro# Accessible dropdown with native language names & flags
│   │   │   ├── ThemeSlider.astro     # Accessible smooth dark/light mode toggle slider
│   │   │   ├── Footer.astro          # Categorized localized footer links
│   │   │   └── SEOHead.astro         # Meta, hreflang alternates, Open Graph, Twitter, JSON-LD
│   │   └── sections/             # Reusable content sections (Dark & Light mode)
│   │       ├── HowItWorks.astro      # 3-step guide (dynamically translated)
│   │       ├── Features.astro        # 6 core advantage cards (dynamically translated)
│   │       ├── ComparisonTable.astro # Competitor comparison table (dynamically translated)
│   │       ├── HomeSEOArticle.astro  # 750+ word comprehensive technical guide (all 9 languages)
│   │       ├── FormatGrid.astro      # Grid linking specialized converter & compressor tools
│   │       └── FAQSection.astro      # Schema-backed native details/summary FAQs
│   ├── data/
│   │   ├── formatPages.ts        # Typed store for all 51 programmatic format, compressor & resizer pages
│   │   ├── homeArticles.ts       # In-depth technical guides for all 9 locales
│   │   ├── legalPages.ts         # Privacy Policy, Terms of Service, and About pages across 9 locales
│   │   └── localizedFormatPages.ts# Multi-language metadata, grid tools & slug localizations
│   ├── i18n/                     # Internationalization Module (Astro Recipe Standard)
│   │   ├── client.ts             # Client-side translation helper (`tClient` & `getClientLang`)
│   │   ├── languages.ts          # 9 supported languages, ISO codes, and flags
│   │   ├── navTools.ts           # Localized mega-menu, header quick-links, and footer links
│   │   ├── ui.ts                 # Verbatim UI dictionaries for all 9 languages
│   │   └── utils.ts              # getLangFromUrl, useTranslations, useTranslatedPath, getAlternateLanguageUrls
│   ├── layouts/
│   │   ├── BaseLayout.astro      # Base HTML shell, Anti-FOUC theme script, dynamic lang code
│   │   └── ConverterPageLayout.astro # Universal layout for all programmatic format routes
│   ├── lib/
│   │   ├── ffmpeg/               # FFmpeg WebAssembly Domain Module
│   │   │   ├── engine.ts             # Singleton engine with memory cleanup & cancel
│   │   │   ├── metadata.ts           # Client-side metadata & poster frame extractor
│   │   │   ├── presets.ts            # Plain-language presets & WhatsApp / compression / resize calculator
│   │   │   └── types.ts              # Core TypeScript interfaces
│   │   └── seo/                  # SEO & Structured Data Module
│   │       ├── meta.ts               # Site config & canonical URL generator
│   │       └── schema.ts             # WebApplication, Organization, WebSite, HowTo, FAQPage, BreadcrumbList
│   ├── pages/
│   │   ├── [lang]/               # Dynamic multi-language sub-directories
│   │   │   ├── index.astro           # Localized homepages (/en/, /es/, /fr/, /ja/, /zh/, /no/, /tr/, /pl/)
│   │   │   ├── [...slug].astro       # Localized format, compressor, resizer & audio tools
│   │   │   ├── privacidade.astro     # Localized Privacy Policy & GDPR (/en/privacidade, /es/privacidade, etc.)
│   │   │   ├── sobre.astro           # Localized About & Technology (/en/sobre, /es/sobre, etc.)
│   │   │   └── termos.astro          # Localized Terms of Service (/en/termos, /es/termos, etc.)
│   │   ├── index.astro               # Unprefixed Portuguese homepage ('Conversor de Vídeo Online')
│   │   ├── compressor-de-video.astro # Hub ("compressor de video", "compressor de video online")
│   │   ├── compactar-video.astro     # Hub ("compactar video", "compactar video online")
│   │   ├── converter-video-em-audio.astro # Hub ("converter video em audio")
│   │   ├── extrair-audio-de-video.astro   # Hub ("extrair audio de video")
│   │   ├── redimensionar-video.astro      # Hub ("redimensionar video")
│   │   ├── conversor-de-audio.astro  # Hub ("conversor de audio")
│   │   ├── video-para-gif.astro      # Hub ("video para gif")
│   │   ├── [44 other Portuguese tool & format spoke pages...]
│   │   ├── sobre.astro, privacidade.astro, termos.astro # Portuguese legal/about pages
│   │   └── 404.astro, 500.astro      # Smart multilingual 404 & error recovery pages
│   └── styles/
│       └── global.css            # Tailwind v4 import, custom tokens & dark variant
├── ARCHITECTURE.md               # Detailed technical architecture reference
└── AGENTS.md                     # AI Agent Operating Guide & Multi-Language Invariant
├── STRUCTURE.md                  # Complete annotated repository file structure
├── astro.config.mjs              # Astro configuration with i18n, Vite plugins & headers
├── package.json
└── tsconfig.json
```
