import { useState } from 'react';
import { Copy, Check, Code } from 'lucide-react';
import { packagePortfolio } from '../data/packages';
import { PackageInfo } from '../types';

interface SidebarProps {
  packages: PackageInfo[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function PortfolioSidebar({ packages, selectedId, onSelect }: SidebarProps) {
  return (
    <div className="lg:col-span-1 space-y-1 max-h-[640px] lg:max-h-[720px] overflow-y-auto border border-zinc-200 rounded-xl bg-white p-2 shadow-2xs portfolio-scrollbar" id="portfolio-sidebar">
      {packages.map((pkg) => (
        <button
          key={pkg.id}
          id={`sidebar-item-${pkg.id}`}
          onClick={() => onSelect(pkg.id)}
          className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-between cursor-pointer transition-colors ${
            selectedId === pkg.id
              ? 'bg-zinc-900 text-white shadow-xs'
              : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950'
          }`}
        >
          <span>{pkg.name}</span>
          {pkg.isOptional && (
            <span className="text-[9px] font-mono uppercase bg-zinc-100 text-zinc-600 px-1 py-0.5 rounded">
              Optional
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

interface InstallCommandProps {
  activePkg: PackageInfo;
  copiedInstall: string | null;
  onCopyInstall: (cmd: string) => void;
}

export function PortfolioInstallCommand({ activePkg, copiedInstall, onCopyInstall }: InstallCommandProps) {
  return (
    <div className="mt-6 border-t border-zinc-100 pt-5" id="portfolio-install-section">
      <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">
        Install Commands
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div className="flex items-center justify-between rounded-lg bg-zinc-50 border border-zinc-200 px-3 py-2 font-mono text-xs text-zinc-700" id={`install-uv-${activePkg.id}`}>
          <span className="truncate">{activePkg.installUv}</span>
          <button
            onClick={() => onCopyInstall(activePkg.installUv)}
            className="text-zinc-400 hover:text-zinc-950 transition-colors cursor-pointer shrink-0 ml-1"
            title="Copy uv command"
          >
            {copiedInstall === activePkg.installUv ? (
              <Check className="h-4 w-4 text-emerald-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-zinc-50 border border-zinc-200 px-3 py-2 font-mono text-xs text-zinc-700" id={`install-pip-${activePkg.id}`}>
          <span className="truncate">{activePkg.installPip}</span>
          <button
            onClick={() => onCopyInstall(activePkg.installPip)}
            className="text-zinc-400 hover:text-zinc-950 transition-colors cursor-pointer shrink-0 ml-1"
            title="Copy pip command"
          >
            {copiedInstall === activePkg.installPip ? (
              <Check className="h-4 w-4 text-emerald-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {activePkg.commands.length > 0 && (
        <div id="executable-sample-section">
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">
            Primary Executable / API Sample
          </span>
          <div className="rounded-lg bg-zinc-950 p-3.5 font-mono text-xs text-zinc-200">
            <span className="text-zinc-500 mr-2">$</span>
            <span className="text-emerald-400">{activePkg.commands[0].cmd}</span>
            <span className="text-zinc-500 block text-[10px] mt-1">
              # {activePkg.commands[0].desc}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

interface DetailProps {
  activePkg: PackageInfo;
  copiedInstall: string | null;
  onCopyInstall: (cmd: string) => void;
}

export function PortfolioDetail({ activePkg, copiedInstall, onCopyInstall }: DetailProps) {
  return (
    <div className="lg:col-span-3 rounded-xl border border-zinc-200 bg-white p-6 shadow-3xs flex flex-col justify-between" id="portfolio-detail-panel">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-100 pb-3 mb-4">
          <div>
            <span className="font-mono text-[10px] uppercase font-bold text-zinc-400">
              Distribution Role: {activePkg.role}
            </span>
            <h3 className="font-sans text-xl font-bold text-zinc-950 mt-0.5">
              {activePkg.name}
            </h3>
          </div>
          <span className="mt-2 sm:mt-0 inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-semibold text-zinc-700 ring-1 ring-inset ring-zinc-500/10 font-mono">
            v{activePkg.version}
          </span>
        </div>

        <div className="space-y-4">
          <div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
              Public Message
            </span>
            <p className="text-sm font-semibold text-zinc-800 leading-relaxed mt-0.5">
              {activePkg.publicMessage}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                Best For
              </span>
              <p className="text-xs text-zinc-600 mt-0.5 leading-relaxed">{activePkg.bestFor}</p>
            </div>
            {activePkg.notFor && (
              <div>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                  Not For
                </span>
                <p className="text-xs text-zinc-600 mt-0.5 leading-relaxed">{activePkg.notFor}</p>
              </div>
            )}
          </div>

          <div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
              Key Proof Point
            </span>
            <p className="text-xs text-zinc-600 mt-0.5 leading-relaxed">{activePkg.proofPoint}</p>
          </div>
        </div>
      </div>

      <PortfolioInstallCommand
        activePkg={activePkg}
        copiedInstall={copiedInstall}
        onCopyInstall={onCopyInstall}
      />
    </div>
  );
}

export default function PackagePortfolioMatrix() {
  const [selectedId, setSelectedId] = useState<string>("ssot-registry");
  const [copiedInstall, setCopiedInstall] = useState<string | null>(null);

  const activePkg = packagePortfolio.find(p => p.id === selectedId) || packagePortfolio[0];

  const handleCopyInstall = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedInstall(cmd);
    setTimeout(() => setCopiedInstall(null), 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8" id="package-portfolio-matrix">
      <SidebarPropsWrapper
        packages={packagePortfolio}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
      <PortfolioDetail
        activePkg={activePkg}
        copiedInstall={copiedInstall}
        onCopyInstall={handleCopyInstall}
      />
    </div>
  );
}

// Helper wrapper to adhere to React interface standards clearly
function SidebarPropsWrapper({ packages, selectedId, onSelect }: SidebarProps) {
  return (
    <PortfolioSidebar
      packages={packages}
      selectedId={selectedId}
      onSelect={onSelect}
    />
  );
}
