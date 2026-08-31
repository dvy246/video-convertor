# AGENTS.md — AI Agent Operating Guide for conversordevideo.com

Welcome! This document provides complete, up-to-date instructions, conventions, architectural patterns, and workflows for AI coding assistants working in the `conversordevideo.com` repository.

---

## 📌 Project Summary

- **Product:** `conversordevideo.com`
- **Core Value Proposition:** A 100% browser-local, zero-signup, privacy-first video & audio converter and compressor utility designed for global and regional search discovery.
- **Key Differentiator:** Videos are transcoded in browser memory (RAM) via WebAssembly (FFmpeg.wasm). **Zero bytes are uploaded to remote servers**, giving users instant conversions, no queue delays, no file paywalls, and native LGPD/GDPR compliance.
- **Multi-Language Architecture (9 Locales):**
  1. **Portuguese (`pt-BR`)**: Default root (unprefixed at `/`) — Primary SEO keyword: `Conversor de Vídeo Online`
  2. **English (`en`)**: `/en/` — Primary Headline: `Free Video Converter` (`🔒 100% Private & Local`)
  3. **Spanish (`es`)**: `/es/`
  4. **French (`fr`)**: `/fr/`
  5. **Japanese (`ja`)**: `/ja/`
  6. **Chinese (`zh-CN`)**: `/zh/`
  7. **Norwegian (`no`)**: `/no/`
  8. **Turkish (`tr`)**: `/tr/`
  9. **Polish (`pl`)**: `/pl/`
- **Total Static Pages:** 497 canonical MPA routes (51 tool routes + home + legal pages across 9 locales) with complete bidirectional `hreflang` alternate tags and XML sitemaps.
- **Live Production URL:** [https://conversordevideo.pages.dev](https://conversordevideo.pages.dev) (deployed via Cloudflare Pages).
- **GitHub Repository:** `https://github.com/dvy246/video-convertor.git`
- **Integration Branch:** `feat/multi-lang-i18n`

---

## 🚨 Mandatory Agent Operating Rules & Multi-Language Invariant

> [!IMPORTANT]
> **1. Multi-Language Completeness Invariant (Zero Hardcoded Copy)**
> - **Every new feature, UI component, page, card, modal, or informational block added to this repository MUST be translated with consistency across ALL 9 supported locales (`pt`, `en`, `es`, `fr`, `ja`, `zh`, `no`, `tr`, `pl`).**
> - **Never leave pages partially translated** and never hardcode Portuguese, English, or any single-language copy inside `.astro` components or React islands.
> - **Server & Client Synchronization**:
>   - Add all text keys to `src/i18n/ui.ts` for server-side templates (`useTranslations(lang)`).
>   - Add client-side keys and pass `lang={currentLang}` to React components to consume `tClient(key, lang)` in `src/i18n/client.ts`.
>   - For new programmatic tools or format hubs, add metadata and localized explainer sets in `src/data/localizedFormatPages.ts`.
>   - For new navigation tools or footer links, add them across all 9 languages in `src/i18n/navTools.ts`.
>   - For legal, policy, or editorial articles, add translations in `src/data/legalPages.ts` or `src/data/homeArticles.ts`.

> [!TIP]
> **2. Architecture & File Placement Reference**
> - **Always consult [`STRUCTURE.md`](./STRUCTURE.md)** for complete directory organization, routing conventions, and where new files must reside.
> - **Always consult [`ARCHITECTURE.md`](./ARCHITECTURE.md)** for system design, WebAssembly engine lifecycle, and data flow patterns.
> - **Always build (`npm run build`) and test before claiming completion.**

---

## 🛠️ Technology Stack

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Astro.js (MPA SSG) | `^5.4.2` | High-performance static HTML generation, perfect TTFB and Core Web Vitals. |
| **i18n Routing** | Astro i18n + Custom Recipe | Built-in | Unprefixed default locale (`prefixDefaultLocale: false`) with 8 sub-locales. |
| **Styling & Theming** | Tailwind CSS v4 | `^4.0.9` | Zero-runtime CSS with `@import "tailwindcss"`, `@custom-variant dark`, and ThemeSlider. |
| **Interactivity** | React 19 Islands | `^19.0.0` | Isolated client-side state machine loaded via `client:idle` with localized props. |
| **Transcoding & Compression** | `@ffmpeg/ffmpeg` + `@ffmpeg/util` | `^0.12.15` | Browser-local WebAssembly video/audio transcode and smart compression engine. |
| **Icons** | Phosphor Icons + SVG | `^2.1.7` | Accessible, lightweight icon set with `aria-hidden` attributes. |
| **SEO & Sitemaps** | `@astrojs/sitemap` | `^3.2.1` | Automatic XML sitemap generation for all 497 canonical routes. |
| **Deployment** | Cloudflare Pages + Wrangler | `^4.127.1` | Edge CDN hosting with strict COOP/COEP isolation headers. |

---

## 📂 Repository File Structure

The full, annotated directory tree is maintained in [`STRUCTURE.md`](./STRUCTURE.md).

For technical architecture, system layers, and data flow design, see [`ARCHITECTURE.md`](./ARCHITECTURE.md).

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
- **Client & Server Translations**:
  - React Islands receive `lang={currentLang}` prop to ensure server-side pre-rendered (SSG) dropzones and cards render in the correct active locale.
  - Client state transitions fall back gracefully using `tClient(key, lang)` from `src/i18n/client.ts`.

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
| `resize_1080p` | Redimensionar 1080p | CRF 23, scale 1080p, AAC 128k, faststart | Video resizing & aspect formatting |
| `audio_mp3` | Extrair Áudio MP3 | LAME MP3 192 kbps constant bitrate | Podcasts, lectures, voice memos |
| `gif_standard` | GIF Animado | 12 fps, max width 480px, Bayer dither palette | Loop stickers & reactions |
