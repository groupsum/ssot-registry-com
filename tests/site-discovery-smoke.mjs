import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { ssotRegistrySite } from "../packages/site-content-pack/dist/index.js";

const artifactsDir = resolve("packages/site-content-pack/artifacts/discovery");
const publicDir = resolve("public");
const distDir = resolve("dist");
const requiredArtifacts = ["sitemap.xml", "sitemap-tree.json", "robots.txt", "llms.txt", "llms-full.txt", "content-index.json", "semantic-index.json", "structured-data-graph.json"];
const expectedPageCount = ssotRegistrySite.pages.length;
for (const artifact of requiredArtifacts) {
  const packagePath = resolve(artifactsDir, artifact);
  const publicPath = resolve(publicDir, artifact);
  const distPath = resolve(distDir, artifact);
  assert.ok(existsSync(packagePath), `${artifact} must exist in the site content pack artifacts`);
  assert.ok(existsSync(publicPath), `${artifact} must exist in public/`);
  assert.ok(existsSync(distPath), `${artifact} must exist in dist/ for production serving`);
  assert.ok(statSync(packagePath).size > 0, `${artifact} package artifact must be non-empty`);
  assert.equal(sha256(packagePath), sha256(publicPath), `${artifact} in public/ must match the generated package artifact`);
  assert.equal(sha256(packagePath), sha256(distPath), `${artifact} in dist/ must match the generated package artifact`);
}
const sitemap = readFileSync(resolve(publicDir, "sitemap.xml"), "utf8");
const robots = readFileSync(resolve(publicDir, "robots.txt"), "utf8");
assert.equal((sitemap.match(/<url>/g) ?? []).length, expectedPageCount);
assert.match(robots, /Sitemap: https:\/\/ssot-registry\.com\/sitemap\.xml/);
assert.ok(expectedPageCount >= 2500);
function sha256(file) { return createHash("sha256").update(readFileSync(file)).digest("hex"); }
