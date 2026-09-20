"use client";

import { useState } from "react";
import { NIGERIAN_ACADEMIC_TERMS } from "@/constants/academics";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { Calendar, Clock, Download, FileText, Info } from "lucide-react";

const SchoolCalendarView = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadCalendar = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 1800);
  };

  return (
    <PageSection id="calendar">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionTitle
              title="Session Schedule"
              label="2026/2027 Academic Year Calendar"
            />
            <p className="mt-2 text-sm text-muted-foreground sm:text-base max-w-2xl">
              Organized under the approved Nigerian 3-term system. Review key
              resumptions, mid-term breaks, examinations, and official vacation
              periods.
            </p>
          </div>

          <button
            onClick={handleDownloadCalendar}
            disabled={downloading}
            className="inline-flex items-center gap-2 self-start rounded-xl bg-primary-blue px-5 py-3 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-primary-dark-blue cursor-pointer disabled:opacity-60 sm:text-sm"
          >
            <Download className="h-4 w-4" />
            <span>
              {downloading ? "Preparing PDF..." : "Download Full Calendar (PDF)"}
            </span>
          </button>
        </div>

        {/* 3 Terms Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {NIGERIAN_ACADEMIC_TERMS.map((term) => (
            <div
              key={term.term}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:border-primary-blue/50 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border/70 pb-4">
                  <span className="rounded-full bg-secondary-gold/15 px-3 py-1 text-xs font-semibold text-secondary-gold">
                    {term.badge}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-primary-blue" />
                    {term.period}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-primary-blue">
                  {term.term}
                </h3>

                <div className="mt-5 space-y-3">
                  {term.milestones.map((m) => (
                    <div
                      key={m.event}
                      className="flex items-start gap-3 rounded-lg bg-muted/20 p-2.5 text-xs sm:text-sm"
                    >
                      <div className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-secondary-gold" />
                      <div>
                        <div className="font-semibold text-foreground">
                          {m.event}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {m.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Note */}
        <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
          <div className="flex items-start gap-3.5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-secondary-gold" />
            <p className="text-xs leading-6 text-muted-foreground sm:text-sm">
              Note: Calendar dates conform with state and federal ministry of
              education directives and may be adjusted for national Islamic
              and public holidays. Any timetable revisions are promptly published
              via parent circulars and WhatsApp broadcasts.
            </p>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default SchoolCalendarView;
