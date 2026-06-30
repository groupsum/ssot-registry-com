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
      desc: "Register verification tests, evaluate tiered claims, and link evidence rows that own proof linkage back to claims."
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
      desc: "Export the full registry, sync derived statuses, repair document hashes, and render graph or lineage views."
    },
    {
      id: "packs-and-conformance",
      label: "Governance Packs",
      commands: ["ssot pack", "ssot conformance"],
      desc: "Inspect, preflight, and sync governance packs; discover, scaffold, run, and generate SSOT conformance cases."
    },
    {
      id: "automation",
      label: "Coordinate Automation",
      commands: ["ssot leases", "ssot worker", "ssot campaign", "ssot maturity", "ssot repo-watch"],
      desc: "Inspect campaign state, manage worker leases, select maturation slices, and scan the worktree for forbidden or out-of-lease edits."
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
      desc: "Runs package CI using the shared package workflow, installs workspace packages with uv, verifies packaged doc mirrors, compiles code, and runs tests.",
      url: "https://github.com/groupsum/ssot-registry/actions/workflows/ci.yml"
    },
    {
      name: "Prepare Release",
      file: "prepare-release.yml",
      desc: "Prepares release-train metadata before publication.",
      url: "https://github.com/groupsum/ssot-registry/actions/workflows/prepare-release.yml"
    },
    {
      name: "Release Execution",
      file: "release.yml",
      desc: "Builds selected Python distributions once, publishes packages in dependency layers, can publish the lineage graph npm package, and can create GitHub releases.",
      url: "https://github.com/groupsum/ssot-registry/actions/workflows/release.yml"
    }
  ];

  const codexPlugins = [
    {
      name: "SSOT CLI Codex Plugin",
      skills: "CLI workflow skills",
      desc: "Codex plugin `ssot-cli` operates repositories through a local uv environment using the PyPI-published SSOT CLI aliases.",
      url: "/plugin/ssot-cli-codex"
    },
    {
      name: "SSOT MCP Plugin",
      skills: "MCP campaign skills",
      desc: "Codex plugin `ssot-mcp` keeps pull-worker campaigns, lease-aware maturity work, and registry mutations on the MCP-governed rail.",
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
              The command rail operates the live SSOT registry model: initialization, validation, repo-local config, campaigns, leases, maturity slices, worker actions, ADRs, specs, features, profiles, tests, issues, packs, claims, conformance, evidence, risks, boundaries, releases, graphs, and registry exports.
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
                    <span className="text-zinc-500">$ ssot --version</span>
                    <button 
                      onClick={() => handleCopy("ssot --version")}
                      className="text-zinc-600 hover:text-zinc-300 transition-colors"
                      title="Copy command"
                    >
                      {copiedCmd === "ssot --version" ? (
                        <Check className="h-3 w-3 text-emerald-500" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </button>
                  </div>
                  <pre className="text-[11px] text-emerald-400 leading-normal mt-1">
{`ssot package versions:
ssot-cli 0.1.20.dev1
ssot-core 0.2.26.dev1
ssot-registry 0.2.26.dev1
ssot-tui 0.1.20.dev1`}
                  </pre>
                </div>

                <div className="border-t border-zinc-900 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">$ ssot graph lineage . --output-file lineage.html</span>
                    <button 
                      onClick={() => handleCopy("ssot graph lineage . --output-file lineage.html")}
                      className="text-zinc-600 hover:text-zinc-300 transition-colors"
                      title="Copy command"
                    >
                      {copiedCmd === "ssot graph lineage . --output-file lineage.html" ? (
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
                  The CLI does not replace your test runner or compiler. It records tests and evidence, evaluates claims, freezes boundaries, and certifies releases through explicit registry operations.
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
              Built with the Python <strong>Textual</strong> framework, <code className="font-mono text-xs bg-zinc-100 px-1 py-0.5 rounded text-zinc-900 font-semibold">ssot-tui</code> is a read-oriented terminal browser for current registry content. It depends on <code className="font-mono text-xs bg-zinc-100 px-1 py-0.5 rounded text-zinc-900 font-semibold">ssot-core</code>, <code className="font-mono text-xs bg-zinc-100 px-1 py-0.5 rounded text-zinc-900 font-semibold">ssot-contracts</code>, and Textual, and is exposed through the umbrella <code className="font-mono text-xs bg-zinc-100 px-1 py-0.5 rounded text-zinc-900 font-semibold">ssot-registry[tui]</code> extra.
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
                  The TUI is intentionally read-oriented and does not implement full CRUD parity with the CLI. Use `ssot-cli` for mutation workflows and `ssot-tui` for keyboard-first review.
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
