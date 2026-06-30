export interface GovernancePackEntity {
  id: string;
  type: 'adr' | 'spec' | 'feature' | 'test';
  title: string;
  status: 'draft' | 'proposal' | 'active' | 'deprecated' | 'rejected';
  description?: string;
  sourcePath?: string;
  introducedIn?: string;
}

export interface GovernancePack {
  slug: string;
  name: string;
  role: string;
  syncs: string;
  reservedRange: string;
  description: string;
  ghRepo: string;
  pypiLink: string;
  softwareApplications: string[];
  softwareSourceCode: string[];
  questionsAndAnswers: { question: string; answer: string }[];
  entities: GovernancePackEntity[];
  metadata: {
    version: string;
    license: string;
    author: string;
    published: string;
  };
  bodyMd: string;
}

export const governancePacksData: Record<string, GovernancePack> = {
  "seo-aeo-aieo-governance-pack": {
    "slug": "seo-aeo-aieo-governance-pack",
    "name": "seo-aeo-aieo-governance-pack",
    "role": "SEO, AEO, and AiEO Governance Pack",
    "syncs": "21 specs, 12 ADRs",
    "reservedRange": "800-820 (ADR, SPEC)",
    "description": "Installable SSOT governance pack for SEO, AEO, and AiEO documents.",
    "ghRepo": "https://github.com/groupsum/seo-aeo-aieo-governance-pack",
    "pypiLink": "https://pypi.org/project/seo-aeo-aieo-governance-pack/",
    "softwareApplications": [
      "ssot pack inspect",
      "ssot pack preflight",
      "ssot pack sync"
    ],
    "softwareSourceCode": [
      "seo-aeo-aieo-governance-pack",
      "ssot-pack-contracts>=0.2.17,<0.3.0"
    ],
    "questionsAndAnswers": [
      {
        "question": "What does this pack install?",
        "answer": "It installs immutable extension-pack ADR/SPEC documents declared by seo-aeo-aieo-governance-pack's packaged manifests."
      },
      {
        "question": "How is it synchronized?",
        "answer": "Use `ssot pack preflight . seo-aeo-aieo-governance-pack` before `ssot pack sync . seo-aeo-aieo-governance-pack --trust --yes` so compatibility and reserved document identities are checked before mutation."
      },
      {
        "question": "Where is the source of truth?",
        "answer": "The source repo is https://github.com/groupsum/seo-aeo-aieo-governance-pack; the PyPI project is https://pypi.org/project/seo-aeo-aieo-governance-pack/."
      }
    ],
    "entities": [
      {
        "id": "adr:0800",
        "type": "adr",
        "title": "SEO, AEO, and AiEO governance documents ship as an installable extension pack",
        "status": "draft",
        "description": "SEO, AEO, and AiEO governance documents ship as an installable extension pack.",
        "sourcePath": ".ssot/adr/ADR-0800-seo-aeo-aieo-origin-packaging.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "adr:0801",
        "type": "adr",
        "title": "Crawl control is distinct from indexing control",
        "status": "draft",
        "description": "Crawl control and indexing control are separate mechanisms and shall not be conflated.",
        "sourcePath": ".ssot/adr/ADR-0801-crawl-control-is-distinct-from-indexing-control.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "adr:0802",
        "type": "adr",
        "title": "Discovery artifacts are separate from metadata artifacts",
        "status": "draft",
        "description": "Discovery artifacts and metadata artifacts are distinct optimization surfaces.",
        "sourcePath": ".ssot/adr/ADR-0802-discovery-artifacts-are-separate-from-metadata-artifacts.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "adr:0803",
        "type": "adr",
        "title": "Canonical HTML metadata remains the source page contract",
        "status": "draft",
        "description": "Canonical HTML page metadata remains the primary page-level contract for search and answer engines.",
        "sourcePath": ".ssot/adr/ADR-0803-canonical-html-metadata-remains-the-source-page-contract.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "adr:0804",
        "type": "adr",
        "title": "Structured data uses layered authority",
        "status": "draft",
        "description": "Structured data is governed through layered authority, not a single undifferentiated source.",
        "sourcePath": ".ssot/adr/ADR-0804-structured-data-uses-layered-authority.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "adr:0805",
        "type": "adr",
        "title": "Google AI features do not justify AI-specific schema or AI-only files",
        "status": "draft",
        "description": "Google AI search features are governed by normal Search eligibility rather than a separate AI-only markup regime.",
        "sourcePath": ".ssot/adr/ADR-0805-google-ai-features-do-not-justify-ai-specific-schema-or-ai-only-files.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "adr:0806",
        "type": "adr",
        "title": "Accessibility conformance is a governed discovery-quality prerequisite",
        "status": "draft",
        "description": "Accessibility conformance, including WCAG 2.1 AA coverage, is a governed prerequisite for trustworthy discovery and answer surfaces.",
        "sourcePath": ".ssot/adr/ADR-0806-accessibility-conformance-is-a-governed-discovery-quality-prerequisite.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "adr:0807",
        "type": "adr",
        "title": "Social graph metadata is separate from search structured data",
        "status": "draft",
        "description": "Social graph metadata is a distinct optimization surface from search structured data.",
        "sourcePath": ".ssot/adr/ADR-0807-social-graph-metadata-is-separate-from-search-structured-data.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "adr:0808",
        "type": "adr",
        "title": "AI crawler controls must distinguish search, training, and user-triggered fetch",
        "status": "draft",
        "description": "AI crawler controls must distinguish search crawl, training crawl, and user-triggered fetch.",
        "sourcePath": ".ssot/adr/ADR-0808-ai-crawler-controls-must-distinguish-search-training-and-user-triggered-fetch.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "adr:0809",
        "type": "adr",
        "title": "llms.txt is experimental and must not outrank canonical surfaces",
        "status": "draft",
        "description": "llms.txt is an optional experimental artifact and not a canonical replacement surface.",
        "sourcePath": ".ssot/adr/ADR-0809-llmstxt-is-experimental-and-must-not-outrank-canonical-surfaces.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "adr:0810",
        "type": "adr",
        "title": "Performance metrics use standards-backed authority where available",
        "status": "draft",
        "description": "Governed performance metrics SHALL use standards-backed authority where available and SHALL distinguish standards-track metrics from tool-derived operator metrics.",
        "sourcePath": ".ssot/adr/ADR-0810-performance-metrics-use-standards-backed-authority-where-available.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "adr:0811",
        "type": "adr",
        "title": "Derived tooling metrics remain separate from web-platform normative metrics",
        "status": "draft",
        "description": "Derived tooling metrics such as TBT SHALL remain separate from web-platform normative metrics and SHALL be governed as operator guidance rather than platform semantics.",
        "sourcePath": ".ssot/adr/ADR-0811-derived-tooling-metrics-remain-separate-from-web-platform-normative-metrics.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0800",
        "type": "spec",
        "title": "SEO governance surface",
        "status": "draft",
        "description": "The SEO governance surface defines the baseline page and site signals required for general search eligibility, search-result quality, and accessible page consumption.",
        "sourcePath": ".ssot/specs/SPEC-0800-seo-governance-surface.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0801",
        "type": "spec",
        "title": "AEO answer surface contract",
        "status": "draft",
        "description": "The AEO answer surface defines requirements for content intended to be surfaced as direct or near-direct answers in answer systems.",
        "sourcePath": ".ssot/specs/SPEC-0801-aeo-answer-surface-contract.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0802",
        "type": "spec",
        "title": "AiEO citation and provenance contract",
        "status": "draft",
        "description": "The AiEO citation and provenance contract defines the minimum requirements for AI-consumable content to remain attributable and auditable.",
        "sourcePath": ".ssot/specs/SPEC-0802-aieo-citation-and-provenance-contract.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0803",
        "type": "spec",
        "title": "Robots exclusion protocol contract",
        "status": "draft",
        "description": "Defines how crawler access rules are authored and interpreted for governed sites.",
        "sourcePath": ".ssot/specs/SPEC-0803-robots-exclusion-protocol-contract.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0804",
        "type": "spec",
        "title": "Sitemap and sitemap-index contract",
        "status": "draft",
        "description": "Defines the governed discovery artifacts used to advertise canonical URLs and update boundaries.",
        "sourcePath": ".ssot/specs/SPEC-0804-sitemap-and-sitemap-index-contract.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0805",
        "type": "spec",
        "title": "HTML head metadata and canonical link contract",
        "status": "draft",
        "description": "Defines the required page-level metadata surfaces that search and answer systems consume directly from the document head.",
        "sourcePath": ".ssot/specs/SPEC-0805-html-head-metadata-and-canonical-link-contract.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0806",
        "type": "spec",
        "title": "Structured data vocabulary and encoding contract",
        "status": "draft",
        "description": "Defines how machine-readable content annotations are authored for governed pages.",
        "sourcePath": ".ssot/specs/SPEC-0806-structured-data-vocabulary-and-encoding-contract.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0807",
        "type": "spec",
        "title": "Google Search eligibility and structured data quality contract",
        "status": "draft",
        "description": "Defines the Google-specific baseline needed for search appearance eligibility, including rich-result eligibility where applicable.",
        "sourcePath": ".ssot/specs/SPEC-0807-google-search-eligibility-and-structured-data-quality-contract.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0808",
        "type": "spec",
        "title": "Google AI features eligibility contract",
        "status": "draft",
        "description": "Defines the minimum requirements for content intended to remain eligible for Google AI-assisted search surfaces.",
        "sourcePath": ".ssot/specs/SPEC-0808-google-ai-features-eligibility-contract.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0809",
        "type": "spec",
        "title": "Helpful, reliable, people-first content contract",
        "status": "draft",
        "description": "Defines the baseline editorial and authorship expectations for governed content.",
        "sourcePath": ".ssot/specs/SPEC-0809-helpful-reliable-people-first-content-contract.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0810",
        "type": "spec",
        "title": "WCAG 2.1 AA accessibility contract",
        "status": "draft",
        "description": "Defines WCAG 2.1 Level AA as the governed accessibility baseline for pages, templates, and answer surfaces covered by this pack.",
        "sourcePath": ".ssot/specs/SPEC-0810-wcag-2-1-aa-accessibility-contract.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0811",
        "type": "spec",
        "title": "Core Web Vitals performance contract",
        "status": "draft",
        "description": "Defines the governed Core Web Vitals user-experience targets that materially affect page usability and search-adjacent quality evaluation.",
        "sourcePath": ".ssot/specs/SPEC-0811-core-web-vitals-performance-contract.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0812",
        "type": "spec",
        "title": "Open Graph contract",
        "status": "draft",
        "description": "Defines the minimum social-graph metadata needed for consistent link-preview representation across Open Graph consumers.",
        "sourcePath": ".ssot/specs/SPEC-0812-open-graph-contract.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0813",
        "type": "spec",
        "title": "X / Twitter Cards contract",
        "status": "draft",
        "description": "Defines the metadata required for governed pages that target X or Twitter preview rendering.",
        "sourcePath": ".ssot/specs/SPEC-0813-x-twitter-cards-contract.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0814",
        "type": "spec",
        "title": "DCMI interoperable metadata contract",
        "status": "draft",
        "description": "Defines an optional metadata layer for governed content that benefits from archival, catalog, document, or cross-system interoperability.",
        "sourcePath": ".ssot/specs/SPEC-0814-dcmi-interoperable-metadata-contract.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0815",
        "type": "spec",
        "title": "OpenAI crawler controls contract",
        "status": "draft",
        "description": "Defines provider-specific crawler handling for OpenAI-operated automated access surfaces.",
        "sourcePath": ".ssot/specs/SPEC-0815-openai-crawler-controls-contract.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0816",
        "type": "spec",
        "title": "`llms.txt` experimental contract",
        "status": "draft",
        "description": "Defines the optional use of `llms.txt` as a curated machine-readable guide for AI-oriented consumption.",
        "sourcePath": ".ssot/specs/SPEC-0816-llmstxt-experimental-contract.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0817",
        "type": "spec",
        "title": "First Contentful Paint contract",
        "status": "draft",
        "description": "Defines the governed measurement semantics and operator expectations for First Contentful Paint using the W3C Paint Timing authority layer.",
        "sourcePath": ".ssot/specs/SPEC-0817-first-contentful-paint-contract.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0818",
        "type": "spec",
        "title": "Largest Contentful Paint contract",
        "status": "draft",
        "description": "Defines the governed measurement semantics and operator expectations for Largest Contentful Paint using the W3C Largest Contentful Paint authority layer.",
        "sourcePath": ".ssot/specs/SPEC-0818-largest-contentful-paint-contract.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0819",
        "type": "spec",
        "title": "Long Tasks responsiveness contract",
        "status": "draft",
        "description": "Defines the governed responsiveness and blocking-observation surface for long tasks using the W3C Long Tasks API authority layer.",
        "sourcePath": ".ssot/specs/SPEC-0819-long-tasks-responsiveness-contract.yaml",
        "introducedIn": "0.1.6"
      },
      {
        "id": "spc:0820",
        "type": "spec",
        "title": "Total Blocking Time operator contract",
        "status": "draft",
        "description": "Defines Total Blocking Time as a governed operator metric derived from long-task behavior and a tooling-defined reporting window, not as a standards-track web-platform metric.",
        "sourcePath": ".ssot/specs/SPEC-0820-total-blocking-time-operator-contract.yaml",
        "introducedIn": "0.1.6"
      }
    ],
    "metadata": {
      "version": "0.1.6",
      "license": "Apache-2.0",
      "author": "Jacob Stewart <jacob@swarmauri.com>",
      "published": "PyPI project metadata"
    },
    "bodyMd": "# SEO, AEO, and AiEO Governance Pack\n\nInstallable SSOT governance pack for SEO, AEO, and AiEO documents.\n\n- Package: `seo-aeo-aieo-governance-pack`\n- GitHub: https://github.com/groupsum/seo-aeo-aieo-governance-pack\n- PyPI: https://pypi.org/project/seo-aeo-aieo-governance-pack/\n- Sync surface: 21 specs and 12 ADRs\n- Origin id: `pack:seo-aeo-aieo-governance`\n\n## SSOT Pack Workflow\n\n```bash\nssot pack inspect seo-aeo-aieo-governance-pack\nssot pack preflight . seo-aeo-aieo-governance-pack\nssot pack sync . seo-aeo-aieo-governance-pack --trust --yes\n```\n\nThe synced rows are extension-pack ADR/SPEC documents. Downstream repositories keep their own repo-local ADRs and SPECs separate from these immutable imported documents."
  },
  "cache-freshness-governance-pack": {
    "slug": "cache-freshness-governance-pack",
    "name": "cache-freshness-governance-pack",
    "role": "Cache Freshness Governance Pack",
    "syncs": "1 specs, 1 ADRs",
    "reservedRange": "900-900 (ADR, SPEC)",
    "description": "Installable SSOT governance pack for HTTP caching and freshness governance documents.",
    "ghRepo": "https://github.com/groupsum/cache-freshness-governance-pack",
    "pypiLink": "https://pypi.org/project/cache-freshness-governance-pack/",
    "softwareApplications": [
      "ssot pack inspect",
      "ssot pack preflight",
      "ssot pack sync"
    ],
    "softwareSourceCode": [
      "cache-freshness-governance-pack",
      "ssot-pack-contracts>=0.2.17,<0.3.0"
    ],
    "questionsAndAnswers": [
      {
        "question": "What does this pack install?",
        "answer": "It installs immutable extension-pack ADR/SPEC documents declared by cache-freshness-governance-pack's packaged manifests."
      },
      {
        "question": "How is it synchronized?",
        "answer": "Use `ssot pack preflight . cache-freshness-governance-pack` before `ssot pack sync . cache-freshness-governance-pack --trust --yes` so compatibility and reserved document identities are checked before mutation."
      },
      {
        "question": "Where is the source of truth?",
        "answer": "The source repo is https://github.com/groupsum/cache-freshness-governance-pack; the PyPI project is https://pypi.org/project/cache-freshness-governance-pack/."
      }
    ],
    "entities": [
      {
        "id": "adr:0900",
        "type": "adr",
        "title": "Cache/freshness standards targets are reviewed before governance inclusion",
        "status": "active",
        "description": "This pack starts with a standards-target review phase.",
        "sourcePath": ".ssot/adr/ADR-0900-cache-freshness-standards-targets-reviewed-before-inclusion.yaml",
        "introducedIn": "0.1.4"
      },
      {
        "id": "spc:0900",
        "type": "spec",
        "title": "Cache/freshness governance target review",
        "status": "active",
        "description": "The pack SHALL maintain a standards target inventory before creating detailed cache/freshness ADRs and SPECs.",
        "sourcePath": ".ssot/specs/SPEC-0900-cache-freshness-governance-target-review.yaml",
        "introducedIn": "0.1.4"
      }
    ],
    "metadata": {
      "version": "0.1.4",
      "license": "Apache-2.0",
      "author": "Jacob Stewart <jacob@swarmauri.com>",
      "published": "PyPI project metadata"
    },
    "bodyMd": "# Cache Freshness Governance Pack\n\nInstallable SSOT governance pack for HTTP caching and freshness governance documents.\n\n- Package: `cache-freshness-governance-pack`\n- GitHub: https://github.com/groupsum/cache-freshness-governance-pack\n- PyPI: https://pypi.org/project/cache-freshness-governance-pack/\n- Sync surface: 1 specs and 1 ADRs\n- Origin id: `pack:cache-freshness-governance`\n\n## SSOT Pack Workflow\n\n```bash\nssot pack inspect cache-freshness-governance-pack\nssot pack preflight . cache-freshness-governance-pack\nssot pack sync . cache-freshness-governance-pack --trust --yes\n```\n\nThe synced rows are extension-pack ADR/SPEC documents. Downstream repositories keep their own repo-local ADRs and SPECs separate from these immutable imported documents."
  },
  "digital-signature-governance-pack": {
    "slug": "digital-signature-governance-pack",
    "name": "digital-signature-governance-pack",
    "role": "Digital Signature Governance Pack",
    "syncs": "1 specs, 1 ADRs",
    "reservedRange": "900-900 (ADR, SPEC)",
    "description": "Installable SSOT governance pack for digital-signature and container governance documents.",
    "ghRepo": "https://github.com/groupsum/digital-signature-governance-pack",
    "pypiLink": "https://pypi.org/project/digital-signature-governance-pack/",
    "softwareApplications": [
      "ssot pack inspect",
      "ssot pack preflight",
      "ssot pack sync"
    ],
    "softwareSourceCode": [
      "digital-signature-governance-pack",
      "ssot-pack-contracts>=0.2.17,<0.3.0"
    ],
    "questionsAndAnswers": [
      {
        "question": "What does this pack install?",
        "answer": "It installs immutable extension-pack ADR/SPEC documents declared by digital-signature-governance-pack's packaged manifests."
      },
      {
        "question": "How is it synchronized?",
        "answer": "Use `ssot pack preflight . digital-signature-governance-pack` before `ssot pack sync . digital-signature-governance-pack --trust --yes` so compatibility and reserved document identities are checked before mutation."
      },
      {
        "question": "Where is the source of truth?",
        "answer": "The source repo is https://github.com/groupsum/digital-signature-governance-pack; the PyPI project is https://pypi.org/project/digital-signature-governance-pack/."
      }
    ],
    "entities": [
      {
        "id": "adr:0900",
        "type": "adr",
        "title": "Digital-signature standards targets are reviewed before governance inclusion",
        "status": "active",
        "description": "This pack starts with a standards-target review phase.",
        "sourcePath": ".ssot/adr/ADR-0900-digital-signature-standards-targets-reviewed-before-inclusion.yaml",
        "introducedIn": "0.1.3"
      },
      {
        "id": "spc:0900",
        "type": "spec",
        "title": "Digital-signature governance target review",
        "status": "active",
        "description": "The pack SHALL maintain a standards target inventory before creating detailed digital-signature ADRs and SPECs.",
        "sourcePath": ".ssot/specs/SPEC-0900-digital-signature-governance-target-review.yaml",
        "introducedIn": "0.1.3"
      }
    ],
    "metadata": {
      "version": "0.1.3",
      "license": "Apache-2.0",
      "author": "Jacob Stewart <jacob@swarmauri.com>",
      "published": "PyPI project metadata"
    },
    "bodyMd": "# Digital Signature Governance Pack\n\nInstallable SSOT governance pack for digital-signature and container governance documents.\n\n- Package: `digital-signature-governance-pack`\n- GitHub: https://github.com/groupsum/digital-signature-governance-pack\n- PyPI: https://pypi.org/project/digital-signature-governance-pack/\n- Sync surface: 1 specs and 1 ADRs\n- Origin id: `pack:digital-signature-governance`\n\n## SSOT Pack Workflow\n\n```bash\nssot pack inspect digital-signature-governance-pack\nssot pack preflight . digital-signature-governance-pack\nssot pack sync . digital-signature-governance-pack --trust --yes\n```\n\nThe synced rows are extension-pack ADR/SPEC documents. Downstream repositories keep their own repo-local ADRs and SPECs separate from these immutable imported documents."
  },
  "url-query-attribution-foundations-governance-pack": {
    "slug": "url-query-attribution-foundations-governance-pack",
    "name": "url-query-attribution-foundations-governance-pack",
    "role": "URL, Query, Referrer, And Campaign Parameter Foundations",
    "syncs": "12 specs, 6 ADRs",
    "reservedRange": "ADR, SPEC",
    "description": "Installable SSOT governance pack for URL query parameters, referrer context, UTM conventions, and campaign attribution capture.",
    "ghRepo": "https://github.com/groupsum/url-query-attribution-foundations-governance-pack",
    "pypiLink": "https://pypi.org/project/url-query-attribution-foundations-governance-pack/",
    "softwareApplications": [
      "ssot pack inspect",
      "ssot pack preflight",
      "ssot pack sync"
    ],
    "softwareSourceCode": [
      "url-query-attribution-foundations-governance-pack",
      "ssot-pack-contracts>=0.2.17,<0.3.0",
      "tomli>=2.0.1; python_version < '3.11'"
    ],
    "questionsAndAnswers": [
      {
        "question": "What does this pack install?",
        "answer": "It installs immutable extension-pack ADR/SPEC documents declared by url-query-attribution-foundations-governance-pack's packaged manifests."
      },
      {
        "question": "How is it synchronized?",
        "answer": "Use `ssot pack preflight . url-query-attribution-foundations-governance-pack` before `ssot pack sync . url-query-attribution-foundations-governance-pack --trust --yes` so compatibility and reserved document identities are checked before mutation."
      },
      {
        "question": "Where is the source of truth?",
        "answer": "The source repo is https://github.com/groupsum/url-query-attribution-foundations-governance-pack; the PyPI project is https://pypi.org/project/url-query-attribution-foundations-governance-pack/."
      }
    ],
    "entities": [
      {
        "id": "adr:uri-query-attribution-boundary",
        "type": "adr",
        "title": "URI Query Attribution Boundary",
        "status": "active",
        "description": "This repository treats attribution-relevant query handling as a governed boundary between URL syntax and application-defined campaign semantics.",
        "sourcePath": ".ssot/adr/ADR-1001-uri-query-attribution-boundary.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "adr:campaign-parameter-semantics-authority",
        "type": "adr",
        "title": "Campaign Parameter Semantics Authority",
        "status": "active",
        "description": "This repository treats Google Analytics campaign URL parameter documentation as the practical authority for UTM campaign parameter semantics.",
        "sourcePath": ".ssot/adr/ADR-1002-campaign-parameter-semantics-authority.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "adr:traffic-source-classification-policy",
        "type": "adr",
        "title": "Traffic Source Classification Policy",
        "status": "active",
        "description": "This repository treats traffic-source and channel classification as governed attribution outputs derived from campaign, referrer, and request context.",
        "sourcePath": ".ssot/adr/ADR-1003-traffic-source-classification-policy.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "adr:referrer-observability-policy",
        "type": "adr",
        "title": "Referrer Observability Policy",
        "status": "active",
        "description": "This repository treats referrer information as attribution observability context, not as guaranteed attribution input.",
        "sourcePath": ".ssot/adr/ADR-1004-referrer-observability-policy.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "adr:attribution-state-context-policy",
        "type": "adr",
        "title": "Attribution State Context Policy",
        "status": "active",
        "description": "This repository treats cookies and Web Storage as attribution state carriers when a downstream implementation chooses to persist attribution context.",
        "sourcePath": ".ssot/adr/ADR-1005-attribution-state-context-policy.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "adr:http-metadata-discovery-policy",
        "type": "adr",
        "title": "HTTP Metadata Discovery Policy",
        "status": "active",
        "description": "This repository treats well-known URIs and structured HTTP fields as optional attribution metadata discovery mechanisms.",
        "sourcePath": ".ssot/adr/ADR-1006-http-metadata-discovery-policy.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:uri-query-syntax-requirements",
        "type": "spec",
        "title": "URI Query Syntax Requirements",
        "status": "active",
        "description": "Implementations MUST parse attribution-relevant landing-page URLs using a declared URI or URL parser authority.",
        "sourcePath": ".ssot/specs/SPEC-2001-uri-query-syntax-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:campaign-query-parameter-requirements",
        "type": "spec",
        "title": "Campaign Query Parameter Requirements",
        "status": "active",
        "description": "Implementations MUST recognize utm_source, utm_medium, utm_campaign, utm_id, utm_term, and utm_content when those fields are in downstream scope.",
        "sourcePath": ".ssot/specs/SPEC-2002-campaign-query-parameter-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:ga4-traffic-source-mapping-requirements",
        "type": "spec",
        "title": "GA4 Traffic Source Mapping Requirements",
        "status": "active",
        "description": "Implementations MUST identify which captured campaign fields are mapped into GA4 traffic-source concepts.",
        "sourcePath": ".ssot/specs/SPEC-2003-ga4-traffic-source-mapping-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:default-channel-classification-requirements",
        "type": "spec",
        "title": "Default Channel Classification Requirements",
        "status": "active",
        "description": "Implementations MUST define the channel classification target set they claim to support.",
        "sourcePath": ".ssot/specs/SPEC-2004-default-channel-classification-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:http-request-attribution-context-requirements",
        "type": "spec",
        "title": "HTTP Request Attribution Context Requirements",
        "status": "active",
        "description": "Implementations MUST identify which HTTP request and response fields are attribution inputs.",
        "sourcePath": ".ssot/specs/SPEC-2005-http-request-attribution-context-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:referrer-policy-observability-requirements",
        "type": "spec",
        "title": "Referrer Policy Observability Requirements",
        "status": "active",
        "description": "Implementations MUST represent full referrer, reduced referrer, origin-only referrer, absent referrer, and intentionally suppressed referrer as distinguishable evidence states when observable.",
        "sourcePath": ".ssot/specs/SPEC-2006-referrer-policy-observability-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:fetch-navigation-attribution-context-requirements",
        "type": "spec",
        "title": "Fetch And Navigation Attribution Context Requirements",
        "status": "active",
        "description": "Implementations MUST distinguish browser navigation context from server-observed HTTP request context.",
        "sourcePath": ".ssot/specs/SPEC-2007-fetch-navigation-attribution-context-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:cookie-attribution-state-requirements",
        "type": "spec",
        "title": "Cookie Attribution State Requirements",
        "status": "active",
        "description": "Implementations MUST define the cookie fields or cookie-derived fields used as attribution state.",
        "sourcePath": ".ssot/specs/SPEC-2008-cookie-attribution-state-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:web-storage-attribution-state-requirements",
        "type": "spec",
        "title": "Web Storage Attribution State Requirements",
        "status": "active",
        "description": "Implementations MUST distinguish localStorage-backed attribution state from sessionStorage-backed attribution state.",
        "sourcePath": ".ssot/specs/SPEC-2009-web-storage-attribution-state-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:http-caching-attribution-observability-requirements",
        "type": "spec",
        "title": "HTTP Caching Attribution Observability Requirements",
        "status": "active",
        "description": "Implementations MUST identify whether cached responses can affect attribution context capture or evidence production.",
        "sourcePath": ".ssot/specs/SPEC-2010-http-caching-attribution-observability-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:structured-field-attribution-metadata-requirements",
        "type": "spec",
        "title": "Structured Field Attribution Metadata Requirements",
        "status": "active",
        "description": "Implementations MUST use RFC 8941 parsing and serialization rules for attribution metadata represented as structured HTTP fields.",
        "sourcePath": ".ssot/specs/SPEC-2011-structured-field-attribution-metadata-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:well-known-attribution-metadata-requirements",
        "type": "spec",
        "title": "Well-Known Attribution Metadata Requirements",
        "status": "active",
        "description": "Implementations MUST declare whether well-known attribution metadata discovery is supported, unsupported, or out of scope.",
        "sourcePath": ".ssot/specs/SPEC-2012-well-known-attribution-metadata-requirements.yaml",
        "introducedIn": "0.1.1"
      }
    ],
    "metadata": {
      "version": "0.1.1",
      "license": "Apache-2.0",
      "author": "Jacob Stewart <jacob@swarmauri.com>",
      "published": "PyPI project metadata"
    },
    "bodyMd": "# URL, Query, Referrer, And Campaign Parameter Foundations\n\nInstallable SSOT governance pack for URL query parameters, referrer context, UTM conventions, and campaign attribution capture.\n\n- Package: `url-query-attribution-foundations-governance-pack`\n- GitHub: https://github.com/groupsum/url-query-attribution-foundations-governance-pack\n- PyPI: https://pypi.org/project/url-query-attribution-foundations-governance-pack/\n- Sync surface: 12 specs and 6 ADRs\n- Origin id: `pack:url-query-attribution-foundations`\n\n## SSOT Pack Workflow\n\n```bash\nssot pack inspect url-query-attribution-foundations-governance-pack\nssot pack preflight . url-query-attribution-foundations-governance-pack\nssot pack sync . url-query-attribution-foundations-governance-pack --trust --yes\n```\n\nThe synced rows are extension-pack ADR/SPEC documents. Downstream repositories keep their own repo-local ADRs and SPECs separate from these immutable imported documents."
  },
  "marketing-attribution-conversion-governance-pack": {
    "slug": "marketing-attribution-conversion-governance-pack",
    "name": "marketing-attribution-conversion-governance-pack",
    "role": "Marketing Attribution And Conversion Measurement",
    "syncs": "18 specs, 10 ADRs",
    "reservedRange": "ADR, SPEC",
    "description": "Installable SSOT governance pack for attribution reporting, click IDs, tracking templates, offline conversions, conversion APIs, ECAPI, and ADMaP.",
    "ghRepo": "https://github.com/groupsum/marketing-attribution-conversion-governance-pack",
    "pypiLink": "https://pypi.org/project/marketing-attribution-conversion-governance-pack/",
    "softwareApplications": [
      "ssot pack inspect",
      "ssot pack preflight",
      "ssot pack sync"
    ],
    "softwareSourceCode": [
      "marketing-attribution-conversion-governance-pack",
      "ssot-pack-contracts>=0.2.17,<0.3.0",
      "tomli>=2.0.1; python_version < '3.11'"
    ],
    "questionsAndAnswers": [
      {
        "question": "What does this pack install?",
        "answer": "It installs immutable extension-pack ADR/SPEC documents declared by marketing-attribution-conversion-governance-pack's packaged manifests."
      },
      {
        "question": "How is it synchronized?",
        "answer": "Use `ssot pack preflight . marketing-attribution-conversion-governance-pack` before `ssot pack sync . marketing-attribution-conversion-governance-pack --trust --yes` so compatibility and reserved document identities are checked before mutation."
      },
      {
        "question": "Where is the source of truth?",
        "answer": "The source repo is https://github.com/groupsum/marketing-attribution-conversion-governance-pack; the PyPI project is https://pypi.org/project/marketing-attribution-conversion-governance-pack/."
      }
    ],
    "entities": [
      {
        "id": "adr:browser-attribution-reporting-policy",
        "type": "adr",
        "title": "Browser Attribution Reporting Policy",
        "status": "active",
        "description": "Document whether browser attribution reporting is used for downstream conversion measurement.",
        "sourcePath": ".ssot/adr/ADR-1001-browser-attribution-reporting-policy.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "adr:click-id-capture-and-retention-policy",
        "type": "adr",
        "title": "Click ID Capture And Retention Policy",
        "status": "active",
        "description": "Document accepted click identifiers and the surfaces where they are captured.",
        "sourcePath": ".ssot/adr/ADR-1002-click-id-capture-and-retention-policy.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "adr:tracking-template-parameter-policy",
        "type": "adr",
        "title": "Tracking Template Parameter Policy",
        "status": "active",
        "description": "Document accepted tracking-template parameters and final URL suffix behavior.",
        "sourcePath": ".ssot/adr/ADR-1003-tracking-template-parameter-policy.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "adr:offline-conversion-upload-policy",
        "type": "adr",
        "title": "Offline Conversion Upload Policy",
        "status": "active",
        "description": "Document which offline conversion upload APIs are used downstream.",
        "sourcePath": ".ssot/adr/ADR-1004-offline-conversion-upload-policy.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "adr:enhanced-conversion-identifier-policy",
        "type": "adr",
        "title": "Enhanced Conversion Identifier Policy",
        "status": "active",
        "description": "Document whether hashed first-party identifiers are used for conversion matching.",
        "sourcePath": ".ssot/adr/ADR-1005-enhanced-conversion-identifier-policy.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "adr:server-conversion-api-policy",
        "type": "adr",
        "title": "Server Conversion API Policy",
        "status": "active",
        "description": "Document the selected server conversion APIs and their governed event payload requirements.",
        "sourcePath": ".ssot/adr/ADR-1006-server-conversion-api-policy.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "adr:conversion-consent-and-privacy-policy",
        "type": "adr",
        "title": "Conversion Consent And Privacy Policy",
        "status": "active",
        "description": "Document consent and privacy fields required by each selected conversion authority.",
        "sourcePath": ".ssot/adr/ADR-1007-conversion-consent-and-privacy-policy.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "adr:clean-room-attribution-protocol-policy",
        "type": "adr",
        "title": "Clean Room Attribution Protocol Policy",
        "status": "active",
        "description": "Document whether clean-room attribution protocols govern downstream attribution measurement.",
        "sourcePath": ".ssot/adr/ADR-1008-clean-room-attribution-protocol-policy.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "adr:industry-conversion-event-protocol-policy",
        "type": "adr",
        "title": "Industry Conversion Event Protocol Policy",
        "status": "active",
        "description": "Document whether an industry conversion event protocol is a downstream interoperability target.",
        "sourcePath": ".ssot/adr/ADR-1009-industry-conversion-event-protocol-policy.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "adr:click-measurement-quality-policy",
        "type": "adr",
        "title": "Click Measurement Quality Policy",
        "status": "active",
        "description": "Document click measurement quality controls where downstream attribution relies on click counts or clickthrough evidence.",
        "sourcePath": ".ssot/adr/ADR-1010-click-measurement-quality-policy.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:w3c-attribution-reporting-requirements",
        "type": "spec",
        "title": "W3C Attribution Reporting Requirements",
        "status": "active",
        "description": "Document source and trigger registration behavior for governed attribution flows.",
        "sourcePath": ".ssot/specs/SPEC-2001-w3c-attribution-reporting-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:google-ads-auto-tagging-click-id-requirements",
        "type": "spec",
        "title": "Google Ads Auto-Tagging Click ID Requirements",
        "status": "active",
        "description": "Document which Google click identifiers are accepted and where they are captured.",
        "sourcePath": ".ssot/specs/SPEC-2002-google-ads-auto-tagging-click-id-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:google-ads-valuetrack-parameter-requirements",
        "type": "spec",
        "title": "Google Ads ValueTrack Parameter Requirements",
        "status": "active",
        "description": "Inventory accepted ValueTrack parameters and local handling rules.",
        "sourcePath": ".ssot/specs/SPEC-2003-google-ads-valuetrack-parameter-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:google-ads-click-conversion-upload-requirements",
        "type": "spec",
        "title": "Google Ads Click Conversion Upload Requirements",
        "status": "active",
        "description": "Validate required click conversion upload fields before dispatch.",
        "sourcePath": ".ssot/specs/SPEC-2004-google-ads-click-conversion-upload-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:google-ads-enhanced-conversion-lead-requirements",
        "type": "spec",
        "title": "Google Ads Enhanced Conversion Lead Requirements",
        "status": "active",
        "description": "Document supported enhanced conversion identifiers and normalization rules.",
        "sourcePath": ".ssot/specs/SPEC-2005-google-ads-enhanced-conversion-lead-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:microsoft-uet-capi-requirements",
        "type": "spec",
        "title": "Microsoft UET CAPI Requirements",
        "status": "active",
        "description": "Document UET CAPI event payload fields and required identifiers.",
        "sourcePath": ".ssot/specs/SPEC-2006-microsoft-uet-capi-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:microsoft-offline-conversion-requirements",
        "type": "spec",
        "title": "Microsoft Offline Conversion Requirements",
        "status": "active",
        "description": "Validate OfflineConversion fields before upload.",
        "sourcePath": ".ssot/specs/SPEC-2007-microsoft-offline-conversion-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:microsoft-url-tracking-requirements",
        "type": "spec",
        "title": "Microsoft URL Tracking Requirements",
        "status": "active",
        "description": "Document Microsoft tracking templates and final URL suffix behavior.",
        "sourcePath": ".ssot/specs/SPEC-2008-microsoft-url-tracking-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:meta-conversions-api-requirements",
        "type": "spec",
        "title": "Meta Conversions API Requirements",
        "status": "active",
        "description": "Validate Meta CAPI event payload fields before dispatch.",
        "sourcePath": ".ssot/specs/SPEC-2009-meta-conversions-api-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:meta-pixel-conversion-event-requirements",
        "type": "spec",
        "title": "Meta Pixel Conversion Event Requirements",
        "status": "active",
        "description": "Document pixel conversion event names and parameters.",
        "sourcePath": ".ssot/specs/SPEC-2010-meta-pixel-conversion-event-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:tiktok-events-api-requirements",
        "type": "spec",
        "title": "TikTok Events API Requirements",
        "status": "active",
        "description": "Document selected TikTok event source types and event payload fields.",
        "sourcePath": ".ssot/specs/SPEC-2011-tiktok-events-api-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:linkedin-conversions-api-requirements",
        "type": "spec",
        "title": "LinkedIn Conversions API Requirements",
        "status": "active",
        "description": "Document LinkedIn conversion rules and event payload requirements.",
        "sourcePath": ".ssot/specs/SPEC-2012-linkedin-conversions-api-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:linkedin-conversion-source-requirements",
        "type": "spec",
        "title": "LinkedIn Conversion Source Requirements",
        "status": "active",
        "description": "Classify each LinkedIn conversion source used downstream.",
        "sourcePath": ".ssot/specs/SPEC-2013-linkedin-conversion-source-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:iab-ecapi-conversion-event-requirements",
        "type": "spec",
        "title": "IAB ECAPI Conversion Event Requirements",
        "status": "active",
        "description": "Document ECAPI event and conversion fields represented downstream.",
        "sourcePath": ".ssot/specs/SPEC-2014-iab-ecapi-conversion-event-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:iab-admap-clean-room-attribution-requirements",
        "type": "spec",
        "title": "IAB ADMaP Clean Room Attribution Requirements",
        "status": "active",
        "description": "Document clean-room parties, input datasets, matching keys, privacy controls, and attribution outputs.",
        "sourcePath": ".ssot/specs/SPEC-2015-iab-admap-clean-room-attribution-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:iab-click-measurement-quality-requirements",
        "type": "spec",
        "title": "IAB Click Measurement Quality Requirements",
        "status": "active",
        "description": "Document valid click lifecycle and filtration controls.",
        "sourcePath": ".ssot/specs/SPEC-2016-iab-click-measurement-quality-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:iab-video-ad-measurement-requirements",
        "type": "spec",
        "title": "IAB Video Ad Measurement Requirements",
        "status": "active",
        "description": "Document video ad exposure or measurement evidence used for conversion attribution.",
        "sourcePath": ".ssot/specs/SPEC-2017-iab-video-ad-measurement-requirements.yaml",
        "introducedIn": "0.1.1"
      },
      {
        "id": "spc:mrc-measurement-quality-reference-requirements",
        "type": "spec",
        "title": "MRC Measurement Quality Reference Requirements",
        "status": "active",
        "description": "Document MRC measurement-quality references selected for downstream attribution evidence.",
        "sourcePath": ".ssot/specs/SPEC-2018-mrc-measurement-quality-reference-requirements.yaml",
        "introducedIn": "0.1.1"
      }
    ],
    "metadata": {
      "version": "0.1.1",
      "license": "Apache-2.0",
      "author": "Jacob Stewart <jacob@swarmauri.com>",
      "published": "PyPI project metadata"
    },
    "bodyMd": "# Marketing Attribution And Conversion Measurement\n\nInstallable SSOT governance pack for attribution reporting, click IDs, tracking templates, offline conversions, conversion APIs, ECAPI, and ADMaP.\n\n- Package: `marketing-attribution-conversion-governance-pack`\n- GitHub: https://github.com/groupsum/marketing-attribution-conversion-governance-pack\n- PyPI: https://pypi.org/project/marketing-attribution-conversion-governance-pack/\n- Sync surface: 18 specs and 10 ADRs\n- Origin id: `pack:marketing-attribution-conversion`\n\n## SSOT Pack Workflow\n\n```bash\nssot pack inspect marketing-attribution-conversion-governance-pack\nssot pack preflight . marketing-attribution-conversion-governance-pack\nssot pack sync . marketing-attribution-conversion-governance-pack --trust --yes\n```\n\nThe synced rows are extension-pack ADR/SPEC documents. Downstream repositories keep their own repo-local ADRs and SPECs separate from these immutable imported documents."
  },
  "authentication-governance-pack": {
    "slug": "authentication-governance-pack",
    "name": "authentication-governance-pack",
    "role": "Authentication Governance",
    "syncs": "16 specs, 13 ADRs",
    "reservedRange": "800-800 (ADR, SPEC)",
    "description": "Installable SSOT governance pack for digital identity proofing, authenticator assurance, federation assurance, credential lifecycle, session security, WebAuthn/FIDO authenticators, OIDC authentication claims, and authentication evidence.",
    "ghRepo": "https://github.com/groupsum/authentication-governance-pack",
    "pypiLink": "https://pypi.org/project/authentication-governance-pack/",
    "softwareApplications": [
      "ssot pack inspect",
      "ssot pack preflight",
      "ssot pack sync"
    ],
    "softwareSourceCode": [
      "authentication-governance-pack",
      "ssot-pack-contracts>=0.2.17,<0.3.0",
      "tomli>=2.0.1; python_version < '3.11'"
    ],
    "questionsAndAnswers": [
      {
        "question": "What does this pack install?",
        "answer": "It installs immutable extension-pack ADR/SPEC documents declared by authentication-governance-pack's packaged manifests."
      },
      {
        "question": "How is it synchronized?",
        "answer": "Use `ssot pack preflight . authentication-governance-pack` before `ssot pack sync . authentication-governance-pack --trust --yes` so compatibility and reserved document identities are checked before mutation."
      },
      {
        "question": "Where is the source of truth?",
        "answer": "The source repo is https://github.com/groupsum/authentication-governance-pack; the PyPI project is https://pypi.org/project/authentication-governance-pack/."
      }
    ],
    "entities": [
      {
        "id": "adr:authentication-establishes-claimant-control-not-resource-access",
        "type": "adr",
        "title": "Authentication Establishes Claimant Control Not Resource Access",
        "status": "active",
        "description": "Authentication establishes that a claimant controls authenticators bound to a subscriber account; it does not decide resource access.",
        "sourcePath": ".ssot/adr/ADR-1000-authentication-establishes-claimant-control-not-resource-access.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:nist-800-63-assurance-levels-separate-ial-aal-and-fal",
        "type": "adr",
        "title": "NIST 800 63 Assurance Levels Separate IAL AAL And FAL",
        "status": "active",
        "description": "Digital identity assurance must keep identity proofing, authenticator strength, and federation assertion protection separate.",
        "sourcePath": ".ssot/adr/ADR-1001-nist-800-63-assurance-levels-separate-ial-aal-and-fal.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:identity-proofing-and-enrollment-govern-subscriber-binding",
        "type": "adr",
        "title": "Identity Proofing And Enrollment Govern Subscriber Binding",
        "status": "active",
        "description": "Identity proofing and enrollment govern how an applicant becomes a subscriber and how evidence is bound to the account.",
        "sourcePath": ".ssot/adr/ADR-1002-identity-proofing-and-enrollment-govern-subscriber-binding.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:authenticators-verifiers-and-authentication-events-govern-aal",
        "type": "adr",
        "title": "Authenticators Verifiers And Authentication Events Govern AAL",
        "status": "active",
        "description": "AAL is governed by authenticator properties, verifier behavior, channel protections, and event handling.",
        "sourcePath": ".ssot/adr/ADR-1003-authenticators-verifiers-and-authentication-events-govern-aal.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:federation-assertions-govern-fal",
        "type": "adr",
        "title": "Federation Assertions Govern FAL",
        "status": "active",
        "description": "FAL is governed by assertion protection, issuer trust, relying-party validation, and federation protocol handling.",
        "sourcePath": ".ssot/adr/ADR-1004-federation-assertions-govern-fal.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:oidc-id-tokens-represent-authentication-events",
        "type": "adr",
        "title": "OIDC ID Tokens Represent Authentication Events",
        "status": "active",
        "description": "OIDC ID Tokens and authentication claims represent authentication events and federation context, not application access grants.",
        "sourcePath": ".ssot/adr/ADR-1005-oidc-id-tokens-represent-authentication-events.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:passkeys-webauthn-and-fido-govern-phishing-resistant-authentication",
        "type": "adr",
        "title": "Passkeys WebAuthn And FIDO Govern Phishing Resistant Authentication",
        "status": "active",
        "description": "Passkeys, WebAuthn, and FIDO authenticators govern phishing-resistant authentication through origin binding and authenticator-backed assertions.",
        "sourcePath": ".ssot/adr/ADR-1006-passkeys-webauthn-and-fido-govern-phishing-resistant-authentication.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:authenticator-lifecycle-governs-binding-rotation-and-revocation",
        "type": "adr",
        "title": "Authenticator Lifecycle Governs Binding Rotation And Revocation",
        "status": "active",
        "description": "Authenticator enrollment, binding, reset, replacement, suspension, and revocation are governed authentication lifecycle events.",
        "sourcePath": ".ssot/adr/ADR-1007-authenticator-lifecycle-governs-binding-rotation-and-revocation.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:session-lifecycle-governs-continuity-and-reauthentication",
        "type": "adr",
        "title": "Session Lifecycle Governs Continuity And Reauthentication",
        "status": "active",
        "description": "Session lifecycle governs how authenticated state is created, maintained, refreshed, stepped up, and ended.",
        "sourcePath": ".ssot/adr/ADR-1008-session-lifecycle-governs-continuity-and-reauthentication.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:account-recovery-governs-assurance-preservation",
        "type": "adr",
        "title": "Account Recovery Governs Assurance Preservation",
        "status": "active",
        "description": "Account recovery and reset flows must preserve target assurance and must not become weaker alternate login paths.",
        "sourcePath": ".ssot/adr/ADR-1009-account-recovery-governs-assurance-preservation.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:step-up-and-risk-signals-govern-authentication-strengthening",
        "type": "adr",
        "title": "Step Up And Risk Signals Govern Authentication Strengthening",
        "status": "active",
        "description": "Step-up and risk-based authentication govern when a fresh or stronger authentication event is required.",
        "sourcePath": ".ssot/adr/ADR-1010-step-up-and-risk-signals-govern-authentication-strengthening.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:authentication-failure-handling-governs-throttling-lockout-and-abuse-resistance",
        "type": "adr",
        "title": "Authentication Failure Handling Governs Throttling Lockout And Abuse Resistance",
        "status": "active",
        "description": "Authentication failure handling must resist online guessing, enumeration, replay, fatigue, and recovery abuse.",
        "sourcePath": ".ssot/adr/ADR-1011-authentication-failure-handling-governs-throttling-lockout-and-abuse-resistance.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:authentication-evidence-governs-release-readiness",
        "type": "adr",
        "title": "Authentication Evidence Governs Release Readiness",
        "status": "active",
        "description": "Authentication releases require evidence for assurance targets, positive paths, negative paths, lifecycle events, and failure modes.",
        "sourcePath": ".ssot/adr/ADR-1012-authentication-evidence-governs-release-readiness.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:authentication-boundary-contract",
        "type": "spec",
        "title": "Authentication Boundary Contract",
        "status": "active",
        "description": "Defines the boundary between authentication, session continuity, federation assertions, recovery, and resource-access policy.",
        "sourcePath": ".ssot/specs/SPEC-2000-authentication-boundary-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:digital-identity-assurance-level-contract",
        "type": "spec",
        "title": "Digital Identity Assurance Level Contract",
        "status": "active",
        "description": "Defines how IAL, AAL, and FAL are declared, separated, evaluated, and evidenced.",
        "sourcePath": ".ssot/specs/SPEC-2001-digital-identity-assurance-level-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:identity-proofing-enrollment-and-subscriber-binding-contract",
        "type": "spec",
        "title": "Identity Proofing Enrollment And Subscriber Binding Contract",
        "status": "active",
        "description": "Defines requirements for identity proofing, enrollment, account creation, subscriber binding, and redress.",
        "sourcePath": ".ssot/specs/SPEC-2002-identity-proofing-enrollment-and-subscriber-binding-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:authenticator-assurance-level-contract",
        "type": "spec",
        "title": "Authenticator Assurance Level Contract",
        "status": "active",
        "description": "Defines AAL requirements for authenticators, activation, verifier behavior, and authentication events.",
        "sourcePath": ".ssot/specs/SPEC-2003-authenticator-assurance-level-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:verifier-authentication-event-contract",
        "type": "spec",
        "title": "Verifier Authentication Event Contract",
        "status": "active",
        "description": "Defines verifier-side requirements for challenges, assertions, event recording, and assurance outcomes.",
        "sourcePath": ".ssot/specs/SPEC-2004-verifier-authentication-event-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:federation-assurance-and-assertion-contract",
        "type": "spec",
        "title": "Federation Assurance And Assertion Contract",
        "status": "active",
        "description": "Defines FAL requirements for issuer trust, assertion validation, subject binding, and relying-party acceptance.",
        "sourcePath": ".ssot/specs/SPEC-2005-federation-assurance-and-assertion-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:oidc-authentication-claims-contract",
        "type": "spec",
        "title": "OIDC Authentication Claims Contract",
        "status": "active",
        "description": "Defines OIDC ID Token and authentication-claim validation requirements.",
        "sourcePath": ".ssot/specs/SPEC-2006-oidc-authentication-claims-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:webauthn-fido-passkey-contract",
        "type": "spec",
        "title": "WebAuthn FIDO Passkey Contract",
        "status": "active",
        "description": "Defines WebAuthn, FIDO, and passkey requirements for registration and assertion validation.",
        "sourcePath": ".ssot/specs/SPEC-2007-webauthn-fido-passkey-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:authenticator-lifecycle-contract",
        "type": "spec",
        "title": "Authenticator Lifecycle Contract",
        "status": "active",
        "description": "Defines requirements for authenticator enrollment, binding, replacement, reset, suspension, revocation, and compromise response.",
        "sourcePath": ".ssot/specs/SPEC-2008-authenticator-lifecycle-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:session-lifecycle-reauthentication-and-logout-contract",
        "type": "spec",
        "title": "Session Lifecycle Reauthentication And Logout Contract",
        "status": "active",
        "description": "Defines session creation, renewal, timeout, reauthentication, step-up continuity, logout, and invalidation requirements.",
        "sourcePath": ".ssot/specs/SPEC-2009-session-lifecycle-reauthentication-and-logout-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:account-recovery-reset-and-assurance-contract",
        "type": "spec",
        "title": "Account Recovery Reset And Assurance Contract",
        "status": "active",
        "description": "Defines account recovery, reset, and assurance-preservation requirements.",
        "sourcePath": ".ssot/specs/SPEC-2010-account-recovery-reset-and-assurance-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:step-up-risk-and-freshness-contract",
        "type": "spec",
        "title": "Step Up Risk And Freshness Contract",
        "status": "active",
        "description": "Defines step-up, risk-based trigger, and authentication freshness requirements.",
        "sourcePath": ".ssot/specs/SPEC-2011-step-up-risk-and-freshness-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:authentication-failure-throttling-and-abuse-contract",
        "type": "spec",
        "title": "Authentication Failure Throttling And Abuse Contract",
        "status": "active",
        "description": "Defines requirements for failed authentication attempts, rate limiting, lockout, enumeration resistance, and abuse handling.",
        "sourcePath": ".ssot/specs/SPEC-2012-authentication-failure-throttling-and-abuse-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:phishing-resistant-authentication-contract",
        "type": "spec",
        "title": "Phishing Resistant Authentication Contract",
        "status": "active",
        "description": "Defines phishing-resistant authentication requirements across authenticators, verifier behavior, and relying-party context.",
        "sourcePath": ".ssot/specs/SPEC-2013-phishing-resistant-authentication-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:authentication-audit-and-evidence-contract",
        "type": "spec",
        "title": "Authentication Audit And Evidence Contract",
        "status": "active",
        "description": "Defines audit and evidence requirements for authentication, enrollment, federation, session, recovery, and lifecycle events.",
        "sourcePath": ".ssot/specs/SPEC-2014-authentication-audit-and-evidence-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:authentication-release-gate-contract",
        "type": "spec",
        "title": "Authentication Release Gate Contract",
        "status": "active",
        "description": "Defines release gates for assurance targets, negative paths, lifecycle behavior, and failure modes.",
        "sourcePath": ".ssot/specs/SPEC-2015-authentication-release-gate-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      }
    ],
    "metadata": {
      "version": "0.1.1.dev1",
      "license": "Apache-2.0",
      "author": "Jacob Stewart <jacob@swarmauri.com>",
      "published": "PyPI project metadata"
    },
    "bodyMd": "# Authentication Governance\n\nInstallable SSOT governance pack for digital identity proofing, authenticator assurance, federation assurance, credential lifecycle, session security, WebAuthn/FIDO authenticators, OIDC authentication claims, and authentication evidence.\n\n- Package: `authentication-governance-pack`\n- GitHub: https://github.com/groupsum/authentication-governance-pack\n- PyPI: https://pypi.org/project/authentication-governance-pack/\n- Sync surface: 16 specs and 13 ADRs\n- Origin id: `pack:authentication`\n\n## SSOT Pack Workflow\n\n```bash\nssot pack inspect authentication-governance-pack\nssot pack preflight . authentication-governance-pack\nssot pack sync . authentication-governance-pack --trust --yes\n```\n\nThe synced rows are extension-pack ADR/SPEC documents. Downstream repositories keep their own repo-local ADRs and SPECs separate from these immutable imported documents."
  },
  "authorization-policy-governance-pack": {
    "slug": "authorization-policy-governance-pack",
    "name": "authorization-policy-governance-pack",
    "role": "Authorization Policy Governance",
    "syncs": "16 specs, 12 ADRs",
    "reservedRange": "ADR, SPEC",
    "description": "Installable SSOT governance pack for authorization policy, OAuth scopes, access-token validation, permissions, entitlements, access-control models, PDP/PEP architecture, policy gateways, and policy-as-code.",
    "ghRepo": "https://github.com/groupsum/authorization-policy-governance-pack",
    "pypiLink": "https://pypi.org/project/authorization-policy-governance-pack/",
    "softwareApplications": [
      "ssot pack inspect",
      "ssot pack preflight",
      "ssot pack sync"
    ],
    "softwareSourceCode": [
      "authorization-policy-governance-pack",
      "ssot-pack-contracts>=0.2.17,<0.3.0",
      "tomli>=2.0.1; python_version < '3.11'"
    ],
    "questionsAndAnswers": [
      {
        "question": "What does this pack install?",
        "answer": "It installs immutable extension-pack ADR/SPEC documents declared by authorization-policy-governance-pack's packaged manifests."
      },
      {
        "question": "How is it synchronized?",
        "answer": "Use `ssot pack preflight . authorization-policy-governance-pack` before `ssot pack sync . authorization-policy-governance-pack --trust --yes` so compatibility and reserved document identities are checked before mutation."
      },
      {
        "question": "Where is the source of truth?",
        "answer": "The source repo is https://github.com/groupsum/authorization-policy-governance-pack; the PyPI project is https://pypi.org/project/authorization-policy-governance-pack/."
      }
    ],
    "entities": [
      {
        "id": "adr:authorization-policy-is-the-resource-access-authority",
        "type": "adr",
        "title": "Authorization Policy Is The Resource Access Authority",
        "status": "active",
        "description": "Resource access decisions are governed by explicit authorization policy, not by identity, login state, claim presence, or local convenience checks.",
        "sourcePath": ".ssot/adr/ADR-1000-authorization-policy-is-the-resource-access-authority.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:oauth-scopes-are-delegated-authorization-grants",
        "type": "adr",
        "title": "OAuth Scopes Are Delegated Authorization Grants",
        "status": "active",
        "description": "OAuth scopes describe delegated authorization grants and requested access boundaries, not complete runtime authorization decisions.",
        "sourcePath": ".ssot/adr/ADR-1001-oauth-scopes-are-delegated-authorization-grants.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:access-tokens-are-authorized-request-artifacts",
        "type": "adr",
        "title": "Access Tokens Are Authorized Request Artifacts",
        "status": "active",
        "description": "Access tokens are request artifacts for authorized API calls and require resource-server validation before policy inputs are trusted.",
        "sourcePath": ".ssot/adr/ADR-1002-access-tokens-are-authorized-request-artifacts.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:permissions-are-action-resource-capabilities",
        "type": "adr",
        "title": "Permissions Are Action Resource Capabilities",
        "status": "active",
        "description": "Permissions are named capabilities to perform actions on resources and must be distinct from roles, groups, scopes, and entitlements.",
        "sourcePath": ".ssot/adr/ADR-1003-permissions-are-action-resource-capabilities.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:entitlements-are-provisioned-authorization-inputs",
        "type": "adr",
        "title": "Entitlements Are Provisioned Authorization Inputs",
        "status": "active",
        "description": "Entitlements are provisioned access facts or packages that feed authorization decisions rather than automatic runtime permissions.",
        "sourcePath": ".ssot/adr/ADR-1004-entitlements-are-provisioned-authorization-inputs.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:pdp-pep-pip-pap-boundaries-govern-policy-architecture",
        "type": "adr",
        "title": "PDP PEP PIP PAP Boundaries Govern Policy Architecture",
        "status": "active",
        "description": "Authorization architecture must declare where policy is authored, where inputs are sourced, where decisions are computed, and where decisions are enforced.",
        "sourcePath": ".ssot/adr/ADR-1005-pdp-pep-pip-pap-boundaries-govern-policy-architecture.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:abac-pbac-govern-contextual-authorization",
        "type": "adr",
        "title": "ABAC And PBAC Govern Contextual Authorization",
        "status": "active",
        "description": "Attribute-based and policy-based authorization govern decisions that depend on resource, subject, action, and environmental context.",
        "sourcePath": ".ssot/adr/ADR-1006-abac-pbac-govern-contextual-authorization.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:rbac-governs-role-bundles-and-review",
        "type": "adr",
        "title": "RBAC Governs Role Bundles And Review",
        "status": "active",
        "description": "RBAC governs role bundles and assignment review but must not hide the underlying permissions or enforcement rules.",
        "sourcePath": ".ssot/adr/ADR-1007-rbac-governs-role-bundles-and-review.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:rebac-governs-relationship-derived-authorization",
        "type": "adr",
        "title": "ReBAC Governs Relationship Derived Authorization",
        "status": "active",
        "description": "Relationship-based authorization governs access derived from subject-resource or resource-resource relationships.",
        "sourcePath": ".ssot/adr/ADR-1008-rebac-governs-relationship-derived-authorization.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:policy-as-code-engines-must-declare-decision-contracts",
        "type": "adr",
        "title": "Policy As Code Engines Must Declare Decision Contracts",
        "status": "active",
        "description": "Policy-as-code engines must declare their language, inputs, outputs, evaluation semantics, versioning, and review gates.",
        "sourcePath": ".ssot/adr/ADR-1009-policy-as-code-engines-must-declare-decision-contracts.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:policy-gateways-are-enforcement-points",
        "type": "adr",
        "title": "Policy Gateways Are Enforcement Points",
        "status": "active",
        "description": "Policy gateways are enforcement points for request mediation and must not be treated as complete authorization systems by default.",
        "sourcePath": ".ssot/adr/ADR-1010-policy-gateways-are-enforcement-points.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:deny-paths-least-privilege-and-revocation-are-release-gates",
        "type": "adr",
        "title": "Deny Paths Least Privilege And Revocation Are Release Gates",
        "status": "active",
        "description": "Authorization releases require evidence for allowed paths, denied paths, least privilege, and revocation behavior.",
        "sourcePath": ".ssot/adr/ADR-1011-deny-paths-least-privilege-and-revocation-are-release-gates.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:authorization-policy-boundary-contract",
        "type": "spec",
        "title": "Authorization Policy Boundary Contract",
        "status": "active",
        "description": "Defines the baseline boundary for resource authorization decisions and separates policy decisions from identity, token, and application routing concerns.",
        "sourcePath": ".ssot/specs/SPEC-2000-authorization-policy-boundary-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:oauth-scope-and-grant-contract",
        "type": "spec",
        "title": "OAuth Scope And Grant Contract",
        "status": "active",
        "description": "Defines how OAuth scopes, consent, grants, and delegated access constraints are represented as authorization inputs.",
        "sourcePath": ".ssot/specs/SPEC-2001-oauth-scope-and-grant-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:access-token-authorization-validation-contract",
        "type": "spec",
        "title": "Access Token Authorization Validation Contract",
        "status": "active",
        "description": "Defines protected-resource validation requirements before access-token data is used in authorization decisions.",
        "sourcePath": ".ssot/specs/SPEC-2002-access-token-authorization-validation-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:permission-taxonomy-contract",
        "type": "spec",
        "title": "Permission Taxonomy Contract",
        "status": "active",
        "description": "Defines permission naming, ownership, lifecycle, and action-resource semantics.",
        "sourcePath": ".ssot/specs/SPEC-2003-permission-taxonomy-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:entitlement-and-access-package-contract",
        "type": "spec",
        "title": "Entitlement And Access Package Contract",
        "status": "active",
        "description": "Defines entitlement and access-package lifecycle requirements for provisioned authorization inputs.",
        "sourcePath": ".ssot/specs/SPEC-2004-entitlement-and-access-package-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:pdp-pep-pip-pap-architecture-contract",
        "type": "spec",
        "title": "PDP PEP PIP PAP Architecture Contract",
        "status": "active",
        "description": "Defines the required architecture map for policy administration, information, decision, and enforcement responsibilities.",
        "sourcePath": ".ssot/specs/SPEC-2005-pdp-pep-pip-pap-architecture-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:policy-decision-api-contract",
        "type": "spec",
        "title": "Policy Decision API Contract",
        "status": "active",
        "description": "Defines the request and response contract for authorization policy decisions.",
        "sourcePath": ".ssot/specs/SPEC-2006-policy-decision-api-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:abac-pbac-context-contract",
        "type": "spec",
        "title": "ABAC PBAC Context Contract",
        "status": "active",
        "description": "Defines contextual authorization inputs and policy requirements for ABAC and PBAC decisions.",
        "sourcePath": ".ssot/specs/SPEC-2007-abac-pbac-context-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:rbac-role-permission-contract",
        "type": "spec",
        "title": "RBAC Role Permission Contract",
        "status": "active",
        "description": "Defines role, assignment, and permission mapping requirements for RBAC systems.",
        "sourcePath": ".ssot/specs/SPEC-2008-rbac-role-permission-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:rebac-relationship-authorization-contract",
        "type": "spec",
        "title": "ReBAC Relationship Authorization Contract",
        "status": "active",
        "description": "Defines relationship graph requirements for relationship-derived authorization decisions.",
        "sourcePath": ".ssot/specs/SPEC-2009-rebac-relationship-authorization-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:policy-as-code-lifecycle-contract",
        "type": "spec",
        "title": "Policy As Code Lifecycle Contract",
        "status": "active",
        "description": "Defines authoring, review, versioning, testing, deployment, and rollback requirements for policy-as-code.",
        "sourcePath": ".ssot/specs/SPEC-2010-policy-as-code-lifecycle-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:cedar-authorization-boundary-contract",
        "type": "spec",
        "title": "Cedar Authorization Boundary Contract",
        "status": "active",
        "description": "Defines Cedar-specific policy boundaries for entity, action, resource, context, and schema-governed authorization.",
        "sourcePath": ".ssot/specs/SPEC-2011-cedar-authorization-boundary-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:opa-rego-authorization-boundary-contract",
        "type": "spec",
        "title": "OPA Rego Authorization Boundary Contract",
        "status": "active",
        "description": "Defines OPA/Rego-specific policy boundaries for input documents, data documents, packages, rules, decisions, bundles, and evaluation.",
        "sourcePath": ".ssot/specs/SPEC-2012-opa-rego-authorization-boundary-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:xacml-vocabulary-and-compatibility-contract",
        "type": "spec",
        "title": "XACML Vocabulary And Compatibility Contract",
        "status": "active",
        "description": "Defines when XACML 3.0 vocabulary, architecture, or interoperability requirements apply.",
        "sourcePath": ".ssot/specs/SPEC-2013-xacml-vocabulary-and-compatibility-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:policy-gateway-enforcement-contract",
        "type": "spec",
        "title": "Policy Gateway Enforcement Contract",
        "status": "active",
        "description": "Defines gateway, middleware, sidecar, and service-mesh enforcement requirements for authorization decisions.",
        "sourcePath": ".ssot/specs/SPEC-2014-policy-gateway-enforcement-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:authorization-evidence-and-failure-mode-contract",
        "type": "spec",
        "title": "Authorization Evidence And Failure Mode Contract",
        "status": "active",
        "description": "Defines release evidence for allow paths, deny paths, least privilege, revocation, cache behavior, and policy failure modes.",
        "sourcePath": ".ssot/specs/SPEC-2015-authorization-evidence-and-failure-mode-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      }
    ],
    "metadata": {
      "version": "0.1.1.dev1",
      "license": "Apache-2.0",
      "author": "Jacob Stewart <jacob@swarmauri.com>",
      "published": "PyPI project metadata"
    },
    "bodyMd": "# Authorization Policy Governance\n\nInstallable SSOT governance pack for authorization policy, OAuth scopes, access-token validation, permissions, entitlements, access-control models, PDP/PEP architecture, policy gateways, and policy-as-code.\n\n- Package: `authorization-policy-governance-pack`\n- GitHub: https://github.com/groupsum/authorization-policy-governance-pack\n- PyPI: https://pypi.org/project/authorization-policy-governance-pack/\n- Sync surface: 16 specs and 12 ADRs\n- Origin id: `pack:authorization-policy`\n\n## SSOT Pack Workflow\n\n```bash\nssot pack inspect authorization-policy-governance-pack\nssot pack preflight . authorization-policy-governance-pack\nssot pack sync . authorization-policy-governance-pack --trust --yes\n```\n\nThe synced rows are extension-pack ADR/SPEC documents. Downstream repositories keep their own repo-local ADRs and SPECs separate from these immutable imported documents."
  },
  "authnz-policy-governance-pack": {
    "slug": "authnz-policy-governance-pack",
    "name": "authnz-policy-governance-pack",
    "role": "AuthNZ Policy Governance",
    "syncs": "20 specs, 15 ADRs",
    "reservedRange": "ADR, SPEC",
    "description": "Installable SSOT governance pack for authentication and authorization boundaries, OIDC claims, OAuth scopes, permissions, entitlements, access-control models, PDP/PEP architecture, and policy-as-code.",
    "ghRepo": "https://github.com/groupsum/authnz-policy-governance-pack",
    "pypiLink": "https://pypi.org/project/authnz-policy-governance-pack/",
    "softwareApplications": [
      "ssot pack inspect",
      "ssot pack preflight",
      "ssot pack sync"
    ],
    "softwareSourceCode": [
      "authnz-policy-governance-pack",
      "ssot-pack-contracts>=0.2.17,<0.3.0",
      "tomli>=2.0.1; python_version < '3.11'"
    ],
    "questionsAndAnswers": [
      {
        "question": "What does this pack install?",
        "answer": "It installs immutable extension-pack ADR/SPEC documents declared by authnz-policy-governance-pack's packaged manifests."
      },
      {
        "question": "How is it synchronized?",
        "answer": "Use `ssot pack preflight . authnz-policy-governance-pack` before `ssot pack sync . authnz-policy-governance-pack --trust --yes` so compatibility and reserved document identities are checked before mutation."
      },
      {
        "question": "Where is the source of truth?",
        "answer": "The source repo is https://github.com/groupsum/authnz-policy-governance-pack; the PyPI project is https://pypi.org/project/authnz-policy-governance-pack/."
      }
    ],
    "entities": [
      {
        "id": "adr:authentication-and-authorization-are-separate-governance-surfaces",
        "type": "adr",
        "title": "Authentication And Authorization Are Separate Governance Surfaces",
        "status": "active",
        "description": "Identity proof, login state, token issuance, delegated authorization, and resource authorization are governed as separate surfaces.",
        "sourcePath": ".ssot/adr/ADR-1000-authentication-and-authorization-are-separate-governance-surfaces.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:oidc-claims-identify-subjects-not-application-permissions",
        "type": "adr",
        "title": "OIDC Claims Identify Subjects Not Application Permissions",
        "status": "active",
        "description": "OIDC ID Token and UserInfo claims are identity assertions, not direct application permissions.",
        "sourcePath": ".ssot/adr/ADR-1001-oidc-claims-identify-subjects-not-application-permissions.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:oauth-scopes-are-delegated-grants-not-complete-policy-decisions",
        "type": "adr",
        "title": "OAuth Scopes Are Delegated Grants Not Complete Policy Decisions",
        "status": "active",
        "description": "OAuth scopes express delegated grant breadth and must not be treated as complete object-level authorization.",
        "sourcePath": ".ssot/adr/ADR-1002-oauth-scopes-are-delegated-grants-not-complete-policy-decisions.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:access-token-claims-require-resource-server-validation",
        "type": "adr",
        "title": "Access Token Claims Require Resource Server Validation",
        "status": "active",
        "description": "Access tokens and token claims require resource-server validation before authorization use.",
        "sourcePath": ".ssot/adr/ADR-1003-access-token-claims-require-resource-server-validation.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:policy-decisions-use-explicit-pdp-pep-boundaries",
        "type": "adr",
        "title": "Policy Decisions Use Explicit PDP PEP Boundaries",
        "status": "active",
        "description": "Authorization governance requires explicit policy decision and enforcement boundaries.",
        "sourcePath": ".ssot/adr/ADR-1004-policy-decisions-use-explicit-pdp-pep-boundaries.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:policy-inputs-use-subject-resource-action-and-context",
        "type": "adr",
        "title": "Policy Inputs Use Subject Resource Action And Context",
        "status": "active",
        "description": "Authorization decisions are modeled around subject, resource, action, and context inputs.",
        "sourcePath": ".ssot/adr/ADR-1005-policy-inputs-use-subject-resource-action-and-context.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:pip-and-attribute-sources-are-authoritative-inputs-not-hidden-logic",
        "type": "adr",
        "title": "PIP And Attribute Sources Are Authoritative Inputs Not Hidden Logic",
        "status": "active",
        "description": "Policy information sources must be declared as inputs rather than hidden authorization logic.",
        "sourcePath": ".ssot/adr/ADR-1006-pip-and-attribute-sources-are-authoritative-inputs-not-hidden-logic.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:rbac-roles-are-permission-bundles-not-policy-truth",
        "type": "adr",
        "title": "RBAC Roles Are Permission Bundles Not Policy Truth",
        "status": "active",
        "description": "Roles are governed permission bundles or policy attributes, not the complete truth of authorization.",
        "sourcePath": ".ssot/adr/ADR-1007-rbac-roles-are-permission-bundles-not-policy-truth.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:abac-pbac-policies-own-contextual-authorization",
        "type": "adr",
        "title": "ABAC PBAC Policies Own Contextual Authorization",
        "status": "active",
        "description": "ABAC and PBAC policies govern contextual authorization using declared attributes and policy rules.",
        "sourcePath": ".ssot/adr/ADR-1008-abac-pbac-policies-own-contextual-authorization.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:rebac-relationships-own-graph-based-resource-authorization",
        "type": "adr",
        "title": "ReBAC Relationships Own Graph Based Resource Authorization",
        "status": "active",
        "description": "Relationship-based access governs graph-derived resource authorization.",
        "sourcePath": ".ssot/adr/ADR-1009-rebac-relationships-own-graph-based-resource-authorization.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:entitlements-are-provisioned-access-facts-not-always-runtime-permissions",
        "type": "adr",
        "title": "Entitlements Are Provisioned Access Facts Not Always Runtime Permissions",
        "status": "active",
        "description": "Entitlements are provisioned access facts that may map to roles, permissions, licenses, features, or policy inputs.",
        "sourcePath": ".ssot/adr/ADR-1010-entitlements-are-provisioned-access-facts-not-always-runtime-permissions.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:policy-as-code-engines-must-declare-language-and-evaluation-contract",
        "type": "adr",
        "title": "Policy As Code Engines Must Declare Language And Evaluation Contract",
        "status": "active",
        "description": "Policy-as-code implementations must declare their language, model, input contract, and evaluation semantics.",
        "sourcePath": ".ssot/adr/ADR-1011-policy-as-code-engines-must-declare-language-and-evaluation-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:xacml-is-a-reference-architecture-not-a-required-policy-language",
        "type": "adr",
        "title": "XACML Is A Reference Architecture Not A Required Policy Language",
        "status": "active",
        "description": "XACML vocabulary can govern PDP, PEP, PIP, PAP, obligations, and advice without requiring XML policy adoption.",
        "sourcePath": ".ssot/adr/ADR-1012-xacml-is-a-reference-architecture-not-a-required-policy-language.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:policy-gateways-are-enforcement-points-not-complete-authorization-systems",
        "type": "adr",
        "title": "Policy Gateways Are Enforcement Points Not Complete Authorization Systems",
        "status": "active",
        "description": "Gateways, sidecars, middleware, and meshes are enforcement points and must not replace required object-level authorization.",
        "sourcePath": ".ssot/adr/ADR-1013-policy-gateways-are-enforcement-points-not-complete-authorization-systems.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:deny-paths-and-least-privilege-are-release-gated-evidence",
        "type": "adr",
        "title": "Deny Paths And Least Privilege Are Release Gated Evidence",
        "status": "active",
        "description": "Authorization release evidence must include deny paths, least-privilege behavior, and stale-input scenarios.",
        "sourcePath": ".ssot/adr/ADR-1014-deny-paths-and-least-privilege-are-release-gated-evidence.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:authn-authz-boundary-contract",
        "type": "spec",
        "title": "AuthN AuthZ Boundary Contract",
        "status": "active",
        "description": "Defines required separation between authentication, token issuance, delegated authorization, and application authorization.",
        "sourcePath": ".ssot/specs/SPEC-2000-authn-authz-boundary-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:oidc-id-token-and-userinfo-claims-contract",
        "type": "spec",
        "title": "OIDC ID Token And UserInfo Claims Contract",
        "status": "active",
        "description": "Defines requirements for using OIDC ID Token and UserInfo claims as identity facts.",
        "sourcePath": ".ssot/specs/SPEC-2001-oidc-id-token-and-userinfo-claims-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:oauth-scope-consent-and-grant-contract",
        "type": "spec",
        "title": "OAuth Scope Consent And Grant Contract",
        "status": "active",
        "description": "Defines requirements for OAuth scopes, grants, consent, and delegated access.",
        "sourcePath": ".ssot/specs/SPEC-2002-oauth-scope-consent-and-grant-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:oauth-access-token-validation-contract",
        "type": "spec",
        "title": "OAuth Access Token Validation Contract",
        "status": "active",
        "description": "Defines access-token validation requirements for resource servers.",
        "sourcePath": ".ssot/specs/SPEC-2003-oauth-access-token-validation-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:permission-taxonomy-and-naming-contract",
        "type": "spec",
        "title": "Permission Taxonomy And Naming Contract",
        "status": "active",
        "description": "Defines permission naming, action, resource, namespace, wildcard, and lifecycle requirements.",
        "sourcePath": ".ssot/specs/SPEC-2004-permission-taxonomy-and-naming-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:entitlement-role-and-group-provisioning-contract",
        "type": "spec",
        "title": "Entitlement Role And Group Provisioning Contract",
        "status": "active",
        "description": "Defines requirements for provisioned roles, groups, entitlements, and account-state inputs.",
        "sourcePath": ".ssot/specs/SPEC-2005-entitlement-role-and-group-provisioning-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:pdp-pep-pip-pap-architecture-contract",
        "type": "spec",
        "title": "PDP PEP PIP PAP Architecture Contract",
        "status": "active",
        "description": "Defines required declaration of policy decision, enforcement, information, and administration responsibilities.",
        "sourcePath": ".ssot/specs/SPEC-2006-pdp-pep-pip-pap-architecture-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:policy-decision-request-response-contract",
        "type": "spec",
        "title": "Policy Decision Request Response Contract",
        "status": "active",
        "description": "Defines authorization decision request and response shape.",
        "sourcePath": ".ssot/specs/SPEC-2007-policy-decision-request-response-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:abac-pbac-policy-input-contract",
        "type": "spec",
        "title": "ABAC PBAC Policy Input Contract",
        "status": "active",
        "description": "Defines ABAC and PBAC policy input, freshness, and deny behavior requirements.",
        "sourcePath": ".ssot/specs/SPEC-2008-abac-pbac-policy-input-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:rbac-role-permission-contract",
        "type": "spec",
        "title": "RBAC Role Permission Contract",
        "status": "active",
        "description": "Defines role, permission, inheritance, privileged-role, and separation-of-duties requirements.",
        "sourcePath": ".ssot/specs/SPEC-2009-rbac-role-permission-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:rebac-relationship-authorization-contract",
        "type": "spec",
        "title": "ReBAC Relationship Authorization Contract",
        "status": "active",
        "description": "Defines relationship-based authorization model requirements.",
        "sourcePath": ".ssot/specs/SPEC-2010-rebac-relationship-authorization-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:policy-as-code-authoring-and-review-contract",
        "type": "spec",
        "title": "Policy As Code Authoring And Review Contract",
        "status": "active",
        "description": "Defines policy authoring, testing, review, publication, rollback, and evidence requirements.",
        "sourcePath": ".ssot/specs/SPEC-2011-policy-as-code-authoring-and-review-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:cedar-policy-language-boundary-contract",
        "type": "spec",
        "title": "Cedar Policy Language Boundary Contract",
        "status": "active",
        "description": "Defines Cedar authorization model and evaluation boundary requirements.",
        "sourcePath": ".ssot/specs/SPEC-2012-cedar-policy-language-boundary-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:opa-rego-policy-language-boundary-contract",
        "type": "spec",
        "title": "OPA Rego Policy Language Boundary Contract",
        "status": "active",
        "description": "Defines OPA/Rego input, data, query, bundle, and decision requirements.",
        "sourcePath": ".ssot/specs/SPEC-2013-opa-rego-policy-language-boundary-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:xacml-compatibility-and-vocabulary-contract",
        "type": "spec",
        "title": "XACML Compatibility And Vocabulary Contract",
        "status": "active",
        "description": "Defines XACML vocabulary and compatibility claim requirements.",
        "sourcePath": ".ssot/specs/SPEC-2014-xacml-compatibility-and-vocabulary-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:policy-gateway-enforcement-contract",
        "type": "spec",
        "title": "Policy Gateway Enforcement Contract",
        "status": "active",
        "description": "Defines gateway, sidecar, mesh, middleware, and proxy enforcement requirements.",
        "sourcePath": ".ssot/specs/SPEC-2015-policy-gateway-enforcement-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:authorization-audit-and-evidence-contract",
        "type": "spec",
        "title": "Authorization Audit And Evidence Contract",
        "status": "active",
        "description": "Defines authorization audit logging and release evidence requirements.",
        "sourcePath": ".ssot/specs/SPEC-2016-authorization-audit-and-evidence-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:least-privilege-and-negative-path-test-contract",
        "type": "spec",
        "title": "Least Privilege And Negative Path Test Contract",
        "status": "active",
        "description": "Defines test requirements for least privilege and authorization deny paths.",
        "sourcePath": ".ssot/specs/SPEC-2017-least-privilege-and-negative-path-test-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:token-to-policy-context-mapping-contract",
        "type": "spec",
        "title": "Token To Policy Context Mapping Contract",
        "status": "active",
        "description": "Defines safe mapping from OIDC/OAuth token claims into policy context.",
        "sourcePath": ".ssot/specs/SPEC-2018-token-to-policy-context-mapping-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:authorization-failure-mode-and-cache-contract",
        "type": "spec",
        "title": "Authorization Failure Mode And Cache Contract",
        "status": "active",
        "description": "Defines PDP unavailability, policy cache, attribute cache, decision cache, revocation, and break-glass requirements.",
        "sourcePath": ".ssot/specs/SPEC-2019-authorization-failure-mode-and-cache-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      }
    ],
    "metadata": {
      "version": "0.1.1.dev1",
      "license": "Apache-2.0",
      "author": "Jacob Stewart <jacob@swarmauri.com>",
      "published": "PyPI project metadata"
    },
    "bodyMd": "# AuthNZ Policy Governance\n\nInstallable SSOT governance pack for authentication and authorization boundaries, OIDC claims, OAuth scopes, permissions, entitlements, access-control models, PDP/PEP architecture, and policy-as-code.\n\n- Package: `authnz-policy-governance-pack`\n- GitHub: https://github.com/groupsum/authnz-policy-governance-pack\n- PyPI: https://pypi.org/project/authnz-policy-governance-pack/\n- Sync surface: 20 specs and 15 ADRs\n- Origin id: `pack:authnz-policy`\n\n## SSOT Pack Workflow\n\n```bash\nssot pack inspect authnz-policy-governance-pack\nssot pack preflight . authnz-policy-governance-pack\nssot pack sync . authnz-policy-governance-pack --trust --yes\n```\n\nThe synced rows are extension-pack ADR/SPEC documents. Downstream repositories keep their own repo-local ADRs and SPECs separate from these immutable imported documents."
  },
  "verifiable-credentials-governance-pack": {
    "slug": "verifiable-credentials-governance-pack",
    "name": "verifiable-credentials-governance-pack",
    "role": "Verifiable Credentials Governance",
    "syncs": "11 specs, 7 ADRs",
    "reservedRange": "ADR, SPEC",
    "description": "Installable SSOT governance pack for W3C Verifiable Credentials, presentations, securing mechanisms, status models, schema use, cryptosuite profiles, and adjacent issuance/presentation protocols.",
    "ghRepo": "https://github.com/groupsum/verifiable-credentials-governance-pack",
    "pypiLink": "https://pypi.org/project/verifiable-credentials-governance-pack/",
    "softwareApplications": [
      "ssot pack inspect",
      "ssot pack preflight",
      "ssot pack sync"
    ],
    "softwareSourceCode": [
      "verifiable-credentials-governance-pack",
      "ssot-pack-contracts>=0.2.17,<0.3.0",
      "tomli>=2.0.1; python_version < '3.11'"
    ],
    "questionsAndAnswers": [
      {
        "question": "What does this pack install?",
        "answer": "It installs immutable extension-pack ADR/SPEC documents declared by verifiable-credentials-governance-pack's packaged manifests."
      },
      {
        "question": "How is it synchronized?",
        "answer": "Use `ssot pack preflight . verifiable-credentials-governance-pack` before `ssot pack sync . verifiable-credentials-governance-pack --trust --yes` so compatibility and reserved document identities are checked before mutation."
      },
      {
        "question": "Where is the source of truth?",
        "answer": "The source repo is https://github.com/groupsum/verifiable-credentials-governance-pack; the PyPI project is https://pypi.org/project/verifiable-credentials-governance-pack/."
      }
    ],
    "entities": [
      {
        "id": "adr:verifiable-credentials-are-attestable-claims-not-local-authentication-credentials",
        "type": "adr",
        "title": "Verifiable Credentials Are Attestable Claims Not Local Authentication Credentials",
        "status": "active",
        "description": "Verifiable Credentials are governed as attestable claim containers and presentations, not as local usernames, passwords, bearer tokens, or session credentials.",
        "sourcePath": ".ssot/adr/ADR-1000-verifiable-credentials-are-attestable-claims-not-local-authentication-credentials.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:w3c-vc-data-model-is-the-core-credential-and-presentation-authority",
        "type": "adr",
        "title": "W3C VC Data Model Is The Core Credential And Presentation Authority",
        "status": "active",
        "description": "The W3C Verifiable Credentials Data Model v2.0 is the core authority for credential, presentation, issuer, holder, verifier, subject, and securing-mechanism semantics.",
        "sourcePath": ".ssot/adr/ADR-1001-w3c-vc-data-model-is-the-core-credential-and-presentation-authority.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:vc-securing-mechanisms-are-profiled-as-data-integrity-and-jose-cose",
        "type": "adr",
        "title": "VC Securing Mechanisms Are Profiled As Data Integrity And JOSE COSE",
        "status": "active",
        "description": "VC securing behavior is governed through explicit Data Integrity and JOSE/COSE profiles rather than implicit or unspecified proof handling.",
        "sourcePath": ".ssot/adr/ADR-1002-vc-securing-mechanisms-are-profiled-as-data-integrity-and-jose-cose.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:vc-status-and-revocation-are-governed-through-explicit-status-mechanisms",
        "type": "adr",
        "title": "VC Status And Revocation Are Governed Through Explicit Status Mechanisms",
        "status": "active",
        "description": "Credential status, suspension, and revocation are governed only through explicitly declared status mechanisms and verifier policy.",
        "sourcePath": ".ssot/adr/ADR-1003-vc-status-and-revocation-are-governed-through-explicit-status-mechanisms.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:dids-are-optional-identifiers-for-vc-not-a-vc-prerequisite",
        "type": "adr",
        "title": "DIDs Are Optional Identifiers For VC Not A VC Prerequisite",
        "status": "active",
        "description": "DIDs are optional identifiers and proof integrations for VC ecosystems; baseline VC conformance must not require DID support.",
        "sourcePath": ".ssot/adr/ADR-1004-dids-are-optional-identifiers-for-vc-not-a-vc-prerequisite.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:openid4vc-protocols-are-transport-rails-not-vc-core",
        "type": "adr",
        "title": "OpenID4VC Protocols Are Transport Rails Not VC Core",
        "status": "active",
        "description": "OpenID4VCI, OpenID4VP, SIOPv2, and OpenID Federation are governed as issuance, presentation, and trust transport/profile layers rather than VC core semantics.",
        "sourcePath": ".ssot/adr/ADR-1005-openid4vc-protocols-are-transport-rails-not-vc-core.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:selective-disclosure-and-format-profiles-must-be-explicitly-declared",
        "type": "adr",
        "title": "Selective Disclosure And Format Profiles Must Be Explicitly Declared",
        "status": "active",
        "description": "Selective disclosure, credential format, and token status behavior must be explicitly declared as profile support rather than inferred from generic VC support.",
        "sourcePath": ".ssot/adr/ADR-1006-selective-disclosure-and-format-profiles-must-be-explicitly-declared.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:verifiable-credential-data-model-contract",
        "type": "spec",
        "title": "Verifiable Credential Data Model Contract",
        "status": "active",
        "description": "VC payloads must satisfy the declared VC data model version, required properties, roles, media type, securing mechanism, and verifier policy boundaries.",
        "sourcePath": ".ssot/specs/SPEC-2000-verifiable-credential-data-model-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:verifiable-presentation-processing-contract",
        "type": "spec",
        "title": "Verifiable Presentation Processing Contract",
        "status": "active",
        "description": "Verifiable Presentation processing must validate presentation structure, holder binding when declared, embedded credential processing, and verifier policy independently.",
        "sourcePath": ".ssot/specs/SPEC-2001-verifiable-presentation-processing-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:vc-data-integrity-proof-contract",
        "type": "spec",
        "title": "VC Data Integrity Proof Contract",
        "status": "active",
        "description": "Data Integrity proof support must declare proof type, cryptosuite, proof purpose, verification method handling, transformation, hashing, and verification behavior.",
        "sourcePath": ".ssot/specs/SPEC-2002-vc-data-integrity-proof-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:vc-jose-cose-securing-contract",
        "type": "spec",
        "title": "VC JOSE COSE Securing Contract",
        "status": "active",
        "description": "JOSE/COSE VC support must declare token or envelope format, algorithms, key discovery, media types, detached or embedded payload behavior, and validation policy.",
        "sourcePath": ".ssot/specs/SPEC-2003-vc-jose-cose-securing-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:vc-status-and-revocation-contract",
        "type": "spec",
        "title": "VC Status And Revocation Contract",
        "status": "active",
        "description": "VC status support must declare supported status mechanisms and verifier behavior for active, revoked, suspended, stale, unavailable, and unsupported status resources.",
        "sourcePath": ".ssot/specs/SPEC-2004-vc-status-and-revocation-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:vc-json-schema-and-vocabulary-contract",
        "type": "spec",
        "title": "VC JSON Schema And Vocabulary Contract",
        "status": "active",
        "description": "VC schema and vocabulary support must distinguish JSON Schema validation, JSON-LD context semantics, type vocabulary, and verifier policy fitness.",
        "sourcePath": ".ssot/specs/SPEC-2005-vc-json-schema-and-vocabulary-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:vc-cryptosuite-profile-contract",
        "type": "spec",
        "title": "VC Cryptosuite Profile Contract",
        "status": "active",
        "description": "Cryptosuite support must explicitly declare EdDSA, ECDSA, BBS, or other suite behavior and provide suite-specific verification evidence.",
        "sourcePath": ".ssot/specs/SPEC-2006-vc-cryptosuite-profile-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:openid4vci-issuance-boundary-contract",
        "type": "spec",
        "title": "OpenID4VCI Issuance Boundary Contract",
        "status": "active",
        "description": "OpenID4VCI support must govern issuance protocol metadata, offers, authorization, token, credential, deferred, notification, and holder-binding behavior separately from VC payload validity.",
        "sourcePath": ".ssot/specs/SPEC-2007-openid4vci-issuance-boundary-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:openid4vp-presentation-boundary-contract",
        "type": "spec",
        "title": "OpenID4VP Presentation Boundary Contract",
        "status": "active",
        "description": "OpenID4VP support must govern presentation request, response, nonce, audience, wallet, verifier, and profile behavior separately from VC and VP proof validation.",
        "sourcePath": ".ssot/specs/SPEC-2008-openid4vp-presentation-boundary-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:dif-presentation-exchange-boundary-contract",
        "type": "spec",
        "title": "DIF Presentation Exchange Boundary Contract",
        "status": "active",
        "description": "DIF Presentation Exchange support must be treated as a presentation constraint and submission profile, not as a replacement for VC or VP verification.",
        "sourcePath": ".ssot/specs/SPEC-2009-dif-presentation-exchange-boundary-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:sd-jwt-vc-and-token-status-list-boundary-contract",
        "type": "spec",
        "title": "SD-JWT VC And Token Status List Boundary Contract",
        "status": "active",
        "description": "SD-JWT VC and token status list support must be explicitly declared as profile support with disclosure, holder binding, token verification, and status-list evidence.",
        "sourcePath": ".ssot/specs/SPEC-2010-sd-jwt-vc-and-token-status-list-boundary-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      }
    ],
    "metadata": {
      "version": "0.1.1.dev1",
      "license": "Apache-2.0",
      "author": "Jacob Stewart <jacob@swarmauri.com>",
      "published": "PyPI project metadata"
    },
    "bodyMd": "# Verifiable Credentials Governance\n\nInstallable SSOT governance pack for W3C Verifiable Credentials, presentations, securing mechanisms, status models, schema use, cryptosuite profiles, and adjacent issuance/presentation protocols.\n\n- Package: `verifiable-credentials-governance-pack`\n- GitHub: https://github.com/groupsum/verifiable-credentials-governance-pack\n- PyPI: https://pypi.org/project/verifiable-credentials-governance-pack/\n- Sync surface: 11 specs and 7 ADRs\n- Origin id: `pack:verifiable-credentials-governance`\n\n## SSOT Pack Workflow\n\n```bash\nssot pack inspect verifiable-credentials-governance-pack\nssot pack preflight . verifiable-credentials-governance-pack\nssot pack sync . verifiable-credentials-governance-pack --trust --yes\n```\n\nThe synced rows are extension-pack ADR/SPEC documents. Downstream repositories keep their own repo-local ADRs and SPECs separate from these immutable imported documents."
  },
  "decentralized-identifiers-governance-pack": {
    "slug": "decentralized-identifiers-governance-pack",
    "name": "decentralized-identifiers-governance-pack",
    "role": "Decentralized Identifiers Governance",
    "syncs": "11 specs, 7 ADRs",
    "reservedRange": "ADR, SPEC",
    "description": "Installable SSOT governance pack for DID Core, DID documents, DID URLs, DID resolution, DID methods, domain linkage, DIDComm adjacency, and DID use in VC/OpenID4VC profiles.",
    "ghRepo": "https://github.com/groupsum/decentralized-identifiers-governance-pack",
    "pypiLink": "https://pypi.org/project/decentralized-identifiers-governance-pack/",
    "softwareApplications": [
      "ssot pack inspect",
      "ssot pack preflight",
      "ssot pack sync"
    ],
    "softwareSourceCode": [
      "decentralized-identifiers-governance-pack",
      "ssot-pack-contracts>=0.2.17,<0.3.0",
      "tomli>=2.0.1; python_version < '3.11'"
    ],
    "questionsAndAnswers": [
      {
        "question": "What does this pack install?",
        "answer": "It installs immutable extension-pack ADR/SPEC documents declared by decentralized-identifiers-governance-pack's packaged manifests."
      },
      {
        "question": "How is it synchronized?",
        "answer": "Use `ssot pack preflight . decentralized-identifiers-governance-pack` before `ssot pack sync . decentralized-identifiers-governance-pack --trust --yes` so compatibility and reserved document identities are checked before mutation."
      },
      {
        "question": "Where is the source of truth?",
        "answer": "The source repo is https://github.com/groupsum/decentralized-identifiers-governance-pack; the PyPI project is https://pypi.org/project/decentralized-identifiers-governance-pack/."
      }
    ],
    "entities": [
      {
        "id": "adr:did-core-is-the-identifier-document-and-url-authority",
        "type": "adr",
        "title": "DID Core Is The Identifier Document And URL Authority",
        "status": "active",
        "description": "W3C DID Core is the primary authority for DID syntax, DID URLs, DID documents, verification relationships, services, and controller semantics.",
        "sourcePath": ".ssot/adr/ADR-1100-did-core-is-the-identifier-document-and-url-authority.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:did-method-support-must-be-explicitly-declared",
        "type": "adr",
        "title": "DID Method Support Must Be Explicitly Declared",
        "status": "active",
        "description": "DID method support is governed as an explicit compatibility claim; baseline DID support must not imply support for every DID method.",
        "sourcePath": ".ssot/adr/ADR-1101-did-method-support-must-be-explicitly-declared.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:did-resolution-and-dereferencing-are-separate-from-method-lifecycle",
        "type": "adr",
        "title": "DID Resolution And Dereferencing Are Separate From Method Lifecycle",
        "status": "active",
        "description": "DID resolution and DID URL dereferencing are governed as read-time processing surfaces separate from method lifecycle operations such as create, update, and deactivate.",
        "sourcePath": ".ssot/adr/ADR-1102-did-resolution-and-dereferencing-are-separate-from-method-lifecycle.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:did-documents-govern-verification-methods-relationships-and-services",
        "type": "adr",
        "title": "DID Documents Govern Verification Methods Relationships And Services",
        "status": "active",
        "description": "DID documents govern verification methods, verification relationships, controller links, and service endpoints, but do not by themselves grant application authorization.",
        "sourcePath": ".ssot/adr/ADR-1103-did-documents-govern-verification-methods-relationships-and-services.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:did-domain-linkage-is-a-separate-trust-signal",
        "type": "adr",
        "title": "DID Domain Linkage Is A Separate Trust Signal",
        "status": "active",
        "description": "DID domain linkage is governed as an explicit trust signal that must be validated separately from DID resolution and DID document syntax.",
        "sourcePath": ".ssot/adr/ADR-1104-did-domain-linkage-is-a-separate-trust-signal.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:didcomm-and-trust-establishment-are-adjacent-protocols-not-did-core",
        "type": "adr",
        "title": "DIDComm And Trust Establishment Are Adjacent Protocols Not DID Core",
        "status": "active",
        "description": "DIDComm Messaging and DIF Trust Establishment are adjacent protocols that consume DID material but do not redefine DID Core conformance.",
        "sourcePath": ".ssot/adr/ADR-1105-didcomm-and-trust-establishment-are-adjacent-protocols-not-did-core.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "adr:did-use-in-vc-and-openid4vc-is-optional-profile-integration",
        "type": "adr",
        "title": "DID Use In VC And OpenID4VC Is Optional Profile Integration",
        "status": "active",
        "description": "DID use in VC, Data Integrity, JOSE/COSE, OpenID4VCI, OpenID4VP, and SIOPv2 is governed as optional profile integration, not as baseline DID conformance.",
        "sourcePath": ".ssot/adr/ADR-1106-did-use-in-vc-and-openid4vc-is-optional-profile-integration.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:did-core-data-model-and-syntax-contract",
        "type": "spec",
        "title": "DID Core Data Model And Syntax Contract",
        "status": "active",
        "description": "DID support must validate DID syntax, DID URL syntax, DID document data model fields, controllers, verification methods, verification relationships, and services according to DID Core.",
        "sourcePath": ".ssot/specs/SPEC-2100-did-core-data-model-and-syntax-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:did-url-and-did-document-contract",
        "type": "spec",
        "title": "DID URL And DID Document Contract",
        "status": "active",
        "description": "DID URL and DID document processing must govern path, query, fragment, relative reference, verification method dereferencing, and service endpoint handling.",
        "sourcePath": ".ssot/specs/SPEC-2101-did-url-and-did-document-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:did-resolution-and-dereferencing-contract",
        "type": "spec",
        "title": "DID Resolution And Dereferencing Contract",
        "status": "active",
        "description": "DID resolution and dereferencing support must declare resolver inputs, document output, metadata surfaces, error handling, cache behavior, and supported methods separately from lifecycle operations.",
        "sourcePath": ".ssot/specs/SPEC-2102-did-resolution-and-dereferencing-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:did-method-registry-and-method-support-contract",
        "type": "spec",
        "title": "DID Method Registry And Method Support Contract",
        "status": "active",
        "description": "DID method support must name supported methods, method specifications, resolution behavior, lifecycle operations, verification material, and unsupported-method handling.",
        "sourcePath": ".ssot/specs/SPEC-2103-did-method-registry-and-method-support-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:did-web-method-contract",
        "type": "spec",
        "title": "DID Web Method Contract",
        "status": "active",
        "description": "did:web support must validate method-specific identifier-to-HTTPS document mapping, retrieval, document id matching, TLS and host constraints, and domain-linkage separation.",
        "sourcePath": ".ssot/specs/SPEC-2104-did-web-method-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:did-key-and-did-jwk-method-contract",
        "type": "spec",
        "title": "DID Key And DID JWK Method Contract",
        "status": "active",
        "description": "did:key and did:jwk support must validate embedded key material, generated DID documents, supported key types, verification relationships, and unsupported-key handling.",
        "sourcePath": ".ssot/specs/SPEC-2105-did-key-and-did-jwk-method-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:did-peer-method-boundary-contract",
        "type": "spec",
        "title": "DID Peer Method Boundary Contract",
        "status": "active",
        "description": "did:peer support must be declared as a peer-method boundary with explicit numalgo, document generation, service, DIDComm, and out-of-band handling.",
        "sourcePath": ".ssot/specs/SPEC-2106-did-peer-method-boundary-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:did-webvh-ion-ethr-pkh-method-boundary-contract",
        "type": "spec",
        "title": "DID WebVH ION ETHR PKH Method Boundary Contract",
        "status": "active",
        "description": "did:webvh, did:ion, did:ethr, and did:pkh support must be declared as method-specific boundary support with explicit resolver, ledger, chain, history, and key-material behavior.",
        "sourcePath": ".ssot/specs/SPEC-2107-did-webvh-ion-ethr-pkh-method-boundary-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:well-known-did-configuration-contract",
        "type": "spec",
        "title": "Well-Known DID Configuration Contract",
        "status": "active",
        "description": "Well-Known DID Configuration support must validate domain linkage resources, linked DID evidence, domain binding, credential or proof verification, and verifier policy separately from DID resolution.",
        "sourcePath": ".ssot/specs/SPEC-2108-well-known-did-configuration-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:didcomm-boundary-contract",
        "type": "spec",
        "title": "DIDComm Boundary Contract",
        "status": "active",
        "description": "DIDComm support must be declared as a messaging profile that consumes DID documents and services but adds separate encryption, routing, packaging, and trust requirements.",
        "sourcePath": ".ssot/specs/SPEC-2109-didcomm-boundary-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      },
      {
        "id": "spc:did-trust-establishment-boundary-contract",
        "type": "spec",
        "title": "DID Trust Establishment Boundary Contract",
        "status": "active",
        "description": "DID Trust Establishment support must be declared as adjacent trust metadata and policy behavior separate from baseline DID Core, DID method, VC, and OpenID4VC support.",
        "sourcePath": ".ssot/specs/SPEC-2110-did-trust-establishment-boundary-contract.yaml",
        "introducedIn": "0.1.1.dev1"
      }
    ],
    "metadata": {
      "version": "0.1.1.dev1",
      "license": "Apache-2.0",
      "author": "Jacob Stewart <jacob@swarmauri.com>",
      "published": "PyPI project metadata"
    },
    "bodyMd": "# Decentralized Identifiers Governance\n\nInstallable SSOT governance pack for DID Core, DID documents, DID URLs, DID resolution, DID methods, domain linkage, DIDComm adjacency, and DID use in VC/OpenID4VC profiles.\n\n- Package: `decentralized-identifiers-governance-pack`\n- GitHub: https://github.com/groupsum/decentralized-identifiers-governance-pack\n- PyPI: https://pypi.org/project/decentralized-identifiers-governance-pack/\n- Sync surface: 11 specs and 7 ADRs\n- Origin id: `pack:decentralized-identifiers-governance`\n\n## SSOT Pack Workflow\n\n```bash\nssot pack inspect decentralized-identifiers-governance-pack\nssot pack preflight . decentralized-identifiers-governance-pack\nssot pack sync . decentralized-identifiers-governance-pack --trust --yes\n```\n\nThe synced rows are extension-pack ADR/SPEC documents. Downstream repositories keep their own repo-local ADRs and SPECs separate from these immutable imported documents."
  },
  "digital-branding-governance-pack": {
    "slug": "digital-branding-governance-pack",
    "name": "digital-branding-governance-pack",
    "role": "Digital Branding Governance Pack",
    "syncs": "9 specs, 9 ADRs",
    "reservedRange": "ADR, SPEC",
    "description": "Portable SSOT governance pack for digital branding systems.",
    "ghRepo": "https://github.com/groupsum/digital-branding-governance-pack",
    "pypiLink": "https://pypi.org/project/digital-branding-governance-pack/",
    "softwareApplications": [
      "ssot pack inspect",
      "ssot pack preflight",
      "ssot pack sync"
    ],
    "softwareSourceCode": [
      "digital-branding-governance-pack",
      "ssot-pack-contracts>=0.2.22"
    ],
    "questionsAndAnswers": [
      {
        "question": "What does this pack install?",
        "answer": "It installs immutable extension-pack ADR/SPEC documents declared by digital-branding-governance-pack's packaged manifests."
      },
      {
        "question": "How is it synchronized?",
        "answer": "Use `ssot pack preflight . digital-branding-governance-pack` before `ssot pack sync . digital-branding-governance-pack --trust --yes` so compatibility and reserved document identities are checked before mutation."
      },
      {
        "question": "Where is the source of truth?",
        "answer": "The source repo is https://github.com/groupsum/digital-branding-governance-pack; the PyPI project is https://pypi.org/project/digital-branding-governance-pack/."
      }
    ],
    "entities": [
      {
        "id": "ADR-TEMPLATE-0001",
        "type": "adr",
        "title": "Define brand identity and positioning",
        "status": "draft",
        "description": "Use this template to document audience, purpose, positioning, and brand principles before local profile and style decisions.",
        "sourcePath": ".ssot/adr/ADR-TEMPLATE-0001-brand-identity-positioning.yaml",
        "introducedIn": "0.1.0"
      },
      {
        "id": "ADR-TEMPLATE-0002",
        "type": "adr",
        "title": "Define naming, voice, and tone",
        "status": "draft",
        "description": "Use this template to document naming, voice, tone, and copy examples for a local branding profile.",
        "sourcePath": ".ssot/adr/ADR-TEMPLATE-0002-naming-voice-tone.yaml",
        "introducedIn": "0.1.0"
      },
      {
        "id": "ADR-TEMPLATE-0003",
        "type": "adr",
        "title": "Govern the branding profile",
        "status": "draft",
        "description": "Use this template to decide the local branding profile structure and ownership model.",
        "sourcePath": ".ssot/adr/ADR-TEMPLATE-0003-branding-profile-governance.yaml",
        "introducedIn": "0.1.0"
      },
      {
        "id": "ADR-TEMPLATE-0004",
        "type": "adr",
        "title": "Govern typography style",
        "status": "draft",
        "description": "Use this template to document typography style guidance, sourcing boundaries, and fallbacks.",
        "sourcePath": ".ssot/adr/ADR-TEMPLATE-0004-typography-font-governance.yaml",
        "introducedIn": "0.1.0"
      },
      {
        "id": "ADR-TEMPLATE-0005",
        "type": "adr",
        "title": "Govern color and theme style",
        "status": "draft",
        "description": "Use this template to document color and theme style guidance without prescribing concrete colors.",
        "sourcePath": ".ssot/adr/ADR-TEMPLATE-0005-color-theme-governance.yaml",
        "introducedIn": "0.1.0"
      },
      {
        "id": "ADR-TEMPLATE-0006",
        "type": "adr",
        "title": "Govern accessibility style guidance",
        "status": "draft",
        "description": "Use this template to document accessible style guidance for contrast, focus, keyboard, and reduced motion.",
        "sourcePath": ".ssot/adr/ADR-TEMPLATE-0006-accessibility-conformance.yaml",
        "introducedIn": "0.1.0"
      },
      {
        "id": "ADR-TEMPLATE-0007",
        "type": "adr",
        "title": "Provide branding profile and style examples",
        "status": "draft",
        "description": "Use this template to decide which examples demonstrate the local branding profile and styles.",
        "sourcePath": ".ssot/adr/ADR-TEMPLATE-0007-examples-consumer-integration.yaml",
        "introducedIn": "0.1.0"
      },
      {
        "id": "ADR-TEMPLATE-0008",
        "type": "adr",
        "title": "Govern branding profile and style evolution",
        "status": "draft",
        "description": "Use this template to document how branding profile and style changes are versioned and retired.",
        "sourcePath": ".ssot/adr/ADR-TEMPLATE-0008-versioning-deprecation.yaml",
        "introducedIn": "0.1.0"
      },
      {
        "id": "ADR-TEMPLATE-0009",
        "type": "adr",
        "title": "Govern branding profile and style review evidence",
        "status": "draft",
        "description": "Use this template to decide what evidence supports local branding profile and style changes.",
        "sourcePath": ".ssot/adr/ADR-TEMPLATE-0009-release-evidence.yaml",
        "introducedIn": "0.1.0"
      },
      {
        "id": "SPEC-TEMPLATE-0001",
        "type": "spec",
        "title": "Brand identity and positioning contract",
        "status": "draft",
        "description": "Use this template to specify identity, audience, positioning, and non-goal fields for a local branding profile.",
        "sourcePath": ".ssot/specs/SPEC-TEMPLATE-0001-brand-identity-positioning.yaml",
        "introducedIn": "0.1.0"
      },
      {
        "id": "SPEC-TEMPLATE-0002",
        "type": "spec",
        "title": "Naming, voice, and tone contract",
        "status": "draft",
        "description": "Use this template to specify naming, voice, tone, and copy-example fields for a local branding profile.",
        "sourcePath": ".ssot/specs/SPEC-TEMPLATE-0002-naming-voice-tone.yaml",
        "introducedIn": "0.1.0"
      },
      {
        "id": "SPEC-TEMPLATE-0003",
        "type": "spec",
        "title": "Branding profile contract",
        "status": "draft",
        "description": "Use this template to specify the shape, ownership, and lifecycle of a local branding profile.",
        "sourcePath": ".ssot/specs/SPEC-TEMPLATE-0003-branding-profile.yaml",
        "introducedIn": "0.1.0"
      },
      {
        "id": "SPEC-TEMPLATE-0004",
        "type": "spec",
        "title": "Typography style contract",
        "status": "draft",
        "description": "Use this template to specify typography style guidance and font delivery boundaries.",
        "sourcePath": ".ssot/specs/SPEC-TEMPLATE-0004-typography-fonts.yaml",
        "introducedIn": "0.1.0"
      },
      {
        "id": "SPEC-TEMPLATE-0005",
        "type": "spec",
        "title": "Color and theme style contract",
        "status": "draft",
        "description": "Use this template to specify color and theme style guidance without prescribing concrete palettes.",
        "sourcePath": ".ssot/specs/SPEC-TEMPLATE-0005-color-theme.yaml",
        "introducedIn": "0.1.0"
      },
      {
        "id": "SPEC-TEMPLATE-0006",
        "type": "spec",
        "title": "Accessibility style contract",
        "status": "draft",
        "description": "Use this template to specify how accessibility informs local branding profile and style guidance.",
        "sourcePath": ".ssot/specs/SPEC-TEMPLATE-0006-accessibility.yaml",
        "introducedIn": "0.1.0"
      },
      {
        "id": "SPEC-TEMPLATE-0007",
        "type": "spec",
        "title": "Branding profile and style examples contract",
        "status": "draft",
        "description": "Use this template to specify examples that demonstrate local branding profile and style application.",
        "sourcePath": ".ssot/specs/SPEC-TEMPLATE-0007-consumer-examples.yaml",
        "introducedIn": "0.1.0"
      },
      {
        "id": "SPEC-TEMPLATE-0008",
        "type": "spec",
        "title": "Branding profile and style evolution contract",
        "status": "draft",
        "description": "Use this template to specify how local branding profile and style changes evolve.",
        "sourcePath": ".ssot/specs/SPEC-TEMPLATE-0008-versioning-deprecation.yaml",
        "introducedIn": "0.1.0"
      },
      {
        "id": "SPEC-TEMPLATE-0009",
        "type": "spec",
        "title": "Branding profile and style review evidence contract",
        "status": "draft",
        "description": "Use this template to specify evidence that supports local branding profile and style changes.",
        "sourcePath": ".ssot/specs/SPEC-TEMPLATE-0009-release-evidence.yaml",
        "introducedIn": "0.1.0"
      }
    ],
    "metadata": {
      "version": "0.1.0",
      "license": "Apache-2.0",
      "author": "Digital Branding Governance Pack Maintainers",
      "published": "PyPI project metadata"
    },
    "bodyMd": "# Digital Branding Governance Pack\n\nPortable SSOT governance pack for digital branding systems.\n\n- Package: `digital-branding-governance-pack`\n- GitHub: https://github.com/groupsum/digital-branding-governance-pack\n- PyPI: https://pypi.org/project/digital-branding-governance-pack/\n- Sync surface: 9 specs and 9 ADRs\n- Origin id: `pack:digital.branding.governance`\n\n## SSOT Pack Workflow\n\n```bash\nssot pack inspect digital-branding-governance-pack\nssot pack preflight . digital-branding-governance-pack\nssot pack sync . digital-branding-governance-pack --trust --yes\n```\n\nThe synced rows are extension-pack ADR/SPEC documents. Downstream repositories keep their own repo-local ADRs and SPECs separate from these immutable imported documents."
  }
};
