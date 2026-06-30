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
    id: "ssot-cli",
    slug: "ssot-cli-codex",
    displayName: "SSOT Codex Plugin",
    category: "AI Codex",
    sourcePath: "plugins/ssot-registry-cli",
    githubUrl: "https://github.com/groupsum/ssot-registry/tree/main/plugins/ssot-registry-cli",
    capabilities: ["Read", "Write", "Validation", "Scaffolding"],
    purpose: "Operate SSOT repositories through a local virtual environment using PyPI-published SSOT CLI aliases guided by AI models.",
    description: "The SSOT Codex Plugin bridges the gap between LLM code generation and compliance tracking. It equips AI coding assistants with the precise tools and guidelines needed to construct, modify, and validate SSOT registries natively within local developer repositories. By mapping human-written architecture decisions directly to code features and automated tests, it guarantees compile-time traceability and auditability.",
    skills: [
      {
        name: "ssot-registry-cli",
        desc: "Uses the latest available SSOT CLI dynamically in local virtual environments to prevent manual, error-prone edits to .ssot/registry.json."
      },
      {
        name: "ssot-decision-to-scope",
        desc: "Transforms a high-level proposed change request into formal machine-readable ADRs, SPECs, features, and planning metadata."
      },
      {
        name: "ssot-scope-to-frozen-boundary",
        desc: "Seals the planned implementation scope into a frozen delivery boundary, establishing fail-closed release gates."
      },
      {
        name: "ssot-proof-chain-and-certification",
        desc: "Links claim verification outputs to test evidence, automates status syncs, and executes final release candidate certifications."
      },
      {
        name: "ssot-e2e-change-orchestrator",
        desc: "Coordinates the entire lifecycle from initial architectural proposal through active development verification to production closure."
      },
      {
        name: "ssot-entity-review",
        desc: "Audits individual registry records and relationships for validation compliance, mismatch detection, and structural integrity."
      },
      {
        name: "ssot-entity-analyze",
        desc: "Generates semantic coverage analysis, dependency gap assessments, and estimates downstream impact of pending changes."
      }
    ],
    installation: {
      title: "Installing the Codex Plugin",
      steps: [
        "Ensure Python 3.10+ and 'uv' package manager are installed locally.",
        "Include the plugin directory in your local workspace configuration or active AI coding assistant's workspace instructions.",
        "Initialize the local virtual environment and activate package-dependency resolution."
      ],
      codeBlock: `# Clone the public repository
git clone https://github.com/groupsum/ssot-registry.git
cd ssot-registry/plugins/ssot-registry-cli

# Bootstrap the local workspace environment with uv
uv venv .venv
source .venv/bin/activate
uv pip install -e .`
    },
    usageExamples: [
      {
        title: "Proposing and Scaffolding a New Decision",
        codeBlock: `ssot adr create \\
  --title "Adopt RFC 8785 JCS for .ssot JSON artifacts" \\
  --slug "adopt-rfc-8785-jcs-for-ssot-json-artifacts" \\
  --body "To prevent validation hashing mismatches across different language runtimes, we must enforce strict RFC 8785 JSON Canonicalization Scheme (JCS) serialization for all .ssot files." \\
  --origin "repo-local"`,
        explanation: "Allows the operator to cleanly propose an architectural decision. The CLI automatically assigns the next available reserved number slot, NORMALIZES file naming formats under `.ssot/adr/`, and adds the record directly to the tracking index of `.ssot/registry.json`."
      },
      {
        "title": "Verifying a Frozen Scope Boundary",
        codeBlock: "ssot validate --boundary bnd:claim-ceiling-0617 --output json",
        explanation: "Runs deep structural validation over the target boundary. Ensures all in-scope capabilities carry valid required claims, passing test cases, and compliant evidence trails before triggering pre-deployment gating."
      }
    ],
    detailedMetadata: {
      publisher: "SSOT Maintainers Core",
      version: "0.1.20.dev1",
      license: "Apache-2.0",
      releasedAt: "2026-06-30"
    }
  },
  {
    id: "ssot-mcp",
    slug: "ssot-mcp-server",
    displayName: "SSOT MCP Server",
    category: "Model Context Protocol",
    sourcePath: "plugins/ssot-mcp",
    githubUrl: "https://github.com/groupsum/ssot-registry/tree/main/plugins/ssot-mcp",
    capabilities: ["Interactive", "Read", "Write", "Code", "Tool Parity"],
    purpose: "Connect LLMs directly to the Model Context Protocol (MCP) server, enabling workers to trigger campaigns, update leases, and evaluate workspace maturity.",
    description: "The SSOT Model Context Protocol (MCP) Server exposes the entire governed workspace as an interactive semantic state model to LLMs. Instead of spawning shell commands or directly reading/writing raw JSON lines, LLMs can leverage standard structured tools to request maturation leases, execute targeted repair loops on broken proof links, coordinate campaign schedules, and synchronize documents safely via pre-flight checks.",
    skills: [
      {
        name: "ssot-mcp",
        desc: "Routes all repository operations directly onto the local MCP control plane, eliminating raw, unvalidated edits to `.ssot/registry.json`."
      },
      {
        name: "ssot-mcp-t1-worker-campaign",
        desc: "Coordinates Tier 1 worker slices to automatically generate mock proof-graph scaffolds and verify basic test compliance."
      },
      {
        name: "ssot-mcp-t2-worker-campaign",
        desc: "Deploys Tier 2 validation agents to backfill robustness claims, execute edge-case fuzzing, and track concurrency exceptions."
      },
      {
        name: "ssot-mcp-t3-worker-campaign",
        desc: "Triggers final release-train certification probes, locks lease durations, and evaluates global campaign maturity gates."
      }
    ],
    installation: {
      title: "Connecting to the MCP Server",
      steps: [
        "Ensure your AI Coding assistant or LLM client supports Model Context Protocol (MCP) v1.0+.",
        "Add the SSOT MCP server to your global client config list (e.g. Claude Desktop config, Cursor, or AI Studio workspace settings).",
        "Specify the executable command using 'npx' or python-based entrypoints."
      ],
      codeBlock: `{
  "mcpServers": {
    "ssot-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@groupsum/ssot-mcp",
        "start",
        "--repo-path",
        "/path/to/your/project"
      ],
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
}`
    },
    usageExamples: [
      {
        title: "Fetching Live CLI Tool Capabilities",
        codeBlock: `// Invoked automatically by MCP-compatible clients
mcp.callTool("get_ssot_cli_surface", {})`,
        explanation: "Exposes the exact, live parser layout of the local command line. This allows models to discover active flags, subcommand arguments, and choices on the fly, preventing syntax hallucination."
      },
      {
        title: "Claiming a Maturation Slice for Repair",
        codeBlock: `mcp.callTool("claim_next_maturation_slice", {
  "campaign_id": "cmp:robustness-backfill",
  "lease_duration_sec": 300
})`,
        explanation: "Acquires a temporary, cooperative lease lock on a failing node slice. The MCP worker can then safely repair missing proof links and status indicators, feeding outcomes back to the main control database."
      }
    ],
    detailedMetadata: {
      publisher: "Model Integration Group",
      version: "0.1.20.dev1",
      license: "Apache-2.0",
      releasedAt: "2026-06-30"
    }
  }
];
