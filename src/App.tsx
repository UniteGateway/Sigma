/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { RfpModal } from './components/RfpModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PartnersPage } from './pages/PartnersPage';
import { WindPage } from './pages/WindPage';
import { SolarPage } from './pages/SolarPage';
import { BessPage } from './pages/BessPage';
import { HybridPage } from './pages/HybridPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isRfpOpen, setIsRfpOpen] = useState(false);
  const [rfpCategory, setRfpCategory] = useState<string>('Hybrid');

  // Sync with URL hash if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'partners',
        'wind',
        'solar',
        'bess',
        'hybrid',
        'solutions',
        'projects',
        'technology',
        'sustainability',
        'careers',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRfp = (category?: string) => {
    if (category) setRfpCategory(category);
    setIsRfpOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Bar Contract Compliant Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenRfp={() => handleOpenRfp('Hybrid')}
      />

      {/* Main Page Viewport Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} onOpenRfp={handleOpenRfp} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} onOpenRfp={() => handleOpenRfp('Corporate Engagement')} />
        )}
        {currentPage === 'partners' && (
          <PartnersPage onNavigate={handleNavigate} onOpenRfp={handleOpenRfp} />
        )}
        {currentPage === 'wind' && (
          <WindPage onNavigate={handleNavigate} onOpenRfp={handleOpenRfp} />
        )}
        {currentPage === 'solar' && (
          <SolarPage onNavigate={handleNavigate} onOpenRfp={handleOpenRfp} />
        )}
        {currentPage === 'bess' && (
          <BessPage onNavigate={handleNavigate} onOpenRfp={handleOpenRfp} />
        )}
        {currentPage === 'hybrid' && (
          <HybridPage onNavigate={handleNavigate} onOpenRfp={handleOpenRfp} />
        )}
        {currentPage === 'solutions' && (
          <SolutionsPage onNavigate={handleNavigate} onOpenRfp={handleOpenRfp} />
        )}
        {currentPage === 'projects' && (
          <ProjectsPage onNavigate={handleNavigate} onOpenRfp={handleOpenRfp} />
        )}
        {currentPage === 'technology' && (
          <TechnologyPage onNavigate={handleNavigate} onOpenRfp={() => handleOpenRfp('Sigma QuantumGrid SCADA')} />
        )}
        {currentPage === 'sustainability' && (
          <SustainabilityPage onNavigate={handleNavigate} onOpenRfp={() => handleOpenRfp('ESG & Net Zero Roadmap')} />
        )}
        {currentPage === 'careers' && (
          <CareersPage onNavigate={handleNavigate} onOpenRfp={() => handleOpenRfp('Career Inquiries')} />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenRfp={() => handleOpenRfp('Direct Inquiry')}
      />

      {/* Global Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      <RfpModal
        isOpen={isRfpOpen}
        onClose={() => setIsRfpOpen(false)}
        defaultCategory={rfpCategory}
      />
    </div>
  );
}
