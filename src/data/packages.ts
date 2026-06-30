import { PackageInfo } from '../types';

export const packagePortfolio: PackageInfo[] = [
  {
    "id": "ssot-registry",
    "name": "ssot-registry",
    "version": "0.2.26.dev1",
    "role": "Umbrella Python distribution",
    "installUv": "uv add ssot-registry",
    "installPip": "python -m pip install ssot-registry",
    "bestFor": "Install this when you want the standard local SSOT operator bundle: core runtime, CLI, contracts, conformance, and optional MCP/TUI extras.",
    "notFor": null,
    "proofPoint": "Umbrella distribution for SSOT that installs the core runtime and primary CLI together. Optional extras: [mcp], [tui], [all]",
    "commands": [
      {
        "cmd": "uv add \"ssot-registry[all]\"",
        "desc": "Install umbrella package with MCP and TUI extras"
      },
      {
        "cmd": "ssot validate .",
        "desc": "Validate the current repository registry"
      }
    ],
    "publicMessage": "Umbrella distribution for SSOT that installs the core runtime and primary CLI together.",
    "isOptional": false
  },
  {
    "id": "ssot-core",
    "name": "ssot-core",
    "version": "0.2.26.dev1",
    "role": "Core Python runtime and validation API",
    "installUv": "uv add ssot-core",
    "installPip": "python -m pip install ssot-core",
    "bestFor": "Use in Python code that needs the registry model, validation, graph, evidence, release, and status APIs without installing only a shell surface.",
    "notFor": null,
    "proofPoint": "Core Python runtime, registry model, validation, and release workflow APIs for SSOT.",
    "commands": [
      {
        "cmd": "from ssot_registry.api import load_registry, validate_registry",
        "desc": "Use the canonical Python API surface"
      },
      {
        "cmd": "from ssot_registry.api import export_graph, freeze_boundary",
        "desc": "Call graph and release-boundary APIs from Python"
      }
    ],
    "publicMessage": "Core Python runtime, registry model, validation, and release workflow APIs for SSOT.",
    "isOptional": false
  },
  {
    "id": "ssot-cli",
    "name": "ssot-cli",
    "version": "0.1.20.dev1",
    "role": "Primary command-line distribution",
    "installUv": "uv add ssot-cli",
    "installPip": "python -m pip install ssot-cli",
    "bestFor": "Use in local shells and CI when you need `ssot`, `ssot-cli`, or `ssot-registry` commands for validation, entities, packs, boundaries, releases, and graphs.",
    "notFor": null,
    "proofPoint": "Primary CLI distribution for ssot-registry. Entry points: ssot, ssot-cli, ssot-registry.",
    "commands": [
      {
        "cmd": "ssot validate .",
        "desc": "Check registry integrity and guard compliance"
      },
      {
        "cmd": "ssot claim evaluate .",
        "desc": "Evaluate claim support"
      },
      {
        "cmd": "ssot graph lineage . --output-file lineage.html",
        "desc": "Render a self-contained lineage graph"
      }
    ],
    "publicMessage": "Primary CLI distribution for ssot-registry.",
    "isOptional": false
  },
  {
    "id": "ssot-conformance",
    "name": "ssot-conformance",
    "version": "0.2.26.dev1",
    "role": "Reusable conformance harness",
    "installUv": "uv add ssot-conformance",
    "installPip": "python -m pip install ssot-conformance",
    "bestFor": "Use when a repository needs reusable pytest/conformance cases, scaffold helpers, and evidence-output flows.",
    "notFor": null,
    "proofPoint": "Reusable SSOT conformance harness, pytest plugin, and scaffold helpers.",
    "commands": [
      {
        "cmd": "ssot conformance discover .",
        "desc": "Discover conformance cases"
      },
      {
        "cmd": "ssot conformance scaffold . --dry-run",
        "desc": "Plan conformance rows before mutation"
      },
      {
        "cmd": "ssot conformance run .",
        "desc": "Run registry-declared conformance cases"
      }
    ],
    "publicMessage": "Reusable SSOT conformance harness, pytest plugin, and scaffold helpers.",
    "isOptional": false
  },
  {
    "id": "ssot-contracts",
    "name": "ssot-contracts",
    "version": "0.2.26.dev1",
    "role": "Canonical schemas and templates",
    "installUv": "uv add ssot-contracts",
    "installPip": "python -m pip install ssot-contracts",
    "bestFor": "Use when tools need packaged JSON schemas, templates, manifests, and generated contract artifacts.",
    "notFor": "Runtime workflow orchestration; use ssot-core or ssot-cli.",
    "proofPoint": "Canonical schemas, templates, manifests, and generated Python contract artifacts for SSOT.",
    "commands": [
      {
        "cmd": "python -c \"import ssot_contracts; print(ssot_contracts.__version__)\"",
        "desc": "Inspect installed contract package version"
      }
    ],
    "publicMessage": "Canonical schemas, templates, manifests, and generated Python contract artifacts for SSOT.",
    "isOptional": false
  },
  {
    "id": "ssot-pack-contracts",
    "name": "ssot-pack-contracts",
    "version": "0.2.23",
    "role": "Governance-pack contract layer",
    "installUv": "uv add ssot-pack-contracts",
    "installPip": "python -m pip install ssot-pack-contracts",
    "bestFor": "Use when authoring or importing governance packs with manifest metadata, packaged document contracts, and preflight checks.",
    "notFor": "Teams that only consume the umbrella CLI and do not author or import packs.",
    "proofPoint": "Shared governance-pack metadata, manifest, and packaged document contracts for SSOT.",
    "commands": [
      {
        "cmd": "ssot pack inspect authentication-governance-pack",
        "desc": "Inspect pack metadata and manifests"
      },
      {
        "cmd": "ssot pack preflight . authentication-governance-pack",
        "desc": "Check compatibility before mutation"
      },
      {
        "cmd": "ssot pack sync . authentication-governance-pack --trust --yes",
        "desc": "Sync immutable pack ADR/SPEC documents"
      }
    ],
    "publicMessage": "Shared governance-pack metadata, manifest, and packaged document contracts for SSOT.",
    "isOptional": false
  },
  {
    "id": "ssot-views",
    "name": "ssot-views",
    "version": "0.2.26.dev1",
    "role": "Derived reports and graph projections",
    "installUv": "uv add ssot-views",
    "installPip": "python -m pip install ssot-views",
    "bestFor": "Use when building derived validation reports, certification reports, graph exports, and review projections from the canonical registry.",
    "notFor": null,
    "proofPoint": "Derived projections, reports, and graph exports for SSOT.",
    "commands": [
      {
        "cmd": "ssot graph export . --format dot",
        "desc": "Export registry relationships as Graphviz DOT"
      },
      {
        "cmd": "ssot registry export . --output-format json",
        "desc": "Export operator-friendly registry data"
      }
    ],
    "publicMessage": "Derived projections, reports, and graph exports for SSOT.",
    "isOptional": false
  },
  {
    "id": "ssot-codegen",
    "name": "ssot-codegen",
    "version": "0.2.26.dev1",
    "role": "Development-time artifact generator",
    "installUv": "uv add ssot-codegen",
    "installPip": "python -m pip install ssot-codegen",
    "bestFor": "Use for SSOT maintainers regenerating generated contracts, view artifacts, CLI metadata, and TUI metadata from source schemas.",
    "notFor": "Most downstream application repositories; it is primarily a maintainer package.",
    "proofPoint": "Generators for SSOT contract, CLI, and TUI artifacts. Entry points: ssot-codegen.",
    "commands": [
      {
        "cmd": "ssot-codegen --help",
        "desc": "Inspect generator command surface"
      }
    ],
    "publicMessage": "Generators for SSOT contract, CLI, and TUI artifacts.",
    "isOptional": true
  },
  {
    "id": "ssot-mcp",
    "name": "ssot-mcp",
    "version": "0.1.8.dev1",
    "role": "Optional MCP server",
    "installUv": "uv add ssot-mcp",
    "installPip": "python -m pip install ssot-mcp",
    "bestFor": "Use for MCP-compatible agents that should operate through controlled SSOT tools and pull-worker campaign state instead of raw file edits.",
    "notFor": "Standard non-agent workflows that do not need MCP coordination.",
    "proofPoint": "MCP server for optional SSOT pull-worker control-plane coordination. Entry points: ssot-mcp.",
    "commands": [
      {
        "cmd": "ssot-mcp",
        "desc": "Start the SSOT MCP server entry point"
      }
    ],
    "publicMessage": "MCP server for optional SSOT pull-worker control-plane coordination.",
    "isOptional": true
  },
  {
    "id": "ssot-tui",
    "name": "ssot-tui",
    "version": "0.1.20.dev1",
    "role": "Textual terminal UI",
    "installUv": "uv add ssot-tui",
    "installPip": "python -m pip install ssot-tui",
    "bestFor": "Use for read-oriented terminal browsing of registry sections, validation state, and details through Textual.",
    "notFor": "Headless CI automation or full CRUD editing; use ssot-cli for operational coverage.",
    "proofPoint": "Terminal UI package for ssot-registry workflows. Entry points: ssot-tui.",
    "commands": [
      {
        "cmd": "ssot-tui",
        "desc": "Launch the Textual registry browser"
      }
    ],
    "publicMessage": "Terminal UI package for ssot-registry workflows.",
    "isOptional": true
  },
  {
    "id": "ssot-lineage-graph",
    "name": "@ssot-registry/lineage-graph",
    "version": "0.2.26-dev.1",
    "role": "Portable React lineage graph viewer",
    "installUv": "npm install @ssot-registry/lineage-graph",
    "installPip": "yarn add @ssot-registry/lineage-graph",
    "bestFor": "React apps and offline HTML exports that need to inspect registry lineage relationships visually.",
    "proofPoint": "Exports LineageGraphApp and createStandaloneHtml(payload); the Python graph lineage command uses the standalone HTML path.",
    "commands": [
      {
        "cmd": "import { LineageGraphApp } from \"@ssot-registry/lineage-graph\";",
        "desc": "Embed the lineage graph in React"
      },
      {
        "cmd": "ssot graph lineage . --output-file lineage.html",
        "desc": "Generate a self-contained HTML viewer from the CLI"
      }
    ],
    "publicMessage": "Portable React viewer for SSOT lineage graph payloads.",
    "isOptional": true
  }
];
