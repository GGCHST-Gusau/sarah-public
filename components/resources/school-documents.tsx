"use client";

import { useState } from "react";
import { DOWNLOADABLE_DOCS } from "@/constants/resources";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { Download, FileText, CheckCircle2, Search } from "lucide-react";

const SchoolDocuments = () => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["All", "Calendar", "Handbook", "Prospectus", "Policy", "Academic", "Health"];

  const filteredDocs =
    filterCategory === "All"
      ? DOWNLOADABLE_DOCS
      : DOWNLOADABLE_DOCS.filter((d) => d.category === filterCategory);

  const handleDownload = (id: string, title: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      // Optional client-side trigger simulation
    }, 1800);
  };

  return (
    <PageSection id="downloads">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="Official Publications"
            label="School Documents & Verified Downloads"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Download verified copies of our official handbooks, academic calendars,
            uniform guidelines, and school prospectus in PDF format.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border/70 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer sm:text-sm ${
                filterCategory === cat
                  ? "bg-primary-blue text-white shadow-xs"
                  : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Documents Grid / Table */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:border-primary-blue/50 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-red-500/10 px-2.5 py-0.5 text-xs font-bold text-red-600 dark:text-red-400">
                    {doc.format}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    {doc.size}
                  </span>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground sm:text-base leading-snug">
                      {doc.title}
                    </h4>
                    <span className="mt-1 inline-block rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                      {doc.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4">
                <span className="text-xs text-muted-foreground">
                  Updated {doc.updated}
                </span>

                <button
                  onClick={() => handleDownload(doc.id, doc.title)}
                  disabled={downloadingId === doc.id}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary-blue px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-primary-dark-blue cursor-pointer disabled:opacity-60"
                >
                  {downloadingId === doc.id ? (
                    <span>Downloading...</span>
                  ) : (
                    <>
                      <Download className="h-3.5 w-3.5" />
                      <span>Download</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default SchoolDocuments;
