import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Terminal, ShieldAlert, GitBranch, Key, Check, Copy, HelpCircle, 
  Workflow, Cpu, ArrowUpRight, CheckCircle2, ChevronRight, Play, Info
} from 'lucide-react';

export default function ToolchainShowcase() {
  const [activeTab, setActiveTab] = useState<'cli' | 'tui' | 'integration'>('cli');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const handleCopy = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const cliClusters = [
    {
      id: "start-and-validate",
      label: "Start & Validate",
      commands: ["ssot init", "ssot validate", "ssot config", "ssot upgrade"],
      desc: "Initialize local repositories, customize configuration parameters, check schema conformance, and manage version upgrades."
    },
    {
      id: "govern-decisions-and-specs",
      label: "Govern Decisions & Specs",
      commands: ["ssot adr", "ssot spec"],
      desc: "Synchronize and version architectural decisions (ADRs) and normative requirements (SPECs) as machine-readable graph nodes."
    },
    {
      id: "plan-targetable-work",
      label: "Plan Targetable Work",
      commands: ["ssot feature", "ssot profile", "ssot issue", "ssot risk"],
      desc: "Map active feature capabilities, outline risk mitigation profiles, track local issues, and evaluate coverage metrics."
    },
    {
      id: "build-proof-chains",
      label: "Build Proof Chains",
      commands: ["ssot test", "ssot claim", "ssot evidence"],
      desc: "Run active test suites, register compliance assertions (Claims), and verify immutable, sign-off-ready Evidence logs."
    },
    {
      id: "freeze-and-release",
      label: "Freeze & Release",
      commands: ["ssot boundary", "ssot release"],
      desc: "Declare cryptographic Boundary Freezes to block late-stage scope drift and certify secure production release candidates."
    },
    {
      id: "export-and-inspect",
      label: "Export & Inspect",
      commands: ["ssot registry", "ssot graph"],
      desc: "Compile unified registry summaries and export interactive DOT/SVG lineages for dependency visualizers."
    },
    {
      id: "packs-and-conformance",
      label: "Governance Packs",
      commands: ["ssot pack", "ssot conformance"],
      desc: "Fetch pre-built policy rules, register external compliance schemas, and run automated conformance verification routines."
    },
    {
      id: "automation",
      label: "Coordinate Automation",
      commands: ["ssot leases", "ssot worker", "ssot campaign", "ssot maturity", "ssot repo-watch"],
      desc: "Orchestrate pull-worker background agents, manage lease states, track workspace maturity gates, and watch active Git repositories."
    }
  ];

  const tuiKeybindings = [
    { keys: "r", action: "Reload workspace & registry configuration" },
    { keys: "v", action: "Trigger local validation checks instantly" },
    { keys: "/", action: "Filter nodes in the current active panel" },
    { keys: "ctrl+p", action: "Open Textual Command Palette search rail" },
    { keys: "?", action: "Toggle global shortcut help screen" },
    { keys: "tab", action: "Move focus to the next structured pane" },
    { keys: "shift+tab", action: "Move focus to the previous pane" },
    { keys: "j / k", action: "Move selection down or up in lists" },
    { keys: "h / l", action: "Focus entity sections sidebar or main table" },
    { keys: "enter", action: "Inspect selected item details" },
    { keys: "t", action: "Toggle between structured details & raw JSON" },
    { keys: "m", action: "Cycle current table display layout mode" }
  ];

  const actionsWorkflows = [
    {
      name: "CI Workflow",
      file: "ci.yml",
      desc: "Runs multi-package validation matrices across Python 3.10 through 3.14 to ensure backward compatibility and API stability.",
      url: "https://github.com/groupsum/ssot-registry/actions/workflows/ci.yml"
    },
    {
      name: "Prepare Release",
      file: "prepare-release.yml",
      desc: "Triggers manual release-train version bumps and generates version-specific changelog pull requests.",
      url: "https://github.com/groupsum/ssot-registry/actions/workflows/prepare-release.yml"
    },
    {
      name: "Release Execution",
      file: "release.yml",
      desc: "Deploys verified Python wheels to PyPI and projects compiled JSON schema metadata graphs to production artifacts.",
      url: "https://github.com/groupsum/ssot-registry/actions/workflows/release.yml"
    }
  ];

  const codexPlugins = [
    {
      name: "SSOT CLI Codex Plugin",
      skills: "27 active skills",
      desc: "Allows AI-assisted agents to coordinate and operate SSOT repositories directly inside a local virtual environment (e.g. decision-to-scope, frozen-boundary setup).",
      url: "/plugin/ssot-cli-codex"
    },
    {
      name: "SSOT MCP Plugin",
      skills: "4 automation skills",
      desc: "Connects LLMs to the Model Context Protocol (MCP) server, enabling workers to trigger campaigns, update leases, and evaluate workspace maturity.",
      url: "/plugin/ssot-mcp-server"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Tab Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-zinc-200 pb-4 gap-4">
        <div>
          <h2 className="font-sans text-2xl font-bold tracking-tight text-zinc-950">
            Complementary Operator Surfaces
          </h2>
          <p className="text-xs text-zinc-500 mt-1 max-w-xl">
            SSOT provides both a scriptable CLI command suite and a read-first Terminal User Interface (TUI) to operate over the canonical registry model.
          </p>
        </div>
        
        <div className="flex rounded-lg bg-zinc-100 p-1 font-mono text-xs font-semibold">
          <button
            onClick={() => setActiveTab('cli')}
            className={`px-3.5 py-1.5 rounded-md transition-colors cursor-pointer ${
              activeTab === 'cli' ? 'bg-white text-zinc-950 shadow-3xs' : 'text-zinc-500 hover:text-zinc-900'
            }`}
          >
            CLI (ssot-cli)
          </button>
          <button
            onClick={() => setActiveTab('tui')}
            className={`px-3.5 py-1.5 rounded-md transition-colors cursor-pointer ${
              activeTab === 'tui' ? 'bg-white text-zinc-950 shadow-3xs' : 'text-zinc-500 hover:text-zinc-900'
            }`}
          >
            TUI (ssot-tui)
          </button>
          <button
            onClick={() => setActiveTab('integration')}
            className={`px-3.5 py-1.5 rounded-md transition-colors cursor-pointer ${
              activeTab === 'integration' ? 'bg-white text-zinc-950 shadow-3xs' : 'text-zinc-500 hover:text-zinc-900'
            }`}
          >
            Actions & Codex
          </button>
        </div>
      </div>

      {/* Tab: CLI */}
      {activeTab === 'cli' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* CLI Clusters Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 bg-zinc-100 px-1.5 py-0.5 rounded">
                Package: ssot-cli v0.1.20.dev1
              </span>
              <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 bg-zinc-100 px-1.5 py-0.5 rounded">
                24 top-level commands
              </span>
            </div>
            
            <p className="text-sm text-zinc-600 leading-relaxed">
              The command rail allows operators to fully orchestrate SSOT registries, validate local trees, and freeze scopes. Every command returns standard POSIX exit codes, enabling fail-closed pipeline integration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {cliClusters.map((cluster) => (
                <div key={cluster.id} className="rounded-xl border border-zinc-200 bg-white p-4 space-y-2 hover:border-zinc-300 transition-colors">
                  <h4 className="font-sans text-xs font-bold text-zinc-950 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
                    {cluster.label}
                  </h4>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">
                    {cluster.desc}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {cluster.commands.map((cmd) => (
                      <span key={cmd} className="font-mono text-[9px] font-bold text-zinc-700 bg-zinc-50 border border-zinc-100 px-1 rounded">
                        {cmd}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Shell Terminal */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 shadow-sm font-mono text-xs text-zinc-300 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-500" />
                  <span className="h-3 w-3 rounded-full bg-amber-500" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[10px] font-bold text-zinc-600">Local Operator Shell (uv / pip)</span>
              </div>

              {/* Demo Terminal commands */}
              <div className="space-y-3 select-text">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">$ ssot validate --output-format json</span>
                    <button 
                      onClick={() => handleCopy("ssot validate --output-format json")}
                      className="text-zinc-600 hover:text-zinc-300 transition-colors"
                      title="Copy command"
                    >
                      {copiedCmd === "ssot validate --output-format json" ? (
                        <Check className="h-3 w-3 text-emerald-500" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </button>
                  </div>
                  <pre className="text-[11px] text-emerald-400 leading-normal mt-1">
{`{
  "status": "conforming",
  "conformanceTiers": { "T0": true, "T1": true, "T2": true, "T3": false },
  "nodeCount": 1376,
  "leaksCount": 0
}`}
                  </pre>
                </div>

                <div className="border-t border-zinc-900 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">$ ssot boundary freeze --boundary-id release-v1.0</span>
                    <button 
                      onClick={() => handleCopy("ssot boundary freeze --boundary-id release-v1.0")}
                      className="text-zinc-600 hover:text-zinc-300 transition-colors"
                      title="Copy command"
                    >
                      {copiedCmd === "ssot boundary freeze --boundary-id release-v1.0" ? (
                        <Check className="h-3 w-3 text-emerald-500" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </button>
                  </div>
                  <pre className="text-[11px] text-zinc-400 leading-normal mt-1">
{`[ssot] Sweeping active requirements...
[ssot] Hashing 18 boundary-linked schemas...
[ssot] Boundary frozen! Saved local fingerprint:
👉 signature: sha256_bdff842a...`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-zinc-50 border border-zinc-200 p-4.5 flex gap-3">
              <Info className="h-5 w-5 text-zinc-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="block font-bold text-zinc-900 text-xs">Production Guard Warning</span>
                <p className="text-[11px] text-zinc-600 leading-relaxed">
                  The CLI does not replace your test runner or compiler. It hooks into them, extracting verification output hashes and locking delivery boundaries to prevent unvetted changes from reaching deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab: TUI */}
      {activeTab === 'tui' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* TUI Metadata */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 bg-zinc-100 px-1.5 py-0.5 rounded">
                Package: ssot-tui v0.1.20.dev1
              </span>
              <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 bg-zinc-100 px-1.5 py-0.5 rounded">
                Framework: Textual (Python)
              </span>
            </div>

            <p className="text-sm text-zinc-600 leading-relaxed">
              Built using the robust Python-native <strong>Textual</strong> TUI library, <code className="font-mono text-xs bg-zinc-100 px-1 py-0.5 rounded text-zinc-900 font-semibold">ssot-tui</code> provides a read-first terminal browser and inspector. Reviewers and developers can safely explore nodes, validation flags, and proof chains without committing unexpected database mutations.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="font-sans text-xs font-bold text-zinc-950 uppercase tracking-wider">
                Documented Terminal Views (9 Core Views)
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-zinc-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>Browser Overview Dashboard</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>ADR Navigation Terminal</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>SPEC Feature Mappings</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>Live Schema Validation Status</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>Quick Search Command Palette</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>Keyboard Help Overlay</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>Interactive Detail Panel</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>CLI Bridge Preview</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4.5 flex gap-3">
              <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="block font-bold text-amber-950 text-xs">Read-Only Safety Boundaries</span>
                <p className="text-[11px] text-amber-800 leading-relaxed">
                  The terminal browser is strictly read-only and designed for review. It compiles and previews safe CLI queries on the fly so developers can audit schemas visually without accidentally altering registry signatures.
                </p>
              </div>
            </div>
          </div>

          {/* TUI Keybindings & Display Panel */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-xl border border-zinc-200 bg-white shadow-3xs overflow-hidden">
              <div className="bg-zinc-900 p-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Key className="h-3.5 w-3.5 text-zinc-400" />
                  <span className="font-mono text-xs font-semibold text-zinc-300">ssot-tui Keybindings Reference</span>
                </div>
                <span className="font-mono text-[9px] font-bold bg-zinc-800 text-zinc-400 border border-zinc-700 px-1.5 py-0.5 rounded">
                  Press ? for Help
                </span>
              </div>
              
              <div className="divide-y divide-zinc-100 max-h-[350px] overflow-y-auto portfolio-scrollbar">
                {tuiKeybindings.map((bind) => (
                  <div key={bind.keys} className="flex items-center justify-between p-3 text-xs">
                    <span className="font-mono font-bold text-zinc-900 bg-zinc-50 border border-zinc-200 px-2 py-0.5 rounded shadow-3xs">
                      {bind.keys}
                    </span>
                    <span className="text-zinc-600 text-right text-[11px] leading-snug">
                      {bind.action}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Integration (Actions & Codex) */}
      {activeTab === 'integration' && (
        <div className="space-y-8">
          {/* GitHub Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Workflow className="h-5 w-5 text-zinc-800" />
                <h3 className="font-sans text-base font-bold text-zinc-950">
                  GitHub Actions Integrations
                </h3>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Automate your release verification cycles directly inside your GitHub runners. Our official workflows synchronize release train version bumps and package distributions automatically.
              </p>
              <div className="space-y-3.5">
                {actionsWorkflows.map((flow) => (
                  <div key={flow.name} className="rounded-xl border border-zinc-200 bg-white p-4.5 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-sm font-bold text-zinc-900">{flow.name}</span>
                      <a
                        href={flow.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] font-mono text-zinc-500 hover:text-zinc-950 flex items-center gap-0.5 font-bold"
                      >
                        {flow.file}
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {flow.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Codex Plugins */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-zinc-800" />
                <h3 className="font-sans text-base font-bold text-zinc-950">
                  AI Codex & MCP Plugins
                </h3>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Connect your AI Coding Agents and model servers directly to SSOT Registry. Leverage fine-grained instructions and tool integration capabilities to operate with zero friction.
              </p>
              <div className="space-y-3.5">
                {codexPlugins.map((plugin) => (
                  <Link key={plugin.name} to={plugin.url} className="block rounded-xl border border-zinc-200 bg-white p-4.5 space-y-1.5 hover:border-zinc-300 hover:shadow-sm transition-all group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-sm font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">{plugin.name}</span>
                        <span className="font-mono text-[9px] font-bold text-zinc-500 bg-zinc-100 border border-zinc-200 px-1 py-0.5 rounded">
                          {plugin.skills}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 group-hover:text-blue-600 flex items-center gap-0.5 font-bold transition-colors">
                        Explore Plugin Source
                        <ArrowUpRight className="h-3 w-3" />
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {plugin.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
