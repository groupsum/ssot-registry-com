import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, GitBranch, Terminal, BookOpen, Code, Github, Cpu } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Product', icon: ShieldCheck },
    { path: '/workflows', label: 'Workflows', icon: GitBranch },
    { path: '/packages', label: 'Packages', icon: Code },
    { path: '/proof-chain', label: 'Proof Chain', icon: Terminal },
    { path: '/governance-packs', label: 'Governance Packs', icon: BookOpen },
    { path: '/plugins', label: 'Plugins', icon: Cpu }
  ];

  const pathname = location?.pathname || '';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-md shadow-3xs">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-white shadow-sm ring-1 ring-zinc-950/10">
              <ShieldCheck className="h-6 w-6 text-zinc-100" />
            </span>
            <div className="flex flex-col">
              <span className="font-sans text-lg font-bold tracking-tight text-zinc-900">
                SSOT Registry
              </span>
              <span className="font-mono text-[10px] tracking-wider text-zinc-500 uppercase font-medium">
                Release Readiness
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'bg-zinc-100 text-zinc-900 font-semibold'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                <Icon className="h-4 w-4 stroke-[2px]" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & GitHub link */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/groupsum/ssot-registry"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-900 transition-colors p-1 rounded-full hover:bg-zinc-100"
            aria-label="GitHub Repository"
          >
            <Github className="h-5 w-5" />
          </a>
          <Link
            to="/registry-browser"
            className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 text-xs font-semibold text-white shadow-sm hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
          >
            Browse Registry
          </Link>
        </div>
      </div>

      {/* Mobile Sticky Navigation Rail */}
      <div className="lg:hidden border-t border-zinc-100 bg-zinc-50 overflow-x-auto">
        <div className="flex items-center gap-1 p-2 min-w-max">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  isActive
                    ? 'bg-white text-zinc-900 shadow-xs ring-1 ring-zinc-200/50'
                    : 'text-zinc-500 hover:text-zinc-800'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
