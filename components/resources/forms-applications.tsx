"use client";

import { useState } from "react";
import { FORMS_APPLICATIONS } from "@/constants/resources";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { Download, FileCheck, FileSignature, HelpCircle, Send } from "lucide-react";

const FormsApplications = () => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleDownload = (id: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
    }, 1500);
  };

  return (
    <PageSection id="forms" className="bg-muted/30">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="Forms & Paperwork"
            label="Official Application & Registration Forms"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Download printable registration forms, medical authorizations, and
            transport services agreements. Complete and submit them to the
            school administrative office.
          </p>
        </div>

        {/* 4 Forms Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {FORMS_APPLICATIONS.map((form) => (
            <div
              key={form.id}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:border-primary-blue/50 hover:shadow-md sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-emerald-500/10 px-2.5 py-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    Official Form ({form.format})
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    {form.size}
                  </span>
                </div>

                <div className="mt-4 flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                    <FileSignature className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground sm:text-lg">
                      {form.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
                      {form.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4">
                <span className="text-xs text-muted-foreground">
                  Ready for print & submission
                </span>
                <button
                  onClick={() => handleDownload(form.id)}
                  disabled={downloadingId === form.id}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-blue px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-dark-blue cursor-pointer disabled:opacity-60"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>
                    {downloadingId === form.id ? "Preparing..." : form.actionText}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Submission Guidelines Box */}
        <div className="rounded-2xl border border-secondary-gold/30 bg-card p-6 shadow-xs sm:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <h4 className="text-base font-bold text-foreground sm:text-lg">
                How to Submit Your Completed Forms
              </h4>
              <p className="text-xs leading-6 text-muted-foreground sm:text-sm max-w-2xl">
                1. Print and fill the required sections accurately in block letters.<br />
                2. Attach 2 recent passport photographs and a copy of the child's birth certificate.<br />
                3. Submit in person at the Admissions Office (Mon – Fri: 8:00 AM – 3:30 PM) or scan and email to{" "}
                <strong className="text-primary-blue">admissions@sarahacademy.edu.ng</strong>.
              </p>
            </div>

            <a
              href="#help"
              className="inline-flex items-center gap-2 self-start rounded-xl border border-border bg-muted/40 px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted shrink-0"
            >
              <HelpCircle className="h-4 w-4 text-primary-blue" />
              <span>Need Help with Forms?</span>
            </a>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default FormsApplications;
