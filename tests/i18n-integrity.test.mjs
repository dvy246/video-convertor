import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { ui } from '../src/i18n/ui.ts';
import { languages } from '../src/i18n/languages.ts';
import { 
  getLocalizedPopularTools, 
  getLocalizedCompressorTools, 
  getLocalizedCamcorderTools 
} from '../src/i18n/navTools.ts';

describe('i18n Translation & Localization Integrity', () => {
  const supportedLangs = Object.keys(languages);

  it('should support all 9 required locales', () => {
    const expected = ['pt', 'en', 'es', 'fr', 'ja', 'zh', 'no', 'tr', 'pl'];
    assert.deepEqual(supportedLangs, expected);
    for (const lang of expected) {
      assert.ok(languages[lang], `Language definition missing for ${lang}`);
    }
  });

  it('all translation keys in default locale (pt) must exist and be non-empty in all 8 other locales', () => {
    const ptKeys = Object.keys(ui.pt);
    assert.ok(ptKeys.length > 50, 'PT locale has too few keys');

    for (const lang of supportedLangs) {
      if (lang === 'pt') continue;
      const currentKeys = new Set(Object.keys(ui[lang]));
      
      for (const key of ptKeys) {
        assert.ok(currentKeys.has(key), `Missing translation key "${key}" in language "${lang}"`);
        const val = ui[lang][key];
        assert.ok(typeof val === 'string' && val.trim().length > 0, `Empty translation for key "${key}" in language "${lang}"`);
      }
    }
  });

  it('no translation in ui.ts contains unsupported absolute "100%" claims', () => {
    for (const lang of supportedLangs) {
      for (const [key, val] of Object.entries(ui[lang])) {
        assert.ok(!val.includes('100%'), `Translation key "${key}" in "${lang}" contains unsupported "100%" claim: "${val}"`);
      }
    }
  });

  it('navTools provides localized navigation sets across all 9 languages without broken links', () => {
    for (const lang of supportedLangs) {
      const pop = getLocalizedPopularTools(lang);
      const comp = getLocalizedCompressorTools(lang);
      const cam = getLocalizedCamcorderTools(lang);

      assert.ok(pop && pop.length > 0, `Popular tools missing for ${lang}`);
      assert.ok(comp && comp.length > 0, `Compressor tools missing for ${lang}`);
      assert.ok(cam && cam.length > 0, `Camcorder tools missing for ${lang}`);

      for (const item of [...pop, ...comp, ...cam]) {
        assert.ok(item.href && item.href.startsWith('/'), `Invalid nav href in ${lang}: ${item.href}`);
        assert.ok(item.name && item.name.length > 0, `Empty nav tool name in ${lang}`);
      }
    }
  });
});
