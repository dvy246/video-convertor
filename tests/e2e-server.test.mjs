import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

describe('E2E Static Files & Headers Audit', () => {
  const distDir = path.resolve('dist');

  // Parse headers from _headers file
  const headersFile = path.join(distDir, '_headers');
  const customHeaders = {};
  if (fs.existsSync(headersFile)) {
    const lines = fs.readFileSync(headersFile, 'utf-8').split('\n');
    for (const line of lines) {
      const match = line.match(/^\s*([^:]+):\s*(.+)$/);
      if (match) {
        customHeaders[match[1].trim().toLowerCase()] = match[2].trim();
      }
    }
  }

  function resolveRouteFile(route) {
    let reqPath = route.split('?')[0];
    if (reqPath.endsWith('/')) {
      reqPath += 'index.html';
    } else if (!path.extname(reqPath)) {
      reqPath += '/index.html';
    }
    const cleanPath = reqPath.replace(/^\//, '');
    return path.join(distDir, cleanPath);
  }

  it('dist contains required COOP/COEP isolation headers in _headers', () => {
    assert.ok(fs.existsSync(headersFile), '_headers file missing in dist');
    assert.equal(customHeaders['cross-origin-opener-policy'], 'same-origin');
    assert.equal(customHeaders['cross-origin-embedder-policy'], 'require-corp');
  });

  it('serves homepage with valid HTML content and title', () => {
    const homeFile = resolveRouteFile('/');
    assert.ok(fs.existsSync(homeFile), 'Home page index.html missing');
    const text = fs.readFileSync(homeFile, 'utf-8');
    assert.ok(text.includes('Conversor de Vídeo') || text.includes('ConversordeVideo'));
  });

  it('serves core tool routes across multiple locales with valid HTML', () => {
    const testRoutes = [
      '/conversor-de-video-para-mp4',
      '/converter-mov-para-mp4',
      '/compressor-de-video',
      '/compactar-video-para-whatsapp',
      '/conversor-de-audio',
      '/video-para-gif',
      '/ferramentas',
      '/en/',
      '/en/conversor-de-video-para-mp4',
      '/en/compressor-de-video',
      '/en/ferramentas',
      '/es/conversor-de-video-para-mp4',
      '/fr/conversor-de-video-para-mp4',
      '/ja/conversor-de-video-para-mp4',
      '/zh/conversor-de-video-para-mp4',
      '/no/conversor-de-video-para-mp4',
      '/tr/conversor-de-video-para-mp4',
      '/pl/conversor-de-video-para-mp4',
      '/privacidade',
      '/termos',
      '/sobre'
    ];

    for (const route of testRoutes) {
      const filePath = resolveRouteFile(route);
      assert.ok(fs.existsSync(filePath), `Route file missing for ${route}: ${filePath}`);
      const body = fs.readFileSync(filePath, 'utf-8');
      assert.ok(body.length > 500, `Response body too short for ${route}`);
    }
  });

  it('serves robots.txt, sitemap-index.xml, and llms.txt with non-empty content', () => {
    const staticAssets = ['robots.txt', 'sitemap-index.xml', 'llms.txt'];
    for (const asset of staticAssets) {
      const filePath = path.join(distDir, asset);
      assert.ok(fs.existsSync(filePath), `Static asset missing: ${asset}`);
      const text = fs.readFileSync(filePath, 'utf-8');
      assert.ok(text.length > 0, `Empty static asset: ${asset}`);
    }
  });
});
