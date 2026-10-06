import React from 'react';
import {
  Heart,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Calendar,
  Sparkles,
  MapPin,
  ArrowRight,
  Target,
  Eye,
  GraduationCap
} from 'lucide-react';
import { ORG_INFO } from '../data/vaafdData';

interface AboutPageProps {
  onNavigate: (page: string, param?: string) => void;
  onOpenDonate: (campaignId?: string) => void;
  onOpenVolunteer: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenDonate,
  onOpenVolunteer
}) => {
  const timelineEvents = [
    {
      year: "2003",
      title: "CAMES Founded on Buduburam Camp, Ghana",
      desc: "Karrus Hayes established the Carolyn A. Miller Elementary School to provide tuition-free instruction for war-refugee Liberian children in Ghana."
    },
    {
      year: "2008",
      title: "Expansion to Secondary Education & High School",
      desc: "Added junior high and high school grades, enabling refugee students to graduate with accredited secondary diplomas."
    },
    {
      year: "2014",
      title: "Repatriation & Monrovia Campus Launch",
      desc: "Following the transition in Liberia, VAAFD opened its flagship Paynesville, Monrovia school campus to serve war-affected youths at home."
    },
    {
      year: "2019",
      title: "Vocational Training & Clean Water Projects",
      desc: "Launched vocational trade bootcamps (carpentry, tailoring, computer literacy) and drilled deep-water community wells."
    },
    {
      year: "2024 - Present",
      title: "Permanent Campus & STEM Modernization",
      desc: "Constructing our permanent 12-classroom sanctuary in Paynesville and equipping modern computer & science labs."
    }
  ];

  const values = [
    {
      title: "Radical Transparency",
      desc: "Every single cent is stewarded directly toward classrooms, student nutrition, and physical community infrastructure.",
      icon: ShieldCheck
    },
    {
      title: "Dignity & Compassion",
      desc: "We treat every orphaned child, refugee, and vulnerable student with love, respect, and emotional care.",
      icon: Heart
    },
    {
      title: "Educational Excellence",
      desc: "Tuition-free does not mean sub-standard. We employ certified teachers and provide modern curriculum tools.",
      icon: GraduationCap
    },
    {
      title: "Sustainable Empowerment",
      desc: "We don't just provide emergency relief—we equip youth with vocational skills and agriculture for generational self-reliance.",
      icon: Award
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* 1. Header Banner */}
      <section className="relative bg-slate-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/cames2.jpg"
            alt="VAAFD Education"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Who We Are
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-heading text-white">
            About Vision Awake Africa For Development
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            A grassroots educational crusade born during conflict to provide tuition-free schooling, orphan shelter, and community self-reliance across Liberia.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                Our Mission
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                {ORG_INFO.mission}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              <span>Core Mandate: Education • Child Welfare • Self-Reliance</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                Our Vision
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                {ORG_INFO.vision}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
              <span>Goal: End Generational Illiteracy in Liberia</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Founding Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider inline-block">
                Our Heritage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                The Story Behind the Carolyn A. Miller School
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                In 2003, amidst the aftermath of the Liberian civil war, tens of thousands of Liberian families were living in exile at the Buduburam Refugee Camp in Ghana. With no public schools available for refugee children, illiteracy threatened to destroy an entire generation.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                Founder <strong>Karrus Hayes</strong> started teaching children in open-air shelters, naming the institution after Carolyn A. Miller, an advocate who championed education for refugee minors. Following the end of the war, VAAFD brought this life-saving educational model back to Monrovia, establishing a sanctuary for war orphans, impoverished youth, and single-parent families.
              </p>
              <div className="pt-2">
                <blockquote className="border-l-4 border-amber-400 pl-4 py-2 italic text-amber-200 text-base">
                  "{ORG_INFO.founderQuote}"
                </blockquote>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl">
                <img
                  src="/IMG-20230321-WA0002.jpg"
                  alt="Students at CAMES"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-xs text-slate-300 text-center">
                Over 1,000 children educated tuition-free across Monrovia and Buduburam since 2003.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Historical Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider inline-block">
            Milestones of Resilience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Our Journey Over Two Decades
          </h2>
        </div>

        <div className="relative border-l-2 border-emerald-300 ml-4 sm:ml-8 space-y-12">
          {timelineEvents.map((ev, index) => (
            <div key={index} className="relative pl-8 sm:pl-10 group">
              {/* Bullet circle */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs ring-4 ring-white shadow-md">
                <Calendar className="w-3.5 h-3.5" />
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs">
                  {ev.year}
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  {ev.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {ev.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider inline-block">
            Our Guiding Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            The Values That Drive VAAFD
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  {v.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-emerald-800 text-white rounded-3xl p-10 sm:p-14 space-y-6 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
            Partner With Us to Educate Liberia's Next Generation
          </h2>
          <p className="text-emerald-100 text-base max-w-xl mx-auto">
            Whether as a financial donor, school supplies partner, or on-the-ground volunteer in Monrovia, your support saves lives.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenDonate()}
              className="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base shadow-md cursor-pointer transition-all"
            >
              Donate to Tuition-Free Fund
            </button>
            <button
              onClick={onOpenVolunteer}
              className="px-6 py-4 rounded-xl bg-emerald-950/60 hover:bg-emerald-950 text-white border border-emerald-600 font-bold text-base cursor-pointer transition-all"
            >
              Volunteer Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
