import React, { useState } from 'react';
import {
  HandHeart,
  Heart,
  Users,
  Building,
  Laptop,
  Share2,
  ChevronDown,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { ORG_INFO } from '../data/vaafdData';

interface GetInvolvedPageProps {
  onOpenDonate: (campaignId?: string) => void;
  onOpenVolunteer: () => void;
}

export const GetInvolvedPage: React.FC<GetInvolvedPageProps> = ({ onOpenDonate, onOpenVolunteer }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const ways = [
    {
      title: "1. Volunteer On-Site or Remotely",
      desc: "Join our teaching, medical, or administrative team in Monrovia, or contribute remotely with marketing, grant writing, and IT coaching.",
      actionText: "Apply as a Volunteer",
      action: onOpenVolunteer,
      icon: HandHeart,
      badge: "Local & Global"
    },
    {
      title: "2. Sponsor a Student's Education",
      desc: "Provide full tuition-free coverage, books, uniform, and hot lunches for an orphaned or underprivileged child for just $25/month.",
      actionText: "Become a Monthly Sponsor",
      action: () => onOpenDonate(),
      icon: Heart,
      badge: "High Impact"
    },
    {
      title: "3. Corporate & NGO Partnerships",
      desc: "Align your organization with impactful community infrastructure—fund a solar water well, a computer lab, or classroom wing.",
      actionText: "Partner With Us",
      action: () => onOpenDonate(),
      icon: Building,
      badge: "Institutional"
    },
    {
      title: "4. In-Kind Equipment & Tech Donations",
      desc: "We accept functional laptops, science laboratory glassware, updated textbooks, and solar power equipment for our Paynesville hub.",
      actionText: "In-Kind Inquiries",
      action: onOpenVolunteer,
      icon: Laptop,
      badge: "Supplies"
    }
  ];

  const faqs = [
    {
      q: "Can international volunteers travel to Liberia to work with VAAFD?",
      a: "Yes! VAAFD hosts vetted international educators, healthcare professionals, and engineers. We provide local coordination, on-the-ground transport advice, and community integration support in Paynesville, Monrovia."
    },
    {
      q: "How are financial donations allocated?",
      a: "100% of public campaign gifts are allocated directly to program operations (teacher stipends, student meals, textbooks, water well construction, and classroom infrastructure). We maintain an open-book policy."
    },
    {
      q: "Can my church or school organize a fundraising drive for VAAFD?",
      a: "Absolutely. We supply promotional materials, high-res video updates from our classrooms in Liberia, and direct communication with Karrus Hayes for live virtual Q&A sessions."
    },
    {
      q: "How do I know my monthly sponsorship is reaching my student?",
      a: "Monthly sponsors receive biannual academic report cards, personalized letters, and photographic updates directly from the Carolyn A. Miller School."
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* 1. Header Banner */}
      <section className="relative bg-slate-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/received_243067154919694-1024x768.jpeg"
            alt="Get Involved Header"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Make Your Mark
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-heading text-white">
            Get Involved With VAAFD
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Together, we can rewrite the future of children in Liberia. Discover multiple pathways to lend your passion, skills, and resources.
          </p>
        </div>
      </section>

      {/* 2. Ways to Support Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ways.map((way, idx) => {
            const Icon = way.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
                      {way.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                    {way.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {way.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={way.action}
                    className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{way.actionText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Volunteer & Partner FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider inline-block">
            Questions & Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full p-6 text-left font-bold text-slate-900 text-base flex justify-between items-center gap-4 cursor-pointer hover:bg-slate-50"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-emerald-600 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
