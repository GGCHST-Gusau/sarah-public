import { PARENT_RESOURCES } from "@/constants/resources";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { ArrowRight, CheckCircle2, MessageSquare, PhoneCall } from "lucide-react";

const ParentResources = () => {
  return (
    <PageSection id="parent-resources" className="bg-muted/30">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="Parent Hub"
            label="Resources & Policies for Parents & Guardians"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            We partner closely with families to ensure every child is supported
            academically, spiritually, and emotionally. Review official guidelines,
            PTA circulars, and student welfare policies below.
          </p>
        </div>

        {/* 4 Parent Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PARENT_RESOURCES.map((res) => {
            const Icon = res.icon;
            return (
              <div
                key={res.title}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue/50 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-secondary-gold">
                      {res.category}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-primary-blue transition-colors">
                    {res.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-muted-foreground sm:text-sm">
                    {res.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-border/70 pt-4">
                  <a
                    href="#downloads"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-blue transition-colors hover:text-primary-dark-blue hover:gap-2"
                  >
                    <span>Download Policy PDF</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Parent-School Communication Channel Strip */}
        <div className="rounded-2xl border border-secondary-gold/30 bg-card p-6 shadow-xs sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary-gold">
                Communication Guidelines
              </span>
              <h4 className="text-xl font-bold text-foreground">
                Official Parent WhatsApp Broadcast & Administrative Line
              </h4>
              <p className="text-xs leading-6 text-muted-foreground sm:text-sm max-w-2xl">
                Stay updated in real time. Official urgent updates, early closures,
                weather notices, and PTA notifications are communicated directly to
                registered parent phone contacts.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-emerald-700 sm:text-sm"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Join Parent WhatsApp</span>
              </a>
              <a
                href="#help"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-muted/30 px-5 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted sm:text-sm"
              >
                <PhoneCall className="h-4 w-4 text-primary-blue" />
                <span>Contact Parent Liaison</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default ParentResources;
