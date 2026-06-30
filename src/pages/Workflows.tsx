import { Link } from 'react-router-dom';
import { GitBranch, Shield, Lock, Award, Play, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';
import { WORKFLOWS } from '../data/corpus';
import WorkflowSimulator from '../components/WorkflowSimulator';

export default function Workflows() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="border-b border-zinc-200 pb-5">
        <h1 className="font-sans text-3xl font-black tracking-tight text-zinc-950 flex items-center gap-2">
          <GitBranch className="h-8 w-8 text-zinc-800" />
          Release Governance Workflows
        </h1>
        <p className="mt-2 text-sm text-zinc-500 leading-relaxed max-w-3xl">
          An end-to-end walkthrough of the four primary operator paths that govern a repository from architectural decisions down to certified releases.
        </p>
      </div>

      {/* Workflow Phase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Phase 1 */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-3xs space-y-4">
          <div className="flex items-center gap-2 text-zinc-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 font-mono text-xs font-bold text-zinc-800">
              01
            </span>
            <h3 className="font-sans text-lg font-bold tracking-tight">
              Establish Decision & Scope Authority
            </h3>
          </div>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Every software product begins with decisions and constraints. Under SSOT, we synchronize decisions (ADRs) and requirements (SPECs) as machine-readable nodes. This maps requirements to the feature scope.
          </p>
          <div className="rounded-lg bg-zinc-50 p-4 font-mono text-xs space-y-2">
            <span className="block text-[10px] uppercase font-bold text-zinc-400">Commands to Run:</span>
            <div className="text-zinc-800">$ ssot init .</div>
            <div className="text-zinc-800">$ ssot pack preflight . seo-aeo-aieo-governance-pack</div>
            <div className="text-zinc-800">$ ssot pack sync . seo-aeo-aieo-governance-pack --trust --yes</div>
            <p className="text-[10px] text-zinc-500 mt-1 leading-normal">
              # Initializes workspace, checks pack compatibility, and syncs governed documents into the registry.
            </p>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-3xs space-y-4">
          <div className="flex items-center gap-2 text-zinc-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 font-mono text-xs font-bold text-zinc-800">
              02
            </span>
            <h3 className="font-sans text-lg font-bold tracking-tight">
              Target and Freeze Boundaries
            </h3>
          </div>
          <p className="text-sm text-zinc-600 leading-relaxed">
            To prevent late-stage scope drift, operators declare a Boundary Freeze. This locks the active list of feature requirements. If developers attempt to inject late-stage commits, validation fails in CI.
          </p>
          <div className="rounded-lg bg-zinc-50 p-4 font-mono text-xs space-y-2">
            <span className="block text-[10px] uppercase font-bold text-zinc-400">Commands to Run:</span>
            <div className="text-zinc-800">$ ssot boundary freeze . --boundary-id bnd:all-t2-to-t3-2026-06-07</div>
            <p className="text-[10px] text-zinc-500 mt-1 leading-normal">
              # Locks active capability items, saving an immutable snapshot signature in the local tree.
            </p>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-3xs space-y-4">
          <div className="flex items-center gap-2 text-zinc-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 font-mono text-xs font-bold text-zinc-800">
              03
            </span>
            <h3 className="font-sans text-lg font-bold tracking-tight">
              Evaluate Proof & Certify Release
            </h3>
          </div>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Claims say what must be true, while evidence owns the proof links to claims and producer links to tests. Release certification checks that required claims are satisfied for the frozen boundary.
          </p>
          <div className="rounded-lg bg-zinc-50 p-4 font-mono text-xs space-y-2">
            <span className="block text-[10px] uppercase font-bold text-zinc-400">Commands to Run:</span>
            <div className="text-zinc-800">$ ssot conformance run .</div>
            <div className="text-zinc-800">$ ssot claim evaluate .</div>
            <div className="text-zinc-800">$ ssot release certify . --release-id rel:all-t2-to-t3-2026-06-07</div>
            <p className="text-[10px] text-zinc-500 mt-1 leading-normal">
              # Runs verification, evaluates tiered claims, and certifies release readiness.
            </p>
          </div>
        </div>

        {/* Phase 4 */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-3xs space-y-4">
          <div className="flex items-center gap-2 text-zinc-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 font-mono text-xs font-bold text-zinc-800">
              04
            </span>
            <h3 className="font-sans text-lg font-bold tracking-tight">
              Promote & Publish Authority
            </h3>
          </div>
          <p className="text-sm text-zinc-600 leading-relaxed">
            The final stage promotes certified releases and exports lineage diagrams or registry projections for review.
          </p>
          <div className="rounded-lg bg-zinc-50 p-4 font-mono text-xs space-y-2">
            <span className="block text-[10px] uppercase font-bold text-zinc-400">Commands to Run:</span>
            <div className="text-zinc-800">$ ssot release promote . --release-id rel:all-t2-to-t3-2026-06-07</div>
            <div className="text-zinc-800">$ ssot graph lineage . --output-file lineage.html</div>
            <p className="text-[10px] text-zinc-500 mt-1 leading-normal">
              # Advances release state and compiles interactive, offline-ready trace reports.
            </p>
          </div>
        </div>

      </div>

      {/* Interactive Release Workflow Simulator */}
      <div className="border-t border-zinc-100 pt-8">
        <WorkflowSimulator />
      </div>

      {/* Explanatory Deep Dive Banner */}
      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
        <h3 className="font-sans text-lg font-bold text-zinc-900 mb-2">
          Operator Command Trace Guidelines
        </h3>
        <p className="text-sm text-zinc-600 leading-relaxed mb-4">
          To safely automate these workflows inside GitHub Actions, GitLab CI, or local shell profiles, ensure that your pipeline installs <code className="font-mono text-xs bg-zinc-200 px-1 py-0.5 rounded font-semibold text-zinc-900">ssot-cli</code>. Every command returns standard error exit codes (e.g., non-zero on validation leaks), allowing your runner to fail closed.
        </p>
        <div className="flex items-center gap-4">
          <Link
            to="/registry-browser"
            className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 text-xs font-bold text-white shadow-3xs hover:bg-zinc-800 transition-colors"
          >
            Browse CLI Reference Matrix
          </Link>
          <Link
            to="/packages"
            className="text-xs font-semibold text-zinc-800 hover:text-zinc-950 flex items-center gap-1"
          >
            View Package requirements
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
