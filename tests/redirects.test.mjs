import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { FORMAT_PAGES } from '../src/data/formatPages.ts';

describe('301 Redirect Rules & Canonical Route Integrity', () => {
  const redirectsPath = path.resolve('public/_redirects');
  const redirectsContent = fs.readFileSync(redirectsPath, 'utf-8');
  const lines = redirectsContent.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'));

  it('should have properly formatted redirect rules', () => {
    assert.ok(lines.length > 50, `Expected > 50 redirect rules, found ${lines.length}`);
    for (const line of lines) {
      const parts = line.split(/\s+/);
      assert.equal(parts.length, 3, `Invalid redirect rule format: "${line}"`);
      const [from, to, status] = parts;
      assert.ok(from.startsWith('/'), `From path must start with /: ${from}`);
      assert.ok(to.startsWith('/'), `To path must start with /: ${to}`);
      assert.equal(status, '301', `Status must be 301: ${status}`);
    }
  });

  it('every redirect source slug must NOT exist in active FORMAT_PAGES', () => {
    for (const line of lines) {
      const [from] = line.split(/\s+/);
      // Strip language prefix if present (e.g., /en/compactar-video -> compactar-video)
      const cleanSlug = from.replace(/^\/(en|es|fr|ja|zh|no|tr|pl)\//, '').replace(/^\//, '');
      assert.ok(!FORMAT_PAGES[cleanSlug], `Redirect source "${cleanSlug}" still exists in FORMAT_PAGES`);
    }
  });

  it('every redirect target slug must exist in active FORMAT_PAGES (or be a standard root page)', () => {
    for (const line of lines) {
      const [, to] = line.split(/\s+/);
      const cleanSlug = to.replace(/^\/(en|es|fr|ja|zh|no|tr|pl)\//, '').replace(/^\//, '');
      if (cleanSlug === '' || cleanSlug === 'ferramentas' || cleanSlug === 'sobre' || cleanSlug === 'privacidade' || cleanSlug === 'termos') {
        continue;
      }
      assert.ok(FORMAT_PAGES[cleanSlug], `Redirect destination "${cleanSlug}" not found in active FORMAT_PAGES`);
    }
  });
});
