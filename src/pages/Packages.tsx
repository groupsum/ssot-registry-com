import { Code, Info } from 'lucide-react';
import ProductPortfolio from '../components/ProductPortfolio';

export default function Packages() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="border-b border-zinc-200 pb-5">
        <h1 className="font-sans text-3xl font-black tracking-tight text-zinc-950 flex items-center gap-2">
          <Code className="h-8 w-8 text-zinc-800" />
          The SSOT Registry Package Portfolio
        </h1>
        <p className="mt-2 text-sm text-zinc-500 leading-relaxed max-w-3xl">
          Browse our modular distribution matrix. Install the core umbrella package for full local operations, or choose lighter packages for specific CI or programmatic integration environments.
        </p>
      </div>

      {/* 1. Interactive Product Portfolio Matrix Section */}
      <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="font-sans text-xl font-bold tracking-tight text-zinc-900">
            The Product Portfolio Matrix
          </h2>
          <p className="mt-1 text-xs text-zinc-500">
            SSOT Registry is partitioned into micro-libraries for lightweight installations. Choose a package below to inspect its role and executable API samples in real-time.
          </p>
        </div>

        <ProductPortfolio />
      </div>

      {/* Advisory block */}
      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h4 className="font-sans text-sm font-bold text-zinc-900 flex items-center gap-1.5">
            <Info className="h-4 w-4 text-zinc-700" />
            Umbrella Install vs Focused Packages
          </h4>
          <p className="text-xs text-zinc-500 leading-relaxed max-w-2xl">
            For standard application development, we highly recommend installing the main umbrella <code className="font-mono text-[11px] bg-zinc-200 px-1 py-0.5 rounded font-semibold text-zinc-800">ssot-registry</code> pack with the necessary optional extras (such as <code className="font-mono text-[11px] text-zinc-700">[mcp]</code> or <code className="font-mono text-[11px] text-zinc-700">[tui]</code>). Use focused packages solely inside specific micro-service, headless, or JS/React environments.
          </p>
        </div>
      </div>
    </div>
  );
}

