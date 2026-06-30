export interface GovernancePackEntity {
  id: string;
  type: 'adr' | 'spec' | 'feature' | 'test';
  title: string;
  status: 'draft' | 'proposal' | 'active' | 'deprecated' | 'rejected';
  description?: string;
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
    slug: "seo-aeo-aieo-governance-pack",
    name: "seo-aeo-aieo-governance-pack",
    role: "Standard Search & Model Index policy guidelines",
    syncs: "12 specifications, 10 ADRs",
    reservedRange: "SPEC-SEO-00 to SPEC-SEO-99",
    description: "Enforces semantic HTML, structured data, and LLM-friendly plain text configurations for discoverability.",
    ghRepo: "https://github.com/groupsum/seo-aeo-aieo-governance-pack",
    pypiLink: "https://pypi.org/project/seo-aeo-aieo-governance-pack",
    softwareApplications: ["SSOT Registry Validator", "SEO Crawler Tool"],
    softwareSourceCode: ["Python (PyPI package)", "Typescript UI definitions"],
    questionsAndAnswers: [
      {
        question: "How does this pack handle missing JSON-LD?",
        answer: "The preflight hook throws a fatal error and prevents the release from being promoted to the 'Certified' tier if valid JSON-LD is not detected on indexed routes."
      },
      {
        question: "What is AiEO and why is it required here?",
        answer: "AI Engine Optimization (AiEO) ensures that Large Language Models can easily parse your documentation, usually enforced by requiring a well-formatted llms.txt file at the root."
      },
      {
        question: "Can I opt out of the 60-character title limit?",
        answer: "Yes. You can add a local override in your registry's exclusion lists, provided it is cryptographically signed by an authorized maintainer."
      }
    ],
    entities: [
      { id: "SPEC-SEO-01", type: "spec", title: "JSON-LD Requirement for Public Pages", status: "active", description: "All public-facing routes must embed a valid Schema.org JSON-LD snippet outlining the page context." },
      { id: "SPEC-SEO-02", type: "spec", title: "llms.txt Structure and Guidelines", status: "active", description: "Defines the required markdown formatting and metadata for llms.txt files placed in repository roots." },
      { id: "ADR-SEO-101", type: "adr", title: "Adopt Schema.org for all structured data", status: "active", description: "Decision to standardize on Schema.org vocabularies instead of custom ontologies to maximize compatibility." },
      { id: "TEST-SEO-05", type: "test", title: "Verify Crawler Matrix Coverage", status: "proposal", description: "Automated test suite to ensure known search and AI crawlers can access standard routes without JavaScript." },
      { id: "FEAT-SEO-12", type: "feature", title: "Automated Sitemap Generation", status: "active", description: "Requires build pipelines to automatically generate and validate sitemap.xml against registered dynamic routes." }
    ],
    metadata: {
      version: "1.2.0",
      license: "Apache-2.0",
      author: "SSOT Core Team",
      published: "2026-05-15"
    },
    bodyMd: `
# SEO, AEO, and AiEO Governance

This pack delivers strict specifications for modern discovery environments:
1. **Search Engine Optimization (SEO)**
2. **Answer Engine Optimization (AEO)**
3. **AI Engine Optimization (AiEO)**

## Core Directives

- All public pages MUST implement JSON-LD.
- All repositories MUST generate an \`llms.txt\` file at their root.
- The crawler matrix must be covered by unit tests.

## Commands

\`\`\`bash
$ ssot pack inspect seo-aeo-aieo-governance-pack
$ ssot pack preflight . seo-aeo-aieo-governance-pack
$ ssot pack sync . seo-aeo-aieo-governance-pack --trust --yes
\`\`\`
`
  },
  "cache-freshness-governance-pack": {
    slug: "cache-freshness-governance-pack",
    name: "cache-freshness-governance-pack",
    role: "Cache control and data hydration consistency checks",
    syncs: "8 specifications, 4 ADRs",
    reservedRange: "SPEC-CACHE-00 to SPEC-CACHE-99",
    description: "Standardizes cache-control headers, stale-while-revalidate patterns, and CDNs.",
    ghRepo: "https://github.com/groupsum/cache-freshness-governance-pack",
    pypiLink: "https://pypi.org/project/cache-freshness-governance-pack",
    softwareApplications: ["Edge Cache Validator", "SSOT Policy Engine"],
    softwareSourceCode: ["Python (PyPI package)", "YAML rulesets"],
    questionsAndAnswers: [
      {
        question: "Does this pack enforce max-age headers globally?",
        answer: "No. It requires explicitly defined cache-control headers on static assets, but the specific max-age values can be tuned per environment."
      },
      {
        question: "How does it handle SSR hydration mismatches?",
        answer: "The pack injects rules into the CI pipeline that simulate stale content delivery and check if the client correctly recovers via stale-while-revalidate."
      }
    ],
    entities: [
      { id: "SPEC-CACHE-01", type: "spec", title: "Edge Cache Control Header Guidelines", status: "active" },
      { id: "ADR-CACHE-04", type: "adr", title: "Stale-While-Revalidate Fallback Pattern", status: "proposal" }
    ],
    metadata: {
      version: "0.9.4",
      license: "Apache-2.0",
      author: "SSOT Core Team",
      published: "2026-06-10"
    },
    bodyMd: `
# Cache Freshness Governance

This policy pack prevents stale data and hydration errors in modern edge architectures.

## Policies

- CDNs MUST respect origin \`Cache-Control\` headers.
- HTML responses MUST never be cached for more than 5 minutes on the edge without \`stale-while-revalidate\`.
- All static assets must use content hashes in their filenames for immutable caching.

## Usage

\`\`\`bash
$ ssot pack preflight . cache-freshness-governance-pack
\`\`\`
`
  },
  "digital-signature-governance-pack": {
    slug: "digital-signature-governance-pack",
    name: "digital-signature-governance-pack",
    role: "Cryptographic release verification signatures",
    syncs: "15 specifications, 12 ADRs",
    reservedRange: "SPEC-SIG-00 to SPEC-SIG-99",
    description: "Enforces software supply chain security through cryptographically signed attestations.",
    ghRepo: "https://github.com/groupsum/digital-signature-governance-pack",
    pypiLink: "https://pypi.org/project/digital-signature-governance-pack",
    softwareApplications: ["Sigstore Client", "Cosign Integrator"],
    softwareSourceCode: ["Python (PyPI package)", "Cosign policies"],
    questionsAndAnswers: [
      {
        question: "What happens if a developer's GPG key expires?",
        answer: "Commits will be rejected by the preflight hook until a new, valid key is registered and attested."
      },
      {
        question: "Does this integrate with Sigstore natively?",
        answer: "Yes, it relies heavily on Cosign and Sigstore's ephemeral keyless signing infrastructure."
      }
    ],
    entities: [
      { id: "SPEC-SIG-01", type: "spec", title: "Mandatory GPG Signatures on Commits", status: "active" },
      { id: "ADR-SIG-12", type: "adr", title: "Adopt Sigstore for keyless signing", status: "active" }
    ],
    metadata: {
      version: "2.1.0",
      license: "Apache-2.0",
      author: "SSOT Security Team",
      published: "2026-06-25"
    },
    bodyMd: `
# Digital Signature Governance

Ensures that no artifact is promoted without a verifiable, non-repudiable signature.

## Key Requirements

1. **Commit Signatures**: All merges to the main branch must be signed.
2. **Artifact Attestation**: Releases must include SLSA provenance files.
3. **Container Signing**: All published images must be signed using ephemeral keys.
`
  },
  "a11y-compliance-governance-pack": {
    slug: "a11y-compliance-governance-pack",
    name: "a11y-compliance-governance-pack",
    role: "Accessibility (WCAG 2.2) standards enforcement",
    syncs: "22 specifications, 5 ADRs",
    reservedRange: "SPEC-A11Y-00 to SPEC-A11Y-99",
    description: "Requires minimum WCAG 2.2 AA compliance for all user-facing web applications.",
    ghRepo: "https://github.com/groupsum/a11y-compliance-governance-pack",
    pypiLink: "https://pypi.org/project/a11y-compliance-governance-pack",
    softwareApplications: ["Axe Core Wrappers", "Lighthouse Integrator"],
    softwareSourceCode: ["Python (PyPI package)", "Playwright specs"],
    questionsAndAnswers: [
      {
        question: "What level of WCAG compliance is enforced?",
        answer: "WCAG 2.2 Level AA is enforced by default. You can opt-in to Level AAA via a strict mode flag."
      },
      {
        question: "Are manual screen reader tests required?",
        answer: "While automated tests catch 30-40% of issues, the pack requires a signed attestation for manual screen reader audits before T3 certification."
      }
    ],
    entities: [
      { id: "SPEC-A11Y-01", type: "spec", title: "WCAG 2.2 AA Baseline Enforcement", status: "active" },
      { id: "TEST-A11Y-01", type: "test", title: "Axe Core Violations Check", status: "active" }
    ],
    metadata: {
      version: "1.0.5",
      license: "MIT",
      author: "SSOT Frontend Group",
      published: "2026-03-20"
    },
    bodyMd: `
# Accessibility (A11y) Governance

Defines the absolute minimum requirements for building accessible applications.

## Requirements
- Automated axe-core runs must report 0 violations.
- Contrast ratios must meet or exceed 4.5:1 for normal text.
- Keyboard navigation must be fully supported without logical traps.
`
  },
  "zero-trust-network-governance-pack": {
    slug: "zero-trust-network-governance-pack",
    name: "zero-trust-network-governance-pack",
    role: "Identity-aware access and mutual TLS requirements",
    syncs: "18 specifications, 22 ADRs",
    reservedRange: "SPEC-ZTN-00 to SPEC-ZTN-99",
    description: "Enforces mutual TLS (mTLS) and identity-aware proxies for all internal service communication.",
    ghRepo: "https://github.com/groupsum/zero-trust-network-governance-pack",
    pypiLink: "https://pypi.org/project/zero-trust-network-governance-pack",
    softwareApplications: ["Envoy Config Validator", "Istio Policy Sync"],
    softwareSourceCode: ["Python (PyPI package)", "Rego policies"],
    questionsAndAnswers: [
      {
        question: "Is IP-based allowlisting permitted?",
        answer: "No. The core philosophy of this pack forbids relying solely on IP addresses. Identity must be verified cryptographically."
      },
      {
        question: "How are service meshes handled?",
        answer: "The pack provides native hooks for Istio and Linkerd to validate sidecar injection and strict mTLS modes."
      }
    ],
    entities: [
      { id: "SPEC-ZTN-01", type: "spec", title: "mTLS Requirement for Internal Traffic", status: "active" },
      { id: "ADR-ZTN-22", type: "adr", title: "Deprecate IP-based Allowlisting", status: "deprecated" }
    ],
    metadata: {
      version: "3.0.1",
      license: "Apache-2.0",
      author: "SSOT Security Team",
      published: "2026-01-15"
    },
    bodyMd: `
# Zero Trust Network Governance

Assumes the network is hostile and requires explicit cryptographic identity verification.

## Core Rules
- **No IP Trust**: Do not trust internal networks.
- **mTLS Everywhere**: All service-to-service traffic must use mutual TLS.
- **Short-Lived Certs**: Certificates must expire within 24 hours.
`
  },
  "secret-management-governance-pack": {
    slug: "secret-management-governance-pack",
    name: "secret-management-governance-pack",
    role: "Secret rotation, storage, and scanning standards",
    syncs: "9 specifications, 6 ADRs",
    reservedRange: "SPEC-SEC-00 to SPEC-SEC-99",
    description: "Prevents secret leaks in source code and standardizes Vault/KMS integrations.",
    ghRepo: "https://github.com/groupsum/secret-management-governance-pack",
    pypiLink: "https://pypi.org/project/secret-management-governance-pack",
    softwareApplications: ["TruffleHog Hook", "Vault Policy Validator"],
    softwareSourceCode: ["Python (PyPI package)", "Go binaries"],
    questionsAndAnswers: [
      {
        question: "What happens if a secret is committed by accident?",
        answer: "The pre-commit hooks and CI actions will immediately fail the build. The pack requires the secret to be revoked before the branch can proceed."
      },
      {
        question: "Does this require HashiCorp Vault?",
        answer: "No, the policies are abstract and support AWS KMS, Google Cloud Secret Manager, and Azure Key Vault equally."
      }
    ],
    entities: [
      { id: "SPEC-SEC-01", type: "spec", title: "Pre-commit Secret Scanning Rules", status: "active" }
    ],
    metadata: {
      version: "2.5.0",
      license: "Apache-2.0",
      author: "SSOT Security Team",
      published: "2026-04-11"
    },
    bodyMd: `
# Secret Management Governance

Safeguards credentials, API keys, and sensitive configuration.

## Requirements
- Secrets must never be written to disk in plain text.
- Automated secret scanning (e.g., TruffleHog) must run on every commit.
- API keys must support non-disruptive rotation.
`
  },
  "api-versioning-governance-pack": {
    slug: "api-versioning-governance-pack",
    name: "api-versioning-governance-pack",
    role: "REST and GraphQL versioning strategies",
    syncs: "14 specifications, 8 ADRs",
    reservedRange: "SPEC-API-00 to SPEC-API-99",
    description: "Standardizes backwards compatibility and deprecation windows for public APIs.",
    ghRepo: "https://github.com/groupsum/api-versioning-governance-pack",
    pypiLink: "https://pypi.org/project/api-versioning-governance-pack",
    softwareApplications: ["OpenAPI Linter", "GraphQL Schema Diff"],
    softwareSourceCode: ["Python (PyPI package)", "Spectral rulesets"],
    questionsAndAnswers: [
      {
        question: "Are breaking changes allowed?",
        answer: "Yes, but they must be introduced in a new API version, and the old version must be supported for a minimum 6-month deprecation window."
      },
      {
        question: "How does it handle GraphQL?",
        answer: "GraphQL breaking changes (removing fields) are strictly monitored via schema diffing tools integrated into the pack."
      }
    ],
    entities: [
      { id: "SPEC-API-01", type: "spec", title: "URL Versioning Scheme v1", status: "active" },
      { id: "ADR-API-08", type: "adr", title: "GraphQL Schema Evolution Policy", status: "active" }
    ],
    metadata: {
      version: "1.1.2",
      license: "MIT",
      author: "SSOT API Group",
      published: "2025-11-20"
    },
    bodyMd: `
# API Versioning Governance

Ensures clients are never broken unexpectedly by backend changes.

## Core Directives
- **URL Versioning**: REST APIs must use \`/v1/\` style paths.
- **Deprecation Headers**: Endpoints scheduled for removal must return \`Deprecation\` headers.
- **Schema Validation**: OpenAPI specs must match the implementation exactly.
`
  },
  "db-migration-governance-pack": {
    slug: "db-migration-governance-pack",
    name: "db-migration-governance-pack",
    role: "Safe database schema evolution standards",
    syncs: "7 specifications, 11 ADRs",
    reservedRange: "SPEC-DBM-00 to SPEC-DBM-99",
    description: "Requires zero-downtime database migrations and backwards-compatible schema changes.",
    ghRepo: "https://github.com/groupsum/db-migration-governance-pack",
    pypiLink: "https://pypi.org/project/db-migration-governance-pack",
    softwareApplications: ["Schema Validator", "Atlas Integration"],
    softwareSourceCode: ["Python (PyPI package)", "SQL linter rules"],
    questionsAndAnswers: [
      {
        question: "Can I drop a column in a single deployment?",
        answer: "No. The pack enforces a multi-step release pattern: Deprecate usage -> Stop writing -> Remove column."
      },
      {
        question: "Does it support NoSQL databases?",
        answer: "Currently, this pack focuses heavily on relational databases (PostgreSQL/MySQL), but provides abstract guidelines for document schema evolution."
      }
    ],
    entities: [
      { id: "SPEC-DBM-01", type: "spec", title: "Multi-Step Column Removal Pattern", status: "active" }
    ],
    metadata: {
      version: "0.8.0",
      license: "Apache-2.0",
      author: "SSOT Data Team",
      published: "2026-02-28"
    },
    bodyMd: `
# Database Migration Governance

Safeguards production data during schema evolution.

## Requirements
- All migrations must be backwards-compatible with the *previous* application version.
- Table locks must not exceed 5 seconds in production environments.
- Rollback scripts are mandatory for every migration.
`
  },
  "telemetry-observability-governance-pack": {
    slug: "telemetry-observability-governance-pack",
    name: "telemetry-observability-governance-pack",
    role: "OpenTelemetry standards and tracing requirements",
    syncs: "11 specifications, 7 ADRs",
    reservedRange: "SPEC-OBS-00 to SPEC-OBS-99",
    description: "Standardizes distributed tracing, metrics, and log correlation via OpenTelemetry.",
    ghRepo: "https://github.com/groupsum/telemetry-observability-governance-pack",
    pypiLink: "https://pypi.org/project/telemetry-observability-governance-pack",
    softwareApplications: ["OTel Config Linter", "Trace Verifier"],
    softwareSourceCode: ["Python (PyPI package)", "OTel Collector Configs"],
    questionsAndAnswers: [
      {
        question: "Are we locked into a specific vendor?",
        answer: "No. The pack strictly requires the use of vendor-neutral OpenTelemetry SDKs."
      },
      {
        question: "How much overhead does tracing add?",
        answer: "The pack enforces probabilistic sampling rules to ensure tracing overhead remains under 3% of total request latency."
      }
    ],
    entities: [
      { id: "SPEC-OBS-01", type: "spec", title: "OpenTelemetry SDK Configuration", status: "active" }
    ],
    metadata: {
      version: "1.4.1",
      license: "MIT",
      author: "SSOT Ops Team",
      published: "2026-05-01"
    },
    bodyMd: `
# Telemetry & Observability Governance

Guarantees system visibility through standardized telemetry.

## Requirements
- All services must propagate standard \`traceparent\` headers.
- Logs must include the trace ID and span ID for correlation.
- Critical business metrics must be exposed via standard OTel metric pipelines.
`
  },
  "dependency-pinning-governance-pack": {
    slug: "dependency-pinning-governance-pack",
    name: "dependency-pinning-governance-pack",
    role: "Software supply chain reproducibility",
    syncs: "6 specifications, 4 ADRs",
    reservedRange: "SPEC-DEP-00 to SPEC-DEP-99",
    description: "Requires strict dependency pinning and lockfile validations to prevent supply chain attacks.",
    ghRepo: "https://github.com/groupsum/dependency-pinning-governance-pack",
    pypiLink: "https://pypi.org/project/dependency-pinning-governance-pack",
    softwareApplications: ["Lockfile Analyzer", "SBOM Generator"],
    softwareSourceCode: ["Python (PyPI package)", "Bash scripts"],
    questionsAndAnswers: [
      {
        question: "Are caret (^) and tilde (~) dependencies allowed?",
        answer: "In the raw manifest yes, but the build MUST be driven entirely by a strictly pinned lockfile (e.g., package-lock.json)."
      },
      {
        question: "Does it generate SBOMs?",
        answer: "Yes, preflight checks require the generation of a valid SPDX or CycloneDX SBOM."
      }
    ],
    entities: [
      { id: "SPEC-DEP-01", type: "spec", title: "SBOM Generation Requirements", status: "active" }
    ],
    metadata: {
      version: "1.1.0",
      license: "Apache-2.0",
      author: "SSOT Security Team",
      published: "2026-01-10"
    },
    bodyMd: `
# Dependency Pinning Governance

Prevents "it works on my machine" issues and mitigates supply chain poisoning.

## Requirements
- Builds must use strict lockfiles (e.g., \`npm ci\` instead of \`npm install\`).
- Transitive dependencies must be explicitly resolved and audited.
- SBOMs must be attached to the final artifact.
`
  },
  "log-retention-governance-pack": {
    slug: "log-retention-governance-pack",
    name: "log-retention-governance-pack",
    role: "Compliance and privacy in application logging",
    syncs: "5 specifications, 3 ADRs",
    reservedRange: "SPEC-LOG-00 to SPEC-LOG-99",
    description: "Enforces PII redaction and strict lifecycle policies for application logs.",
    ghRepo: "https://github.com/groupsum/log-retention-governance-pack",
    pypiLink: "https://pypi.org/project/log-retention-governance-pack",
    softwareApplications: ["PII Scanner", "Log Retention Validator"],
    softwareSourceCode: ["Python (PyPI package)", "Regex rulesets"],
    questionsAndAnswers: [
      {
        question: "Can we store IP addresses in the logs?",
        answer: "Only if they are anonymized or immediately dropped after rate-limiting layers process them, per GDPR compliance rules in the pack."
      },
      {
        question: "What is the standard retention period?",
        answer: "Application logs are retained for 30 days hot, 90 days cold, and then permanently destroyed unless under legal hold."
      }
    ],
    entities: [
      { id: "SPEC-LOG-01", type: "spec", title: "Log Retention Lifecycle", status: "active" }
    ],
    metadata: {
      version: "0.9.5",
      license: "MIT",
      author: "SSOT Privacy Group",
      published: "2025-12-05"
    },
    bodyMd: `
# Log Retention & Privacy Governance

Ensures logs provide observability without becoming a liability.

## Requirements
- Passwords, tokens, and PII must be redacted before being written to stdout.
- Logs must be structured (JSON) for automated parsing and scrubbing.
- Strict TTLs must be applied to all centralized logging clusters.
`
  },
  "i18n-l10n-governance-pack": {
    slug: "i18n-l10n-governance-pack",
    name: "i18n-l10n-governance-pack",
    role: "Internationalization and localization standards",
    syncs: "8 specifications, 2 ADRs",
    reservedRange: "SPEC-INT-00 to SPEC-INT-99",
    description: "Standardizes translation key structures, right-to-left (RTL) support, and locale routing.",
    ghRepo: "https://github.com/groupsum/i18n-l10n-governance-pack",
    pypiLink: "https://pypi.org/project/i18n-l10n-governance-pack",
    softwareApplications: ["Translation Key Linter", "RTL Layout Checker"],
    softwareSourceCode: ["Python (PyPI package)", "JSON Schema validators"],
    questionsAndAnswers: [
      {
        question: "Do we have to support RTL languages?",
        answer: "If your product is marked for global release tier 1, yes. The pack validates that CSS logical properties are used instead of physical margins."
      },
      {
        question: "How are missing translations handled?",
        answer: "The pack enforces a strict fallback chain to 'en-US' and flags missing translations as warnings in CI."
      }
    ],
    entities: [
      { id: "SPEC-INT-01", type: "spec", title: "RTL Logical Properties Standard", status: "active" }
    ],
    metadata: {
      version: "1.0.0",
      license: "Apache-2.0",
      author: "SSOT Frontend Group",
      published: "2026-06-01"
    },
    bodyMd: `
# Internationalization Governance

Ensures products are accessible to a global audience.

## Requirements
- Hardcoded UI strings are strictly forbidden.
- CSS must use logical properties (e.g., \`margin-inline-start\`) instead of physical properties (\`margin-left\`).
- Number and date formatting must respect the user's active locale.
`
  }
};
