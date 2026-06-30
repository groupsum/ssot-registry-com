export interface RegistryMetadata {
  projectName: string;
  version: string;
  schemaVersion: string;
  repositoryUrl: string;
  updatedAt: string;
  targetRelease: string;
  author: string;
}

export interface RegistryAdr {
  id: string;
  title: string;
  status: 'Draft' | 'Proposed' | 'Approved' | 'Deprecated';
  origin: 'ssot-core' | 'ssot-origin' | 'repo-local' | 'extension-pack';
  author: string;
  date: string;
  context: string;
  decision: string;
  consequences: string;
}

export interface RegistrySpecification {
  id: string;
  title: string;
  parentAdrId: string;
  ruleDefinition: string;
  verificationSource: string;
  description: string;
}

export interface RegistryFeature {
  id: string;
  name: string;
  description: string;
  specId: string;
  owner: string;
  status: 'Backlog' | 'In Progress' | 'Completed';
}

export interface RegistryClaim {
  id: string;
  statement: string;
  featureId: string;
  targetPosture: 'Critical' | 'Standard' | 'Experimental';
}

export interface RegistryTest {
  id: string;
  name: string;
  type: 'Static' | 'Integration' | 'Unit' | 'E2E';
  command: string;
  claimId: string;
}

export interface RegistryEvidence {
  id: string;
  timestamp: string;
  testId: string;
  outcome: 'PASS' | 'FAIL';
  verifier: string;
  logSnippet: string;
}

export interface SotRegistry {
  metadata: RegistryMetadata;
  adrs: RegistryAdr[];
  specifications: RegistrySpecification[];
  features: RegistryFeature[];
  claims: RegistryClaim[];
  tests: RegistryTest[];
  evidence: RegistryEvidence[];
}

import sotGovernance from './sotGovernance.json';

export const SOT_REGISTRY_DATA: SotRegistry = {
  metadata: {
    projectName: "ssot-registry-client",
    version: "0.2.24",
    schemaVersion: "0.8.0",
    repositoryUrl: "https://github.com/groupsum/ssot-registry",
    updatedAt: "2026-06-30T11:53:52.610Z",
    targetRelease: "release-v1.0.0-final",
    author: "SSOT Release Engineering Team"
  },
  adrs: sotGovernance.decisionDocuments as RegistryAdr[],
  specifications: sotGovernance.specificationDocuments as RegistrySpecification[],
  features: [
    {
      id: "FEAT-101",
      name: "RFC 8785 JCS Canonical JSON Serializer",
      description: "Natively serializes and canonicalizes all .ssot registry file modifications before disk write to ensure absolute cross-runtime signature stability.",
      specId: "SPEC-0520",
      owner: "SSOT Core Engineering Team",
      status: "Completed"
    },
    {
      id: "FEAT-102",
      name: "TUI Background Worker Loader",
      description: "Leverages async workers inside Textual framework to perform zero-freeze file loads and validations of large registry JSON graphs.",
      specId: "SPEC-0523",
      owner: "Terminal & UX Working Group",
      status: "Completed"
    },
    {
      id: "FEAT-103",
      name: "Automated Status Synchronization Engine",
      description: "Idempotently updates claim, test, and evidence status fields directly from compiled validation matrices and runtime evidence logs.",
      specId: "SPEC-0522",
      owner: "DevOps & Release Quality Team",
      status: "Completed"
    }
  ],
  claims: [
    {
      id: "CLM-201",
      statement: "All output JSON databases match RFC 8785 canonical whitespace and lexicographical key order with 100% test coverage.",
      featureId: "FEAT-101",
      targetPosture: "Critical"
    },
    {
      id: "CLM-202",
      statement: "Registry parsing, index building, and full graph validation run concurrently without blocking the main TUI thread.",
      featureId: "FEAT-102",
      targetPosture: "Standard"
    },
    {
      id: "CLM-203",
      statement: "The status sync pipeline enforces that claims are never elevated to higher tiers without successful tier-gate verification.",
      featureId: "FEAT-103",
      targetPosture: "Critical"
    }
  ],
  tests: [
    {
      id: "TST-301",
      name: "Run canonical JCS validation across all active standard templates",
      type: "Unit",
      command: "pytest tests/unit/test_jcs_canonicalization.py",
      claimId: "CLM-201"
    },
    {
      id: "TST-302",
      name: "Verify non-blocking worker concurrency during heavy schema load routines",
      type: "Integration",
      command: "pytest tests/unit/test_tui_overhaul.py",
      claimId: "CLM-202"
    },
    {
      id: "TST-303",
      name: "Verify status sync command behavior under mock test failures",
      type: "Integration",
      command: "pytest tests/integration/test_cli_status_sync.py",
      claimId: "CLM-203"
    }
  ],
  evidence: [
    {
      id: "EVD-401",
      timestamp: "2026-06-30T11:51:12Z",
      testId: "TST-301",
      outcome: "PASS",
      verifier: "GitHub Actions CI Runner #83",
      logSnippet: "Verifying 80 active template schemas...\nSuccess: all JSON documents are JCS-compliant.\nCanonical order validated. Hash stability confirmed."
    },
    {
      id: "EVD-402",
      timestamp: "2026-06-30T11:52:44Z",
      testId: "TST-302",
      outcome: "PASS",
      verifier: "Local Test Sandbox v3.4",
      logSnippet: "Spawning background Textual load worker...\nParsed 3,054 registry entities in 42ms.\nMain thread latency: 0.0ms. No lock or freeze detected."
    },
    {
      id: "EVD-403",
      timestamp: "2026-06-30T11:53:01Z",
      testId: "TST-303",
      outcome: "PASS",
      verifier: "GitHub Actions CI Runner #83",
      logSnippet: "Running 'registry sync-statuses --dry-run'...\nDerived claim statuses: clm:... promoted, clm:... certified.\nDry-run simulation passes perfectly."
    }
  ]
};
