import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Sparkles, Phone, Mail, ChevronRight, HandHeart } from 'lucide-react';
import { ORG_INFO } from '../../data/vaafdData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, param?: string) => void;
  onOpenDonate: (campaignId?: string) => void;
  onOpenVolunteer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenDonate,
  onOpenVolunteer
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'programs', label: 'Our Programs' },
    { id: 'campaigns', label: 'Campaigns' },
    { id: 'stories', label: 'Stories & News' },
    { id: 'get-involved', label: 'Get Involved' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top micro bar for direct contact & location */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              {ORG_INFO.address}
            </span>
            <a href={`tel:${ORG_INFO.phone[0]}`} className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              {ORG_INFO.phone[0]}
            </a>
            <a href={`mailto:${ORG_INFO.email}`} className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              {ORG_INFO.email}
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">Tuition-Free Education Since {ORG_INFO.foundedYear}</span>
            <button
              onClick={onOpenVolunteer}
              className="text-amber-400 hover:text-amber-300 font-semibold cursor-pointer flex items-center gap-1 transition-colors"
            >
              <HandHeart className="w-3.5 h-3.5" />
              Become a Volunteer
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/80 py-3'
            : 'bg-white shadow-sm border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <img
                src="/logo_1.jpg"
                alt="VAAFD"
                className="h-11 w-36 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-[11px] font-medium text-slate-500 leading-none hidden sm:block">
                  Vision Awake Africa For Development
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-emerald-700 bg-emerald-50/80 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={onOpenVolunteer}
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-emerald-800 hover:bg-emerald-50 border border-slate-200 transition-all duration-200 cursor-pointer"
              >
                <HandHeart className="w-4 h-4 text-emerald-600" />
                <span>Volunteer</span>
              </button>
              
              <button
                onClick={() => onOpenDonate()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-sm shadow-md hover:shadow-emerald-600/30 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Heart className="w-4 h-4 text-amber-300 fill-amber-300" />
                <span>Donate Now</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenDonate()}
                className="sm:hidden inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs shadow-sm"
              >
                <Heart className="w-3 h-3 text-amber-300 fill-amber-300" />
                <span>Donate</span>
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-700" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top duration-200">
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold text-base transition-colors ${
                      isActive
                        ? 'text-emerald-800 bg-emerald-50 border-l-4 border-emerald-600'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                  </button>
                );
              })}

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenVolunteer();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-300 text-slate-800 font-bold hover:bg-slate-50"
                >
                  <HandHeart className="w-5 h-5 text-emerald-600" />
                  <span>Join as a Volunteer</span>
                </button>
                
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDonate();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold shadow-md text-base"
                >
                  <Heart className="w-5 h-5 text-amber-300 fill-amber-300" />
                  <span>Donate to VAAFD</span>
                </button>
              </div>

              {/* Mobile Contact Quick Info */}
              <div className="pt-4 mt-4 border-t border-slate-100 text-xs text-slate-500 space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{ORG_INFO.phone[0]} / {ORG_INFO.phone[1]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{ORG_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
