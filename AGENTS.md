# AGENTS.md — AI Agent Operating Guide for conversordevideo.com

Welcome! This document provides complete, up-to-date instructions, conventions, architectural patterns, and workflows for AI coding assistants working in the `conversordevideo.com` repository.

---

## 📌 Project Summary

- **Product:** `conversordevideo.com`
- **Core Value Proposition:** A 100% browser-local, zero-signup, privacy-first video & audio converter and compressor utility designed for global and regional search discovery.
- **Key Differentiator:** Videos are transcoded in browser memory (RAM) via WebAssembly (FFmpeg.wasm). **Zero bytes are uploaded to remote servers**, giving users instant conversions, no queue delays, no file paywalls, and native LGPD/GDPR compliance.
- **Multi-Language Architecture (9 Locales):**
  1. **Portuguese (`pt-BR`)**: Default root (unprefixed at `/`)
  2. **English (`en`)**: `/en/`
  3. **Spanish (`es`)**: `/es/`
  4. **French (`fr`)**: `/fr/`
  5. **Japanese (`ja`)**: `/ja/`
  6. **Chinese (`zh-CN`)**: `/zh/`
  7. **Norwegian (`no`)**: `/no/`
  8. **Turkish (`tr`)**: `/tr/`
  9. **Polish (`pl`)**: `/pl/`
- **Total Static Pages:** 293 canonical MPA routes with complete bidirectional `hreflang` alternate tags and XML sitemaps.
- **Live Production URL:** [https://conversordevideo.pages.dev](https://conversordevideo.pages.dev) (deployed via Cloudflare Pages).
- **GitHub Repository:** `https://github.com/dvy246/video-convertor.git`

---

## 🛠️ Technology Stack

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Astro.js (MPA SSG) | `^5.4.2` | High-performance static HTML generation, perfect TTFB and Core Web Vitals. |
| **i18n Routing** | Astro i18n + Custom Recipe | Built-in | Unprefixed default locale (`prefixDefaultLocale: false`) with 8 sub-locales. |
| **Styling & Theming** | Tailwind CSS v4 | `^4.0.9` | Zero-runtime CSS with `@import "tailwindcss"`, `@custom-variant dark`, and ThemeSlider. |
| **Interactivity** | React 19 Islands | `^19.0.0` | Isolated client-side state machine loaded via `client:idle`. |
| **Transcoding & Compression** | `@ffmpeg/ffmpeg` + `@ffmpeg/util` | `^0.12.15` | Browser-local WebAssembly video/audio transcode and smart compression engine. |
| **Icons** | Phosphor Icons + SVG | `^2.1.7` | Accessible, lightweight icon set with `aria-hidden` attributes. |
| **SEO & Sitemaps** | `@astrojs/sitemap` | `^3.2.1` | Automatic XML sitemap generation for all 293 canonical routes. |
| **Deployment** | Cloudflare Pages + Wrangler | `^4.127.1` | Edge CDN hosting with strict COOP/COEP isolation headers. |

---

## 📂 Repository File Structure

```
conversordevideo/
├── public/
│   ├── _headers                  # COOP/COEP headers for SharedArrayBuffer
│   ├── favicon.svg               # Emerald video icon SVG
│   ├── llms.txt                  # Machine-readable LLM context standard
│   ├── manifest.json             # PWA web manifest
│   ├── robots.txt                # Search bot directives + sitemap references
│   └── sw.js                     # Offline caching service worker (Network-First HTML)
├── src/
│   ├── components/
│   │   ├── converter/            # Interactive React island components (Dark & Light support)
│   │   │   ├── ConverterApp.tsx      # Master state machine & file handler
│   │   │   ├── FileDropZone.tsx      # Drag & drop area with accessibility & limits
│   │   │   ├── FormatSelector.tsx    # Format buttons (MP4, MP3, GIF, WebM, etc.)
│   │   │   ├── PresetSelector.tsx    # Smart presets (WhatsApp, Reels, HD, Compress Balanced, Compress Extreme)
│   │   │   ├── ConversionProgress.tsx# Live progress bar, frame counter & cancel
│   │   │   ├── ResultCard.tsx        # File diff, preview, download, embed generator
│   │   │   └── PrivacyBadge.tsx      # 100% local trust indicator
│   │   ├── layout/               # Global Layout Components
│   │   │   ├── Header.astro          # Navigation with LanguageSwitcher & mobile drawer
│   │   │   ├── LanguageSwitcher.astro# Accessible dropdown with native language names & flags
│   │   │   ├── ThemeSlider.astro     # Accessible smooth dark/light mode toggle slider
│   │   │   ├── Footer.astro          # Categorized localized footer links
│   │   │   └── SEOHead.astro         # Meta, hreflang alternates, Open Graph, Twitter, JSON-LD
│   │   └── sections/             # Reusable content sections (Dark & Light mode)
│   │       ├── HowItWorks.astro      # 3-step guide
│   │       ├── Features.astro        # 6 core advantage cards
│   │       ├── ComparisonTable.astro # Competitor comparison table
│   │       ├── HomeSEOArticle.astro  # 750+ word comprehensive guide
│   │       ├── FormatGrid.astro      # Grid linking specialized converter & compressor tools
│   │       └── FAQSection.astro      # Schema-backed native details/summary FAQs
│   ├── data/
│   │   ├── formatPages.ts        # Typed store for all 37 programmatic format & compressor pages
│   │   └── localizedFormatPages.ts# Multi-language metadata generator for all 9 locales
│   ├── i18n/                     # Internationalization Module (Astro Recipe Standard)
│   │   ├── languages.ts          # 9 supported languages, ISO codes, and flags
│   │   ├── ui.ts                 # Verbatim UI dictionaries for all 9 languages
│   │   └── utils.ts              # getLangFromUrl, useTranslations, useTranslatedPath, getAlternateLanguageUrls
│   ├── layouts/
│   │   ├── BaseLayout.astro      # Base HTML shell, Anti-FOUC theme script, dynamic lang code
│   │   └── ConverterPageLayout.astro # Universal layout for all programmatic routes
│   ├── lib/
│   │   ├── ffmpeg/               # FFmpeg WebAssembly Domain Module
│   │   │   ├── engine.ts             # Singleton engine with memory cleanup & cancel
│   │   │   ├── metadata.ts           # Client-side metadata & poster frame extractor
│   │   │   ├── presets.ts            # Plain-language presets & WhatsApp / compression calculator
│   │   │   └── types.ts              # Core TypeScript interfaces
│   │   └── seo/                  # SEO & Structured Data Module
│   │       ├── meta.ts               # Site config & canonical URL generator
│   │       └── schema.ts             # WebApplication, Organization, WebSite, HowTo, FAQPage, BreadcrumbList
│   ├── pages/
│   │   ├── [lang]/               # Dynamic multi-language sub-directories
│   │   │   ├── index.astro           # Localized homepages (/en/, /es/, /fr/, /ja/, /zh/, /no/, /tr/, /pl/)
│   │   │   └── [...slug].astro       # Localized format & compressor tools
│   │   ├── index.astro               # Unprefixed Portuguese homepage
│   │   ├── compressor-de-video.astro # Hub ("compressor de video", "compressor de video online")
│   │   ├── compressor-de-video-mp4.astro
│   │   ├── compressor-de-video-gratuito.astro
│   │   ├── comprimir-video.astro
│   │   ├── conversor-de-video-para-mp4.astro
│   │   ├── [32 other Portuguese format pages...]
│   │   ├── sobre.astro, privacidade.astro, termos.astro
│   │   └── 404.astro, 500.astro      # Custom error pages
│   └── styles/
│       └── global.css            # Tailwind v4 import, custom tokens & dark variant
├── ARCHITECTURE.md               # Detailed technical architecture reference
├── astro.config.mjs              # Astro configuration with i18n, Vite plugins & headers
├── package.json
└── tsconfig.json
```

---

## ⚡ Development & Deployment Workflows

### 1. Running Locally
```bash
# Start local Astro dev server
npm run dev

# Build production static bundle (dist/)
npm run build

# Preview production build locally
npm run preview
```

### 2. Deploying to Cloudflare Pages
```bash
# Automated build & edge deploy
npm run deploy
```

---

## 🏷️ Multi-Language SEO & `hreflang` Standards

- **Unprefixed Default Root:** The primary Portuguese site lives at `https://conversordevideo.com/` with zero redirects.
- **Subdirectories for Other Locales:**
  - `en`: `/en/`
  - `es`: `/es/`
  - `fr`: `/fr/`
  - `ja`: `/ja/`
  - `zh`: `/zh/`
  - `no`: `/no/`
  - `tr`: `/tr/`
  - `pl`: `/pl/`
- **Bidirectional `hreflang` Tagging:** Every page outputs 10 alternate link tags in `<head>` (9 language variants + `x-default` pointing to the canonical Portuguese version).
- **Zero Cookie/IP Redirects:** Fully compliant with Google Search Essentials to allow search crawlers unrestricted indexing of all regional variants.

---

## 🎛️ FFmpeg WebAssembly Preset Matrix

| Preset ID | Label | Target / Args | Best For |
| :--- | :--- | :--- | :--- |
| `balanced` | Qualidade Equilibrada | CRF 23, preset ultrafast, AAC 128k, faststart | General web & PC playback |
| `high_quality` | Alta Qualidade | CRF 18, preset ultrafast, AAC 192k, faststart | Archival & visual preservation |
| `small_size` | Tamanho Reduzido | CRF 28, max 720p, AAC 96k, faststart | Email attachments & fast transfer |
| `compress_balanced` | Compressão Média | CRF 26, max 1080p, AAC 96k, faststart | ~50% file size reduction |
| `compress_extreme` | Compressão Máxima | CRF 30, max 720p, AAC 64k, faststart | 75-80% file size reduction |
| `whatsapp` | Otimizado p/ WhatsApp | Dynamic bitrate calculation `< 14.5MB`, max 720p, AAC 96k | Direct WhatsApp video shares |
| `instagram_reels` | Reels / Stories | CRF 22, 9:16 vertical formatting | Instagram, TikTok, Shorts |
| `audio_mp3` | Extrair Áudio MP3 | LAME MP3 192 kbps constant bitrate | Podcasts, lectures, voice memos |
| `gif_standard` | GIF Animado | 12 fps, max width 480px, Bayer dither palette | Loop stickers & reactions |
