import { Award, ShieldCheck, FileCheck, KeyRound, CheckCircle2, ChevronRight, FileBadge } from 'lucide-react';
import { useMdwrkJsonLd } from '../components/MdwrkMarkdownRenderer';

export default function ProofModel() {
  const claimTiers = [
    {
      id: "T0",
      label: "Tier 0: Declared",
      count: "407 claims",
      desc: "Static validation checking that features are registered under valid keys in the registry. Capability is merely declared.",
      icon: <FileCheck className="h-5 w-5 text-zinc-400" />
    },
    {
      id: "T1",
      label: "Tier 1: Verified",
      count: "383 claims",
      desc: "Ensures that all features are mapped directly back to active normative requirement documents and specifications.",
      icon: <CheckCircle2 className="h-5 w-5 text-blue-500" />
    },
    {
      id: "T2",
      label: "Tier 2: Robust",
      count: "425 claims",
      desc: "Requires that associated claims are backed by executable conformance specs and have produced positive test logs.",
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />
    },
    {
      id: "T3",
      label: "Tier 3: Certified",
      count: "161 claims",
      desc: "Validates that immutable evidence row hashes match cryptographic keys and contain promotion signatures.",
      icon: <KeyRound className="h-5 w-5 text-amber-500" />
    },
    {
      id: "T4",
      label: "Tier 4: Attested",
      count: "12 claims",
      desc: "Independently audited and hardware-attested cryptographic guarantees, providing absolute non-repudiation.",
      icon: <FileBadge className="h-5 w-5 text-purple-500" />
    }
  ];

  useMdwrkJsonLd({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "The Software Assurance Proof Model",
    "description": "Explore how SSOT links assertions directly to physical logs with 5 tiers of conformance.",
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="border-b border-zinc-200 pb-8 text-center max-w-3xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-zinc-100 rounded-2xl ring-1 ring-zinc-200 shadow-sm">
            <Award className="h-10 w-10 text-zinc-900" />
          </div>
        </div>
        <h1 className="font-sans text-4xl font-black tracking-tight text-zinc-950">
          The Software Assurance Proof Model
        </h1>
        <p className="mt-4 text-base text-zinc-500 leading-relaxed">
          Claims say what should be true. Tests verify behavior. Evidence records the artifact that supports the claim. Explore how SSOT links assertions directly to physical logs.
        </p>
      </div>

      {/* Concept layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="font-sans text-2xl font-bold text-zinc-900 tracking-tight">
            Claims Should Not Stand Alone
          </h2>
          <div className="space-y-4 text-zinc-600 leading-relaxed">
            <p>
              In standard compliance pipelines, teams provide a checklist or PDF document claiming that software features have been tested and approved. However, these documents are detached from the actual codebase.
            </p>
            <p>
              SSOT Registry solves this through <strong>Proof Chains</strong>. A <strong>Claim</strong> node is registered, declaring a security or functional posture. This claim lists target <strong>Test</strong> references. Finally, executing tests generates cryptographic <strong>Evidence</strong> containing verification logs and compiler signatures.
            </p>
          </div>
          <div className="rounded-xl bg-zinc-900 shadow-lg p-5 mt-6 border border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                Verifying Proof Chain Integrity
              </span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
            </div>
            <div className="font-mono text-sm text-zinc-300">
              <span className="text-emerald-400">$ </span>
              <span className="text-zinc-100">ssot claim evaluate .</span>
              <p className="text-zinc-500 text-xs mt-3 border-t border-zinc-800 pt-3">
                # Checks if all registered claims are backed by authentic evidence.
              </p>
            </div>
          </div>
        </div>

        {/* Visual node layout */}
        <div className="lg:col-span-6">
          <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 shadow-sm">
            <h3 className="font-sans text-sm font-bold text-zinc-900 uppercase tracking-widest border-b border-zinc-200 pb-4 mb-6">
              Anatomy of a Proof Node Trace
            </h3>
            <div className="space-y-6">
              <div className="relative flex items-start gap-4">
                <div className="absolute top-8 left-3.5 bottom-[-24px] w-px bg-zinc-300"></div>
                <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white border border-zinc-300 text-zinc-900 font-mono text-xs font-bold shadow-sm">1</span>
                <div>
                  <span className="block font-mono text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Claim Level</span>
                  <span className="block text-sm font-semibold text-zinc-900 mt-1">"Robots.txt is secure and valid"</span>
                  <p className="text-xs text-zinc-500 mt-1">Declares the expected posture.</p>
                </div>
              </div>
              <div className="relative flex items-start gap-4">
                <div className="absolute top-8 left-3.5 bottom-[-24px] w-px bg-zinc-300"></div>
                <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white border border-zinc-300 text-zinc-900 font-mono text-xs font-bold shadow-sm">2</span>
                <div>
                  <span className="block font-mono text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Test Node</span>
                  <span className="block text-sm font-semibold text-zinc-900 mt-1">pytest-seo-conformance suite</span>
                  <p className="text-xs text-zinc-500 mt-1">Executes the required logic.</p>
                </div>
              </div>
              <div className="relative flex items-start gap-4">
                <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white font-mono text-xs font-bold shadow-sm">3</span>
                <div>
                  <span className="block font-mono text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Evidence Row</span>
                  <span className="block text-sm font-mono font-medium text-zinc-800 mt-1">sha256:7f28...<span className="text-zinc-400"> (verification output)</span></span>
                  <p className="text-xs text-zinc-500 mt-1">Cryptographic proof of test execution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verification Tiers Grid */}
      <div className="pt-10 border-t border-zinc-200">
        <div className="text-center mb-10">
          <h2 className="font-sans text-2xl font-bold text-zinc-900 tracking-tight">
            The Five Conformance Tiers (T0 - T4)
          </h2>
          <p className="mt-2 text-zinc-500 text-sm">Assurance language ceilings enforce honesty based on the highest tier achieved.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {claimTiers.map(tier => (
            <div key={tier.id} className="relative group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-bold text-zinc-800 font-mono tracking-wider">
                  {tier.id}
                </span>
                {tier.icon}
              </div>
              <h4 className="font-sans text-base font-bold text-zinc-950 mb-2">{tier.label}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed flex-grow">{tier.desc}</p>
              <div className="mt-6 pt-4 border-t border-zinc-100">
                <span className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  {tier.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
