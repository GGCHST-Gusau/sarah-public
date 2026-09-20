"use client";

import { useState } from "react";
import PageSection from "../shared/page-section";
import {
  Search,
  BookOpen,
  Calendar,
  FileDown,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  FolderOpen,
} from "lucide-react";

const QUICK_TAGS = [
  { label: "Parent Portal", targetId: "parent-portal" },
  { label: "How-To Guides", targetId: "how-to-guides" },
  { label: "Academic Calendar", targetId: "calendar" },
  { label: "Past Questions", targetId: "academic-resources" },
  { label: "Parent Handbook", targetId: "parent-resources" },
  { label: "Student Code of Conduct", targetId: "student-resources" },
  { label: "School Downloads", targetId: "downloads" },
];

const ResourcesHero = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    const term = searchTerm.toLowerCase();
    if (term.includes("portal") || term.includes("login")) {
      scrollToSection("parent-portal");
    } else if (
      term.includes("how to") ||
      term.includes("fee") ||
      term.includes("result") ||
      term.includes("admission") ||
      term.includes("apply") ||
      term.includes("guide")
    ) {
      scrollToSection("how-to-guides");
    } else if (
      term.includes("parent") ||
      term.includes("pta") ||
      term.includes("handbook")
    ) {
      scrollToSection("parent-resources");
    } else if (
      term.includes("student") ||
      term.includes("code") ||
      term.includes("tahfiz")
    ) {
      scrollToSection("student-resources");
    } else if (
      term.includes("past") ||
      term.includes("exam") ||
      term.includes("academic") ||
      term.includes("scheme")
    ) {
      scrollToSection("academic-resources");
    } else if (
      term.includes("calendar") ||
      term.includes("date") ||
      term.includes("term")
    ) {
      scrollToSection("calendar");
    } else if (
      term.includes("help") ||
      term.includes("contact") ||
      term.includes("bursary")
    ) {
      scrollToSection("help");
    } else {
      scrollToSection("downloads");
    }
  };

  return (
    <PageSection className="relative overflow-hidden bg-primary-dark-blue text-white">
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 left-1/2 -z-10 h-96 w-full -translate-x-1/2 rounded-full bg-primary-blue/20 blur-[140px]" />
      <div className="absolute top-1/2 right-10 -z-10 h-72 w-72 rounded-full bg-secondary-gold/15 blur-[120px]" />
      <div className="absolute bottom-0 left-10 -z-10 h-64 w-64 rounded-full bg-primary-blue/25 blur-[100px]" />

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container pt-10 relative z-10 mx-auto flex flex-col items-center text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-secondary-gold" />
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary-gold sm:text-sm">
            Sarah Academy Resource Hub
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-6 text-3xl font-bold sm:text-5xl md:text-6xl text-white leading-snug">
          Everything You Need, <br className="hidden sm:inline" />
          Organised in One Place.
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
          Access useful information, important documents, learning materials,
          and school resources designed to keep students and parents informed,
          prepared, and connected.
        </p>

        {/* Interactive Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="mt-8 flex w-full max-w-2xl flex-col gap-2.5 sm:flex-row sm:items-center sm:rounded-2xl sm:border sm:border-white/20 sm:bg-white/10 sm:p-2 sm:backdrop-blur-md shadow-lg"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60" />
            <input
              type="text"
              placeholder="Search guides, parent portal, handbooks, past papers, calendars..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white/10 py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-white/60 focus:outline-hidden sm:border-0 sm:bg-transparent sm:py-2"
            />
          </div>
          <button
            type="submit"
            className="rounded-xl bg-secondary-gold px-6 py-3 text-sm font-bold text-primary-dark-blue transition-colors hover:bg-yellow-400 cursor-pointer shrink-0"
          >
            Find Resource
          </button>
        </form>

        {/* Quick Shortcut Tags */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-semibold text-white/60">
            Quick jump:
          </span>
          {QUICK_TAGS.map((tag) => (
            <button
              key={tag.label}
              onClick={() => scrollToSection(tag.targetId)}
              className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-medium text-white/90 transition-all hover:border-secondary-gold/50 hover:bg-white/10 hover:text-secondary-gold cursor-pointer"
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3 Portal Highlights - Given unconstrained breathable grid */}
      <div className="relative z-10 mt-14 grid w-full max-w-6xl mx-auto gap-6 text-left sm:grid-cols-3">
        <div
          onClick={() => scrollToSection("parent-resources")}
          className="group flex cursor-pointer flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-6 md:p-7 backdrop-blur-xs transition-all duration-300 hover:border-secondary-gold/50 hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl"
        >
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-secondary-gold transition-colors group-hover:bg-secondary-gold group-hover:text-primary-dark-blue">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">For Parents</h3>
            <p className="mt-2 text-xs leading-6 text-white/70 sm:text-sm">
              Handbooks, PTA information, fee schedules, and medical policies.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-secondary-gold group-hover:gap-2.5 transition-all">
            <span>View Parent Hub</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>

        <div
          onClick={() => scrollToSection("student-resources")}
          className="group flex cursor-pointer flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-6 md:p-7 backdrop-blur-xs transition-all duration-300 hover:border-secondary-gold/50 hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl"
        >
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-secondary-gold transition-colors group-hover:bg-secondary-gold group-hover:text-primary-dark-blue">
              <FolderOpen className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">For Students</h3>
            <p className="mt-2 text-xs leading-6 text-white/70 sm:text-sm">
              Code of conduct, class timetables, Tahfiz trackers, and club
              guides.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-secondary-gold group-hover:gap-2.5 transition-all">
            <span>View Student Hub</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>

        <div
          onClick={() => scrollToSection("downloads")}
          className="group flex cursor-pointer flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-6 md:p-7 backdrop-blur-xs transition-all duration-300 hover:border-secondary-gold/50 hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl"
        >
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-secondary-gold transition-colors group-hover:bg-secondary-gold group-hover:text-primary-dark-blue">
              <FileDown className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">
              Direct Downloads
            </h3>
            <p className="mt-2 text-xs leading-6 text-white/70 sm:text-sm">
              Official school documents, full session calendars, and policies.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-secondary-gold group-hover:gap-2.5 transition-all">
            <span>Browse Documents</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default ResourcesHero;
