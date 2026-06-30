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
[ssot-core] Found 0 existing ADRs, 0 Specs, 0 Features.
[ssot-cli] Success! Workspace initial state initialized. Run 'ssot validate .' to verify layout.`;
    }
    if (cmd.includes("pack sync")) {
      return `[ssot-pack-contracts] Inspecting 'seo-aeo-aieo-governance-pack' compatible versions...
[ssot-pack-contracts] Loading manifest... Found 12 standard SPECs, 10 standard ADRs.
[ssot-pack-contracts] Compatibility verified for python >=3.10,<3.15.
[ssot-pack-contracts] Preflight checks: 0 conflicts detected. Syncing to reserved ranges...
[ssot-core] Syncing files to .ssot/packs/seo-aeo-aieo/
[ssot-core] Writing synced nodes into '.ssot/registry.json' (origin: extension-pack, source_pack_id: 'seo-aeo-aieo').
[ssot-cli] Synchronization complete. 12 specifications and 10 decision records imported.`;
    }
    if (cmd.startsWith("ssot feature list")) {
      return `[ssot-core] Scanning .ssot/registry.json for active features...
┌─────────────┬────────────────────────────────────┬─────────────────────┬─────────────┐
│ Feature ID  │ Description                        │ SPEC Reference      │ Status      │
├─────────────┼────────────────────────────────────┼─────────────────────┼─────────────┤
│ FEAT-101    │ Semantic robots.txt validation     │ SPEC-SEO-01         │ Implemented │
│ FEAT-102    │ Multi-sitemap generation           │ SPEC-SEO-02         │ Implemented │
│ FEAT-103    │ LLMs-txt crawler discovery path    │ SPEC-AEO-01         │ Implemented │
│ FEAT-104    │ JSON-LD schema payload injection   │ SPEC-AiEO-01        │ Partial     │
└─────────────┴────────────────────────────────────┴─────────────────────┴─────────────┘
[ssot-cli] Total active features: 407 (367 Current, 29 Next, 9 Explicit, 2 Backlog).`;
    }
    if (cmd.includes("boundary freeze")) {
      return `[ssot-core] Preparing scope freeze against target ID: 'boundary-v1.0'
[ssot-core] Scanning active capability registrations...
[ssot-core] Freezing 407 features and 3 environment profiles.
[ssot-core] Saving immutable snapshot hash: sha256:7f83a218001bfa674c93
[ssot-core] Boundary snapshot recorded under .ssot/snapshots/boundary-v1.0.json
[ssot-cli] Success! Boundary locked. Features cannot be added or deleted without breaking release certification.`;
    }
    if (cmd.startsWith("ssot test run")) {
      return `[ssot-conformance] Initiating pytest-conformance validation hooks...
[ssot-conformance] Running 355 active test specs...
...................................................................... [ 20%]
...................................................................... [ 40%]
...................................................................... [ 60%]
...................................................................... [ 80%]
...................................................................... [100%]
[ssot-conformance] All 355 test runs PASSED. Emitting machine evidence.
[ssot-core] Writing 642 new evidence logs to .ssot/registry.json.`;
    }
    if (cmd.startsWith("ssot claim evaluate")) {
      return `[ssot-core] Evaluating claim trees against frozen boundary parameters...
[ssot-core] Claim Tiers Status Summary:
  - T0 (Features exist): 407 / 407 claims SATISFIED
  - T1 (Specs valid): 383 / 383 claims SATISFIED
  - T2 (Tests verified): 425 / 425 claims SATISFIED
  - T3 (Promotion proofs exists): 161 / 161 claims SATISFIED
[ssot-cli] Success! Proof chain integrity satisfies 100% of claims.`;
    }
    if (cmd.startsWith("ssot evidence verify")) {
      return `[ssot-core] Sweeping 642 evidence rows for cryptographical authenticity...
[ssot-core] Verifying test artifact hashes...
[ssot-core] Verifying signature file signatures...
[ssot-core] Conformance level: 100% authentic. 0 orphaned evidence records detected.
[ssot-cli] Integrity check: OK. Ready for release certification.`;
    }
    if (cmd.includes("release certify")) {
      return `[ssot-core] Reading frozen boundary state: 'boundary-v1.0'
[ssot-core] Asserting conformance criteria:
  - Check 1: All features registered? YES
  - Check 2: No scope drift? YES
  - Check 3: All T0-T2 claim nodes proven? YES
  - Check 4: Evidence rows authentic? YES
[ssot-core] Generating certification report...
[ssot-core] Attesting release candidate rel-1.0.0. Writing signature.
[ssot-cli] Success! Release certified. Report exported to .ssot/reports/certification-v1.0.json`;
    }
    if (cmd.includes("release promote")) {
      return `[ssot-core] Loading certified release candidate: rel-1.0.0
[ssot-core] Gating checks for target environment: 'production'...
[ssot-core] Verifying certification signatures: Valid signature from ReleaseManager.
[ssot-core] Synchronizing registry databases...
[ssot-cli] Promotion successful! Release state promoted to 'production'.`;
    }
    if (cmd.startsWith("ssot graph lineage")) {
      return `[ssot-views] Scanning registry for dependency pathways...
[ssot-views] Building layout tree linking 90 ADRs -> 99 Specs -> 407 Features -> 1376 Claims.
[ssot-views] Loading @ssot-registry/lineage-graph React payload bundle...
[ssot-views] Writing offline-ready standalone review file to: ./dist/lineage-report-rel-1.0.0.html
[ssot-cli] Export complete! Report is fully interactive and viewable in any browser offline.`;
    }
    if (cmd.includes("registry export")) {
      return `[ssot-views] Opening canonical database .ssot/registry.json...
[ssot-views] Exporting schema structure v0.8.0 to relational projection...
[ssot-views] Compiling SQL tables...
[ssot-views] Creating local database file: ./dist/registry-snapshot.sqlite
[ssot-cli] Export completed. 11 schema tables initialized inside SQL database successfully.`;
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
          Walk through the 4-stage release operator lifecycle. Select a phase, click commands to run them, and view real-time feedback.
        </p>
      </div>

      {/* Workflow Phase Selection tabs */}
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
        {/* Left Column: Flow Steps */}
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

        {/* Right Column: Terminal Panel */}
        <div className="lg:col-span-2 flex flex-col h-[340px] lg:h-auto min-h-[320px]">
          {/* Terminal Header */}
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

          {/* Terminal Body */}
          <div className="flex-1 overflow-y-auto bg-zinc-950 p-4 font-mono text-xs leading-relaxed text-zinc-300 whitespace-pre-wrap select-text rounded-b-lg scrollbar-thin scrollbar-thumb-zinc-800">
            {terminalOutput}
          </div>

          {/* Trigger button */}
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
