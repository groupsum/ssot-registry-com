import { useState, useMemo } from 'react';
import { Database, FileCode, FileText, Clipboard, Check } from 'lucide-react';
import { SOT_REGISTRY_DATA } from '../data/registryData';
import { useMdwrkJsonLd } from '../components/MdwrkMarkdownRenderer';
import { buildJsonLdGraph, jsonLdGraph } from '@mdwrk/structured-data';
import RegistrySidebar from '../components/RegistrySidebar';
import RegistryItemDetail from '../components/RegistryItemDetail';

export type CategoryType = 'all' | 'metadata' | 'adrs' | 'specifications' | 'features' | 'claims' | 'tests' | 'evidence';

export default function RegistryBrowser() {
  const [activeTab, setActiveTab] = useState<'interactive' | 'raw'>('interactive');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItemId, setSelectedItemId] = useState<string>('metadata');
  const [copiedRaw, setCopiedRaw] = useState(false);

  // Accordion state for schema categories in sidebar
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    metadata: true,
    adrs: true,
    specifications: false,
    features: false,
    claims: false,
    tests: false,
    evidence: false
  });


  // Flatten database items into a unified list for indexing/search
  const registryItems = useMemo(() => {
    const items: { id: string; category: CategoryType; label: string; data: any }[] = [];

    // Add Metadata as a pseudo-item
    items.push({
      id: 'metadata',
      category: 'metadata',
      label: 'Project Metadata',
      data: SOT_REGISTRY_DATA.metadata
    });

    // Add ADRs
    SOT_REGISTRY_DATA.adrs.forEach(adr => {
      items.push({
        id: adr.id,
        category: 'adrs',
        label: `${adr.id}: ${adr.title}`,
        data: adr
      });
    });

    // Add Specifications
    SOT_REGISTRY_DATA.specifications.forEach(spec => {
      items.push({
        id: spec.id,
        category: 'specifications',
        label: `${spec.id}: ${spec.title}`,
        data: spec
      });
    });

    // Add Features
    SOT_REGISTRY_DATA.features.forEach(feat => {
      items.push({
        id: feat.id,
        category: 'features',
        label: `${feat.id}: ${feat.name}`,
        data: feat
      });
    });

    // Add Claims
    SOT_REGISTRY_DATA.claims.forEach(claim => {
      items.push({
        id: claim.id,
        category: 'claims',
        label: `${claim.id}: ${claim.statement.substring(0, 45)}...`,
        data: claim
      });
    });

    // Add Tests
    SOT_REGISTRY_DATA.tests.forEach(test => {
      items.push({
        id: test.id,
        category: 'tests',
        label: `${test.id}: ${test.name}`,
        data: test
      });
    });

    // Add Evidence
    SOT_REGISTRY_DATA.evidence.forEach(evd => {
      items.push({
        id: evd.id,
        category: 'evidence',
        label: `${evd.id}: Verification Result`,
        data: evd
      });
    });

    return items;
  }, []);

  // Filter items by selected Category and Search query
  const filteredItems = useMemo(() => {
    return registryItems.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.id.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [registryItems, selectedCategory, searchQuery]);

  // Toggle individual category accordion folder
  const toggleCategory = (catId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  // Grouped list of categories and their corresponding items filtered by search
  const categoriesWithItems = useMemo(() => {
    const categoriesList: { id: CategoryType; label: string; items: typeof registryItems }[] = [
      {
        id: 'metadata',
        label: 'Global Metadata',
        items: registryItems.filter(i => i.category === 'metadata')
      },
      {
        id: 'adrs',
        label: 'Architectural Decisions',
        items: registryItems.filter(i => i.category === 'adrs')
      },
      {
        id: 'specifications',
        label: 'Requirement Specs',
        items: registryItems.filter(i => i.category === 'specifications')
      },
      {
        id: 'features',
        label: 'Capability Features',
        items: registryItems.filter(i => i.category === 'features')
      },
      {
        id: 'claims',
        label: 'Governance Claims',
        items: registryItems.filter(i => i.category === 'claims')
      },
      {
        id: 'tests',
        label: 'Verification Tests',
        items: registryItems.filter(i => i.category === 'tests')
      },
      {
        id: 'evidence',
        label: 'Execution Evidence',
        items: registryItems.filter(i => i.category === 'evidence')
      }
    ];

    return categoriesList.map(cat => {
      const filtered = cat.items.filter(item => {
        const query = searchQuery.toLowerCase();
        return item.label.toLowerCase().includes(query) || item.id.toLowerCase().includes(query);
      });
      return {
        ...cat,
        filteredItems: filtered
      };
    });
  }, [registryItems, searchQuery]);

  // Check if category is expanded - if searching, auto-expand if it has matching items
  const isCategoryExpanded = (catId: string) => {
    if (searchQuery) {
      const cat = categoriesWithItems.find(c => c.id === catId);
      return cat ? cat.filteredItems.length > 0 : false;
    }
    return expandedCategories[catId];
  };

  // Ensure selectedItemId is valid within the filtered view, or fallback
  const activeItem = useMemo(() => {
    const found = registryItems.find(item => item.id === selectedItemId);
    if (found) return found;
    return registryItems[0];
  }, [registryItems, selectedItemId]);

  // Copy full raw JSON to clipboard
  const handleCopyRaw = () => {
    navigator.clipboard.writeText(JSON.stringify(SOT_REGISTRY_DATA, null, 2));
    setCopiedRaw(true);
    setTimeout(() => setCopiedRaw(false), 2000);
  };

  // Compute dynamic JSON-LD node for this page using the official @mdwrk/structured-data builders
  const dynamicJsonLd = useMemo(() => {
    const pageUrl = `https://ssot-registry.com/registry/${activeItem.id}`;
    
    const site = {
      product: {
        name: "SSOT Registry",
        canonicalUrl: "https://ssot-registry.com",
        description: "The Single Source of Truth Registry documentation platform"
      }
    };

    const itemLabel = activeItem.label || activeItem.id;
    const itemDesc = activeItem.category === 'metadata'
      ? `Metadata details of project ${activeItem.data.projectName}`
      : activeItem.data.context ||
        activeItem.data.description ||
        activeItem.data.summary ||
        activeItem.data.statement ||
        activeItem.data.title ||
        `Registry entry ${activeItem.id}`;

    const page = {
      title: `${itemLabel} - .ssot/registry.json Explorer`,
      description: String(itemDesc).substring(0, 150),
      h1: itemLabel,
      canonicalUrl: pageUrl,
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Registry Browser", href: "/registry-browser" },
        { label: activeItem.category, href: `/registry-browser?category=${activeItem.category}` },
        { label: activeItem.id, href: `/registry-browser?id=${activeItem.id}` }
      ],
      faq: activeItem.category === 'adrs' ? [
        {
          question: `What is the context of ${activeItem.data.title}?`,
          answer: activeItem.data.context
        },
        {
          question: `What was the architectural decision for ${activeItem.data.title}?`,
          answer: activeItem.data.decision
        }
      ] : []
    };

    const nodes = buildJsonLdGraph(site, page);
    return jsonLdGraph(nodes);
  }, [activeItem]);

  // Emit dynamic JSON-LD structured data into the document head for SEO/indexing crawler validation
  useMdwrkJsonLd(dynamicJsonLd);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Page Header */}
      <div className="border-b border-zinc-200 pb-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="font-sans text-3xl font-black tracking-tight text-zinc-950 flex items-center gap-2">
              <Database className="h-8 w-8 text-zinc-800" />
              SSOT Registry Browser
            </h1>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed max-w-3xl">
              An interactive file inspector for <code className="font-mono text-zinc-900 bg-zinc-100 px-1 py-0.5 rounded font-semibold text-xs">.ssot/registry.json</code>. Browse, filter, and trace decision records (ADRs), requirement specifications, capability features, claims, tests, and execution evidence.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/10 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Schema v0.8.0 Compliant
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-6 flex border-b border-zinc-200 gap-6">
          <button
            onClick={() => setActiveTab('interactive')}
            className={`pb-3 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'interactive'
                ? 'border-zinc-900 text-zinc-950'
                : 'border-transparent text-zinc-500 hover:text-zinc-800'
            }`}
          >
            Interactive Database Browser
          </button>
          <button
            onClick={() => setActiveTab('raw')}
            className={`pb-3 text-sm font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'raw'
                ? 'border-zinc-900 text-zinc-950'
                : 'border-transparent text-zinc-500 hover:text-zinc-800'
            }`}
          >
            <FileCode className="h-4 w-4" />
            Raw .ssot/registry.json File
          </button>
        </div>
      </div>

      {activeTab === 'raw' ? (
        /* Raw JSON Viewer Tab */
        <div className="rounded-xl border border-zinc-200 bg-white shadow-3xs overflow-hidden">
          <div className="bg-zinc-50 px-5 py-4 border-b border-zinc-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-zinc-400" />
              <span className="font-mono text-xs font-bold text-zinc-700">.ssot/registry.json</span>
            </div>
            <button
              onClick={handleCopyRaw}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 transition-colors shadow-2xs cursor-pointer"
            >
              {copiedRaw ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  Copied Database!
                </>
              ) : (
                <>
                  <Clipboard className="h-3.5 w-3.5" />
                  Copy raw JSON
                </>
              )}
            </button>
          </div>
          <div className="p-6 bg-zinc-950 font-mono text-xs text-emerald-400 overflow-x-auto max-h-[600px] scrollbar-thin">
            <pre>{JSON.stringify(SOT_REGISTRY_DATA, null, 2)}</pre>
          </div>
        </div>
      ) : (
        /* Interactive Explorer Tab */
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Modular Left Column Sidebar */}
          <RegistrySidebar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedItemId={selectedItemId}
            setSelectedItemId={setSelectedItemId}
            categoriesWithItems={categoriesWithItems}
            isCategoryExpanded={isCategoryExpanded}
            toggleCategory={toggleCategory}
          />

          {/* Right Column: Active Node Details & JSON-LD crawler sync validation */}
          <div className="lg:col-span-3 space-y-6">
            <RegistryItemDetail
              activeItem={activeItem}
              setSelectedItemId={setSelectedItemId}
            />

            {/* Page-level JSON-LD Metadata Output in its own card */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-100 pb-4 gap-4">
                <div>
                  <h3 className="font-sans text-sm font-black text-zinc-950 flex items-center gap-1.5">
                    <FileText className="h-4.5 w-4.5 text-zinc-800" />
                    Page JSON-LD Graph Node (SEO / Crawl Compliance)
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
                    Each unique selected node in our registry dynamically syncs customized Schema.org structured metadata models in the head at runtime.
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 rounded-md px-2.5 py-1 text-xs font-mono font-bold text-emerald-700 shadow-2xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                  <span>Emitted & Head Synchronized</span>
                </div>
              </div>
              
              <div className="rounded-lg border border-zinc-900 bg-zinc-950 p-4 font-mono text-[11px] text-emerald-400 overflow-x-auto max-h-[220px] scrollbar-thin">
                <pre>{JSON.stringify(dynamicJsonLd, null, 2)}</pre>
              </div>
            </div>

          </div>

        </div>
      )}
    </div>
  );
}
