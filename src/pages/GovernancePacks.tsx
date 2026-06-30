import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Package, Search, Command } from 'lucide-react';
import { governancePacksData } from '../data/governancePacksData';
import { useState } from 'react';

export default function GovernancePacks() {
  const allPacks = Object.values(governancePacksData);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPacks = allPacks.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-zinc-100 rounded-2xl ring-1 ring-zinc-200 shadow-sm">
            <BookOpen className="h-10 w-10 text-zinc-900" />
          </div>
        </div>
        <h1 className="font-sans text-4xl font-black tracking-tight text-zinc-950">
          Installable Governance Packs
        </h1>
        <p className="mt-4 text-base text-zinc-500 leading-relaxed">
          Policy packs represent installable decision sets. Delivered through standard Python packages, they sync ADRs and Specs directly into reserved registry ranges.
        </p>
      </div>

      {/* Narrative / Command Banner */}
      <div className="rounded-3xl bg-zinc-950 border border-zinc-800 p-8 shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <Command className="h-64 w-64 text-white -mt-10 -mr-10" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 text-zinc-300 leading-relaxed">
            <h2 className="font-sans text-2xl font-bold text-white tracking-tight">
              Enforcing Policies Across Repositories
            </h2>
            <p className="text-sm">
              In standard compliance pipelines, distribution is tedious. Security teams copy and paste markdown files into various developer workspaces, leading to stale documents, broken references, and manual checking effort.
            </p>
            <p className="text-sm">
              SSOT Registry solves this via <strong>Governance Packs</strong> built on the <code className="font-mono text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-300 border border-zinc-800">ssot-pack-contracts</code> API. Synchronization is safe because imported files are written directly into a designated, read-only reserved directory, preserving original source metadata.
            </p>
          </div>
          
          <div className="rounded-xl bg-zinc-900/50 border border-zinc-800 p-6 shadow-inner text-zinc-300">
            <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 mb-4">
              Governance Lifecycle Commands
            </span>
            <div className="font-mono text-sm space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-emerald-500 shrink-0 select-none">$</span>
                <span className="text-zinc-200 break-all">ssot pack inspect seo-aeo-aieo-governance-pack</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-500 shrink-0 select-none">$</span>
                <span className="text-zinc-200 break-all">ssot pack preflight . seo-aeo-aieo-governance-pack</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-500 shrink-0 select-none">$</span>
                <span className="text-zinc-200 break-all">ssot pack sync . seo-aeo-aieo-governance-pack --trust --yes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Grid */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="font-sans text-xl font-bold text-zinc-900 flex items-center gap-2">
            <Package className="h-5 w-5 text-zinc-400" />
            Available Policy Packs ({allPacks.length})
          </h3>
          <div className="relative max-w-sm w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-zinc-400" />
            </div>
            <input
              type="text"
              placeholder="Search packs by name or description..."
              className="block w-full pl-10 pr-3 py-2 border border-zinc-200 rounded-xl leading-5 bg-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPacks.length > 0 ? (
            filteredPacks.map((p) => (
              <Link 
                key={p.slug} 
                to={`/governance-packs/${p.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all h-full"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                      Pack Extension
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-50 text-zinc-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                  <h4 className="font-mono text-sm font-bold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {p.name}
                  </h4>
                  <p className="text-sm text-zinc-500 leading-relaxed line-clamp-3">
                    {p.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-100 space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                    <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300"></span>Syncs</span>
                    <span className="text-zinc-700 truncate ml-2">{p.syncs}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                    <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300"></span>Range</span>
                    <span className="text-zinc-700">{p.reservedRange}</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <Package className="h-12 w-12 text-zinc-300 mx-auto mb-4" />
              <p className="text-zinc-500">No governance packs found matching "{searchTerm}".</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
