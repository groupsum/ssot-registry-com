/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Page Imports
import Home from './pages/Home';
import Workflows from './pages/Workflows';
import Packages from './pages/Packages';
import ProofModel from './pages/ProofModel';
import GovernancePacks from './pages/GovernancePacks';
import GovernancePackDetail from './pages/GovernancePackDetail';
import RegistryBrowser from './pages/RegistryBrowser';
import MetadataHub from './pages/MetadataHub';
import Plugins from './pages/Plugins';
import PluginDetail from './pages/PluginDetail';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-white text-zinc-900">
        {/* Navigation Header */}
        <Navbar />

        {/* Primary Page Slots */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workflows" element={<Workflows />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/proof-chain" element={<ProofModel />} />
            <Route path="/proof-model" element={<Navigate to="/proof-chain" replace />} />
            <Route path="/governance-packs" element={<GovernancePacks />} />
            <Route path="/governance-packs/:slug" element={<GovernancePackDetail />} />
            <Route path="/registry-browser" element={<RegistryBrowser />} />
            <Route path="/corpus-explorer" element={<Navigate to="/registry-browser" replace />} />
            <Route path="/metadata-hub" element={<MetadataHub />} />
            <Route path="/plugins" element={<Plugins />} />
            <Route path="/plugin/:pluginSlug" element={<PluginDetail />} />
            <Route path="/plguin/:pluginSlug" element={<Navigate to="/plugin/:pluginSlug" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}
