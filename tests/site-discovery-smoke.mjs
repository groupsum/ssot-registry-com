import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";

const publicDir = resolve("public");
const distDir = resolve("dist");
const requiredArtifacts = [
  "sitemap.xml",
  "sitemap-pages.xml",
  "sitemap-governance.xml",
  "sitemap-plugins.xml",
  "sitemap.xsl",
  "robots.txt",
];

for (const artifact of requiredArtifacts) {
  const publicPath = resolve(publicDir, artifact);
  const distPath = resolve(distDir, artifact);
  assert.ok(existsSync(publicPath), `${artifact} must exist in public/`);
  assert.ok(existsSync(distPath), `${artifact} must exist in dist/ for production serving`);
  assert.ok(statSync(publicPath).size > 0, `${artifact} public artifact must be non-empty`);
  assert.ok(statSync(distPath).size > 0, `${artifact} dist artifact must be non-empty`);
}

const sitemap = readFileSync(resolve(publicDir, "sitemap.xml"), "utf8");
const robots = readFileSync(resolve(publicDir, "robots.txt"), "utf8");
assert.match(sitemap, /<sitemapindex/);
assert.match(robots, /Sitemap: https:\/\/ssot-registry\.com\/sitemap\.xml/);

const pages = readFileSync(resolve(publicDir, "sitemap-pages.xml"), "utf8");
for (const route of ["/", "/workflows", "/packages", "/proof-chain", "/governance-packs", "/registry-browser", "/metadata-hub", "/plugins"]) {
  const url = route === "/" ? "https://ssot-registry.com/" : `https://ssot-registry.com${route}`;
  assert.match(pages, new RegExp(`<loc>${url}</loc>`));
}
