import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SectionHeader from '../../components/common/SectionHeader.jsx';
import Badge from '../../components/common/Badge.jsx';
import Button from '../../components/common/Button.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import { BRAND, SERVICES } from '../../constants/index.js';
import { submitContactInquiry } from '../../services/contactService.js';
import confetti from 'canvas-confetti';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactSection() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || '';
  const initialIndustry = searchParams.get('industry') || '';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: initialService || SERVICES[0].title,
    message: initialIndustry ? `Hi Branderss team, I would like to discuss branding and growth solutions for my ${initialIndustry} business.` : ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
    message: ''
  });

  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Your name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please provide a valid 10-digit number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }

    if (!formData.service) errs.service = 'Please select a service';
    if (!formData.message.trim() || formData.message.trim().length < 8) {
      errs.message = 'Please provide at least a short project message';
    }

    setValidationErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status.loading) return;
    if (!validate()) return;

    setStatus({ loading: true, success: false, error: null, message: '' });

    try {
      const res = await submitContactInquiry(formData);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F3E6D2', '#D8C0A5', '#5A2C18', '#35170B']
        });
      } catch (err) {
        // Fallback
      }

      setStatus({
        loading: false,
        success: true,
        error: null,
        message: res.message || 'Inquiry submitted successfully! Our team will contact you shortly.'
      });

      // Reset form
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        service: SERVICES[0].title,
        message: ''
      });
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: err.message || 'Could not send message. Please reach us directly on WhatsApp or Phone.'
      });
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#170A05] border-t border-[rgba(216,192,165,0.14)] relative scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge="Direct Inquiries"
            title="Let's Build Your"
            highlight="Brand Story."
            description="Have a project in mind, want to upgrade your brand identity, or need high-converting digital campaigns? Get in touch with our leadership directly."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Verified Contact Information */}
          <ScrollReveal delay={100} className="lg:col-span-5 card-flex gap-6">
            <div className="card-flex p-6 sm:p-8 rounded-3xl border border-[rgba(216,192,165,0.16)] bg-[#281108]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D8C0A5]">
                Get in Touch
              </span>
              <h3 className="font-display text-2xl font-bold text-[#F3E6D2] mt-1">
                Fast, Direct Response
              </h3>
              <p className="text-xs sm:text-sm text-[#D8C0A5]/85 mt-2 leading-relaxed">
                We believe in direct communication without agency bureaucracy. Call, message on WhatsApp, or send an inquiry below.
              </p>

              {/* Direct Phone Numbers */}
              <div className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-[#D8C0A5]">Phone &amp; WhatsApp:</span>
                  <div className="flex flex-col gap-2 mt-1">
                    {BRAND.phones.map((phone) => (
                      <div key={phone.raw} className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#170A05] border border-[rgba(216,192,165,0.14)]">
                        <a
                          href={`tel:${phone.raw}`}
                          className="flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#F3E6D2] hover:text-white transition-colors"
                        >
                          <Phone className="w-4 h-4 text-[#C89B5B]" />
                          <span>{phone.display}</span>
                        </a>
                        <a
                          href={phone.wa}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-2.5 py-1 rounded-md bg-[#35170B] text-[#F3E6D2] border border-[#5A2C18] hover:border-[#F3E6D2] hover:bg-[#F3E6D2] hover:text-[#170A05] font-semibold transition-all"
                        >
                          WhatsApp
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-[#D8C0A5]">Email Address:</span>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#170A05] border border-[rgba(216,192,165,0.14)] text-sm font-semibold text-[#F3E6D2] hover:text-[#D8C0A5] transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-[#C89B5B] shrink-0" />
                    <span>{BRAND.email}</span>
                  </a>
                </div>

                {/* Headquarters Location */}
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-[#D8C0A5]">Operating Hub:</span>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#170A05] border border-[rgba(216,192,165,0.14)] text-sm text-[#D8C0A5]">
                    <MapPin className="w-4 h-4 text-[#C89B5B] shrink-0" />
                    <span className="text-[#F3E6D2] font-medium">{BRAND.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Banner */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#35170B] border border-[#5A2C18] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F3E6D2] text-[#170A05] flex items-center justify-center font-bold shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#F3E6D2]">Prefer Instant Chat?</h4>
                  <p className="text-xs text-[#D8C0A5]">Direct strategy response</p>
                </div>
              </div>
              <Button href={BRAND.phones[0].wa} size="sm" variant="primary" className="w-full sm:w-auto">
                Open WhatsApp
              </Button>
            </div>
          </ScrollReveal>

          {/* Right Column: Contact Inquiry Form */}
          <ScrollReveal delay={200} className="lg:col-span-7">
            <div className="card-flex p-6 sm:p-10 rounded-3xl border border-[rgba(216,192,165,0.16)] bg-[#281108] shadow-2xl">
              <h3 className="font-display text-2xl font-bold text-[#F3E6D2] mb-2">
                Start Your Project Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#D8C0A5] mb-8">
                Fill in the details below. We'll analyze your requirements and get back to you with tailored strategy recommendations.
              </p>

              {/* Status Message Alerts */}
              {status.success && (
                <div className="mb-6 p-4 rounded-xl bg-[#35170B] border border-[#D8C0A5] text-[#F3E6D2] text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[#D8C0A5]" />
                  <div>
                    <p className="font-bold">Thank You!</p>
                    <p className="text-xs text-[#D8C0A5] mt-0.5">{status.message}</p>
                  </div>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-200 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Submission Notice</p>
                    <p className="text-xs text-rose-300 mt-0.5">{status.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#F3E6D2] mb-1.5">
                      Your Full Name <span className="text-[#D8C0A5]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      disabled={status.loading}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3 rounded-xl bg-[#170A05] border text-sm text-[#F3E6D2] placeholder-[#B99E87] focus:outline-none focus:ring-2 focus:ring-[#C89B5B]/30 transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
                        validationErrors.name ? 'border-rose-500' : 'border-[#35170B] focus:border-[#C89B5B]'
                      }`}
                    />
                    {validationErrors.name && (
                      <span className="text-[11px] text-rose-400 mt-1 block">{validationErrors.name}</span>
                    )}
                  </div>

                  {/* Company / Brand Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#F3E6D2] mb-1.5">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      disabled={status.loading}
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Royal Darbar Café"
                      className="w-full px-4 py-3 rounded-xl bg-[#170A05] border border-[#35170B] text-sm text-[#F3E6D2] placeholder-[#B99E87] focus:outline-none focus:ring-2 focus:ring-[#C89B5B]/30 focus:border-[#C89B5B] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-[#F3E6D2] mb-1.5">
                      Phone Number <span className="text-[#D8C0A5]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      disabled={status.loading}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9119673841"
                      className={`w-full px-4 py-3 rounded-xl bg-[#170A05] border text-sm text-[#F3E6D2] placeholder-[#B99E87] focus:outline-none focus:ring-2 focus:ring-[#C89B5B]/30 transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
                        validationErrors.phone ? 'border-rose-500' : 'border-[#35170B] focus:border-[#C89B5B]'
                      }`}
                    />
                    {validationErrors.phone && (
                      <span className="text-[11px] text-rose-400 mt-1 block">{validationErrors.phone}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-[#F3E6D2] mb-1.5">
                      Email Address <span className="text-[#D8C0A5]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      disabled={status.loading}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. contact@yourbrand.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#170A05] border text-sm text-[#F3E6D2] placeholder-[#B99E87] focus:outline-none focus:ring-2 focus:ring-[#C89B5B]/30 transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
                        validationErrors.email ? 'border-rose-500' : 'border-[#35170B] focus:border-[#C89B5B]'
                      }`}
                    />
                    {validationErrors.email && (
                      <span className="text-[11px] text-rose-400 mt-1 block">{validationErrors.email}</span>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-[#F3E6D2] mb-1.5">
                    Primary Service of Interest <span className="text-[#D8C0A5]">*</span>
                  </label>
                  <select
                    name="service"
                    disabled={status.loading}
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#170A05] border border-[#35170B] text-sm text-[#F3E6D2] focus:outline-none focus:ring-2 focus:ring-[#C89B5B]/30 focus:border-[#C89B5B] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.number} - {s.title} ({s.category})
                      </option>
                    ))}
                    <option value="Complete Brand Overhaul">
                      Complete Brand Overhaul (Full-Service Package)
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#F3E6D2] mb-1.5">
                    Project Message / Goals <span className="text-[#D8C0A5]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    disabled={status.loading}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your brand, current challenges, and growth goals..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#170A05] border text-sm text-[#F3E6D2] placeholder-[#B99E87] focus:outline-none focus:ring-2 focus:ring-[#C89B5B]/30 transition-colors resize-none disabled:opacity-60 disabled:cursor-not-allowed ${
                      validationErrors.message ? 'border-rose-500' : 'border-[#35170B] focus:border-[#C89B5B]'
                    }`}
                  />
                  {validationErrors.message && (
                    <span className="text-[11px] text-rose-400 mt-1 block">{validationErrors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    variant="primary"
                    disabled={status.loading}
                    className="w-full justify-center"
                    icon={status.loading ? Loader2 : Send}
                  >
                    {status.loading ? 'Submitting Your Inquiry...' : 'Submit Project Inquiry'}
                  </Button>
                </div>

                <p className="text-center text-[11px] text-[#D8C0A5]/70 pt-2">
                  🔒 We respect your privacy. No spam. Direct response from Branderss strategy team.
                </p>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
