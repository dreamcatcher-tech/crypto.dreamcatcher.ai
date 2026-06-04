import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
const root = new URL('..', import.meta.url).pathname;
const read = (file) => readFileSync(join(root, file), 'utf8');
const fail = (message) => { console.error(`✗ ${message}`); process.exitCode = 1; };
const pass = (message) => console.log(`✓ ${message}`);
const requiredFiles = [
  'index.html', 'styles.css', 'CNAME', 'package.json',
  'slides/reveal-runner.html', 'slides/decks/crypto-exchange-recomposed.md',
  'scripts/check-site.mjs', 'scripts/build.mjs', '.github/workflows/pages.yml'
];
for (const file of requiredFiles) if (!existsSync(join(root, file))) fail(`Missing ${file}`);
const html = read('index.html');
const deck = read('slides/decks/crypto-exchange-recomposed.md');
const runner = read('slides/reveal-runner.html');
const cname = read('CNAME').trim();
for (const [needle, haystack] of [
  ['Crypto Exchange Recomputed', html],
  ['crypto.dreamcatcher.ai', cname],
  ['Custody inversion', deck],
  ['The key is not in the exchange', deck],
  ['governed core', deck],
  ['reveal.js@6.0.1', runner],
]) {
  if (!haystack.includes(needle)) fail(`Expected content not found: ${needle}`);
}
for (const forbidden of ['../../Assets/', 'Series B onwards', 'lorem', 'ipsum']) {
  if (html.includes(forbidden) || deck.includes(forbidden)) fail(`Forbidden placeholder/private reference found: ${forbidden}`);
}
const validateLocalRefs = (file) => {
  const markup = read(file);
  const base = dirname(file);
  const refs = [...markup.matchAll(/(?:href|src)="(?!https?:|mailto:|#|\/)([^"]+)"/g)].map((m) => m[1]);
  for (const ref of refs) {
    const clean = ref.split('#')[0].split('?')[0];
    if (clean && !existsSync(join(root, base, clean))) fail(`Broken local reference in ${file}: ${ref}`);
  }
};
validateLocalRefs('index.html');
if (!html.trimStart().startsWith('<!doctype html>')) fail('index.html must start with <!doctype html>');
if (!runner.trimStart().startsWith('<!doctype html>')) fail('slides/reveal-runner.html must start with <!doctype html>');
if (!process.exitCode) pass('Crypto site content and slide deck validated');
