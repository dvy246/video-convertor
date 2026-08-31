import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

describe('E2E Generated HTML Pages Audit (All 371 Routes)', () => {
  const distDir = path.resolve('dist');

  // Collect all HTML files recursively in dist/
  function getAllHtmlFiles(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        if (file !== '_astro') {
          getAllHtmlFiles(filePath, fileList);
        }
      } else if (file.endsWith('.html')) {
        fileList.push(filePath);
      }
    }
    return fileList;
  }

  const allHtmlFiles = getAllHtmlFiles(distDir);

  it('dist directory must contain all expected static pages (> 350 pages)', () => {
    assert.ok(allHtmlFiles.length >= 350, `Expected >= 350 pages, found ${allHtmlFiles.length}`);
  });

  it('every generated HTML file must have valid DOCTYPE, title, description, and canonical URL', () => {
    for (const filePath of allHtmlFiles) {
      const relPath = path.relative(distDir, filePath);
      const html = fs.readFileSync(filePath, 'utf-8');

      // 1. DOCTYPE check
      assert.ok(html.includes('<!DOCTYPE html>') || html.includes('<!doctype html>'), `${relPath} missing DOCTYPE`);

      // 2. Title check
      const titleMatch = html.match(/<title>([^<]+)<\/title>/);
      assert.ok(titleMatch && titleMatch[1].trim().length > 0, `${relPath} missing or empty <title> tag`);

      // 3. Meta description check (exclude error pages if any)
      if (!relPath.includes('404') && !relPath.includes('500')) {
        const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i) ||
                          html.match(/<meta\s+content="([^"]*)"\s+name="description"/i);
        assert.ok(descMatch && descMatch[1].trim().length > 0, `${relPath} missing or empty meta description`);
      }

      // 4. Canonical link check
      if (!relPath.includes('404') && !relPath.includes('500')) {
        const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i) ||
                               html.match(/<link\s+href="([^"]+)"\s+rel="canonical"/i);
        assert.ok(canonicalMatch, `${relPath} missing canonical link`);
        assert.ok(canonicalMatch[1].startsWith('https://conversordevideo.com'), `${relPath} canonical URL does not start with domain`);
      }

      // 5. Check hreflang tags on canonical pages
      if (!relPath.includes('404') && !relPath.includes('500')) {
        const hreflangMatches = html.match(/hreflang="([^"]+)"/g);
        assert.ok(hreflangMatches && hreflangMatches.length >= 10, `${relPath} has fewer than 10 hreflang tags (found ${hreflangMatches?.length || 0})`);
      }

      // 6. Check for runtime template leakage
      assert.ok(!html.includes('undefined'), `${relPath} contains literal "undefined" in rendered HTML`);
      assert.ok(!html.includes('[object Object]'), `${relPath} contains literal "[object Object]"`);
      assert.ok(!html.includes('NaN'), `${relPath} contains literal "NaN" in rendered HTML`);
    }
  });

  it('every JSON-LD schema tag in generated HTML files must be valid parseable JSON', () => {
    let schemaCount = 0;
    for (const filePath of allHtmlFiles) {
      const relPath = path.relative(distDir, filePath);
      const html = fs.readFileSync(filePath, 'utf-8');
      
      const scriptRegex = /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
      let match;
      while ((match = scriptRegex.exec(html)) !== null) {
        const jsonContent = match[1].trim();
        try {
          const parsed = JSON.parse(jsonContent);
          assert.ok(parsed['@context'], `${relPath} JSON-LD missing @context`);
          assert.ok(parsed['@type'], `${relPath} JSON-LD missing @type`);
          schemaCount++;
        } catch (err) {
          assert.fail(`Invalid JSON-LD in ${relPath}: ${err.message}\nContent:\n${jsonContent}`);
        }
      }
    }
    assert.ok(schemaCount > 300, `Expected > 300 JSON-LD schemas, parsed ${schemaCount}`);
  });

  it('no generated HTML page contains unsupported marketing copy "100% Local" or "100% Privado"', () => {
    for (const filePath of allHtmlFiles) {
      const relPath = path.relative(distDir, filePath);
      const html = fs.readFileSync(filePath, 'utf-8');
      
      assert.ok(!html.includes('100% Local'), `${relPath} contains "100% Local"`);
      assert.ok(!html.includes('100% Privado'), `${relPath} contains "100% Privado"`);
      assert.ok(!html.includes('100% Conforme à LGPD'), `${relPath} contains "100% Conforme à LGPD"`);
      assert.ok(!html.includes('100% GDPR'), `${relPath} contains "100% GDPR"`);
    }
  });
});
