"use client";

import Link from "next/link";
import { HOW_TO_GUIDES } from "@/constants/resources";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import {
  Laptop,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Clock,
  BookOpenCheck,
  ExternalLink,
} from "lucide-react";

const QuickAccess = () => {
  return (
    <PageSection id="parent-portal">
      <div className="flex flex-col gap-12 md:gap-16">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="Parent Portal & Guides"
            label="Direct Access & How-To Tutorials"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Direct access to the Sarah Academy parent gateway, alongside
            straightforward step-by-step walkthroughs to help you navigate
            fees, admissions, report cards, and school services.
          </p>
        </div>

        {/* Highlighted Parent Portal Gateway Box */}
        <div className="relative overflow-hidden rounded-3xl border border-secondary-gold/30 bg-primary-dark-blue p-8 text-white shadow-xl md:p-12">
          {/* Subtle Ambient Backing Glow */}
          <div className="absolute top-0 right-0 -z-0 h-64 w-64 rounded-full bg-secondary-gold/15 blur-[100px]" />
          <div className="absolute bottom-0 left-0 -z-0 h-48 w-48 rounded-full bg-primary-blue/20 blur-[80px]" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary-gold/40 bg-secondary-gold/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-gold">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Primary School Gateway</span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                Sarah Academy Parent Portal
              </h3>

              <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                Our central online portal allows parents and guardians to track
                daily attendance, review terminal exam scores and continuous
                assessments, access fee invoices, and communicate directly with
                educators and administrators.
              </p>

              {/* Portal Features Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {[
                  "Termly Report Cards",
                  "Continuous Assessments",
                  "Fee Invoicing & Receipts",
                  "Live Attendance Records",
                  "Teacher Messaging",
                ].map((feat) => (
                  <span
                    key={feat}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/85"
                  >
                    <ShieldCheck className="h-3.5 w-3.5 text-secondary-gold" />
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Portal Action Card */}
            <div className="flex w-full shrink-0 flex-col items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:max-w-xs lg:items-center text-left lg:text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-gold/20 text-secondary-gold">
                <Laptop className="h-6 w-6" />
              </div>

              <div>
                <h4 className="font-bold text-white">Online Access</h4>
                <p className="mt-1 text-xs text-white/70">
                  Secure login for registered parents & guardians.
                </p>
              </div>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                title="Portal link is currently preparing for session launch"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-secondary-gold px-5 py-3 text-xs font-bold uppercase tracking-wider text-primary-dark-blue transition-all hover:bg-yellow-400 cursor-pointer shadow-md"
              >
                <span>Access Parent Portal</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <span className="text-[11px] text-white/50">
                Direct portal link &bull; Portal goes nowhere for now
              </span>
            </div>
          </div>
        </div>

        {/* How-To Guides Section */}
        <div id="how-to-guides" className="pt-4 scroll-mt-20">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-blue">
                <BookOpenCheck className="h-4 w-4" />
                <span>Parent Walkthroughs</span>
              </div>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Essential How-To Guides
              </h3>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Step-by-step instructions for our most common academic,
                financial, and admission procedures.
              </p>
            </div>
          </div>

          {/* Grid of How-To Guides */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HOW_TO_GUIDES.map((guide) => {
              const Icon = guide.icon;
              return (
                <Link
                  key={guide.slug}
                  href={guide.href}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue/50 hover:shadow-lg sm:p-7"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue transition-colors group-hover:bg-primary-blue group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{guide.readTime}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <span className="rounded-md bg-secondary-gold/15 px-2.5 py-0.5 text-[11px] font-semibold text-secondary-gold">
                        {guide.category}
                      </span>
                      <h4 className="mt-2.5 text-lg font-bold text-foreground transition-colors group-hover:text-primary-blue">
                        {guide.title}
                      </h4>
                      <p className="mt-2 text-xs leading-6 text-muted-foreground sm:text-sm">
                        {guide.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4 text-xs font-semibold text-primary-blue">
                    <span>Read Step-by-Step Guide</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default QuickAccess;
