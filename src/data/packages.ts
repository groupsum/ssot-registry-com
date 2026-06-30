import { PackageInfo } from '../types';

export const packagePortfolio: PackageInfo[] = [
  {
    id: "ssot-registry",
    name: "ssot-registry",
    version: "0.2.24",
    role: "Umbrella Python distribution",
    installUv: "uv add ssot-registry",
    installPip: "python -m pip install ssot-registry",
    bestFor: "Teams that want one central local operator bundle for registry initialization, validation, and release management.",
    notFor: "Isolated micro-packages that only need schema files without runtime execution.",
    proofPoint: "Automatically bundles ssot-core, ssot-cli, ssot-contracts, and ssot-pack-contracts. Supports optional extras like [mcp] and [tui].",
    commands: [
      { cmd: "uv add ssot-registry[all]", desc: "Install full operator bundle including MCP and TUI interfaces" },
      { cmd: "python -m pip install ssot-registry[tui]", desc: "Pip install including Terminal UI browser support" }
    ],
    publicMessage: "Use ssot-registry when you want the full local operator bundle for registry initialization, validation, proof review, and release closure."
  },
  {
    id: "ssot-core",
    name: "ssot-core",
    version: "0.2.24",
    role: "Core Python runtime and API engine",
    installUv: "uv add ssot-core",
    installPip: "python -m pip install ssot-core",
    bestFor: "Python applications embedding SSOT behavior or custom automation needing to manipulate the registry.",
    notFor: "Simple shell scripts or non-Python CI environments (use ssot-cli instead).",
    proofPoint: "Provides the underlying models, registry validation rules, graph-builders, and release gating criteria.",
    commands: [
      { cmd: "from ssot_registry import api", desc: "Import the core APIs in Python code" },
      { cmd: "api.validate_registry_path('.')", desc: "Programmatically trigger a strict validation sweep" }
    ],
    publicMessage: "Use ssot-core when your application needs the same registry APIs and validation rules that the CLI uses."
  },
  {
    id: "ssot-cli",
    name: "ssot-cli",
    version: "0.1.18",
    role: "Primary command-line distribution",
    installUv: "uv add ssot-cli",
    installPip: "python -m pip install ssot-cli",
    bestFor: "CI/CD pipelines, local developer environments, and automated shell-based release workflows.",
    notFor: "Direct programmatic embedding within long-running Node.js or Python backend servers.",
    proofPoint: "Installs the primary 'ssot' executable, supporting JSON output, validation sweeps, and release promotions.",
    commands: [
      { cmd: "ssot validate .", desc: "Run static conformance and reference validation check" },
      { cmd: "ssot boundary freeze . --boundary-id b1", desc: "Freeze release scope against target boundary" },
      { cmd: "ssot release certify . --release-id r1", desc: "Attest claims and freeze state before promotion" }
    ],
    publicMessage: "Use ssot-cli when automation needs explicit commands for validation, linking, boundary freeze, proof checks, registry export, graph export, and release certification."
  },
  {
    id: "ssot-conformance",
    name: "ssot-conformance",
    version: "0.2.24",
    role: "Reusable conformance test harness",
    installUv: "uv add ssot-conformance",
    installPip: "python -m pip install ssot-conformance",
    bestFor: "Downstream repositories adopting SSOT who need repeatable proof before evidence is trusted.",
    notFor: "Production web applications that do not carry test suites or validation requirements.",
    proofPoint: "Integrates directly with pytest as a plugin to automatically build and emit machine-readable evidence rows.",
    commands: [
      { cmd: "pytest --ssot-emit-evidence", desc: "Run test suite and automatically write evidence rows back to registry" }
    ],
    publicMessage: "Use ssot-conformance when a repo needs portable checks that can become evidence for governed claims."
  },
  {
    id: "ssot-contracts",
    name: "ssot-contracts",
    version: "0.2.24",
    role: "Canonical JSON schema and templates container",
    installUv: "uv add ssot-contracts",
    installPip: "python -m pip install ssot-contracts",
    bestFor: "Static tooling, JSON validation pipelines, and environments needing the schema definitions without a Python runtime.",
    proofPoint: "Ships schemas for registry.json, validation reports, certification reports, snapshots, and graph outputs.",
    commands: [
      { cmd: "registry.schema.json", desc: "Canonical JSON schema governing schema-v0.8.0 structures" }
    ],
    publicMessage: "Use ssot-contracts when you need packaged schemas, registry templates, and generated contract metadata."
  },
  {
    id: "ssot-pack-contracts",
    name: "ssot-pack-contracts",
    version: "0.2.23",
    role: "Governance-pack contract layer",
    installUv: "uv add ssot-pack-contracts",
    installPip: "python -m pip install ssot-pack-contracts",
    bestFor: "Governance pack authors and teams importing governed ADR/SPEC materials in reserved ranges.",
    notFor: "Standard application repositories that do not import or publish external policy modules.",
    proofPoint: "Defines trust metadata, document manifests, preflight checking rules, and fail-closed import guards.",
    commands: [
      { cmd: "ssot pack inspect <import-package>", desc: "Inspect a governance pack structure and compatibility" },
      { cmd: "ssot pack sync . <import-package> --trust", desc: "Sync pack-sourced ADR/SPEC content into reserved ranges" }
    ],
    publicMessage: "Use ssot-pack-contracts when external governance packs need a stable API for declaring trusted ADR and SPEC resources."
  },
  {
    id: "ssot-views",
    name: "ssot-views",
    version: "0.2.24",
    role: "Derived report and graph projection generator",
    installUv: "uv add ssot-views",
    installPip: "python -m pip install ssot-views",
    bestFor: "Generating human-readable documentation, charts, sqlite files, and compliance reports from the registry.",
    proofPoint: "Builds structured validation reports, certification matrices, and JSON/DOT graph exports.",
    commands: [
      { cmd: "ssot graph export . --format dot", desc: "Project the registry dependency graph as a Graphviz DOT file" }
    ],
    publicMessage: "Use ssot-views when you need reusable derived reports or graph exports while keeping '.ssot/registry.json' authoritative."
  },
  {
    id: "ssot-codegen",
    name: "ssot-codegen",
    version: "0.2.24",
    role: "Development-time package generator",
    installUv: "uv add ssot-codegen",
    installPip: "python -m pip install ssot-codegen",
    bestFor: "Maintainers of the SSOT workspace or developers generating custom code stubs from SSOT schemas.",
    isOptional: true,
    proofPoint: "Regenerates python-side metadata and bindings directly from ssot-contracts.",
    commands: [
      { cmd: "ssot-codegen run", desc: "Regenerate type definitions and schema constants" }
    ],
    publicMessage: "Use ssot-codegen when maintaining SSOT package metadata and generated contract artifacts. Most application users do not need it directly."
  },
  {
    id: "ssot-mcp",
    name: "ssot-mcp",
    version: "0.1.6",
    role: "Optional Model Context Protocol server",
    installUv: "uv add ssot-mcp",
    installPip: "python -m pip install ssot-mcp",
    bestFor: "Codex, LLM agents, and MCP clients coordinating registry mutations and campaign states via secure tools.",
    notFor: "Standard non-AI script operations or standard human dev workflows.",
    proofPoint: "Exposes mirrored CLI command paths and maturation tools over stdio/SSE channels.",
    commands: [
      { cmd: "ssot-mcp --transport stdio --repo .", desc: "Start the local MCP server for an AI Agent or IDE extension" }
    ],
    publicMessage: "Use ssot-mcp when Codex or another MCP client should coordinate SSOT registry work through validated tools, mirrored CLI command paths, and pull-worker campaign state."
  },
  {
    id: "ssot-tui",
    name: "ssot-tui",
    version: "0.1.18",
    role: "Textual Terminal UI for registry browsing",
    installUv: "uv add ssot-tui",
    installPip: "python -m pip install ssot-tui",
    bestFor: "Reviewers and release managers seeking an interactive, keyboard-friendly console view of registry states.",
    notFor: "Automated headless environments or full CRUD editing (currently optimized for read-oriented browsing).",
    proofPoint: "Generates high-fidelity browseable trees for ADRs, Specs, Features, Claims, and validation logs directly on the terminal.",
    commands: [
      { cmd: "ssot-tui .", desc: "Launch the terminal UI dashboard to browse current local registry state" }
    ],
    publicMessage: "Use ssot-tui when reviewers need a keyboard-first terminal browser for registry sections, entity details, validation state, and linked resources."
  },
  {
    id: "ssot-lineage-graph",
    name: "@ssot-registry/lineage-graph",
    version: "0.2.24-dev.1",
    role: "Portable React Lineage Graph viewer",
    installUv: "npm install @ssot-registry/lineage-graph",
    installPip: "yarn add @ssot-registry/lineage-graph",
    bestFor: "Embeddable interactive visualizer for registry relationships in frontend apps or standalone HTML audits.",
    proofPoint: "Powers the CLI 'ssot graph lineage' command to generate offline self-contained HTML verification documents.",
    commands: [
      { cmd: "import { LineageGraphApp } from '@ssot-registry/lineage-graph';", desc: "Embed the lineage graph view directly in React" }
    ],
    publicMessage: "Use @ssot-registry/lineage-graph when registry relationships need to be inspected visually in a React app or exported as an offline HTML lineage artifact."
  }
];
