import { useState } from 'react';
import { Play, Copy, Check, Terminal as TermIcon, RotateCcw } from 'lucide-react';
import { WORKFLOWS } from '../data/corpus';

export default function WorkflowSimulator() {
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState<number>(0);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [terminalOutput, setTerminalOutput] = useState<string>(
    "SSOT Registry operator console. Select a workflow tab above to begin the simulation."
  );
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const activeWorkflow = WORKFLOWS[activeWorkflowIndex];
  const activeStep = activeWorkflow.steps[activeStepIndex] || activeWorkflow.steps[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 1500);
  };

  const getTerminalOutputForCommand = (cmd: string): string => {
    if (!cmd) {
      return "[ssot-cli] Error: Command is empty or undefined.";
    }
    if (cmd.startsWith("ssot init")) {
      return `[ssot-cli] Initializing fresh SSOT workspace...
[ssot-core] Creating local path directory: .ssot/
[ssot-core] Writing bootstrap template schema v0.8.0 to .ssot/registry.json
[ssot-cli] Success. Run 'ssot validate .' to verify layout.`;
    }
    if (cmd.includes("pack preflight")) {
      return `[ssot-pack-contracts] Inspecting seo-aeo-aieo-governance-pack manifest...
[ssot-pack-contracts] Validating reserved ADR/SPEC ranges and source metadata.
[ssot-cli] Preflight complete: no blocking conflicts detected.`;
    }
    if (cmd.includes("pack sync")) {
      return `[ssot-pack-contracts] Syncing seo-aeo-aieo-governance-pack...
[ssot-core] Preserving source_pack_id, source_package_name, and downstream origin metadata.
[ssot-cli] Synchronization complete. Run 'ssot validate .' before committing registry changes.`;
    }
    if (cmd.startsWith("ssot feature list")) {
      return `[ssot-core] Scanning .ssot/registry.json for active features...
ID                                            Status       Claims  Tests
feat:ssot-boundary-freeze-command            current      linked  linked
feat:claim-tier-gates.t4-external-validation current      linked  linked
feat:ssot-pack-sync-source-metadata           current      linked  linked
feat:ssot-graph-lineage-export                current      linked  linked
[ssot-cli] Totals: 408 features, 1380 claims, 359 tests, 645 evidence rows.`;
    }
    if (cmd.includes("boundary freeze")) {
      return `[ssot-core] Loading delivery boundary bnd:all-t2-to-t3-2026-06-07.
[ssot-core] Resolving boundary feature/profile membership from .ssot/registry.json.
[ssot-core] Freezing scope so certification uses a stable target set.
[ssot-cli] Boundary freeze complete.`;
    }
    if (cmd.startsWith("ssot conformance run")) {
      return `[ssot-conformance] Discovering conformance suites from registry-linked tests...
[ssot-conformance] Running registered project verification commands...
...................................................................... [ 20%]
...................................................................... [ 40%]
...................................................................... [ 60%]
...................................................................... [ 80%]
...................................................................... [100%]
[ssot-conformance] Completed repeatable project-controlled verification.
[ssot-core] Evidence remains evidence-owned through evidence.claim_ids and evidence.test_ids.`;
    }
    if (cmd.startsWith("ssot claim evaluate")) {
      return `[ssot-core] Evaluating claim trees against current registry state...
[ssot-core] Claim tier summary:
  - T0 Declared / Inventory: 408 claims
  - T1 Project Verified: 384 claims
  - T2 Robustly Project Verified: 426 claims
  - T3 Release Certified: 162 claims
  - T4 Externally Certified: 0 active claims
[ssot-cli] Claim evaluation complete.`;
    }
    if (cmd.startsWith("ssot evidence list")) {
      return `[ssot-core] Reading evidence rows from .ssot/registry.json...
[ssot-core] Evidence rows: 645
[ssot-core] Tier distribution: T0=7, T1=360, T2=115, T3=163
[ssot-cli] Evidence listing complete.`;
    }
    if (cmd.includes("release certify")) {
      return `[ssot-core] Reading frozen boundary state from the release record.
[ssot-core] Asserting release certification criteria:
  - Check 1: All features registered? YES
  - Check 2: No scope drift? YES
  - Check 3: Required claims are satisfied by linked evidence? YES
  - Check 4: Release transition is valid? YES
[ssot-cli] Release certification command completed.`;
    }
    if (cmd.includes("release promote")) {
      return `[ssot-core] Loading certified release record.
[ssot-core] Validating release state transition before promotion.
[ssot-cli] Release promotion command completed.`;
    }
    if (cmd.startsWith("ssot graph lineage")) {
      return `[ssot-views] Scanning registry for dependency pathways...
[ssot-views] Building layout tree across 90 ADRs, 99 Specs, 408 Features, 1380 Claims, 359 Tests, and 645 Evidence rows.
[ssot-views] Writing offline-ready standalone review file to: lineage.html
[ssot-cli] Export complete.`;
    }
    if (cmd.includes("registry export")) {
      return `[ssot-views] Opening canonical database .ssot/registry.json...
[ssot-views] Exporting schema structure v0.8.0 as JSON.
[ssot-cli] Export completed.`;
    }
    return `[ssot-cli] Executing: ${cmd}...\nDone.`;
  };

  const executeCommand = (cmd: string) => {
    if (!cmd) return;
    setTerminalOutput(`$ ${cmd}\n...executing...`);
    setTimeout(() => {
      setTerminalOutput(`$ ${cmd}\n${getTerminalOutputForCommand(cmd)}`);
    }, 400);
  };

  const handleRunCommand = () => {
    const cmd = activeStep?.cmd || '';
    executeCommand(cmd);
  };

  const selectWorkflow = (index: number) => {
    setActiveWorkflowIndex(index);
    setActiveStepIndex(0);
    const cmd = WORKFLOWS[index]?.steps?.[0]?.cmd || '';
    setTerminalOutput(`$ ${cmd}\n[Ready] Press 'Execute' or the Play button to run this command.`);
  };

  const selectStep = (index: number) => {
    setActiveStepIndex(index);
    const step = activeWorkflow?.steps?.[index] || WORKFLOWS[activeWorkflowIndex].steps[index];
    const cmd = step?.cmd || '';
    setTerminalOutput(`$ ${cmd}\n[Ready] Press 'Execute' or the Play button to run this command.`);
  };

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-xs">
      <div className="mb-4">
        <h3 className="font-sans text-lg font-bold text-zinc-900 flex items-center gap-2">
          <TermIcon className="h-5 w-5 text-zinc-800" />
          Interactive Release Workflow Simulator
        </h3>
        <p className="text-sm text-zinc-500">
          Walk through the release operator lifecycle with current SSOT Registry commands and registry counts.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-4 border-b border-zinc-100 pb-4">
        {WORKFLOWS.map((wf, idx) => (
          <button
            key={wf.id}
            onClick={() => selectWorkflow(idx)}
            className={`px-3 py-2 text-xs font-semibold rounded-md border text-left transition-colors cursor-pointer ${
              activeWorkflowIndex === idx
                ? 'bg-zinc-900 border-zinc-900 text-white shadow-xs'
                : 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-zinc-100'
            }`}
          >
            {wf.title.split('. ')[1]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-3">
          <div className="rounded-lg bg-zinc-50 p-4 border border-zinc-100">
            <h4 className="font-sans text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
              Active Phase
            </h4>
            <p className="text-sm font-semibold text-zinc-900">{activeWorkflow.title.split('. ')[1] || activeWorkflow.title}</p>
            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{activeWorkflow.desc}</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-sans text-xs font-bold text-zinc-700 uppercase tracking-wider">
              Step Execution List
            </h4>
            {activeWorkflow.steps.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => selectStep(idx)}
                  className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'border-zinc-800 bg-zinc-50/70 ring-1 ring-zinc-800'
                      : 'border-zinc-200 hover:border-zinc-400 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase font-bold text-zinc-500">
                      Step {idx + 1}
                    </span>
                    {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 animate-ping" />}
                  </div>
                  <p className="font-mono text-xs font-semibold text-zinc-900 mt-1 break-all">
                    {step.cmd}
                  </p>
                  <p className="text-xs text-zinc-500 mt-0.5">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col h-[340px] lg:h-auto min-h-[320px]">
          <div className="flex items-center justify-between rounded-t-lg bg-zinc-900 px-4 py-2 text-zinc-400 border-b border-zinc-800 shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span className="ml-2 font-mono text-xs font-semibold text-zinc-300">
                operator@ssot-registry-cli:~
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleCopy(activeStep.cmd)}
                className="hover:text-white transition-colors"
                title="Copy Command"
              >
                {copiedText === activeStep.cmd ? (
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
              <button
                onClick={handleRunCommand}
                className="hover:text-emerald-400 transition-colors"
                title="Re-run Command"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto bg-zinc-950 p-4 font-mono text-xs leading-relaxed text-zinc-300 whitespace-pre-wrap select-text rounded-b-lg scrollbar-thin scrollbar-thumb-zinc-800">
            {terminalOutput}
          </div>

          <div className="mt-3 flex gap-2 justify-end shrink-0">
            <button
              onClick={handleRunCommand}
              className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-zinc-800 cursor-pointer"
            >
              <Play className="h-3.5 w-3.5 fill-white" />
              Execute Step {activeStepIndex + 1} Output
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
