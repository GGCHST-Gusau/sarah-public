"use client";

import { useState } from "react";
import { POSTS, Post } from "@/constants/news";
import Image from "next/image";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { Calendar, Clock, Sparkles, User, ArrowRight, X } from "lucide-react";

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const FeaturedNews = () => {
  const featured = POSTS[0];
  const [isReadingModalOpen, setIsReadingModalOpen] = useState(false);

  return (
    <PageSection>
      <div className="flex flex-col gap-6 md:gap-10">
        <SectionTitle
          title="Spotlight Story"
          label="Featured Article & School Milestone"
        />

        {/* Featured Card */}
        <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-md transition-all duration-300 hover:border-primary-blue/40 hover:shadow-xl">
          <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10">
            {/* Image Side */}
            <div className="relative aspect-16/10 w-full overflow-hidden lg:col-span-6 lg:aspect-4/3">
              <Image
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="rounded-full bg-secondary-gold px-3.5 py-1 text-xs font-bold text-primary-dark-blue shadow-sm">
                  Featured
                </span>
                <span className="rounded-full bg-primary-blue px-3.5 py-1 text-xs font-semibold text-white shadow-sm">
                  {featured.category}
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="flex flex-col justify-between p-6 pt-0 lg:col-span-6 lg:p-8 lg:pl-0">
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground sm:text-sm">
                  <span className="flex items-center gap-1.5 text-primary-blue font-semibold">
                    <User className="h-4 w-4" />
                    {featured.author}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {formatDate(featured.created_at)}
                  </span>
                  {featured.readTime && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {featured.readTime}
                      </span>
                    </>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary-blue md:text-3xl">
                  {featured.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                  {featured.excerpt}
                </p>

                <p className="hidden text-xs leading-6 text-muted-foreground/80 sm:block sm:text-sm">
                  {featured.content.slice(0, 160)}...
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-border/80">
                <button
                  onClick={() => setIsReadingModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-blue px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark-blue hover:gap-3 cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {isReadingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8">
            <button
              onClick={() => setIsReadingModalOpen(false)}
              className="absolute top-4 right-4 rounded-full bg-muted p-2 text-muted-foreground hover:bg-primary-blue hover:text-white cursor-pointer"
              aria-label="Close article"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-4">
              <span className="inline-block rounded-full bg-primary-blue/10 px-3 py-1 text-xs font-semibold text-primary-blue">
                {featured.category}
              </span>

              <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                {featured.title}
              </h2>

              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span>By {featured.author}</span>
                <span>•</span>
                <span>{formatDate(featured.created_at)}</span>
              </div>

              <div className="relative aspect-16/9 w-full overflow-hidden rounded-xl">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="text-base leading-7 text-muted-foreground">
                {featured.content}
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                At Sarah Academy, we continuously uphold our shared standard of
                excellence, nurturing each learner's distinct talents while
                instilling the discipline, humility, and moral purpose required to
                make lasting contributions to society.
              </p>
            </div>
          </div>
        </div>
      )}
    </PageSection>
  );
};

export default FeaturedNews;
