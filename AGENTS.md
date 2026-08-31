# AGENTS.md — AI Agent Operating Guide for conversordevideo.com

Welcome! This document provides complete, up-to-date instructions, conventions, architectural patterns, and workflows for AI coding assistants working in the `conversordevideo.com` repository.

---

## 📌 Project Summary

- **Product:** `conversordevideo.com`
- **Core Value Proposition:** A 100% browser-local, zero-signup, privacy-first video & audio converter and compressor utility designed for Brazilian Portuguese (`pt-BR`) and Spanish-speaking users.
- **Key Differentiator:** Videos are transcoded in browser memory (RAM) via WebAssembly (FFmpeg.wasm). **Zero bytes are uploaded to remote servers**, giving users instant conversions, no queue delays, no file paywalls, and native LGPD compliance.
- **SEO & AEO Strategy:** Exact-Match Domain (EMD) authority + 37 programmatic SEO routes targeting high-volume keywords (`conversor de video`, `compressor de video`, `converter mov para mp4`, `conversor de video para mp3`, `compressor de video mp4`, `compressor de video gratuito`, `video para gif`, `comprimir video`, `conversor de video youtube`, `conversor de video instagram`, `converter m2ts para mp4`, `converter vob para mp4`).
- **Live Production URL:** [https://conversordevideo.pages.dev](https://conversordevideo.pages.dev) (deployed via Cloudflare Pages).

---

## 🛠️ Technology Stack

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Astro.js (MPA SSG) | `^5.4.2` | High-performance static HTML generation, perfect TTFB and Core Web Vitals. |
| **Styling & Theming** | Tailwind CSS v4 | `^4.0.9` | Zero-runtime CSS with `@import "tailwindcss"`, `@custom-variant dark`, and ThemeSlider. |
| **Interactivity** | React 19 Islands | `^19.0.0` | Isolated client-side state machine loaded via `client:idle`. |
| **Transcoding & Compression** | `@ffmpeg/ffmpeg` + `@ffmpeg/util` | `^0.12.15` | Browser-local WebAssembly video/audio transcode and smart compression engine. |
| **Icons** | Phosphor Icons + SVG | `^2.1.7` | Accessible, lightweight icon set with `aria-hidden` attributes. |
| **SEO & Sitemaps** | `@astrojs/sitemap` | `^3.2.1` | Automatic XML sitemap generation for all 37 canonical routes. |
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
│   └── sw.js                     # Offline caching service worker
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
│   │   │   ├── Header.astro          # Professional Mega-Menu navigation & mobile drawer
│   │   │   ├── ThemeSlider.astro     # Accessible smooth dark/light mode toggle slider
│   │   │   ├── Footer.astro          # Categorized footer links (37 routes)
│   │   │   └── SEOHead.astro         # Meta, Open Graph, Twitter cards, JSON-LD
│   │   └── sections/             # Reusable content sections (Dark & Light mode)
│   │       ├── HowItWorks.astro      # 3-step guide
│   │       ├── Features.astro        # 6 core advantage cards
│   │       ├── ComparisonTable.astro # Competitor comparison table
│   │       ├── HomeSEOArticle.astro  # 750+ word comprehensive Portuguese guide
│   │       ├── FormatGrid.astro      # Grid linking specialized converter & compressor tools
│   │       └── FAQSection.astro      # Schema-backed native details/summary FAQs
│   ├── data/
│   │   └── formatPages.ts        # Centralized typed store for all 37 programmatic format & compressor pages
│   ├── layouts/
│   │   ├── BaseLayout.astro      # Base HTML shell, Anti-FOUC theme script, SW registration
│   │   └── ConverterPageLayout.astro # Deep layout for all programmatic routes
│   ├── lib/
│   │   ├── ffmpeg/               # FFmpeg WebAssembly Domain Module
│   │   │   ├── engine.ts             # Singleton engine with memory cleanup & cancel
│   │   │   ├── metadata.ts           # Client-side metadata & poster frame extractor
│   │   │   ├── presets.ts            # Plain-language presets & WhatsApp / compression calculator
│   │   │   └── types.ts              # Core TypeScript interfaces
│   │   └── seo/                  # SEO & Structured Data Module
│   │       ├── meta.ts               # Site config & canonical URL generator
│   │       └── schema.ts             # WebApplication, Organization, WebSite, HowTo, FAQPage, BreadcrumbList
│   ├── pages/                    # 37 Multi-Page MPA routes
│   │   ├── index.astro               # Homepage ("conversor de video")
│   │   ├── compressor-de-video.astro # Hub ("compressor de video", "compressor de video online")
│   │   ├── compressor-de-video-mp4.astro # ("compressor de video mp4")
│   │   ├── compressor-de-video-gratuito.astro # ("compressor de video gratuito", "compressor de video gratis")
│   │   ├── comprimir-video.astro     # ("comprimir video", "comprimir video whatsapp")
│   │   ├── conversor-de-video-para-mp4.astro
│   │   ├── conversor-de-video-youtube.astro
│   │   ├── melhor-conversor-de-video-gratuito.astro
│   │   ├── converter-mov-para-mp4.astro
│   │   ├── converter-video-para-mp3.astro
│   │   ├── conversor-de-audio.astro
│   │   ├── video-para-gif.astro
│   │   ├── converter-video-instagram.astro
│   │   ├── converter-video-iphone.astro
│   │   ├── converter-video-android.astro
│   │   ├── converter-m2ts-para-mp4.astro, converter-mts-para-mp4.astro
│   │   ├── converter-vob-para-mp4.astro, converter-ts-para-mp4.astro
│   │   ├── converter-flv-para-mp4.astro, converter-3gp-para-mp4.astro
│   │   ├── converter-m4v-para-mp4.astro, converter-rmvb-para-mp4.astro
│   │   ├── converter-divx-para-mp4.astro, converter-xvid-para-mp4.astro
│   │   ├── converter-ogv-para-mp4.astro, converter-mxf-para-mp4.astro
│   │   ├── converter-mp4-para-webm.astro, converter-webm-para-mp4.astro
│   │   ├── converter-avi-para-mp4.astro, converter-mkv-para-mp4.astro
│   │   ├── converter-wmv-para-mp4.astro
│   │   ├── sobre.astro, privacidade.astro, termos.astro
│   │   └── 404.astro, 500.astro      # Custom error pages
│   └── styles/
│       └── global.css            # Tailwind v4 import, custom tokens & dark variant
├── ARCHITECTURE.md               # Detailed technical architecture reference
├── astro.config.mjs              # Astro configuration with Vite plugins & headers
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
# Automated build & edge deploy (MANDATORY AFTER EVERY CHANGE)
npm run deploy
```

---

## 🏷️ SEO, AEO & Structured Data Standards

All pages must comply with modern search engine and answer engine optimization principles:
- **Zero Keyword Stuffing:** Write natural, grammatically correct Portuguese with authoritative technical depth (CRF explanation, bitrates, audio codecs, container vs. codec distinctions).
- **JSON-LD Structured Schemas (`src/lib/seo/schema.ts`):**
  1. `Organization`: Brand identity, logo, support contact point, and language declarations.
  2. `WebSite`: Canonical site root.
  3. `WebApplication`: OS compatibility, browser capabilities, free price (`0 BRL`), and feature list.
  4. `HowTo`: Step-by-step conversion instructions for Google rich snippet carousels.
  5. `FAQPage`: Pure plain-text question-and-answer pairs matching on-page FAQs.
  6. `BreadcrumbList`: Position-aware hierarchical site trail.
- **Machine-Readable LLM Indexing:** `public/llms.txt` maintains a complete canonical directory for AI crawlers (Perplexity, ChatGPT, Gemini, Copilot).

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

---

## 🌓 Dark and Light Mode System

- **Slider Component:** `src/components/layout/ThemeSlider.astro` provides an accessible, tactile toggle slider with Sun (☀️) and Moon (🌙) glyphs.
- **Zero FOUC:** An inline script in `<head>` in `BaseLayout.astro` immediately evaluates `localStorage.getItem('theme')` or `prefers-color-scheme` before DOM rendering.
- **Tailwind v4 Integration:** Driven by `@custom-variant dark (&:where(.dark, .dark *));` in `src/styles/global.css` with semantic zinc/emerald tokens.

---

## 🎨 Navigation & Header Architecture

The site header (`src/components/layout/Header.astro`) uses a high-performance, accessible SaaS structure:
- **Brand Identity:** High-contrast logo with an animated pulse indicator ("100% Local • Sem Upload").
- **Theme Slider:** Integrated smooth switch in desktop and mobile header bars.
- **Mega-Menu Dropdown:** 3 categorized columns for instant format exploration:
  1. *Populares & Áudio:* MP4 Universal, MOV iPhone, Vídeo para MP3, Conversor de Áudio, Vídeo para GIF, MP4 para WebM.
  2. *Compressores & Redes:* Compressor de Vídeo, Compressor MP4, Compressor Gratuito, Comprimir p/ WhatsApp, Instagram Reels (9:16), YouTube & Shorts.
  3. *Câmeras & DVD:* M2TS / MTS (AVCHD), TS (TV Digital), VOB (DVD), iPhone iOS, Android, FLV (Flash), 3GP.
- **Top Quick Links:** Direct navigation to highest-volume pages (`MOV para MP4`, `Vídeo para MP3`, `Comprimir`, `Comparativo`).
- **Responsive Mobile Drawer:** Smooth slide-out menu with touch targets ≥ 48px for mobile users.
