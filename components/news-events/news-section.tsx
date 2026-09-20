"use client";

import { useMemo, useState } from "react";
import { POSTS, Post } from "@/constants/news";
import Image from "next/image";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { Calendar, Search, User, ArrowRight, X } from "lucide-react";

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const CATEGORIES = ["All", "Achievements", "School Life", "Islamiyya", "Academics"];

const NewsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalPost, setActiveModalPost] = useState<Post | null>(null);

  const filteredPosts = useMemo(() => {
    return POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <PageSection className="bg-muted/30">
      <div className="flex flex-col gap-8 md:gap-12">
        {/* Header & Controls */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionTitle
              title="All Updates"
              label="Latest News & School Articles"
            />
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Browse through our recent stories, milestones, and departmental reports.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search news or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary-blue focus:outline-hidden"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-border/70 pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer sm:text-sm ${
                selectedCategory === cat
                  ? "bg-primary-blue text-white shadow-xs"
                  : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue/50 hover:shadow-lg"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-primary-blue/90 px-3 py-1 text-xs font-semibold text-white shadow-xs backdrop-blur-xs">
                      {post.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5 text-primary-blue" />
                        {post.author}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-secondary-gold" />
                        {formatDate(post.created_at)}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary-blue">
                      {post.title}
                    </h3>

                    <p className="mt-2.5 text-xs leading-6 text-muted-foreground sm:text-sm">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="border-t border-border/70 p-5 pt-3 sm:p-6 sm:pt-4">
                  <button
                    onClick={() => setActiveModalPost(post)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-blue transition-colors hover:text-primary-dark-blue hover:gap-2 cursor-pointer sm:text-sm"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
            <p className="text-base font-semibold text-foreground">
              No updates found
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Try adjusting your search query or selecting a different category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 rounded-lg bg-primary-blue px-4 py-2 text-xs font-semibold text-white cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Reading Modal */}
      {activeModalPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8">
            <button
              onClick={() => setActiveModalPost(null)}
              className="absolute top-4 right-4 rounded-full bg-muted p-2 text-muted-foreground hover:bg-primary-blue hover:text-white cursor-pointer"
              aria-label="Close article"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-4">
              <span className="inline-block rounded-full bg-primary-blue/10 px-3 py-1 text-xs font-semibold text-primary-blue">
                {activeModalPost.category}
              </span>

              <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                {activeModalPost.title}
              </h2>

              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span>By {activeModalPost.author}</span>
                <span>•</span>
                <span>{formatDate(activeModalPost.created_at)}</span>
              </div>

              <div className="relative aspect-16/9 w-full overflow-hidden rounded-xl">
                <Image
                  src={activeModalPost.image}
                  alt={activeModalPost.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="text-base leading-7 text-muted-foreground">
                {activeModalPost.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </PageSection>
  );
};

export default NewsSection;
