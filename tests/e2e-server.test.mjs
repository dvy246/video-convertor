import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

describe('E2E HTTP Server & Headers Test', () => {
  let server;
  const PORT = 43210;
  const BASE_URL = `http://localhost:${PORT}`;
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

  before((done) => {
    server = http.createServer((req, res) => {
      let reqPath = req.url.split('?')[0];
      if (reqPath.endsWith('/')) {
        reqPath += 'index.html';
      } else if (!path.extname(reqPath)) {
        reqPath += '/index.html';
      }

      const cleanPath = reqPath.replace(/^\//, '');
      const filePath = path.join(distDir, cleanPath);
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        // Apply security headers
        for (const [k, v] of Object.entries(customHeaders)) {
          res.setHeader(k, v);
        }
        res.setHeader('Content-Type', filePath.endsWith('.html') ? 'text/html; charset=utf-8' : 'application/octet-stream');
        res.writeHead(200);
        res.end(fs.readFileSync(filePath));
      } else {
        res.writeHead(404);
        res.end('Not Found');
      }
    });

    server.listen(PORT, done);
  });

  after((done) => {
    server.close(done);
  });

  it('serves homepage with status 200 and required COOP/COEP isolation headers', async () => {
    const res = await fetch(`${BASE_URL}/`);
    assert.equal(res.status, 200);
    assert.equal(res.headers.get('cross-origin-opener-policy'), 'same-origin');
    assert.equal(res.headers.get('cross-origin-embedder-policy'), 'require-corp');
    const text = await res.text();
    assert.ok(text.includes('ConversordeVídeo') || text.includes('Conversor de Vídeo'));
  });

  it('serves core tool routes across multiple locales with status 200', async () => {
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
      const res = await fetch(`${BASE_URL}${route}`);
      assert.equal(res.status, 200, `Failed to load ${route} (status: ${res.status})`);
      const body = await res.text();
      assert.ok(body.length > 500, `Response body too short for ${route}`);
    }
  });

  it('serves robots.txt, sitemap-index.xml, and llms.txt with status 200', async () => {
    const staticAssets = ['/robots.txt', '/sitemap-index.xml', '/llms.txt'];
    for (const asset of staticAssets) {
      const res = await fetch(`${BASE_URL}${asset}`);
      assert.equal(res.status, 200, `Static asset ${asset} returned status ${res.status}`);
      const text = await res.text();
      assert.ok(text.length > 0, `Empty static asset ${asset}`);
    }
  });
});
