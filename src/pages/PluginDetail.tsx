import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Copy, Check, Terminal, Cpu, ExternalLink, ShieldCheck, Share2, BookOpen, Layers } from 'lucide-react';
import { pluginsList } from '../data/pluginsData';

export default function PluginDetail() {
  const { pluginSlug } = useParams<{ pluginSlug: string }>();
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [shared, setShared] = useState(false);

  const plugin = pluginsList.find((p) => p.slug === pluginSlug);

  if (!plugin) {
    return <Navigate to="/plugins" replace />;
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 1500);
  };

  const handleShare = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8" id="plugin-detail-page">
      {/* Back to directory */}
      <div>
        <Link
          to="/plugins"
          className="inline-flex items-center gap-1 text-xs font-bold text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-wider"
          id="back-to-plugins-link"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Plugins Directory</span>
        </Link>
      </div>

      {/* Main Header Card */}
      <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 md:p-8 space-y-6" id="plugin-detail-hero">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-3">
            <span className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold font-mono ${
              plugin.category === "AI Codex"
                ? "bg-sky-50 text-sky-800 ring-1 ring-inset ring-sky-600/10"
                : "bg-emerald-50 text-emerald-800 ring-1 ring-inset ring-emerald-600/10"
            }`}>
              {plugin.category}
            </span>
            <h1 className="font-sans text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl">
              {plugin.displayName}
            </h1>
            <p className="text-zinc-600 text-sm max-w-4xl leading-relaxed">
              {plugin.description}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleShare}
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors cursor-pointer"
              id="share-metadata-btn"
            >
              {shared ? (
                <Check className="h-4 w-4 text-emerald-500" />
              ) : (
                <Share2 className="h-4 w-4 text-zinc-500" />
              )}
              <span>{shared ? "Copied Link!" : "Share Plugin"}</span>
            </button>
            <a
              href={plugin.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors"
              id="plugin-github-source-link"
            >
              <ExternalLink className="h-4 w-4 text-zinc-500" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Dynamic Badges / Capabilities */}
        <div className="flex flex-wrap gap-2 pt-2">
          {plugin.capabilities.map((cap) => (
            <span
              key={cap}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-zinc-700 bg-white rounded-lg border border-zinc-200 shadow-2xs font-mono"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-zinc-400" />
              {cap}
            </span>
          ))}
        </div>
      </div>

      {/* Detail Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Columns: Installation, Usage and Skills */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Skills Catalog */}
          <div className="rounded-xl border border-zinc-200 bg-white p-6 space-y-4" id="skills-catalog-section">
            <h2 className="font-sans text-lg font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2.5">
              <Layers className="h-5 w-5 text-zinc-500" />
              Model Skill definitions ({plugin.skills.length})
            </h2>
            <p className="text-xs text-zinc-500 leading-relaxed">
              These are specific operational capabilities mapped directly to AI prompt models, instructing them on how to interact with the repository's single source of truth.
            </p>
            <div className="divide-y divide-zinc-100 space-y-4 pt-2">
              {plugin.skills.map((skill) => (
                <div key={skill.name} className="pt-4 first:pt-0 space-y-1">
                  <h3 className="font-mono text-xs font-bold text-zinc-950 bg-zinc-50 border border-zinc-200/50 px-2 py-1 rounded inline-block">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed pl-1 pt-1">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Installation Section */}
          <div className="rounded-xl border border-zinc-200 bg-white p-6 space-y-4" id="installation-section">
            <h2 className="font-sans text-lg font-bold text-zinc-950 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-zinc-500" />
              {plugin.installation.title}
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-xs text-zinc-600">
              {plugin.installation.steps.map((step, idx) => (
                <li key={idx} className="leading-relaxed">
                  <span className="text-zinc-800 font-medium pl-1">{step}</span>
                </li>
              ))}
            </ol>
            
            {/* Copyable code block */}
            <div className="relative rounded-lg bg-zinc-950 p-4 font-mono text-xs text-zinc-200" id="installation-code-block">
              <button
                onClick={() => handleCopy(plugin.installation.codeBlock)}
                className="absolute top-3 right-3 text-zinc-400 hover:text-white transition-colors cursor-pointer bg-zinc-900 p-1.5 rounded border border-zinc-800"
                title="Copy installation block"
              >
                {copiedText === plugin.installation.codeBlock ? (
                  <Check className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
              <pre className="overflow-x-auto whitespace-pre-wrap leading-relaxed pr-10">
                {plugin.installation.codeBlock}
              </pre>
            </div>
          </div>

          {/* Usage Examples */}
          <div className="rounded-xl border border-zinc-200 bg-white p-6 space-y-6" id="usage-examples-section">
            <h2 className="font-sans text-lg font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2.5">
              <Terminal className="h-5 w-5 text-zinc-500" />
              Real-World Usage Examples
            </h2>

            {plugin.usageExamples.map((example, idx) => (
              <div key={idx} className="space-y-2" id={`usage-example-item-${idx}`}>
                <h3 className="font-sans text-sm font-bold text-zinc-900">
                  {idx + 1}. {example.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {example.explanation}
                </p>
                <div className="relative rounded-lg bg-zinc-950 p-4 font-mono text-xs text-zinc-200">
                  <button
                    onClick={() => handleCopy(example.codeBlock)}
                    className="absolute top-3 right-3 text-zinc-400 hover:text-white transition-colors cursor-pointer bg-zinc-900 p-1.5 rounded border border-zinc-800"
                    title="Copy command block"
                  >
                    {copiedText === example.codeBlock ? (
                      <Check className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                  <pre className="overflow-x-auto whitespace-pre-wrap leading-relaxed pr-10 text-emerald-400">
                    {example.codeBlock}
                  </pre>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Sidebar Column: Metadata Properties */}
        <div className="lg:col-span-1 space-y-6">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 space-y-4" id="metadata-properties-card">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">
              Metadata Properties
            </span>

            <div className="divide-y divide-zinc-100 space-y-3.5 text-xs">
              <div className="pt-3.5 first:pt-0">
                <span className="text-zinc-400 block font-medium">Source Workspace Path</span>
                <span className="font-mono text-zinc-900 font-semibold block mt-0.5 break-all">
                  {plugin.sourcePath}
                </span>
              </div>

              <div className="pt-3.5">
                <span className="text-zinc-400 block font-medium">Publisher Agency</span>
                <span className="text-zinc-900 font-semibold block mt-0.5">
                  {plugin.detailedMetadata.publisher}
                </span>
              </div>

              <div className="pt-3.5">
                <span className="text-zinc-400 block font-medium">Active Version</span>
                <span className="font-mono text-zinc-900 font-semibold block mt-0.5">
                  v{plugin.detailedMetadata.version}
                </span>
              </div>

              <div className="pt-3.5">
                <span className="text-zinc-400 block font-medium">License Agreement</span>
                <span className="text-zinc-900 font-semibold block mt-0.5">
                  {plugin.detailedMetadata.license}
                </span>
              </div>

              <div className="pt-3.5">
                <span className="text-zinc-400 block font-medium">Latest Release Date</span>
                <span className="text-zinc-900 font-semibold block mt-0.5">
                  {plugin.detailedMetadata.releasedAt}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Integration Guidance */}
          <div className="rounded-xl border border-zinc-200 bg-zinc-950 p-5 space-y-3 text-zinc-200">
            <span className="font-mono text-[9px] uppercase font-bold text-zinc-500 tracking-wider bg-zinc-900 px-2 py-0.5 rounded inline-block">
              Integration Guardrail
            </span>
            <h4 className="font-sans text-sm font-bold text-white">
              Self-Describing Manifest
            </h4>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              These plugins conform to standard SSOT metadata loading contracts, ensuring that they correctly negotiate schema capability requirements before parsing, importing, or editing the target registry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
