import React, { useState } from 'react';
import { 
  Terminal, CheckCircle, Code, Tag, ShieldCheck, FileText, 
  HelpCircle, MessageSquare, ArrowUpRight, Sparkles, History, 
  User, Clock, ChevronRight, BookOpen, AlertCircle
} from 'lucide-react';
import { CategoryType } from '../pages/RegistryBrowser';

interface RegistryItemDetailProps {
  activeItem: { id: string; category: CategoryType; label: string; data: any };
  setSelectedItemId: (id: string) => void;
}

export default function RegistryItemDetail({ activeItem, setSelectedItemId }: RegistryItemDetailProps) {
  // Local state for superseding proposal wizard (Closed CTA)
  const [wizardStep, setWizardStep] = useState<number>(0);
  const [supersedingTitle, setSupersedingTitle] = useState('');
  const [supersedingContext, setSupersedingContext] = useState('');
  const [showWizardFor, setShowWizardFor] = useState<string | null>(null);

  const startSupersedingWizard = () => {
    setShowWizardFor(activeItem.id);
    setWizardStep(1);
    setSupersedingTitle(`Superseding Decision for ${activeItem.id}`);
    setSupersedingContext(`This decision supersedes the legacy provisions of ${activeItem.id} due to updated cloud scalability requirements...`);
  };

  const isDraft = activeItem.data?.status === 'Draft' || activeItem.id === 'SPEC-004'; // Wait, allow specific id fallback too
  const isClosed = activeItem.data?.status === 'Approved' || activeItem.data?.status === 'Deprecated' || activeItem.id === 'SPEC-001' || activeItem.id === 'SPEC-002' || activeItem.id === 'SPEC-003';

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-xs space-y-6">
        
        {/* Node Header Info */}
        <div className="border-b border-zinc-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="inline-flex items-center rounded-md bg-zinc-100 px-1.5 py-0.5 text-[9px] font-bold font-mono text-zinc-500 uppercase tracking-wider border border-zinc-200/50">
                {activeItem.category}
              </span>
              <span className="text-[10px] font-mono text-zinc-400">/{activeItem.id}</span>
            </div>
            <h2 className="font-sans text-xl font-black text-zinc-950 leading-tight">
              {activeItem.category === 'metadata' ? 'Global Schema & Project Parameters' : activeItem.id}
            </h2>
          </div>
          <div className="shrink-0 flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 bg-zinc-50 border border-zinc-200/60 px-2 py-1 rounded shadow-3xs">
            <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
            Validated Conformance Node
          </div>
        </div>

        {/* --- DRAFT CTA (Enable Discussion on GitHub) --- */}
        {isDraft && (
          <div className="rounded-xl border border-sky-200 bg-sky-50/50 p-4 space-y-3 transition-all">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-sky-700 shrink-0">
                <Sparkles className="h-4.5 w-4.5" />
              </span>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-sky-950">Draft Standard Review & Discussion</h4>
                <p className="text-xs text-sky-800 leading-relaxed">
                  This schema node is currently in <strong>Draft</strong> status and has not been frozen. All feedback, collaborative peer review, and alignment discussions take place officially on our GitHub repository.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 pl-11">
              <a
                href="https://github.com/orgs/groupsum/discussions/new?category=general&title=%3C...%3E"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-sky-200 hover:border-sky-300 text-xs font-bold text-sky-700 hover:text-sky-800 shadow-2xs transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Discuss {activeItem.id} on GitHub Discussions</span>
                <ArrowUpRight className="h-3 w-3 opacity-60" />
              </a>
            </div>
          </div>
        )}

        {/* --- CLOSED CTA (Superseding Guide Wizard) --- */}
        {isClosed && (
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 space-y-3 transition-all">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-200 text-zinc-700 shrink-0">
                <History className="h-4.5 w-4.5" />
              </span>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-zinc-950">Active Decision & Gating (Locked Node)</h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  This node is <strong>Closed/Approved</strong>. It is cryptographically frozen into our active release matrix and represents standard release policy. To deprecate or alter this standard, you must submit a formal superseding ADR.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 pl-11">
              <button
                onClick={startSupersedingWizard}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-zinc-300 hover:border-zinc-400 text-xs font-bold text-zinc-700 hover:text-zinc-900 shadow-2xs cursor-pointer transition-colors"
              >
                <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />
                Propose Superseding Node
              </button>
            </div>

            {/* Interactive Wizard Modal/Section */}
            {showWizardFor === activeItem.id && (
              <div className="mt-4 pl-11 space-y-4 border-t border-zinc-200 pt-4">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                  <span className="text-[10px] font-mono font-bold text-zinc-800 uppercase tracking-wider">
                    Superseding Wizard (Step {wizardStep} of 3)
                  </span>
                  <button 
                    onClick={() => setShowWizardFor(null)}
                    className="text-zinc-400 hover:text-zinc-900 text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>

                {wizardStep === 1 && (
                  <div className="space-y-3">
                    <p className="text-xs text-zinc-600">
                      <strong>Step 1: Declare the Title</strong>. Give your new superseding decision a descriptive title indicating what is changing.
                    </p>
                    <input
                      type="text"
                      value={supersedingTitle}
                      onChange={(e) => setSupersedingTitle(e.target.value)}
                      className="block w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-xs text-zinc-800 focus:outline-none focus:border-zinc-500"
                    />
                    <div className="flex justify-end pt-1">
                      <button
                        onClick={() => setWizardStep(2)}
                        className="inline-flex h-8 items-center justify-center rounded-md bg-zinc-900 px-4 text-xs font-bold text-white shadow-3xs hover:bg-zinc-800 transition-colors cursor-pointer"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}

                {wizardStep === 2 && (
                  <div className="space-y-3">
                    <p className="text-xs text-zinc-600">
                      <strong>Step 2: Define Context & Justification</strong>. Explain why the legacy policy is no longer sufficient and why we must supersede it.
                    </p>
                    <textarea
                      value={supersedingContext}
                      onChange={(e) => setSupersedingContext(e.target.value)}
                      rows={3}
                      className="block w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-xs text-zinc-800 focus:outline-none focus:border-zinc-500"
                    />
                    <div className="flex justify-between pt-1">
                      <button
                        onClick={() => setWizardStep(1)}
                        className="text-xs font-semibold text-zinc-600 hover:text-zinc-900"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setWizardStep(3)}
                        className="inline-flex h-8 items-center justify-center rounded-md bg-zinc-900 px-4 text-xs font-bold text-white shadow-3xs hover:bg-zinc-800 transition-colors cursor-pointer"
                      >
                        Generate Node JSON
                      </button>
                    </div>
                  </div>
                )}

                {wizardStep === 3 && (
                  <div className="space-y-3">
                    <p className="text-xs text-zinc-600">
                      <strong>Step 3: Copy and append to .ssot/registry.json</strong>. Your superseding draft code template is generated below. Add it to your workspace and run <code className="font-mono text-xs bg-zinc-100 p-0.5 rounded text-zinc-800 font-semibold">ssot validate</code> to test.
                    </p>
                    
                    <div className="rounded-lg bg-zinc-950 p-3 font-mono text-[10px] text-emerald-400 overflow-x-auto max-h-[160px] scrollbar-thin border border-zinc-900">
                      <pre>{JSON.stringify({
                        id: activeItem.category === 'adrs' ? `ADR-00${Number(activeItem.id.split('-')[1]) + 2}` : `SPEC-00${Number(activeItem.id.split('-')[1]) + 2}`,
                        title: supersedingTitle,
                        status: "Draft",
                        parentAdrId: activeItem.category === 'specifications' ? activeItem.data.parentAdrId : undefined,
                        supersedes: activeItem.id,
                        context: supersedingContext,
                        decision: "We will adopt the newer, robust compliance gating system...",
                        consequences: "Legacy criteria are deprecated immediately upon approval."
                      }, null, 2)}</pre>
                    </div>

                    <div className="flex justify-between pt-1">
                      <button
                        onClick={() => setWizardStep(2)}
                        className="text-xs font-semibold text-zinc-600 hover:text-zinc-900"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setShowWizardFor(null)}
                        className="inline-flex h-8 items-center justify-center rounded-md bg-zinc-900 px-4 text-xs font-bold text-white shadow-3xs hover:bg-zinc-800 transition-colors cursor-pointer"
                      >
                        Done & Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Dynamic Schema Object Details Renderer */}
        <div className="space-y-6">
          {activeItem.category === 'metadata' && (
            /* Metadata Details */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Project Name</span>
                  <p className="text-sm font-semibold text-zinc-800">{activeItem.data.projectName}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Project Version</span>
                  <p className="text-sm font-mono font-bold text-zinc-700">v{activeItem.data.version}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">SSOT Schema Version</span>
                  <p className="text-sm font-mono text-zinc-700">{activeItem.data.schemaVersion}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Repository Origin URL</span>
                  <a href={activeItem.data.repositoryUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-zinc-900 underline flex items-center gap-1">
                    {activeItem.data.repositoryUrl}
                  </a>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Target Release Gate</span>
                  <p className="text-sm font-semibold text-zinc-800 font-mono">{activeItem.data.targetRelease}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Updated Timestamp</span>
                  <p className="text-xs text-zinc-500 font-mono">{activeItem.data.updatedAt}</p>
                </div>
              </div>
            </div>
          )}

          {activeItem.category === 'adrs' && (
            /* ADR Details */
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Decision Title</span>
                  <span className="font-semibold text-zinc-800 text-sm">{activeItem.data.title}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Status</span>
                  <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-bold ring-1 ring-inset ${
                    activeItem.data.status === 'Draft' 
                      ? 'bg-sky-50 text-sky-700 ring-sky-600/20' 
                      : activeItem.data.status === 'Deprecated'
                      ? 'bg-amber-50 text-amber-700 ring-amber-600/20'
                      : 'bg-emerald-50 text-emerald-700 ring-emerald-600/20'
                  }`}>{activeItem.data.status}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Author</span>
                  <span className="text-zinc-600">{activeItem.data.author}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Origin Classification</span>
                  <span className="bg-zinc-100 border border-zinc-200 text-zinc-700 px-1.5 py-0.5 rounded font-mono font-bold text-[10px]">{activeItem.data.origin}</span>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-zinc-100">
                <div>
                  <h4 className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1.5">Context & Background</h4>
                  <div className="rounded-lg bg-zinc-50/50 p-4 border border-zinc-100">
                    <p className="text-xs text-zinc-600 leading-relaxed font-semibold">{activeItem.data.context}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1.5">Technical Decision</h4>
                  <div className="rounded-lg bg-zinc-50/50 p-4 border border-zinc-100">
                    <p className="text-xs text-zinc-800 leading-relaxed font-bold">{activeItem.data.decision}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1.5">Architecture Consequences</h4>
                  <div className="rounded-lg bg-zinc-50/50 p-4 border border-zinc-100">
                    <p className="text-xs text-zinc-600 leading-relaxed font-semibold">{activeItem.data.consequences}</p>
                  </div>
                </div>

                {activeItem.data.body && (
                  <div>
                    <h4 className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1.5">Canonical ADR Body</h4>
                    <div className="rounded-lg bg-zinc-950 p-4 border border-zinc-900 max-h-[360px] overflow-y-auto scrollbar-thin">
                      <pre className="whitespace-pre-wrap text-xs text-zinc-200 leading-relaxed font-mono">{activeItem.data.body}</pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeItem.category === 'specifications' && (
            /* Specification Details */
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Specification Name</span>
                  <span className="text-sm font-semibold text-zinc-800">{activeItem.data.title}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block font-mono">Parent ADR Link</span>
                  {/* BEAUTIFULLY STYLIZED PARENT LINK BADGE */}
                  <div className="mt-1">
                    <button
                      onClick={() => setSelectedItemId(activeItem.data.parentAdrId)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/60 rounded-md shadow-3xs cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Terminal className="h-3.5 w-3.5 stroke-[2.5]" />
                      <span>{activeItem.data.parentAdrId}</span>
                      <ChevronRight className="h-3 w-3 text-indigo-400" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-zinc-100">
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Normative Contract Rule</span>
                  <div className="bg-zinc-50 p-3.5 rounded-lg border border-zinc-150 font-mono text-[11px] text-zinc-700">
                    {activeItem.data.ruleDefinition}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Verification Command/Source</span>
                  <div className="bg-zinc-950 p-3 rounded-lg font-mono text-[11px] text-emerald-400">
                    <span className="text-zinc-500 mr-2">$</span>
                    {activeItem.data.verificationSource}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Contract Description</span>
                  <p className="text-xs text-zinc-600 leading-relaxed">{activeItem.data.description}</p>
                </div>
                {activeItem.data.body && (
                  <div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Canonical SPEC Body</span>
                    <div className="bg-zinc-950 p-4 rounded-lg font-mono text-[11px] text-zinc-200 overflow-y-auto max-h-[360px] scrollbar-thin">
                      <pre className="whitespace-pre-wrap">{activeItem.data.body}</pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeItem.category === 'features' && (
            /* Feature Details */
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Feature Unit Name</span>
                  <span className="text-sm font-semibold text-zinc-800">{activeItem.data.name}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Code Ownership</span>
                  <span className="text-xs text-zinc-600">{activeItem.data.owner}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Delivery Status</span>
                  <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">{activeItem.data.status}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100 space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Functional Description</span>
                  <p className="text-xs text-zinc-600 leading-relaxed">{activeItem.data.description}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Contract Alignment (SPEC)</span>
                  {/* BEAUTIFULLY STYLIZED PARENT LINK BADGE */}
                  <div className="mt-1">
                    <button
                      onClick={() => setSelectedItemId(activeItem.data.specId)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold text-violet-700 bg-violet-50 hover:bg-violet-100 border border-violet-200/60 rounded-md shadow-3xs cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Code className="h-3.5 w-3.5 stroke-[2.5]" />
                      <span>{activeItem.data.specId}</span>
                      <ChevronRight className="h-3 w-3 text-violet-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeItem.category === 'claims' && (
            /* Claim Details */
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Governance Assertion statement</span>
                <p className="text-sm font-bold text-zinc-800 leading-relaxed">
                  &ldquo;{activeItem.data.statement}&rdquo;
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-zinc-100">
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Target Posture Tier</span>
                  <span className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-mono font-bold text-zinc-800 mt-1 ring-1 ring-inset ring-zinc-500/10">
                    {activeItem.data.targetPosture}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Mapped Feature ID</span>
                  {/* BEAUTIFULLY STYLIZED PARENT LINK BADGE */}
                  <div className="mt-1">
                    <button
                      onClick={() => setSelectedItemId(activeItem.data.featureId)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/60 rounded-md shadow-3xs cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Tag className="h-3.5 w-3.5 stroke-[2.5]" />
                      <span>{activeItem.data.featureId}</span>
                      <ChevronRight className="h-3 w-3 text-emerald-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeItem.category === 'tests' && (
            /* Test Details */
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Verification Test Name</span>
                  <span className="text-xs font-bold text-zinc-800 leading-relaxed block">{activeItem.data.name}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Execution Type</span>
                  <span className="bg-zinc-100 border border-zinc-100 px-2 py-0.5 rounded font-mono text-[10px] font-semibold text-zinc-700 block w-max mt-1">{activeItem.data.type}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Claim Mapping ID</span>
                  {/* BEAUTIFULLY STYLIZED PARENT LINK BADGE */}
                  <div className="mt-1">
                    <button
                      onClick={() => setSelectedItemId(activeItem.data.claimId)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200/60 rounded-md shadow-3xs cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <ShieldCheck className="h-3.5 w-3.5 stroke-[2.5]" />
                      <span>{activeItem.data.claimId}</span>
                      <ChevronRight className="h-3 w-3 text-amber-400" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1.5">Runner Executable Shell Target</span>
                <div className="bg-zinc-950 p-3.5 rounded-lg font-mono text-xs text-emerald-400 flex items-center justify-between">
                  <div>
                    <span className="text-zinc-500 mr-2">$</span>
                    <span>{activeItem.data.command}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeItem.category === 'evidence' && (
            /* Evidence Details */
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Outcome Verification</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 ring-1 ring-inset ring-emerald-600/20 mt-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {activeItem.data.outcome}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Verifier Entity</span>
                  <span className="text-xs text-zinc-600 block mt-1">{activeItem.data.verifier}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Linked Test ID</span>
                  {/* BEAUTIFULLY STYLIZED PARENT LINK BADGE */}
                  <div className="mt-1">
                    <button
                      onClick={() => setSelectedItemId(activeItem.data.testId)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200/60 rounded-md shadow-3xs cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Code className="h-3.5 w-3.5 stroke-[2.5]" />
                      <span>{activeItem.data.testId}</span>
                      <ChevronRight className="h-3 w-3 text-sky-400" />
                    </button>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Verification Timestamp</span>
                  <span className="text-[11px] text-zinc-400 font-mono block mt-1.5">{activeItem.data.timestamp}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">Cryptographic Execution Log Snippet</span>
                <div className="bg-zinc-950 p-4 rounded-lg font-mono text-[11px] text-zinc-300 overflow-x-auto border border-zinc-900 leading-relaxed scrollbar-thin">
                  <pre>{activeItem.data.logSnippet}</pre>
                </div>
              </div>
            </div>
          )}

          {activeItem.category !== 'metadata' && (
            <div className="pt-4 border-t border-zinc-100">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">Source Registry Row</span>
              <div className="bg-zinc-950 p-4 rounded-lg font-mono text-[11px] text-emerald-400 overflow-x-auto max-h-[320px] scrollbar-thin border border-zinc-900">
                <pre>{JSON.stringify(activeItem.data, null, 2)}</pre>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
