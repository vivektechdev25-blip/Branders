import React from 'react';
import usePageSEO from '../../hooks/usePageSEO.js';
import ContactSection from '../../sections/Contact/ContactSection.jsx';
import Badge from '../../components/common/Badge.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';

export default function ContactPage() {
  usePageSEO(
    'Contact BRANDERSS — Start Your Brand Story',
    'Get in touch with the Branderss leadership team directly. Call +91 9119673841 / +91 8009938354, message on WhatsApp, or submit your project inquiry.'
  );

  const faqs = [
    {
      q: 'How quickly does the Branderss team respond?',
      a: 'We typically respond to inquiries within 2 to 4 business hours. If you need immediate assistance, message us directly on WhatsApp.'
    },
    {
      q: 'Do you only work with businesses in Lucknow?',
      a: 'While we are rooted in Lucknow and have partnered with 100+ local brands, we work with clients across India remotely with seamless digital workflows.'
    },
    {
      q: 'What industries does Branderss specialize in?',
      a: 'We work across Hotels, Banquets, Restaurants, Cafés, Medical/Healthcare, Retail, Corporate B2B, and emerging service businesses.'
    },
    {
      q: 'How does an engagement typically start?',
      a: 'It starts with a 30-minute discovery consultation to understand your brand vision, target audience, and business goals before proposing a tailored roadmap.'
    }
  ];

  return (
    <div className="pt-24 pb-0 bg-[#170A05] text-[#F3E6D2]">
      {/* Dedicated Contact & Project Inquiry Section */}
      <ContactSection />

      {/* FAQs Section with Standardized Card Flex */}
      <section className="py-20 border-t border-[rgba(216,192,165,0.14)] bg-[#170A05]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <Badge variant="brand" className="mb-3">Common Inquiries</Badge>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F3E6D2]">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <ScrollReveal
                key={idx}
                as="div"
                delay={idx * 60}
                className="card-flex card-hover-lift p-6 rounded-2xl border border-[rgba(216,192,165,0.16)] bg-[#281108] hover:bg-[#35170B] transition-all duration-200"
              >
                <h3 className="font-display font-bold text-base sm:text-lg text-[#F3E6D2] flex items-start gap-3">
                  <span className="text-[#C89B5B]">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#D8C0A5]/85 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
