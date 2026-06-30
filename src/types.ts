export type ADROrigin = 'ssot-core' | 'ssot-origin' | 'repo-local' | 'extension-pack';

export interface PackageInfo {
  id: string;
  name: string;
  version: string;
  role: string;
  installUv: string;
  installPip: string;
  bestFor: string;
  notFor?: string;
  proofPoint: string;
  commands: { cmd: string; desc: string }[];
  publicMessage: string;
  isOptional?: boolean;
}

export interface CorpusPage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  section: string; // features, proof, packages, etc.
  subject: string; // ADRs, Specs, etc.
  audience: string; // Developer, Architect, Release Manager, AI Builder
  intent: string; // Concept, Tutorial, Reference, Checklist
  content: string;
  directAnswer: string;
  faqs?: { q: string; a: string }[];
  breadcrumbs: string[];
  relatedPackages: string[];
  relatedApis: string[];
  updatedAt: string;
}

export interface RegistryStat {
  label: string;
  value: number;
  description: string;
}
