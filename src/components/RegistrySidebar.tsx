import { Search, ChevronRight } from 'lucide-react';
import { CategoryType } from '../pages/RegistryBrowser';

interface RegistrySidebarProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedItemId: string;
  setSelectedItemId: (id: string) => void;
  categoriesWithItems: Array<{
    id: CategoryType;
    label: string;
    filteredItems: Array<{ id: string; category: CategoryType; label: string }>;
  }>;
  isCategoryExpanded: (catId: string) => boolean;
  toggleCategory: (catId: string) => void;
}

export default function RegistrySidebar({
  searchQuery,
  setSearchQuery,
  selectedItemId,
  setSelectedItemId,
  categoriesWithItems,
  isCategoryExpanded,
  toggleCategory
}: RegistrySidebarProps) {
  return (
    <div className="lg:col-span-1 space-y-4">
      <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-3xs space-y-4">
        <div>
          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
            Registry Index
          </h3>
          
          {/* Live searching of nodes */}
          <div className="relative rounded-md shadow-3xs mb-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-zinc-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search keys or titles..."
              className="block w-full rounded-md border border-zinc-300 bg-white py-1.5 pl-9 pr-3 text-xs text-zinc-800 placeholder-zinc-400 focus:border-zinc-900 focus:outline-none"
            />
          </div>
        </div>

        {/* Tree Accordion Category List with Styled Scrollbar */}
        <div className="max-h-[580px] overflow-y-auto pr-1 space-y-1.5 scrollbar-thin">
          {categoriesWithItems.every(cat => cat.filteredItems.length === 0) ? (
            <p className="text-[11px] text-zinc-400 py-6 text-center">No matching registry nodes found</p>
          ) : (
            categoriesWithItems.map((cat) => {
              const isOpen = isCategoryExpanded(cat.id);
              const hasMatches = cat.filteredItems.length > 0;

              if (searchQuery && !hasMatches) {
                return null; // Hide empty categories if searching
              }

              return (
                <div key={cat.id} className="border-b border-zinc-100 last:border-none pb-2 last:pb-0">
                  {/* Accordion Category Header Button */}
                  <button
                    onClick={() => toggleCategory(cat.id)}
                    className="w-full flex items-center justify-between py-1 px-1.5 hover:bg-zinc-50 rounded-md transition-colors text-left cursor-pointer group"
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <ChevronRight className={`h-3.5 w-3.5 shrink-0 text-zinc-400 transition-transform duration-150 ${isOpen ? 'rotate-90 text-zinc-700' : ''}`} />
                      <span className="text-xs font-bold text-zinc-700 group-hover:text-zinc-900 truncate">
                        {cat.label}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-zinc-100 px-1.5 py-0.5 rounded text-zinc-500 shrink-0 ml-2">
                      {cat.filteredItems.length}
                    </span>
                  </button>

                  {/* Collapsible items under category */}
                  {isOpen && (
                    <div className="pl-4 mt-1.5 space-y-1.5 border-l border-zinc-100 ml-3">
                      {cat.filteredItems.map((item) => {
                        const isSelected = selectedItemId === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => setSelectedItemId(item.id)}
                            className={`w-full text-left px-2.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer block truncate relative ${
                              isSelected
                                ? 'bg-zinc-900 text-white font-bold shadow-xs'
                                : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                            }`}
                          >
                            <span className={`block font-mono text-[9px] uppercase tracking-wider mb-0.5 ${isSelected ? 'text-zinc-300' : 'text-zinc-400'}`}>
                              {item.id === 'metadata' ? 'global' : item.id}
                            </span>
                            <span className="truncate block font-sans text-[11px] leading-tight">
                              {item.id === 'metadata' ? 'Project Parameters' : item.label.split(': ').slice(1).join(': ') || item.id}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
}
