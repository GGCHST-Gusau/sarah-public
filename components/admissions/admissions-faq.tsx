"use client";

import { useState } from "react";
import { ADMISSIONS_FAQS } from "@/constants/admissions";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

const AdmissionsFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <PageSection className="bg-muted/30">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="ADMISSIONS FAQ"
            label="Frequently Asked Questions"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Answers to common questions regarding our admission timeline,
            applying for multiple children, and document verification.
          </p>
        </div>

        {/* Accordion list */}
        <div className="mx-auto w-full max-w-3xl space-y-3.5">
          {ADMISSIONS_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-muted/30 cursor-pointer sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-foreground sm:text-lg pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary-blue transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-border/70 p-5 pt-3 text-xs leading-6 text-muted-foreground sm:p-6 sm:pt-4 sm:text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Assistance Help Note */}
        <div className="mx-auto max-w-2xl rounded-2xl border border-secondary-gold/30 bg-card p-6 text-center shadow-xs">
          <HelpCircle className="mx-auto h-8 w-8 text-secondary-gold" />
          <h4 className="mt-3 text-lg font-bold text-foreground">
            Need Personal Guidance with Admissions?
          </h4>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
            Our admissions counselors are available Monday through Friday to
            guide parents through programme selection and enrollment.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/contact"
              className="rounded-xl bg-primary-blue px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-primary-dark-blue sm:text-sm"
            >
              Contact Admissions Desk
            </a>
            <a
              href="https://wa.me/2348136625135"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-muted/30 px-5 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted sm:text-sm"
            >
              <MessageSquare className="h-4 w-4 text-emerald-600" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default AdmissionsFaq;
