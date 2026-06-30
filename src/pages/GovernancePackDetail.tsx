import { useParams, Link } from 'react-router-dom';
import { BookOpen, Github, Package, Copy, ArrowLeft, ShieldCheck, FileCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { governancePacksData } from '../data/governancePacksData';
import { useMdwrkJsonLd } from '../components/MdwrkMarkdownRenderer';
import MdwrkMarkdownRenderer from '../components/MdwrkMarkdownRenderer';
import { useState } from 'react';

export default function GovernancePackDetail() {
  const { slug } = useParams<{ slug: string }>();
  const pack = slug ? governancePacksData[slug] : undefined;
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'entities'>('overview');

  useMdwrkJsonLd(pack ? {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": pack.name,
    "description": pack.description,
    "applicationCategory": "DeveloperApplication",
    "softwareVersion": pack.metadata.version,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  } : null);

  if (!pack) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-zinc-900">Governance Pack Not Found</h2>
        <Link to="/governance-packs" className="text-blue-600 hover:underline mt-4 inline-block">
          Return to Governance Packs
        </Link>
      </div>
    );
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const lifecycleCommands = [
    `ssot pack inspect ${pack.name}`,
    `ssot pack preflight . ${pack.name}`,
    `ssot pack sync . ${pack.name} --trust --yes`
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Back link */}
      <div>
        <Link to="/governance-packs" className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Policy Packs
        </Link>
      </div>

      {/* Header */}
      <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-sm ring-1 ring-zinc-800">
                <BookOpen className="h-6 w-6" />
              </span>
              <div>
                <span className="font-mono text-[10px] font-bold uppercase text-zinc-500 tracking-widest">Governance Pack</span>
                <h1 className="font-sans text-2xl font-black tracking-tight text-zinc-950 mt-0.5">
                  {pack.name}
                </h1>
              </div>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed max-w-2xl">
              {pack.description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href={pack.ghRepo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-zinc-300 rounded-lg text-sm font-semibold text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 transition-colors shadow-xs">
              <Github className="h-4 w-4" />
              Source Code
            </a>
            <a href={pack.pypiLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg text-sm font-semibold text-blue-700 hover:bg-blue-100 transition-colors shadow-xs">
              <Package className="h-4 w-4" />
              PyPI Package
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-zinc-100 space-y-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="font-sans text-xs font-bold text-zinc-900 flex items-center gap-2 mb-2">
                <FileCheck className="h-3.5 w-3.5 text-blue-500" />
                SSOT Pack Commands
              </h3>
              <div className="flex flex-wrap gap-2">
                {pack.softwareApplications.map((app, i) => (
                  <span key={i} className="inline-flex items-center px-2 py-0.5 rounded-md bg-zinc-50 text-xs font-medium text-zinc-600 border border-zinc-200">
                    {app}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-sans text-xs font-bold text-zinc-900 flex items-center gap-2 mb-2">
                <ShieldCheck className="h-3.5 w-3.5 text-purple-500" />
                Package Coordinates
              </h3>
              <div className="flex flex-wrap gap-2">
                {pack.softwareSourceCode.map((code, i) => (
                  <span key={i} className="inline-flex items-center px-2 py-0.5 rounded-md bg-zinc-50 text-xs font-medium text-zinc-600 border border-zinc-200">
                    {code}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 pt-6 border-t border-zinc-100">
          <div>
            <span className="block text-[10px] font-mono font-bold uppercase text-zinc-400">Version</span>
            <span className="block text-sm font-semibold text-zinc-900 mt-1">{pack.metadata.version}</span>
          </div>
          <div>
            <span className="block text-[10px] font-mono font-bold uppercase text-zinc-400">License</span>
            <span className="block text-sm font-semibold text-zinc-900 mt-1">{pack.metadata.license}</span>
          </div>
          <div>
            <span className="block text-[10px] font-mono font-bold uppercase text-zinc-400">Author</span>
            <span className="block text-sm font-semibold text-zinc-900 mt-1">{pack.metadata.author}</span>
          </div>
          <div>
            <span className="block text-[10px] font-mono font-bold uppercase text-zinc-400">Published</span>
            <span className="block text-sm font-semibold text-zinc-900 mt-1">{pack.metadata.published}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Body */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
            <div className="flex border-b border-zinc-100 mb-4">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-3 px-1 border-b-2 font-sans text-sm font-bold transition-colors mr-6 ${activeTab === 'overview' ? 'border-zinc-900 text-zinc-900' : 'border-transparent text-zinc-500 hover:text-zinc-700'}`}
              >
                Governance Policy Overview
              </button>
              <button
                onClick={() => setActiveTab('entities')}
                className={`pb-3 px-1 border-b-2 font-sans text-sm font-bold transition-colors ${activeTab === 'entities' ? 'border-zinc-900 text-zinc-900' : 'border-transparent text-zinc-500 hover:text-zinc-700'}`}
              >
                Governance Entities ({pack.entities?.length || 0})
              </button>
            </div>

            {activeTab === 'overview' && (
              <div className="mt-2">
                <MdwrkMarkdownRenderer content={pack.bodyMd} />
              </div>
            )}

            {activeTab === 'entities' && (
              <div className="space-y-3">
                {pack.entities?.map((entity) => (
                  <div key={entity.id} className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-white transition-colors">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{entity.type}</span>
                        <span className="font-mono text-[10px] font-bold text-zinc-900">{entity.id}</span>
                      </div>
                      <p className="font-sans text-sm font-semibold text-zinc-900">{entity.title}</p>
                      {entity.description && (
                        <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed pr-6">{entity.description}</p>
                      )}
                    </div>
                    <div className="shrink-0 ml-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest ${
                        entity.status === 'active' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' :
                        entity.status === 'proposal' ? 'bg-amber-100 text-amber-700 border border-amber-200' :
                        entity.status === 'deprecated' ? 'bg-rose-100 text-rose-700 border border-rose-200' :
                        'bg-zinc-200 text-zinc-700 border border-zinc-300'
                      }`}>
                        {entity.status}
                      </span>
                    </div>
                  </div>
                ))}
                {(!pack.entities || pack.entities.length === 0) && (
                  <div className="text-sm text-zinc-500 italic py-4">No specific entities have been enumerated for this pack yet.</div>
                )}
              </div>
            )}
          </div>

          {/* FAQ */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm space-y-4">
            <h2 className="font-sans text-lg font-bold text-zinc-900 flex items-center gap-2 mb-4 pb-4 border-b border-zinc-100">
              <MessageSquare className="h-5 w-5 text-emerald-500" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {pack.questionsAndAnswers.map((qa, i) => (
                <div key={i} className="space-y-2">
                  <p className="text-base font-semibold text-zinc-900 flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">Q:</span> {qa.question}
                  </p>
                  <p className="text-sm text-zinc-600 flex items-start gap-2">
                    <span className="text-zinc-400 font-bold shrink-0">A:</span> {qa.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Commands */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-zinc-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <BookOpen className="h-24 w-24 text-white" />
            </div>
            <h3 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6 relative z-10">
              Governance Lifecycle Commands
            </h3>
            
            <div className="space-y-4 relative z-10">
              {lifecycleCommands.map((cmd, i) => (
                <div key={i} className="group relative">
                  <div className="bg-black/50 border border-zinc-800 rounded-lg p-3 font-mono text-xs text-emerald-400 pr-10 overflow-hidden text-ellipsis whitespace-nowrap">
                    $ {cmd}
                  </div>
                  <button
                    onClick={() => handleCopy(cmd)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                    title="Copy command"
                  >
                    {copiedCommand === cmd ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-zinc-800 text-xs text-zinc-500 relative z-10">
              Use these commands to inspect compatibility, run preflight checks, and safely synchronize the rules into your `.ssot` registry reserved range.
            </div>
          </div>
          
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">
              Registry Configuration
            </h3>
            <div className="space-y-4 text-sm text-zinc-600">
              <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                <span className="font-medium text-zinc-500">Sync Target</span>
                <span className="font-mono font-medium text-zinc-900 bg-zinc-100 px-2 py-0.5 rounded text-xs">{pack.syncs}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                <span className="font-medium text-zinc-500">Reserved Range</span>
                <span className="font-mono font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-xs border border-emerald-200">{pack.reservedRange}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
