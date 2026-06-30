import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowUpRight, Twitter, Github, Linkedin, MessageSquare, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-zinc-400 to-transparent opacity-50"></div>
      
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-6 md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-sm ring-1 ring-zinc-800">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span className="font-sans text-lg font-black tracking-tight text-zinc-900">
                SSOT Registry
              </span>
            </div>
            <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
              An open-source, governed release-readiness toolchain. Establish absolute release truth directly inside repository Git trees.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-5 pt-2">
              <a href="https://twitter.com/ssot_registry" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com/groupsum/ssot-registry" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/ssot-registry" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://discord.gg/ssot-registry" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors" aria-label="Discord">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-2"></div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-6">
              Technical Resources
            </h4>
            <ul className="space-y-3.5 text-sm font-medium text-zinc-600">
              <li>
                <Link to="/workflows" className="hover:text-zinc-900 transition-colors flex items-center gap-2 group">
                  <Terminal className="h-3.5 w-3.5 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                  Operator Workflows
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-zinc-900 transition-colors">
                  Package Portfolio
                </Link>
              </li>
              <li>
                <Link to="/proof-model" className="hover:text-zinc-900 transition-colors">
                  Proof Chains & Tiers
                </Link>
              </li>
              <li>
                <Link to="/governance-packs" className="hover:text-zinc-900 transition-colors">
                  Governance Packs
                </Link>
              </li>
            </ul>
          </div>

          {/* Discovery */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-6">
              Discovery & Corpus
            </h4>
            <ul className="space-y-3.5 text-sm font-medium text-zinc-600">
              <li>
                <Link to="/metadata-hub" className="hover:text-zinc-900 transition-colors">
                  Metadata Hub
                </Link>
              </li>
              <li>
                <Link to="/registry-browser" className="hover:text-zinc-900 transition-colors">
                  Full Corpus Matrix
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright and compliance indicators */}
        <div className="mt-16 border-t border-zinc-200/60 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs text-zinc-500 font-mono">
          <span className="flex items-center gap-2">
            © {new Date().getFullYear()} SSOT Registry Open Source Group. 
            <span className="hidden sm:inline">All rights reserved.</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
