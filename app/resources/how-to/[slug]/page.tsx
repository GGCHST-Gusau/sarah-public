import type { Metadata } from "next";
import Link from "next/link";
import PageSection from "@/components/shared/page-section";
import { HOW_TO_GUIDES } from "@/constants/resources";
import {
  ArrowLeft,
  BookOpenCheck,
  ChevronRight,
  FileClock,
  Home,
  HelpCircle,
  Phone,
  Mail,
  ShieldAlert,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

function formatTitleFromSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = HOW_TO_GUIDES.find((g) => g.slug === slug);
  const title = guide ? guide.title : formatTitleFromSlug(slug);

  return {
    title: `${title} | Sarah Academy Resources`,
    description: guide
      ? guide.description
      : `Step-by-step guide for ${title} at Sarah Academy.`,
  };
}

export default async function HowToGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = HOW_TO_GUIDES.find((g) => g.slug === slug);

  const title = guide ? guide.title : formatTitleFromSlug(slug);
  const category = guide ? guide.category : "General Guide";
  const readTime = guide ? guide.readTime : "2 min read";
  const otherGuides = HOW_TO_GUIDES.filter((g) => g.slug !== slug);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Hero Banner */}
      <section className="relative overflow-hidden bg-primary-dark-blue text-white py-12 md:py-16">
        <div className="absolute top-0 right-1/4 -z-10 h-72 w-72 rounded-full bg-secondary-gold/15 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 -z-10 h-64 w-64 rounded-full bg-primary-blue/25 blur-[100px]" />

        <div className="container mx-auto px-4 sm:px-6">
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/70 sm:text-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <Home className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/40" />
            <Link
              href="/resources"
              className="hover:text-white transition-colors"
            >
              Resources
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/40" />
            <Link
              href="/resources#how-to-guides"
              className="hover:text-white transition-colors"
            >
              How-To Guides
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/40" />
            <span className="font-semibold text-secondary-gold truncate max-w-xs sm:max-w-sm">
              {title}
            </span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary-gold/30 bg-secondary-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-gold">
              <BookOpenCheck className="h-3.5 w-3.5" />
              <span>{category}</span>
              <span className="text-white/40">&bull;</span>
              <span className="text-white/80">{readTime}</span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {title}
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
              Official guide and procedure documentation for parents, guardians, and students of Sarah Academy.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <PageSection>
        <div className="mx-auto max-w-4xl flex flex-col gap-10">
          {/* Content Not Available Notice Box */}
          <div className="relative overflow-hidden rounded-3xl border border-secondary-gold/30 bg-card p-8 shadow-md md:p-12 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary-gold/15 text-secondary-gold mb-6">
              <FileClock className="h-10 w-10" />
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary-gold/15 px-3 py-1 text-xs font-semibold text-secondary-gold mb-3">
              <ShieldAlert className="h-3.5 w-3.5" />
              <span>Notice</span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Content Not Available For Now
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              The verified step-by-step instructions, screenshots, and guidelines for{" "}
              <strong className="text-foreground font-semibold">{title}</strong> are currently being updated
              and synchronized for the 2026/2027 academic session. This guide will be published shortly.
            </p>

            {/* Quick action buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 rounded-xl bg-primary-blue px-6 py-3 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-primary-dark-blue shadow-xs cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Return to Resources Hub</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-xs sm:text-sm font-semibold text-foreground transition-colors hover:bg-muted cursor-pointer"
              >
                <HelpCircle className="h-4 w-4 text-primary-blue" />
                <span>Contact School Helpdesk</span>
              </Link>
            </div>
          </div>

          {/* Need Immediate Assistance Card */}
          <div className="rounded-2xl border border-border bg-muted/40 p-6 md:p-8">
            <h3 className="text-lg font-bold text-foreground sm:text-xl">
              Need Immediate Assistance With This?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              If you have an urgent inquiry or require manual assistance regarding {title.toLowerCase()}, please reach out directly to the appropriate department:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-4 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-blue">
                  Admissions & Administrative Office
                </span>
                <p className="text-xs text-muted-foreground">
                  For registration inquiries, application steps, and document submissions.
                </p>
                <div className="pt-2 flex flex-col gap-1 text-xs font-medium text-foreground">
                  <span className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-primary-blue" />
                    admissions@sarahacademy.edu.ng
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-primary-blue" />
                    +234 (0) 800 SARAH ADM
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-4 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-secondary-gold">
                  Bursary & Accounts Desk
                </span>
                <p className="text-xs text-muted-foreground">
                  For tuition confirmations, bank payment receipts, and fee clearances.
                </p>
                <div className="pt-2 flex flex-col gap-1 text-xs font-medium text-foreground">
                  <span className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-secondary-gold" />
                    bursary@sarahacademy.edu.ng
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-secondary-gold" />
                    +234 (0) 800 SARAH BURS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Other How-To Guides */}
          {otherGuides.length > 0 && (
            <div className="pt-4">
              <h3 className="text-lg font-bold text-foreground sm:text-xl">
                Browse Other How-To Guides
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {otherGuides.slice(0, 3).map((item) => (
                  <Link
                    key={item.slug}
                    href={item.href}
                    className="group flex flex-col justify-between rounded-xl border border-border bg-card p-4 transition-all hover:border-primary-blue/50 hover:shadow-xs"
                  >
                    <div>
                      <span className="text-[11px] font-semibold text-secondary-gold">
                        {item.category}
                      </span>
                      <h4 className="mt-1 text-sm font-bold text-foreground group-hover:text-primary-blue transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary-blue">
                      <span>View guide</span>
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </PageSection>
    </div>
  );
}
