import { Link } from 'react-router-dom';
import { Cpu, Terminal, ShieldCheck, ArrowRight, ExternalLink, CpuIcon, HammerIcon, PlayCircleIcon } from 'lucide-react';
import { pluginsList } from '../data/pluginsData';

export default function Plugins() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-12" id="plugins-directory-page">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4" id="plugins-header-banner">
        <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-widest bg-zinc-100 px-3 py-1 rounded-full">
          AI & Agent Integrations
        </span>
        <h1 className="font-sans text-4xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl">
          Codex & MCP Plugins
        </h1>
        <p className="text-base text-zinc-500 leading-relaxed">
          Supercharge your AI Coding Agents and model servers. Our specialized plugins expose standard structured tools, capabilities, and localized instruction sets to automate repository compliance.
        </p>
      </div>

      {/* Grid of Plugins */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="plugins-grid">
        {pluginsList.map((plugin) => (
          <div
            key={plugin.id}
            id={`plugin-card-${plugin.slug}`}
            className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs hover:border-zinc-300 hover:shadow-xs transition-all duration-200"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold font-mono ${
                  plugin.category === "AI Codex"
                    ? "bg-sky-50 text-sky-800 ring-1 ring-inset ring-sky-600/10"
                    : "bg-emerald-50 text-emerald-800 ring-1 ring-inset ring-emerald-600/10"
                }`}>
                  {plugin.category}
                </span>
                <span className="font-mono text-[10px] text-zinc-400">
                  v{plugin.detailedMetadata.version}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-sans text-lg font-bold text-zinc-950 flex items-center gap-2">
                  {plugin.category === "AI Codex" ? (
                    <Terminal className="h-5 w-5 text-sky-600" />
                  ) : (
                    <Cpu className="h-5 w-5 text-emerald-600" />
                  )}
                  {plugin.displayName}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-mono">
                  Path: <code className="bg-zinc-50 px-1 py-0.5 rounded text-zinc-800 font-semibold">{plugin.sourcePath}</code>
                </p>
              </div>

              <p className="text-xs text-zinc-600 leading-relaxed">
                {plugin.purpose}
              </p>

              {/* Skills preview */}
              <div className="space-y-1.5" id={`plugin-skills-preview-${plugin.id}`}>
                <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block">
                  Core Skills ({plugin.skills.length})
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {plugin.skills.slice(0, 4).map((skill) => (
                    <span key={skill.name} className="font-mono text-[9px] font-bold text-zinc-700 bg-zinc-50 border border-zinc-100 px-1.5 py-0.5 rounded">
                      {skill.name}
                    </span>
                  ))}
                  {plugin.skills.length > 4 && (
                    <span className="font-mono text-[9px] font-medium text-zinc-400 px-1.5 py-0.5">
                      +{plugin.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Read Detail Link */}
            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
              <a
                href={plugin.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-semibold text-zinc-500 hover:text-zinc-900 flex items-center gap-1 transition-colors"
                id={`plugin-github-link-${plugin.id}`}
              >
                <span>GitHub Source</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
              </a>

              <Link
                to={`/plugin/${plugin.slug}`}
                className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-semibold transition-colors cursor-pointer"
                id={`plugin-detail-btn-${plugin.id}`}
              >
                <span>Explore integration</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Why Governed? Callout */}
      <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between" id="why-plugins-callout">
        <div className="space-y-1">
          <h4 className="font-sans text-sm font-bold text-zinc-950 flex items-center gap-2">
            <ShieldCheck className="h-4.5 w-4.5 text-zinc-900" />
            Zero-Bypass AI Safety & Conformance
          </h4>
          <p className="text-xs text-zinc-500 leading-relaxed max-w-3xl">
            AI Codex & MCP plugins enforce strict, programmatic compliance patterns dynamically during model runs. They prevent agents from writing unregistered, unvetted feature logic or bypass-disabling validation gates.
          </p>
        </div>
        <Link
          to="/proof-chain"
          className="shrink-0 text-xs font-bold text-zinc-900 hover:text-zinc-700 flex items-center gap-1"
        >
          <span>Explore Proof Model</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
