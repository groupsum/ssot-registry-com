import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Copy, Check, ChevronRight, Terminal, BookOpen, Layers, Lock, Award } from 'lucide-react';
import { REGISTRY_STATS } from '../data/corpus';
import LineageGraph from '../components/LineageGraph';
import ToolchainShowcase from '../components/ToolchainShowcase';

export default function Home() {
  const [copiedInstall, setCopiedInstall] = useState<string | null>(null);

  const handleCopyInstall = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedInstall(cmd);
    setTimeout(() => setCopiedInstall(null), 1500);
  };

  return (
    <div className="bg-white">
      {/* 1. Hero Area */}
      <section className="relative overflow-hidden py-20 lg:py-24 border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-900 ring-1 ring-inset ring-zinc-200">
                <ShieldCheck className="h-3.5 w-3.5 text-zinc-900" />
                Registry Schema v0.8.0 Active
              </span>

              <h1 className="font-sans text-5xl font-black tracking-tight text-zinc-950 sm:text-6xl leading-tight">
                SSOT Registry
              </h1>

              <p className="font-sans text-xl font-bold tracking-tight text-zinc-800">
                Ship from a registry that proves the release.
              </p>

              <p className="text-zinc-600 text-base leading-relaxed">
                SSOT Registry keeps decisions, specifications, features, claims, tests, evidence, frozen boundaries, and releases in one canonical <code className="font-mono text-xs bg-zinc-100 px-1.5 py-0.5 rounded font-semibold text-zinc-900">.ssot/registry.json</code> authority file so teams can validate scope and proof before release decisions depend on them.
              </p>

              {/* Instant Install Block */}
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 max-w-xl">
                <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 mb-2">
                  Unified Installation Paths (Supports uv & pip)
                </span>
                <div className="flex flex-col sm:flex-row gap-2">
                  {/* UV Block */}
                  <div className="flex-1 flex items-center justify-between rounded-lg bg-white border border-zinc-200 px-3 py-2 font-mono text-xs text-zinc-800">
                    <span>uv add ssot-registry</span>
                    <button
                      onClick={() => handleCopyInstall("uv add ssot-registry")}
                      className="text-zinc-400 hover:text-zinc-950 transition-colors"
                    >
                      {copiedInstall === "uv add ssot-registry" ? (
                        <Check className="h-4 w-4 text-emerald-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {/* Pip Block */}
                  <div className="flex-1 flex items-center justify-between rounded-lg bg-white border border-zinc-200 px-3 py-2 font-mono text-xs text-zinc-800">
                    <span>python -m pip install ssot-registry</span>
                    <button
                      onClick={() => handleCopyInstall("python -m pip install ssot-registry")}
                      className="text-zinc-400 hover:text-zinc-950 transition-colors"
                    >
                      {copiedInstall === "python -m pip install ssot-registry" ? (
                        <Check className="h-4 w-4 text-emerald-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/workflows"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-zinc-900 px-6 text-sm font-bold text-white shadow-xs hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  Explore Workflows
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/registry-browser"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-200 bg-white px-6 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 transition-colors"
                >
                  Browse Content Corpus
                </Link>
              </div>
            </div>

            {/* Right Graphic Panel (Live database counter) */}
            <div className="lg:col-span-5 bg-zinc-50 rounded-2xl border border-zinc-200 p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-zinc-500" />
                  <span className="font-mono text-xs font-semibold text-zinc-900">
                    registry.json (Validated Snapshot)
                  </span>
                </div>
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 ring-1 ring-inset ring-emerald-600/20 font-mono">
                  ● Conforming
                </span>
              </div>

              <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                This graph presents the live node statistics crawled from the current authority registry file in our mono-repository workspace:
              </p>

              {/* Grid of registry counters */}
              <div className="grid grid-cols-2 gap-3">
                {REGISTRY_STATS.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-zinc-200 bg-white p-3">
                    <span className="block font-mono text-[10px] uppercase font-bold text-zinc-400">
                      {stat.label}
                    </span>
                    <span className="block text-xl font-extrabold text-zinc-900 mt-0.5 font-mono">
                      {stat.value.toLocaleString()}
                    </span>
                    <span className="block text-[10px] text-zinc-500 mt-0.5">
                      {stat.description}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-200 text-center">
                <span className="font-mono text-[10px] text-zinc-400">
                  Last registry synchronization: 2026-06-29T22:48:45-07:00
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Pain and Alternatives (What It Replaces) */}
      <section className="py-16 sm:py-20 border-b border-zinc-100 bg-zinc-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-zinc-900">
              Why SSOT Registry?
            </h2>
            <p className="mt-2 text-zinc-500 text-sm">
              Traditional release management suffers from fragmented truth scattered across disconnected platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-zinc-200 bg-white p-6">
              <span className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                What we replace
              </span>
              <ul className="space-y-3.5 text-sm text-zinc-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Release scope tracked in spreadsheets or fleeting Slack channels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Architecture decisions (ADRs) completely detached from code execution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Claims about release readiness that lack verifiable links to pytest logs.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-6">
              <span className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                What SSOT Guarantees
              </span>
              <ul className="space-y-3.5 text-sm text-zinc-700 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>One single validated file, .ssot/registry.json, contains all authority.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Late scope additions are blocked by immutable Boundary Freeze rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Release notes are automatically projected from the registry itself.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-6">
              <span className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                What it is NOT
              </span>
              <p className="text-sm text-zinc-600 leading-relaxed">
                SSOT Registry is not a general knowledge base, Jira clone, compliance agency, or security scanner. It is a <strong>local, portable, repository-native authority model and toolchain</strong> that drives down risk directly inside your Git workspace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lineage Graph Section */}
      <section className="py-16 sm:py-20 border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <LineageGraph />
        </div>
      </section>

      {/* 4. Toolchain Showcase (CLI & TUI marketing/devrel) */}
      <section className="py-16 sm:py-20 border-b border-zinc-100 bg-zinc-50/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ToolchainShowcase />
        </div>
      </section>

      {/* 6. Messaging Pillars Recap */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-zinc-900">
              Core Architectural Pillars
            </h2>
            <p className="mt-2 text-zinc-500 text-sm">
              The fundamental guidelines ensuring stable software-release environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-900 text-white">
                <Layers className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-sans text-base font-bold text-zinc-900">
                  Pillar 1: Canonical Authority
                </h3>
                <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                  The registry file <code className="font-mono text-xs bg-zinc-100 px-1 py-0.5 rounded text-zinc-900 font-semibold">.ssot/registry.json</code> is the singular machine-readable source of truth. Reports, snapshot exports, lineage DOT graphs, and compiled markdown sitemaps are <strong>derived projections</strong> that should always be regenerated, never hand-edited.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-900 text-white">
                <Lock className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-sans text-base font-bold text-zinc-900">
                  Pillar 2: Boundary & Release Separation
                </h3>
                <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                  Boundaries freeze the delivery scope. Releases certify, promote, or publish against that frozen scope. This separation ensures unapproved features cannot slip in after code freeze without invalidating the release signatures.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-900 text-white">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-sans text-base font-bold text-zinc-900">
                  Pillar 3: Proof Chain Verification
                </h3>
                <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                  Claims should never stand alone; they must map directly to executable pytest specs and be validated by immutable cryptographic evidence signatures. Validation checks for orphaned claims or empty references, enforcing strict fail-closed operations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-900 text-white">
                <BookOpen className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-sans text-base font-bold text-zinc-900">
                  Pillar 4: Document Origins Model
                </h3>
                <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                  We distinguish decision origins clearly inside the registry tree. This separates upstream core guidelines (<code className="font-mono text-xs text-zinc-600">ssot-core</code>), templates (<code className="font-mono text-xs text-zinc-600">ssot-origin</code>), local project decisions (<code className="font-mono text-xs text-zinc-600">repo-local</code>), and extension pack imports (<code className="font-mono text-xs text-zinc-600">extension-pack</code>).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
