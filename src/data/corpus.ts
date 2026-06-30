import { CorpusPage, RegistryStat } from '../types';

export const SECTIONS = [
  { id: "features", label: "Features", desc: "Capabilities and structures modeled in the registry" },
  { id: "proof", label: "Proofs", desc: "Claims, tests, and evidence verifying capabilities" },
  { id: "packages", label: "Packages", desc: "The SSOT Registry package portfolio and distributions" },
  { id: "packs", label: "Packs", desc: "Installable governance packs and policy compliance" },
  { id: "faq", label: "FAQ / QA", desc: "Direct answers to architectural and operation queries" },
  { id: "courses", label: "Courses", desc: "Structured training modules for release governance" },
  { id: "lessons", label: "Lessons", desc: "Deep dive lessons on specific registry operations" },
  { id: "certifications", label: "Certifications", desc: "Proving knowledge of SSOT Registry toolchains" },
  { id: "api-reference", label: "API Reference", desc: "CLI and Python programmatic interfaces" },
  { id: "workflows", label: "Workflows", desc: "Core release lifecycle step-by-step guides" },
  { id: "comparisons", label: "Comparisons", desc: "How SSOT Registry compares to traditional tooling" },
  { id: "glossary", label: "Glossary", desc: "Human-centric definitions for registry terms" }
];

export const SUBJECTS = [
  { id: "adrs", label: "ADRs", desc: "Architecture Decision Records and their origin classifications" },
  { id: "specifications", label: "Specifications", desc: "Normative requirement definitions and contracts" },
  { id: "features", label: "Features", desc: "Targetable capability units under active development" },
  { id: "claims", label: "Claims", desc: "Assertions of truth or posture linked to testing targets" },
  { id: "tests", label: "Tests", desc: "Executable or procedural verification suites" },
  { id: "evidence", label: "Evidence", desc: "Concrete proofs (logs, signatures, outputs) backed by tests" },
  { id: "boundaries", label: "Boundaries", desc: "Frozen release-scopes preventing late-stage scope drift" },
  { id: "profiles", label: "Profiles", desc: "Reusable capabilities and environment config grouping" },
  { id: "risks", label: "Risks", desc: "Postures and security exposures logged in the registry" },
  { id: "issues", label: "Issues", desc: "Active registry blockers or conformance failures" },
  { id: "releases", label: "Releases", desc: "Validated attestations referencing frozen boundaries" },
  { id: "certification", label: "Certification", desc: "Proving compliance of frozen state before promotion" },
  { id: "promotion", label: "Promotion", desc: "Advancing certified releases through deployment environments" },
  { id: "publication", label: "Publication", desc: "Distributing validated releases with compiled public assets" },
  { id: "cli-workflows", label: "CLI Workflows", desc: "Keyboard-first shell instructions and automation" },
  { id: "registry-schemas", label: "Registry Schemas", desc: "Strict JSON structure definition files (v0.8.0)" },
  { id: "conformance", label: "Conformance", desc: "Repeatable test suites emitting machine evidence" },
  { id: "sync", label: "ADR and SPEC sync", desc: "Importing pack-contracts while preserving origin paths" },
  { id: "graph-exports", label: "Graph Exports", desc: "Visual lineage visualization outputs" },
  { id: "mcp-coordination", label: "MCP Coordination", desc: "Agentic coordination and model control plane" },
  { id: "lineage-graph", label: "Lineage Graph", desc: "Visual traceability of ADR to evidence pathways" },
  { id: "governance-packs", label: "Governance Packs", desc: "Installable policy packs backed by contracts" },
  { id: "python-api", label: "Python API", desc: "Embedding validation and graph loaders natively" },
  { id: "tui-review", label: "TUI Review", desc: "Interactive console dashboards for releases" },
  { id: "release-snapshots", label: "Release Snapshots", desc: "Portable immutable capture states" },
  { id: "validation-reports", label: "Validation Reports", desc: "Fail-closed check results in CI" }
];

export const INTENTS = [
  { id: "concept", label: "Concept", desc: "Conceptual explanation of the theory and posture" },
  { id: "tutorial", label: "Tutorial", desc: "Hands-on walk-through guide with explicit commands" },
  { id: "reference", label: "Reference", desc: "Technical schema keys, options, and rules" },
  { id: "checklist", label: "Checklist", desc: "Step-by-step verification lists for delivery" }
];

export const AUDIENCES = [
  { id: "developer", label: "Developer", desc: "Focuses on local code, tests, and CLI execution" },
  { id: "architect", label: "Architect", desc: "Focuses on ADRs, SPEC rules, origins, and governance" },
  { id: "release-manager", label: "Release Manager", desc: "Focuses on boundaries, promotion gating, and evidence" },
  { id: "ai-builder", label: "AI-assisted Builder", desc: "Focuses on MCP coordination, semantic indexes, and toolchains" }
];

// Helper to make deterministic but customized copy for any combination of parameters
export function getPageSlug(section: string, subject: string, intent: string, audience: string): string {
  return `/corpus/${section}/${subject}/${intent}/${audience}`;
}

export function generatePage(sectionId: string, subjectId: string, intentId: string, audienceId: string): CorpusPage {
  const section = SECTIONS.find(s => s.id === sectionId) || SECTIONS[0];
  const subject = SUBJECTS.find(s => s.id === subjectId) || SUBJECTS[0];
  const intent = INTENTS.find(i => i.id === intentId) || INTENTS[0];
  const audience = AUDIENCES.find(a => a.id === audienceId) || AUDIENCES[0];

  const slug = getPageSlug(section.id, subject.id, intent.id, audience.id);
  const title = `${subject.label} ${intent.label} for ${audience.label} - SSOT Registry`;
  const h1 = `${subject.label} ${intent.label}`;
  const description = `Discover comprehensive documentation on ${subject.label} tailored as a ${intent.label} for ${audience.label}s under the ${section.label} section of SSOT Registry.`;
  
  // Custom generated direct answer to address AEO
  let directAnswer = "";
  let content = "";
  let faqs: { q: string; a: string }[] = [];
  let relatedPackages: string[] = ["ssot-registry"];
  let relatedApis: string[] = ["ssot validate"];

  // Generate highly realistic context-aware direct answers
  if (subjectId === "adrs") {
    directAnswer = `Architecture Decision Records (ADRs) explain the rationales behind engineering decisions. In SSOT Registry, they are classified by origin: 'ssot-core' (upstream core rules), 'ssot-origin' (operator templates), 'repo-local' (your local workspace decisions), and 'extension-pack' (governed packs). This ensures decision metadata stays mapped to its rightful owner.`;
    content = `
### Operational Workflow for ADR Management
To manage ADRs effectively, the recommended pipeline is:
1. **Initialize Local Workspace**: Run \`ssot init\` to seed the \`.ssot/registry.json\` database.
2. **Synchronize Upstream Decision Sets**: Use \`ssot pack sync\` to pull in 'extension-pack' or 'ssot-origin' templates.
3. **Draft Local Decisive Units**: Add files under \`.ssot/adrs/ADR-XXXX.md\` to log local decisions as 'repo-local'.
4. **Validate References**: Execute \`ssot validate .\` to verify that all ADR IDs are linked correctly to features and specifications.

### Audience Perspective for ${audience.label}s
As a ${audience.label}, your primary interaction with ADRs is to ensure alignment between high-level architectural constraints and localized operational tasks. Always check the \`origin\` field in the JSON model to confirm whether an ADR is immutable upstream code or customizable local decision material.
    `;
    faqs = [
      { q: `What is the difference between ssot-core and repo-local ADRs?`, a: `ssot-core ADRs are compiled into the core toolchain representing system constraints. repo-local ADRs are authored by the development team inside their own workspace to govern local-only project choices.` },
      { q: `Can an extension-pack modify a local ADR?`, a: `No. Local ADRs belong to the 'repo-local' range and are fully isolated from extension-pack imports to prevent silent overwriting of custom project rules.` }
    ];
    relatedPackages = ["ssot-core", "ssot-cli", "ssot-pack-contracts"];
    relatedApis = ["ssot init", "ssot validate", "ssot pack sync"];
  } else if (subjectId === "boundaries") {
    directAnswer = `Boundaries frozen via SSOT Registry represent an immutable snapshot of features and profiles under active delivery review. Freezing a boundary prevents late-stage scope drift by blocking developers from adding features to a release candidate after code freeze has been certified.`;
    content = `
### Scope Freeze Mechanics
When you freeze a boundary using \`ssot boundary freeze . --boundary-id <id>\`, the registry creates a snapshot representing the exact capability set. 
Traditional compliance models suffer from silent scope updates in Jira or GitHub between review and final ship. By contrast, SSOT separates the **Boundary** (what we agreed to ship) from the **Release** (the verification records proving we shipped it).

### Guidance for ${audience.label}s
When operating in this context, make sure to:
- **Query State**: Review active boundaries using the \`ssot-tui\` interactive browser.
- **Run Conformance Tests**: Validate that the active branch satisfies the boundary criteria by executing \`ssot conformance\` test scripts.
- **Fail Closed**: In CI, check that \`ssot validate\` passes. If unapproved features are present, the build will immediately error out before a release can be generated.
    `;
    faqs = [
      { q: `How does a boundary prevent late-stage scope changes?`, a: `Once frozen, the list of associated feature IDs cannot be modified. If new code attempts to introduce a feature not registered in the boundary snapshot, validation fails during the certification stage.` },
      { q: `Can a release reference more than one boundary?`, a: `No. A release is structurally mapped to exactly one frozen boundary to maintain a clean, reviewable audit trail.` }
    ];
    relatedPackages = ["ssot-cli", "ssot-views", "ssot-tui"];
    relatedApis = ["ssot boundary freeze", "ssot release certify"];
  } else if (subjectId === "mcp-coordination") {
    directAnswer = `The Model Context Protocol (MCP) server distribution, 'ssot-mcp', allows agentic tools and LLMs to interact with local registries through structured standard APIs. It translates raw agent instructions into validated shell operations, preventing autonomous agents from introducing schema corruptions.`;
    content = `
### Model Context Protocol Integration Architecture
The \`ssot-mcp\` package runs a lightweight stdio or SSE server enabling AI agents to safely read and mutate the registry:
- **Command Mirroring**: Exposes tools equivalent to standard CLI inputs like \`get_ssot_cli_surface\` and \`run_ssot_cli\`.
- **Worker Campaigns**: Provides specialized endpoints like \`claim_next_maturation_slice\` to allocate registry items to background worker agents.
- **Validation Shield**: Because all changes must pass through \`ssot-core\` validators before being written, agents cannot corrupt the underlying \`.ssot/registry.json\` structure.

### Practical Tips for ${audience.label}s
Ensure that \`ssot-mcp\` is only initiated in trusted environments with explicit directory sandboxing. Use the \`--repo <path>\` flag to restrict agent access strictly to the target project directory.
    `;
    faqs = [
      { q: `Is ssot-mcp required for normal developers?`, a: `No. It is an optional integration package designed specifically for teams using agentic AI or IDE extensions (like Codex) to manage release requirements.` },
      { q: `Does the MCP server allow raw writes to registry.json?`, a: `No. It pipes all mutations through the ssot-core API schema validators, rejecting any requests that fail conformance rules.` }
    ];
    relatedPackages = ["ssot-mcp", "ssot-core", "ssot-cli"];
    relatedApis = ["ssot-mcp --transport stdio"];
  } else if (subjectId === "lineage-graph") {
    directAnswer = `The Lineage Graph, powered by '@ssot-registry/lineage-graph', visualizes the structural pathways linking high-level ADR decisions to specifications, features, claims, executable tests, and verified evidence rows. This visualization provides instant assurance mapping.`;
    content = `
### Lineage Traceability Engine
The lineage trace works by querying relation fields inside \`.ssot/registry.json\`:
1. **Decision Roots**: An ADR is traced forward to its corresponding **Specification** (SPEC).
2. **Capability Scopes**: SPECs are linked to implementable **Features**.
3. **Assertion Layers**: Features map to **Claims** stating what must be true.
4. **Verification Chains**: Claims are backed by **Tests** which produce concrete **Evidence**.

### Exposing Traceability to ${audience.label}s
By compiling your registry into an interactive HTML bundle using \`ssot graph lineage\`, you generate a self-contained, offline-first visualization application. This payload contains the full audit trails, making it trivial for release auditors to interactively verify dependencies without needing a terminal or database connection.
    `;
    faqs = [
      { q: `How do I generate an offline lineage graph?`, a: `Run the command 'ssot graph lineage' in your project root. It compiles the registry data into a self-contained HTML page using the @ssot-registry/lineage-graph React bundle.` },
      { q: `Can the graph display multi-repo dependencies?`, a: `Yes, if those repositories export their registry snapshots into an extension pack synchronized in the master workspace.` }
    ];
    relatedPackages = ["@ssot-registry/lineage-graph", "ssot-views", "ssot-cli"];
    relatedApis = ["ssot graph lineage", "ssot graph export"];
  } else if (subjectId === "governance-packs") {
    directAnswer = `Governance Packs represent installable, pre-packaged policy bundles containing standardized ADRs and Specifications. Delivered through 'ssot-pack-contracts', they enable enterprises to distribute and enforce strict compliance rules (such as SEO and security postures) across dozens of distributed repositories.`;
    content = `
### Pack Lifecycle and Integration
Governance packs operate as first-class citizens:
- **Metadata Audits**: Every document carries origins preserving \`source_pack_id\` and \`source_package_name\`.
- **Preflight Compatibility**: Before syncing, \`ssot pack preflight\` checks for naming collisions or version mismatch.
- **Fail-Closed Imports**: Synced materials are written into a reserved range, ensuring downstream developers cannot bypass global policy checks by hand-editing synchronized documents.

### How to use as a ${audience.label}
To adopt a pack, declare it in your Python dependencies and run:
\`\`\`bash
ssot pack inspect seo-aeo-aieo-governance-pack
ssot pack preflight . seo-aeo-aieo-governance-pack
ssot pack sync . seo-aeo-aieo-governance-pack --trust --yes
\`\`\`
This synchronizes standard guidelines, features, and claims directly into your local registry for pytest to run checks against.
    `;
    faqs = [
      { q: `What happens if a local file conflicts with a governance pack?`, a: `Preflight checks detect conflicts immediately. By default, pack synchronization will fail-closed rather than overwrite customized repo-local files without explicit trust overrides.` },
      { q: `Where do governance pack documents reside?`, a: `They are imported into designated read-only directories managed by the ssot toolchain to preserve source authenticity.` }
    ];
    relatedPackages = ["ssot-pack-contracts", "ssot-contracts", "ssot-registry"];
    relatedApis = ["ssot pack inspect", "ssot pack sync"];
  } else {
    // Default generic generator that produces high-fidelity text
    directAnswer = `SSOT Registry models ${subject.label} within the ${section.label} pipeline. It ensures that every aspect of ${subject.label} remains canonical, validated, and directly mapped to your core software-assurance goals.`;
    content = `
### Conceptual Integration of ${subject.label}
In standard release environments, ${subject.label} is often scattered across distinct tool platforms, creating fragmented traces. Under SSOT Registry, ${subject.label} becomes a unified node in your local registry JSON.

### Workflow and Verification Guidelines for ${audience.label}s
To ensure 10/10 compliance and validation quality:
1. **Define Capabilities**: Map your ${subject.label} nodes under the correct JSON pointers.
2. **Run Static Checks**: Execute \`ssot validate .\` to identify orphaned nodes or reference leaks.
3. **Inject Evidence**: Ensure downstream tests log evidence payloads matching your required verification levels.
4. **Export Projections**: Regenerate your sitemaps, JSON-LD graphs, and metadata packages to keep derived sites in absolute alignment.

This approach guarantees that when a release manager reviews the release candidate, the posture of ${subject.label} is fully auditable.
    `;
    faqs = [
      { q: `Is ${subject.label} validated automatically in CI?`, a: `Yes. Running 'ssot validate .' in your test runner checks all ${subject.label} references, preventing the deployment of incomplete structures.` },
      { q: `Where is the configuration for ${subject.label} stored?`, a: `It resides inside the canonical '.ssot/registry.json' workspace database under designated keys.` }
    ];
  }

  return {
    slug,
    title,
    description,
    h1,
    intro: `A comprehensive guide exploring ${subject.label} under the ${section.label} workflow, designed specifically as a ${intent.label} for the ${audience.label} persona.`,
    section: section.label,
    subject: subject.label,
    audience: audience.label,
    intent: intent.label,
    content,
    directAnswer,
    faqs,
    breadcrumbs: ["Home", section.label, subject.label, intent.label],
    relatedPackages,
    relatedApis,
    updatedAt: "2026-06-29T22:48:45-07:00"
  };
}

// Pre-generated statistics based on verified registry counts
export const REGISTRY_STATS: RegistryStat[] = [
  { label: "ADRs", value: 90, description: "Architecture Decision Records tracked" },
  { label: "Specs", value: 99, description: "Normative requirement definitions" },
  { label: "Features", value: 408, description: "Targetable capability units mapped" },
  { label: "Tests", value: 359, description: "Executable verification test cases" },
  { label: "Claims", value: 1380, description: "Asserted claims mapped across tiers" },
  { label: "Evidence Rows", value: 645, description: "Concrete evidence rows linked" },
  { label: "Releases", value: 22, description: "Total releases validated and stored" },
  { label: "Boundaries", value: 29, description: "Frozen release-scopes declared" }
];

export const WORKFLOWS = [
  {
    id: "decision-to-scope",
    title: "1. Establish Decision & Scope Authority",
    desc: "Establish clear technical decisions through ADRs and requirements through SPECs. Sync package-contracts and map them directly into feature boundaries.",
    steps: [
      { cmd: "ssot init .", desc: "Initialize a fresh local repository with a validated v0.8.0 registry." },
      { cmd: "ssot pack preflight . seo-aeo-aieo-governance-pack", desc: "Check governance pack ranges and source metadata before syncing." },
      { cmd: "ssot pack sync . seo-aeo-aieo-governance-pack --trust --yes", desc: "Sync authoritative governance pack documents into reserved ranges." },
      { cmd: "ssot feature list .", desc: "List current features and map them back to SPEC references." }
    ]
  },
  {
    id: "scope-to-freeze",
    title: "2. Target & Freeze Boundaries",
    desc: "Prevent scope drift or sudden feature injections by freezing an active delivery boundary, securing a stable target list that developers will be judged against.",
    steps: [
      { cmd: "ssot boundary freeze . --boundary-id bnd:all-t2-to-t3-2026-06-07", desc: "Freeze release scope, locking feature and profile targets against changes." }
    ]
  },
  {
    id: "proof-to-certify",
    title: "3. Evaluate Proof & Certify Release",
    desc: "Verify that claims are verified by executable test runs and backed by concrete evidence signatures. Run a check to certify release readiness.",
    steps: [
      { cmd: "ssot conformance run .", desc: "Execute registered conformance checks to verify actual feature postures." },
      { cmd: "ssot claim evaluate .", desc: "Assess claim-verification status across T0-T3 tiers." },
      { cmd: "ssot evidence list .", desc: "Inspect evidence rows and their linked claims and tests." },
      { cmd: "ssot release certify . --release-id rel:all-t2-to-t3-2026-06-07", desc: "Run a fail-closed check to attest release-readiness." }
    ]
  },
  {
    id: "promote-to-publish",
    title: "4. Promote & Publish Authority",
    desc: "Advance certified releases across environment gates and publish compiled, immutable reports, visual graph indexes, and discovery assets.",
    steps: [
      { cmd: "ssot release promote . --release-id rel:all-t2-to-t3-2026-06-07", desc: "Promote certified candidate state through the registry release lifecycle." },
      { cmd: "ssot graph lineage . --output-file lineage.html", desc: "Export self-contained lineage graphs for external review teams." },
      { cmd: "ssot registry export . --output-format json", desc: "Project the canonical registry as a JSON export." }
    ]
  }
];

// High-fidelity Mock of Metadata files for SEO/AEO/AiEO Explorer
export const METADATA_FILES = {
  robots: `User-agent: *
Allow: /
Sitemap: https://ssot-registry.com/sitemap.xml
Sitemap: https://ssot-registry.com/sitemap-packages.xml
Sitemap: https://ssot-registry.com/sitemap-workflows.xml
Sitemap: https://ssot-registry.com/sitemap-learn.xml
Sitemap: https://ssot-registry.com/sitemap-api-reference.xml
Sitemap: https://ssot-registry.com/sitemap-content.xml`,

  llmsTxt: `# SSOT Registry Product Portfolio Corpus

An AI-friendly directory of the SSOT Registry release-governance toolchain and entity model.

## Primary Entrypoints
- [Product Overview](https://ssot-registry.com/product) - Canonical registry rules, schema-v0.8.0 patterns, and Python/npm package taxonomy.
- [Workflows](https://ssot-registry.com/workflows) - Decision-to-scope, scope-to-freeze, proof-to-certify, and promote-to-publish operating paths.
- [Package Chooser](https://ssot-registry.com/packages) - Comprehensive portfolio distribution list (ssot-registry, ssot-core, ssot-cli, ssot-mcp, ssot-tui, lineage-graph).
- [Proof Model](https://ssot-registry.com/proof-model) - Structural links between Claims, Tests, and Evidence nodes.
- [Governance Packs](https://ssot-registry.com/governance-packs) - Installable policies backed by ssot-pack-contracts APIs.

## Architectural Consensus Rules
1. **Canonical Registry**: '.ssot/registry.json' is the canonical machine-readable source of truth. Reports, documentation, and graphs are derived projections.
2. **ADR Origins**: Decisions are explicitly categorized as 'ssot-core' (upstream code), 'ssot-origin' (distribution templates), 'repo-local' (workspace-owned), or 'extension-pack' (packaged governance).
3. **Boundaries**: Scope must be frozen using boundaries before releases can be certified, protecting against silent drift.`,

  sitemap: `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://ssot-registry.com/sitemap-packages.xml</loc>
    <lastmod>2026-06-29T22:48:45-07:00</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://ssot-registry.com/sitemap-workflows.xml</loc>
    <lastmod>2026-06-29T22:48:45-07:00</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://ssot-registry.com/sitemap-learn.xml</loc>
    <lastmod>2026-06-29T22:48:45-07:00</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://ssot-registry.com/sitemap-api-reference.xml</loc>
    <lastmod>2026-06-29T22:48:45-07:00</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://ssot-registry.com/sitemap-content.xml</loc>
    <lastmod>2026-06-29T22:48:45-07:00</lastmod>
  </sitemap>
</sitemapindex>`,

  structuredData: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://ssot-registry.com/#ssot-registry",
        "name": "SSOT Registry",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Linux, macOS, Windows",
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "USD"
        },
        "description": "Governed single source of truth for software assurance and release readiness.",
        "softwareVersion": "0.2.26.dev1",
        "license": "https://opensource.org/licenses/Apache-2.0"
      },
      {
        "@type": "WebSite",
        "@id": "https://ssot-registry.com/#website",
        "url": "https://ssot-registry.com/",
        "name": "SSOT Registry Product Portfolio",
        "publisher": {
          "@type": "Organization",
          "name": "GSL"
        }
      }
    ]
  }
};
