import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { UrgentAlertBanner } from './components/common/UrgentAlertBanner';
import { DonationModal } from './components/common/DonationModal';
import { VolunteerModal } from './components/common/VolunteerModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { CampaignsPage } from './pages/CampaignsPage';
import { CampaignDetailPage } from './pages/CampaignDetailPage';
import { StoriesPage } from './pages/StoriesPage';
import { GetInvolvedPage } from './pages/GetInvolvedPage';
import { ContactPage } from './pages/ContactPage';
import { Heart } from 'lucide-react';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedSlug, setSelectedSlug] = useState<string>('');
  
  // Modal states
  const [isDonateOpen, setIsDonateOpen] = useState<boolean>(false);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState<boolean>(false);
  const [selectedCampaignId, setSelectedCampaignId] = useState<string | undefined>(undefined);

  // Navigation handler
  const handleNavigate = (page: string, param?: string) => {
    setCurrentPage(page);
    if (param) {
      setSelectedSlug(param);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDonate = (campaignId?: string) => {
    setSelectedCampaignId(campaignId);
    setIsDonateOpen(true);
  };

  const handleOpenVolunteer = () => {
    setIsVolunteerOpen(true);
  };

  const handleDonateAmount = (amount: number) => {
    setIsDonateOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-600 selection:text-white font-sans">
      {/* Top Banner */}
      <UrgentAlertBanner onDonateClick={() => handleOpenDonate()} />

      {/* Main Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenDonate={handleOpenDonate}
        onOpenVolunteer={handleOpenVolunteer}
      />

      {/* Page View Renderer */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenDonate={handleOpenDonate}
            onOpenVolunteer={handleOpenVolunteer}
            onDonateAmount={handleDonateAmount}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenDonate={handleOpenDonate}
            onOpenVolunteer={handleOpenVolunteer}
          />
        )}

        {currentPage === 'programs' && (
          <ProgramsPage
            onOpenDonate={handleOpenDonate}
            onOpenVolunteer={handleOpenVolunteer}
          />
        )}

        {currentPage === 'campaigns' && (
          <CampaignsPage
            onNavigate={handleNavigate}
            onOpenDonate={handleOpenDonate}
          />
        )}

        {currentPage === 'campaign-detail' && (
          <CampaignDetailPage
            slug={selectedSlug}
            onNavigate={handleNavigate}
            onOpenDonate={handleOpenDonate}
            onDonateAmount={handleDonateAmount}
          />
        )}

        {currentPage === 'stories' && (
          <StoriesPage
            onOpenDonate={handleOpenDonate}
          />
        )}

        {currentPage === 'get-involved' && (
          <GetInvolvedPage
            onOpenDonate={handleOpenDonate}
            onOpenVolunteer={handleOpenVolunteer}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Floating Action Button for Instant Mobile / Desktop Giving */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => handleOpenDonate()}
          className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-extrabold text-sm shadow-2xl hover:shadow-emerald-600/40 border border-emerald-400/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          aria-label="Quick Donate"
        >
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
          </span>
          <Heart className="w-4 h-4 fill-amber-300 text-amber-300" />
          <span>Support VAAFD</span>
        </button>
      </div>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDonate={handleOpenDonate}
        onOpenVolunteer={handleOpenVolunteer}
      />

      {/* Modals */}
      <DonationModal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
        defaultCampaignId={selectedCampaignId}
      />

      <VolunteerModal
        isOpen={isVolunteerOpen}
        onClose={() => setIsVolunteerOpen(false)}
      />
    </div>
  );
}

export default App;
