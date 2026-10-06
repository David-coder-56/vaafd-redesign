import React from 'react';
import {
  Heart,
  ArrowRight,
  BookOpen,
  Sparkles,
  Users,
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Activity,
  Droplets,
  Briefcase,
  Sprout,
  Quote,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { ORG_INFO, PROGRAMS, CAMPAIGNS, TESTIMONIALS, HOW_TO_HELP_STEPS, NEWS_ARTICLES } from '../data/vaafdData';
import { CampaignCard } from '../components/common/CampaignCard';
import { ImpactCalculator } from '../components/common/ImpactCalculator';

interface HomePageProps {
  onNavigate: (page: string, param?: string) => void;
  onOpenDonate: (campaignId?: string) => void;
  onOpenVolunteer: () => void;
  onDonateAmount: (amount: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenDonate,
  onOpenVolunteer,
  onDonateAmount
}) => {
  // Mapping icons to string names
  const renderProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'Droplets': return <Droplets className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      case 'Sprout': return <Sprout className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center bg-slate-950 overflow-hidden">
        {/* Background Image with Cinematic Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/received_243067154919694-1024x768.jpeg"
            alt="Children in classroom in Liberia"
            className="w-full h-full object-cover object-center opacity-50 scale-105 animate-pulse-subtle"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/65 to-emerald-950/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Vision Awake Africa For Development (VAAFD)</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight leading-[1.1]">
                A Sustainable Answer to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Liberia's Future</span>
              </h1>

              {/* Mission quote snippet */}
              <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
                "The civil war did such a level of destruction due to illiteracy. For no such tragedy to happen again, there is a need for an educational crusade in Liberia."
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onOpenDonate()}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-base shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <Heart className="w-5 h-5 fill-amber-300 text-amber-300" />
                  <span>Donate Tuition-Free Schooling</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => onNavigate('programs')}
                  className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-base backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-5 h-5 text-emerald-400" />
                  <span>Explore 7 Pillars</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Directed to Field
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Serving Since 2003
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-400" /> Paynesville & Monrovia
                </span>
              </div>
            </div>

            {/* Hero Right Card: Fast Giving & Impact Highlights */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                      Featured Initiative
                    </span>
                    <h3 className="text-xl font-bold text-white font-heading">
                      Build a Permanent School Home
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                    8.3% Raised
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Help construct our 12-classroom permanent school sanctuary in Paynesville, ending rented facility vulnerability for 500+ children.
                </p>

                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-emerald-400">$1,500 Raised</span>
                    <span className="text-slate-400">Target: $18,000</span>
                  </div>
                  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[8.3%] h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full"></div>
                  </div>
                </div>

                {/* Quick gift grid */}
                <div className="grid grid-cols-3 gap-2">
                  {[25, 50, 100].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => onDonateAmount(amt)}
                      className="py-3 rounded-xl bg-slate-800/80 hover:bg-emerald-800/50 border border-slate-700 hover:border-emerald-500 text-white font-bold text-sm transition-all cursor-pointer text-center"
                    >
                      ${amt}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => onOpenDonate('build-a-school-home')}
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-slate-950" />
                  <span>Support The School Home</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIVE IMPACT METRICS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          <div className="space-y-1 p-2">
            <div className="text-3xl sm:text-4xl font-black text-emerald-800 font-heading">
              {ORG_INFO.impactStats.childrenEducated}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600">
              Happy Children Educated
            </div>
            <p className="text-[11px] text-slate-400">100% Tuition-Free</p>
          </div>

          <div className="space-y-1 p-2">
            <div className="text-3xl sm:text-4xl font-black text-emerald-800 font-heading">
              {ORG_INFO.impactStats.donationsRaised}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600">
              Mobilized For Liberia
            </div>
            <p className="text-[11px] text-slate-400">Transparent & Audited</p>
          </div>

          <div className="space-y-1 p-2">
            <div className="text-3xl sm:text-4xl font-black text-emerald-800 font-heading">
              {ORG_INFO.impactStats.projectsCompleted}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600">
              Community Projects
            </div>
            <p className="text-[11px] text-slate-400">Wells, Schools & Clinics</p>
          </div>

          <div className="space-y-1 p-2">
            <div className="text-3xl sm:text-4xl font-black text-emerald-800 font-heading">
              {ORG_INFO.impactStats.volunteers}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600">
              Dedicated Volunteers
            </div>
            <p className="text-[11px] text-slate-400">Local & International</p>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER & MISSION SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white rounded-3xl p-8 sm:p-12 border border-emerald-200/80 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 sm:aspect-square">
                <img
                  src="/received_243067154919694-1024x768.jpeg"
                  alt="Students at Carolyn A. Miller School"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="font-extrabold text-lg">Carolyn A. Miller School</div>
                  <div className="text-xs text-amber-300">Students and staff in Liberia</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Quote className="w-3.5 h-3.5" />
                Our Founding Story
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading leading-snug">
                From Refugee Camp Classrooms to a Nationwide Movement
              </h2>

              <blockquote className="text-base sm:text-lg text-slate-700 italic border-l-4 border-emerald-600 pl-4 py-1 leading-relaxed">
                "{ORG_INFO.founderQuote}"
              </blockquote>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {ORG_INFO.founderBio} Today, through the Carolyn A. Miller Elementary & High School, VAAFD empowers over 1,000 students annually with tuition-free schooling, vocational trades, healthcare, and orphan care.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all duration-200 flex items-center gap-2 cursor-pointer"
                >
                  <span>Read Full History & Mission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenVolunteer}
                  className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-white font-semibold text-sm transition-all cursor-pointer"
                >
                  Join Our Volunteer Network
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEVEN PILLARS OF DEVELOPMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider inline-block">
            What We Are Doing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Holistic Community Development Pillars
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Eradicating generational poverty requires an integrated strategy: quality education, child protection, clean water, healthcare, and economic empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 p-2.5 rounded-2xl bg-white/90 backdrop-blur-sm text-emerald-800 shadow-md">
                  {renderProgramIcon(program.iconName)}
                </div>
                <div className="absolute bottom-3 left-4 text-white text-xs font-bold">
                  {program.stats} • <span className="text-emerald-300">{program.statsLabel}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-emerald-700 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {program.shortDesc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">{program.location}</span>
                  <button
                    onClick={() => onNavigate('programs')}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FEATURED FUNDRAISING CAMPAIGNS */}
      <section className="bg-slate-100/70 py-16 sm:py-24 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider inline-block">
                Help The World Better
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                Active Priority Campaigns
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Directly fund tangible assets: safe school buildings, bus transportation, laboratory equipment, and campus renovations.
              </p>
            </div>

            <button
              onClick={() => onNavigate('campaigns')}
              className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-emerald-700 font-bold text-sm shadow-xs transition-colors flex items-center gap-2 self-start md:self-auto cursor-pointer"
            >
              <span>View All 5 Causes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAMPAIGNS.slice(0, 3).map((campaign) => (
              <CampaignCard
                key={campaign.id}
                campaign={campaign}
                onDonate={(id) => onOpenDonate(id)}
                onViewDetails={(slug) => onNavigate('campaign-detail', slug)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE IMPACT CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ImpactCalculator onDonateAmount={onDonateAmount} />
      </section>

      {/* 7. HOW YOU CAN HELP - 4 SIMPLE STEPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider inline-block">
            Easy Ways To Participate
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            How You Can Make A Real Difference
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Whether through micro-donations, monthly sponsorship, volunteering, or sharing our story, every action brings hope to a Liberian child.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_TO_HELP_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-slate-200 group-hover:text-emerald-600 transition-colors font-heading">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenDonate()}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 cursor-pointer"
                >
                  <span>Take Action</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. STUDENT & COMMUNITY TESTIMONIALS */}
      <section className="bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider inline-block">
              Voices of Hope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Stories of Changed Lives
            </h2>
            <p className="text-slate-300 text-sm">
              Hear directly from our students, graduates, and community leaders who found a future through VAAFD.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-amber-400 opacity-60" />
                  <p className="text-slate-200 text-sm sm:text-base italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-emerald-400"
                  />
                  <div>
                    <h4 className="font-bold text-white text-sm">{t.name}</h4>
                    <p className="text-xs text-amber-300">{t.role}</p>
                    <p className="text-[11px] text-slate-400">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LATEST NEWS & FIELD DISPATCHES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider inline-block">
              Field Reports
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Latest News & Milestones
            </h2>
            <p className="text-slate-600 text-sm">
              Discover recent accomplishments across our schools, deep-well boreholes, and STEM learning labs.
            </p>
          </div>

          <button
            onClick={() => onNavigate('stories')}
            className="text-emerald-700 hover:text-emerald-900 font-bold text-sm flex items-center gap-1.5 cursor-pointer"
          >
            <span>View All Stories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => onNavigate('stories')}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold">
                  {article.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-xs text-slate-400 font-medium">
                    {article.date} • {article.readTime}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-emerald-700 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-2 flex items-center text-xs font-bold text-emerald-700 group-hover:text-emerald-900">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FINAL CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white rounded-3xl p-8 sm:p-14 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-300/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Join The Movement
            </span>

            <h2 className="text-3xl sm:text-5xl font-black font-heading leading-tight text-white">
              Every Child Deserves A Chance to Learn, Dream, and Lead.
            </h2>

            <p className="text-emerald-100 text-base sm:text-lg leading-relaxed max-w-2xl">
              Your gift of any size fuels tuition-free classrooms, student meals, and permanent campus facilities in Monrovia, Liberia.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenDonate()}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-base shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <Heart className="w-5 h-5 fill-slate-950" />
                <span>Give Hope Today</span>
              </button>
              <button
                onClick={onOpenVolunteer}
                className="px-6 py-4 rounded-2xl bg-emerald-900/60 hover:bg-emerald-900 text-white border border-emerald-600 font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Users className="w-5 h-5" />
                <span>Volunteer With Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
