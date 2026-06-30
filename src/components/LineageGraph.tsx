import { useState } from 'react';
import { ArrowRight, HelpCircle, CheckCircle2, ShieldCheck, Play, Lock, FileText, Settings, Award } from 'lucide-react';

interface GraphNode {
  id: string;
  type: string;
  label: string;
  count: number;
  description: string;
  pithyAnswer: string;
  command: string;
  tier?: string;
  status?: string;
}

const NODES: GraphNode[] = [
  {
    id: "adr",
    type: "Decision",
    label: "ADR (90 Total)",
    count: 90,
    description: "Architectural Decision Records describing technical rationales. Can bessot-core, ssot-origin, repo-local, or extension-pack sourced.",
    pithyAnswer: "Why was this choice made? Keeps rationale close to source.",
    command: "ssot validate .",
  },
  {
    id: "spec",
    type: "Requirement",
    label: "SPEC (99 Total)",
    count: 99,
    description: "Normative contracts mapping system specifications to features.",
    pithyAnswer: "What must the system do? Links architectural principles to code rules.",
    command: "ssot spec sync .",
  },
  {
    id: "feature",
    type: "Capability",
    label: "Feature (407 Total)",
    count: 407,
    description: "Targetable capability units. 367 current, 29 next, 9 explicit, 2 backlog.",
    pithyAnswer: "What code capability is being built? The basic unit of delivery scope.",
    command: "ssot feature list .",
  },
  {
    id: "claim",
    type: "Assertion",
    label: "Claim (1,376 Total)",
    count: 1376,
    tier: "T1 (383 rows)",
    description: "Declarations stating capability postures across T0 (features), T1 (spec checks), T2 (evidence checks), and T3 (promotion checks).",
    pithyAnswer: "What must be proven true before release? Separates claim from evidence.",
    command: "ssot claim evaluate .",
  },
  {
    id: "test",
    type: "Verification",
    label: "Test (355 Total)",
    count: 355,
    description: "Executable cases registered in ssot-conformance plugin or manual procedures.",
    pithyAnswer: "How do we run the verification? Connects pytest results to claims.",
    command: "ssot conformance run",
  },
  {
    id: "evidence",
    type: "Proof",
    label: "Evidence (642 Total)",
    count: 642,
    description: "Immutable files, cryptographic hashes, or runlogs validating claim status.",
    pithyAnswer: "Where is the physical proof? Raw verification artifact mapping.",
    command: "ssot evidence verify .",
  },
  {
    id: "boundary",
    type: "Freeze",
    label: "Boundary (27 Total)",
    count: 27,
    status: "Frozen Scope",
    description: "An immutable boundary snapshot locking target features, preventing late-stage scope changes.",
    pithyAnswer: "Has our release scope drifted since code freeze? Freezes the evaluation baseline.",
    command: "ssot boundary freeze . --boundary-id <id>",
  },
  {
    id: "release",
    type: "Certification",
    label: "Release (20 Total)",
    count: 20,
    status: "Certified",
    description: "Validated attestation verifying features, claims, and evidence against the frozen boundary. 14 published, 3 certified, 1 candidate, 2 draft.",
    pithyAnswer: "Are we certified to ship? Generates derived release notes from authority.",
    command: "ssot release certify . --release-id <id>",
  }
];

export default function LineageGraph() {
  const [selectedNode, setSelectedNode] = useState<GraphNode>(NODES[0]);

  const getIcon = (id: string) => {
    switch (id) {
      case 'adr': return <FileText className="h-5 w-5 text-indigo-600" />;
      case 'spec': return <Settings className="h-5 w-5 text-sky-600" />;
      case 'feature': return <Play className="h-5 w-5 text-emerald-600" />;
      case 'claim': return <HelpCircle className="h-5 w-5 text-amber-600" />;
      case 'test': return <Play className="h-5 w-5 text-blue-600" />;
      case 'evidence': return <CheckCircle2 className="h-5 w-5 text-teal-600" />;
      case 'boundary': return <Lock className="h-5 w-5 text-violet-600" />;
      case 'release': return <Award className="h-5 w-5 text-rose-600" />;
      default: return <ShieldCheck className="h-5 w-5 text-zinc-600" />;
    }
  };

  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="font-sans text-lg font-bold text-zinc-900 flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-zinc-800" />
          Interactive Authority Lineage Graph Explorer
        </h3>
        <p className="text-sm text-zinc-500">
          Click on any node in the SSOT lineage trace to inspect its role, registry entity count, and CLI commands.
        </p>
      </div>

      {/* Graph Visual Flow */}
      <div className="my-8 overflow-x-auto pb-4">
        <div className="flex items-center min-w-[900px] justify-between px-2">
          {NODES.map((node, index) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <div key={node.id} className="flex items-center gap-2 flex-1">
                {/* Node Box */}
                <button
                  onClick={() => setSelectedNode(node)}
                  className={`relative flex flex-col items-start rounded-lg border p-4 text-left shadow-xs transition-all w-full cursor-pointer hover:scale-102 ${
                    isSelected
                      ? 'border-zinc-900 bg-zinc-900 text-white ring-2 ring-zinc-900 ring-offset-2'
                      : 'border-zinc-200 bg-white hover:border-zinc-400 text-zinc-900'
                  }`}
                >
                  <span className={`text-[10px] font-mono uppercase font-bold tracking-wider ${
                    isSelected ? 'text-zinc-400' : 'text-zinc-500'
                  }`}>
                    {node.type}
                  </span>
                  <div className="mt-1 flex items-center gap-1.5 font-bold text-sm tracking-tight">
                    {getIcon(node.id)}
                    {node.label.split(' ')[0]}
                  </div>
                  <span className={`mt-1 font-mono text-[10px] ${
                    isSelected ? 'text-zinc-300' : 'text-zinc-500'
                  }`}>
                    {node.count} Nodes
                  </span>
                </button>

                {/* Arrow */}
                {index < NODES.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-zinc-400 shrink-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Node Details Pane */}
      <div className="rounded-lg border border-zinc-200 bg-white p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100">
              {getIcon(selectedNode.id)}
            </span>
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Entity Model: {selectedNode.type}
              </span>
              <h4 className="font-sans text-base font-bold text-zinc-950">
                {selectedNode.label}
              </h4>
            </div>
          </div>
          {selectedNode.tier && (
            <span className="mt-2 md:mt-0 inline-flex items-center rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-800 ring-1 ring-inset ring-amber-600/20 font-mono">
              Tier: {selectedNode.tier}
            </span>
          )}
          {selectedNode.status && (
            <span className="mt-2 md:mt-0 inline-flex items-center rounded-md bg-zinc-900 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-zinc-700/50 font-mono">
              {selectedNode.status}
            </span>
          )}
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Block: Description */}
          <div>
            <h5 className="font-sans text-xs font-bold text-zinc-800 uppercase tracking-wider">
              Objective & Role
            </h5>
            <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
              {selectedNode.description}
            </p>
            <div className="mt-4 rounded-md bg-zinc-50 p-3 border-l-2 border-zinc-700">
              <span className="block font-mono text-[10px] uppercase font-bold text-zinc-500">
                Answering the Question:
              </span>
              <p className="text-sm font-medium text-zinc-800 italic mt-0.5">
                "{selectedNode.pithyAnswer}"
              </p>
            </div>
          </div>

          {/* Right Block: Command & Operation */}
          <div className="flex flex-col justify-between">
            <div>
              <h5 className="font-sans text-xs font-bold text-zinc-800 uppercase tracking-wider">
                Inspection & Automation API
              </h5>
              <p className="mt-1 text-xs text-zinc-500">
                Developers can interact with and query these nodes programmatically using standard terminal actions.
              </p>
              <div className="mt-3 rounded-md bg-zinc-950 p-3.5 font-mono text-xs text-zinc-200 shadow-inner">
                <span className="text-zinc-500 mr-2">$</span>
                <span className="text-emerald-400">{selectedNode.command}</span>
              </div>
            </div>

            <div className="mt-4 border-t border-zinc-100 pt-3 text-right">
              <span className="font-mono text-[10px] text-zinc-400">
                Verified database context: .ssot/registry.json (Schema v0.8.0)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
