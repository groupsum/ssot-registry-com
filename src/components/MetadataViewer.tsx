import { useState } from 'react';
import { FileCode, Globe, Cpu, Network, Copy, Check, Info } from 'lucide-react';
import { METADATA_FILES } from '../data/corpus';

export default function MetadataViewer() {
  const [activeTab, setActiveTab] = useState<'robots' | 'llms' | 'sitemap' | 'schema'>('robots');
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const getFileContent = () => {
    switch (activeTab) {
      case 'robots': return METADATA_FILES.robots;
      case 'llms': return METADATA_FILES.llmsTxt;
      case 'sitemap': return METADATA_FILES.sitemap;
      case 'schema': return JSON.stringify(METADATA_FILES.structuredData, null, 2);
    }
  };

  const getFileName = () => {
    switch (activeTab) {
      case 'robots': return 'robots.txt';
      case 'llms': return 'llms.txt';
      case 'sitemap': return 'sitemap.xml';
      case 'schema': return 'structured-data-graph.json';
    }
  };

  const getTabLabel = () => {
    switch (activeTab) {
      case 'robots': return 'SEO Search Engine Config';
      case 'llms': return 'AiEO LLM Context Discovery';
      case 'sitemap': return 'Sitemap Indices';
      case 'schema': return 'Structured Data Schema Graph';
    }
  };

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-xs">
      <div className="mb-4">
        <h3 className="font-sans text-lg font-bold text-zinc-900 flex items-center gap-2">
          <Globe className="h-5 w-5 text-zinc-800" />
          Discovery & Crawler Metadata Explorer
        </h3>
        <p className="text-sm text-zinc-500">
          SSOT Registry generates structured sitemaps, canonical meta graphs, and machine-readable crawlers so search engines, AI models, and local LLM agents can index our content packages with precision.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Navigation Sidebar */}
        <div className="space-y-1.5 lg:col-span-1">
          <button
            onClick={() => setActiveTab('robots')}
            className={`flex items-center gap-2.5 px-3 py-2.5 w-full text-xs font-semibold rounded-lg text-left transition-colors cursor-pointer ${
              activeTab === 'robots'
                ? 'bg-zinc-100 text-zinc-900 shadow-3xs ring-1 ring-zinc-200'
                : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
            }`}
          >
            <Globe className="h-4 w-4 shrink-0 text-zinc-500" />
            <div className="flex flex-col">
              <span>robots.txt</span>
              <span className="text-[10px] font-normal text-zinc-400">SEO Crawler Directives</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('llms')}
            className={`flex items-center gap-2.5 px-3 py-2.5 w-full text-xs font-semibold rounded-lg text-left transition-colors cursor-pointer ${
              activeTab === 'llms'
                ? 'bg-zinc-100 text-zinc-900 shadow-3xs ring-1 ring-zinc-200'
                : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
            }`}
          >
            <Cpu className="h-4 w-4 shrink-0 text-zinc-500" />
            <div className="flex flex-col">
              <span>llms.txt</span>
              <span className="text-[10px] font-normal text-zinc-400">AiEO Context Summary</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('sitemap')}
            className={`flex items-center gap-2.5 px-3 py-2.5 w-full text-xs font-semibold rounded-lg text-left transition-colors cursor-pointer ${
              activeTab === 'sitemap'
                ? 'bg-zinc-100 text-zinc-900 shadow-3xs ring-1 ring-zinc-200'
                : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
            }`}
          >
            <Network className="h-4 w-4 shrink-0 text-zinc-500" />
            <div className="flex flex-col">
              <span>sitemap.xml</span>
              <span className="text-[10px] font-normal text-zinc-400">XML Navigation Indices</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('schema')}
            className={`flex items-center gap-2.5 px-3 py-2.5 w-full text-xs font-semibold rounded-lg text-left transition-colors cursor-pointer ${
              activeTab === 'schema'
                ? 'bg-zinc-100 text-zinc-900 shadow-3xs ring-1 ring-zinc-200'
                : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
            }`}
          >
            <FileCode className="h-4 w-4 shrink-0 text-zinc-500" />
            <div className="flex flex-col">
              <span>structured-data-graph.json</span>
              <span className="text-[10px] font-normal text-zinc-400">JSON-LD Metadata Nodes</span>
            </div>
          </button>

          {/* Compliance Card */}
          <div className="mt-4 rounded-lg bg-zinc-50 p-4 border border-zinc-100 text-xs">
            <h4 className="font-bold text-zinc-800 flex items-center gap-1.5">
              <Info className="h-3.5 w-3.5 text-zinc-500" />
              Crawler Quality Gates
            </h4>
            <div className="mt-2 space-y-1.5 font-mono text-[10px] text-zinc-600">
              <div className="flex justify-between items-center">
                <span>SEO Score:</span>
                <span className="text-emerald-600 font-bold">10/10 verified</span>
              </div>
              <div className="flex justify-between items-center">
                <span>AEO Score:</span>
                <span className="text-emerald-600 font-bold">10/10 verified</span>
              </div>
              <div className="flex justify-between items-center">
                <span>AiEO Score:</span>
                <span className="text-emerald-600 font-bold">10/10 verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Panel */}
        <div className="lg:col-span-3 flex flex-col h-[320px] lg:h-[380px]">
          {/* Panel Header */}
          <div className="flex items-center justify-between rounded-t-lg bg-zinc-100 border border-b-0 border-zinc-200 px-4 py-2.5 shrink-0 text-zinc-700">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-zinc-900">
                {getFileName()}
              </span>
              <span className="text-xs text-zinc-400">|</span>
              <span className="text-xs text-zinc-500">{getTabLabel()}</span>
            </div>
            <button
              onClick={() => handleCopy(getFileContent())}
              className="inline-flex items-center gap-1.5 hover:text-zinc-950 text-zinc-500 text-xs font-medium cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy File
                </>
              )}
            </button>
          </div>

          {/* Panel Body */}
          <div className="flex-1 overflow-y-auto bg-zinc-950 p-4 font-mono text-xs text-zinc-300 leading-relaxed rounded-b-lg border border-t-0 border-zinc-200 whitespace-pre scrollbar-thin scrollbar-thumb-zinc-800">
            {getFileContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
