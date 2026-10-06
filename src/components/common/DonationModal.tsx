import React, { useState, useEffect } from 'react';
import { X, Heart, ShieldCheck, CreditCard, CheckCircle2, Sparkles, Building, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CAMPAIGNS, IMPACT_TIERS, ORG_INFO } from '../../data/vaafdData';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCampaignId?: string;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  defaultCampaignId
}) => {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [selectedCampaign, setSelectedCampaign] = useState<string>(defaultCampaignId || 'general');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'offline'>('card');
  
  // Donor info
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (defaultCampaignId) {
      setSelectedCampaign(defaultCampaignId);
    }
  }, [defaultCampaignId]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    if (val) {
      setSelectedAmount(parseInt(val, 10));
      setIsCustom(true);
    }
  };

  const currentAmount = isCustom ? (parseInt(customAmount, 10) || 0) : selectedAmount;

  // Find impact statement
  const getImpactMessage = (amt: number) => {
    if (amt < 25) return "Provides nutritious daily school meals and exercise books for a student.";
    if (amt < 50) return "Funds 1 month of tuition-free schooling, learning supplies, and health checks.";
    if (amt < 100) return "Provides full school uniform, sturdy shoes, textbooks, and medical screening.";
    if (amt < 250) return "Sponsors an entire semester of quality K-12 education and psychosocial care.";
    if (amt < 500) return "Supplies science laboratory materials, IT computers, and library textbooks.";
    return "Crucial pillar contribution toward the new permanent school campus building!";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log(err);
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-start sm:items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3rem)] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-y-auto overscroll-contain my-0 sm:my-8">
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white px-6 py-6 sm:px-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 bg-amber-400/20 text-amber-300 border border-amber-300/30 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              100% Tax Deductible NGO
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Transform a Child's Future in Liberia
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base mt-1 max-w-lg">
            Every dollar directly funds tuition-free education, daily meals, healthcare, and safe shelter.
          </p>
        </div>

        {/* Modal Content */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                Thank You, {firstName || 'Generous Donor'}!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Your donation of <span className="font-bold text-emerald-700">${currentAmount}</span> {frequency === 'monthly' ? '/ month' : ''} has been received. A receipt has been sent to <span className="font-semibold text-slate-800">{email || 'your email'}</span>.
              </p>
            </div>

            <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-5 text-left text-sm max-w-md mx-auto space-y-2">
              <div className="flex justify-between text-xs text-slate-500 uppercase font-semibold">
                <span>Confirmation Code</span>
                <span className="font-mono text-emerald-800 font-bold">VAAFD-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Allocated Cause:</span>
                <span className="font-medium text-slate-900">
                  {selectedCampaign === 'general' ? 'Where Most Needed' : CAMPAIGNS.find(c => c.id === selectedCampaign)?.title || 'General Fund'}
                </span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Expected Impact:</span>
                <span className="font-medium text-emerald-800">{getImpactMessage(currentAmount)}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Frequency Toggle */}
            <div className="flex bg-slate-100 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setFrequency('one-time')}
                className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                  frequency === 'one-time'
                    ? 'bg-white text-emerald-800 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                One-Time Gift
              </button>
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  frequency === 'monthly'
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Monthly Partner</span>
                <span className="text-[10px] uppercase bg-amber-400 text-slate-950 font-black px-1.5 py-0.5 rounded-md">
                  Most Impact
                </span>
              </button>
            </div>

            {/* Campaign Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Allocate Your Gift To:
              </label>
              <select
                value={selectedCampaign}
                onChange={(e) => setSelectedCampaign(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="general">🌟 General Fund (Where Most Needed in Monrovia)</option>
                {CAMPAIGNS.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title} (Goal: ${c.goal.toLocaleString()})
                  </option>
                ))}
              </select>
            </div>

            {/* Amount Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Select Amount (USD)
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {[10, 25, 50, 100, 250, 500].map((amt) => {
                  const isSelected = !isCustom && selectedAmount === amt;
                  return (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => handleAmountClick(amt)}
                      className={`py-3 rounded-xl font-extrabold text-base transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-700 text-white shadow-md ring-2 ring-emerald-700 ring-offset-2'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      ${amt}
                    </button>
                  );
                })}
              </div>

              {/* Custom Amount input */}
              <div className="mt-3">
                <div className="relative rounded-xl shadow-xs">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 font-bold">
                    $
                  </div>
                  <input
                    type="text"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Or enter a custom donation amount"
                    className={`w-full pl-8 pr-4 py-3 rounded-xl text-sm font-semibold border ${
                      isCustom
                        ? 'border-emerald-600 ring-2 ring-emerald-500/30 bg-emerald-50/20'
                        : 'border-slate-200 bg-slate-50'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                  />
                </div>
              </div>

              {/* Dynamic Impact Statement Card */}
              <div className="mt-3 bg-amber-50/90 border border-amber-200/80 rounded-xl p-3 flex items-start gap-2.5 text-xs text-amber-900">
                <Heart className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 fill-amber-500" />
                <div>
                  <span className="font-bold">Your Impact: </span>
                  <span>{getImpactMessage(currentAmount)}</span>
                </div>
              </div>
            </div>

            {/* Donor Details */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Your Contact Information
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name *"
                  required
                  className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name *"
                  required
                  className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address (for tax receipt) *"
                required
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="anonCheck"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
                />
                <label htmlFor="anonCheck" className="text-xs text-slate-600 cursor-pointer">
                  Make my donation anonymous on the public donor wall
                </label>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="pt-2 border-t border-slate-100 space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Payment Option
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Credit Card</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    paymentMethod === 'paypal'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-blue-500" />
                  <span>PayPal</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('offline')}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    paymentMethod === 'offline'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Building className="w-4 h-4" />
                  <span>Wire / Offline</span>
                </button>
              </div>

              {paymentMethod === 'offline' && (
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                  <p className="font-bold text-slate-800">Direct Wire & Mobile Money Instructions:</p>
                  <p>Bank: EcoBank Liberia / United Bank for Africa</p>
                  <p>Account Name: Vision Awake Africa For Development (VAAFD)</p>
                  <p>Lonestar MTN / Orange Money: (+231) 7781 58517</p>
                </div>
              )}
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isProcessing || currentAmount <= 0}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-extrabold text-base shadow-lg hover:shadow-emerald-600/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Processing Secure Gift...
                  </span>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-amber-300" />
                    <span>
                      Complete ${currentAmount} {frequency === 'monthly' ? 'Monthly' : ''} Donation
                    </span>
                  </>
                )}
              </button>

              <div className="mt-3 flex items-center justify-center gap-4 text-slate-400 text-xs">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 256-Bit SSL Encrypted
                </span>
                <span>•</span>
                <span>Immediate Tax Receipt</span>
                <span>•</span>
                <span>Cancel Anytime</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
