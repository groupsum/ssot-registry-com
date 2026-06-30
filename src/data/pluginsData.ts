export interface PluginSkill {
  name: string;
  desc: string;
}

export interface PluginInfo {
  id: string;
  slug: string;
  displayName: string;
  category: "AI Codex" | "Model Context Protocol";
  sourcePath: string;
  githubUrl: string;
  capabilities: string[];
  skills: PluginSkill[];
  purpose: string;
  description: string;
  installation: {
    title: string;
    steps: string[];
    codeBlock: string;
  };
  usageExamples: {
    title: string;
    codeBlock: string;
    explanation: string;
  }[];
  detailedMetadata: {
    publisher: string;
    version: string;
    license: string;
    releasedAt: string;
  };
}

export const pluginsList: PluginInfo[] = [
  {
    "id": "ssot-cli",
    "slug": "ssot-cli-codex",
    "displayName": "SSOT Codex Plugin",
    "category": "AI Codex",
    "sourcePath": "plugins/ssot-registry-cli",
    "githubUrl": "https://github.com/groupsum/ssot-registry/tree/main/plugins/ssot-registry-cli",
    "capabilities": [
      "Read",
      "Write"
    ],
    "purpose": "Use a uv venv with the PyPI SSOT CLI.",
    "description": "Gives Codex a focused workflow for operating SSOT repositories through a local uv virtual environment with the PyPI-published ssot-registry package, including validation, planning, release, and export commands.",
    "skills": [
      {
        "name": "ssot-registry-cli",
        "desc": "Use the latest available `ssot-registry` CLI through a local uv environment."
      },
      {
        "name": "ssot-decision-to-scope",
        "desc": "Create/update ADR, SPEC, and feature scope from a proposed decision."
      },
      {
        "name": "ssot-scope-to-frozen-boundary",
        "desc": "Set target features/profiles and freeze a delivery boundary."
      },
      {
        "name": "ssot-proof-chain-and-certification",
        "desc": "Link claims, tests, and evidence, then certify/promote/publish releases."
      },
      {
        "name": "ssot-entity-get/list/review",
        "desc": "Inspect and review registry entities across supported families."
      }
    ],
    "installation": {
      "title": "Installing the Codex Plugin",
      "steps": [
        "Install or expose the local plugin from the ssot-registry repository.",
        "Use a uv-managed Python environment so Codex can invoke the PyPI SSOT CLI aliases.",
        "Run `ssot --version` or `ssot validate .` in a target repository to verify the rail."
      ],
      "codeBlock": "codex plugin marketplace add /path/to/ssot-registry\ncodex plugin add ssot-cli@ssot-registry\nuv tool install ssot-cli\nssot --version"
    },
    "usageExamples": [
      {
        "title": "Validate a repository",
        "codeBlock": "ssot validate . --output-format json",
        "explanation": "Runs registry integrity and guard compliance checks."
      },
      {
        "title": "Inspect claim support",
        "codeBlock": "ssot claim evaluate .",
        "explanation": "Evaluates whether claims have coherent feature, test, and evidence support."
      },
      {
        "title": "Render lineage",
        "codeBlock": "ssot graph lineage . --output-file lineage.html",
        "explanation": "Creates a self-contained HTML lineage graph from the registry."
      }
    ],
    "detailedMetadata": {
      "publisher": "Swarmauri",
      "version": "0.1.0",
      "license": "Apache-2.0",
      "releasedAt": "Plugin source in groupsum/ssot-registry"
    }
  },
  {
    "id": "ssot-mcp",
    "slug": "ssot-mcp-server",
    "displayName": "SSOT MCP Plugin",
    "category": "Model Context Protocol",
    "sourcePath": "plugins/ssot-mcp",
    "githubUrl": "https://github.com/groupsum/ssot-registry/tree/main/plugins/ssot-mcp",
    "capabilities": [
      "Interactive",
      "Read",
      "Write",
      "Code"
    ],
    "purpose": "Run SSOT MCP worker campaigns and lease-governed maturity work.",
    "description": "Provides Codex with dedicated SSOT MCP skills for pull-only worker campaigns, lease-aware slice execution, T1 direct verification, T2 robustness verification, and T3 certification-closure work. The plugin keeps registry changes on the MCP rail, prevents hand-editing of .ssot/registry.json, and emphasizes honest tier completion, conflict-safe path discipline, and complete_slice-based reporting.",
    "skills": [
      {
        "name": "ssot-mcp",
        "desc": "Keep registry work on the SSOT MCP rail rather than direct raw registry edits."
      },
      {
        "name": "ssot-mcp-t1-worker-campaign",
        "desc": "Execute direct project-verification slices targeting T1."
      },
      {
        "name": "ssot-mcp-t2-worker-campaign",
        "desc": "Execute robustness verification slices targeting T2."
      },
      {
        "name": "ssot-mcp-t3-worker-campaign",
        "desc": "Execute certification-closure work targeting T3."
      }
    ],
    "installation": {
      "title": "Connecting to the MCP Server",
      "steps": [
        "Install the Python MCP package or the umbrella `ssot-registry[mcp]` extra.",
        "Configure an MCP-capable client to launch `ssot-mcp`.",
        "Keep mutations on the MCP tool rail and complete worker slices through the provided campaign tools."
      ],
      "codeBlock": "python -m pip install ssot-mcp\nssot-mcp"
    },
    "usageExamples": [
      {
        "title": "Run the server entry point",
        "codeBlock": "ssot-mcp",
        "explanation": "Starts the package console script defined by `ssot-mcp = ssot_mcp.server:main`."
      },
      {
        "title": "Use MCP campaign skills",
        "codeBlock": "Use $ssot-mcp-t1-worker-campaign for T1 slices\nUse $ssot-mcp-t2-worker-campaign for T2 slices\nUse $ssot-mcp-t3-worker-campaign for T3 closure",
        "explanation": "Matches the plugin default prompts and skill set."
      }
    ],
    "detailedMetadata": {
      "publisher": "Swarmauri",
      "version": "0.1.0",
      "license": "Apache-2.0",
      "releasedAt": "Plugin source in groupsum/ssot-registry"
    }
  }
];
