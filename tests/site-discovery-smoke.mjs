import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { buildJsonLdGraph } from "@mdwrk/structured-data";

const publicDir = resolve("public");
const distDir = resolve("dist");
const requiredArtifacts = [
  "sitemap.xml",
  "sitemap-core.xml",
  "sitemap-workflows.xml",
  "sitemap-packages.xml",
  "sitemap-proof-chain.xml",
  "sitemap-governance-packs.xml",
  "sitemap-registry.xml",
  "sitemap-metadata.xml",
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

for (const artifact of requiredArtifacts.filter((name) => name.startsWith("sitemap-") && name.endsWith(".xml"))) {
  assert.match(sitemap, new RegExp(`<loc>https://ssot-registry\\.com/${artifact}</loc>`));
}

const routeAssertions = {
  "sitemap-core.xml": ["/"],
  "sitemap-workflows.xml": ["/workflows"],
  "sitemap-packages.xml": ["/packages"],
  "sitemap-proof-chain.xml": ["/proof-chain"],
  "sitemap-governance-packs.xml": ["/governance-packs", "/governance-packs/seo-aeo-aieo-governance-pack"],
  "sitemap-registry.xml": ["/registry-browser"],
  "sitemap-metadata.xml": ["/metadata-hub"],
  "sitemap-plugins.xml": ["/plugins", "/plugin/ssot-cli-codex"],
};

for (const [artifact, routes] of Object.entries(routeAssertions)) {
  const sitemapBody = readFileSync(resolve(publicDir, artifact), "utf8");
  assert.match(sitemapBody, /<urlset/);
  for (const route of routes) {
    const url = route === "/" ? "https://ssot-registry.com/" : `https://ssot-registry.com${route}`;
    assert.match(sitemapBody, new RegExp(`<loc>${url}</loc>`));
  }
}

const registryGraph = buildJsonLdGraph(
  {
    product: {
      name: "SSOT Registry",
      canonicalUrl: "https://ssot-registry.com",
      description: "The Single Source of Truth Registry documentation platform",
    },
  },
  {
    title: "Registry Browser",
    description: "Explore the SSOT Registry.",
    h1: "Registry Browser",
    canonicalUrl: "https://ssot-registry.com/registry-browser",
    breadcrumbs: [{ label: "Home", href: "/" }],
    faq: [],
  },
);

assert.ok(
  !registryGraph.some((node) => node["@type"] === "SoftwareApplication" || node["@type"] === "Product"),
  "default site graphs must not infer Google commercial entities from site.product",
);
