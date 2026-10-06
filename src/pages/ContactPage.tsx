import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building
} from 'lucide-react';
import { ORG_INFO } from '../data/vaafdData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Header Banner */}
      <section className="relative bg-slate-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/received_243067154919694-1024x768.jpeg"
            alt="Contact Header"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Get in Touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-heading text-white">
            Contact VAAFD Headquarters
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Have questions about our programs, partnership opportunities, student sponsorships, or visit coordination in Monrovia? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* 2. Contact Details & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Office details & Direct lines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-6">
              <h2 className="text-2xl font-extrabold text-slate-900 font-heading">
                Main Office Information
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Physical Address</h3>
                    <p className="text-slate-600 text-sm mt-0.5">{ORG_INFO.address}</p>
                    <p className="text-slate-400 text-xs mt-0.5">Montserrado County, Liberia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Phone / Mobile Inquiries</h3>
                    <div className="flex flex-col text-slate-600 text-sm mt-0.5">
                      <a href={`tel:${ORG_INFO.phone[0]}`} className="hover:text-emerald-700 font-medium">{ORG_INFO.phone[0]}</a>
                      <a href={`tel:${ORG_INFO.phone[1]}`} className="hover:text-emerald-700 font-medium">{ORG_INFO.phone[1]}</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Email Inquiries</h3>
                    <a href={`mailto:${ORG_INFO.email}`} className="text-emerald-700 font-medium hover:underline text-sm block mt-0.5">
                      {ORG_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Operating Hours</h3>
                    <p className="text-slate-600 text-sm mt-0.5">Monday – Friday: 8:00 AM – 5:00 PM GMT</p>
                    <p className="text-slate-600 text-sm">Saturday: 9:00 AM – 2:00 PM GMT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* School Visit & Safety Box */}
            <div className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>Visiting Carolyn A. Miller School</span>
              </div>
              <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed">
                We welcome approved international delegates, sponsors, and educational volunteers. Prior notification is required for student protection and safe site access.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, {name}. Your inquiry has been routed to our Monrovia administration team. We typically respond within 24 to 48 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setName(''); setEmail(''); setSubject(''); setMessage(''); }}
                    className="px-6 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-extrabold text-slate-900 font-heading">
                      Send Us a Direct Message
                    </h2>
                    <p className="text-slate-500 text-xs sm:text-sm">
                      Fill out the form below and we will get back to you promptly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Samuel Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Student Sponsorship / Volunteer Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message or inquiry here..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to VAAFD</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
