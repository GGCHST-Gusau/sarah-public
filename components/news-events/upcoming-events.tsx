"use client";

import { useMemo, useState } from "react";
import { EVENTS, SchoolEvent } from "@/constants/events";
import Image from "next/image";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { Calendar, Clock, MapPin, Users, Bell } from "lucide-react";
import CountdownTimer from "../home/countdown-timer";

export function formatEventDay(dateStr: string) {
  const d = new Date(dateStr);
  return {
    day: d.toLocaleDateString("en-US", { day: "2-digit" }),
    month: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    full: d.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  };
}

const EVENT_CATEGORIES = [
  "All",
  "Parent Engagement",
  "Sports & Fitness",
  "School Life",
  "Academic & STEM",
  "Tahfiz & Islamiyya",
];

const UpcomingEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [reminderAdded, setReminderAdded] = useState<number | null>(null);

  const filteredEvents = useMemo(() => {
    if (selectedCategory === "All") return EVENTS;
    return EVENTS.filter((e) => e.category === selectedCategory);
  }, [selectedCategory]);

  const nextUpcomingEvent = EVENTS[0];

  const handleReminder = (id: number) => {
    setReminderAdded(id);
    setTimeout(() => setReminderAdded(null), 3000);
  };

  return (
    <PageSection>
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="School Calendar"
            label="Upcoming Events & Community Gatherings"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Mark your calendar for upcoming academic workshops, sports tournaments,
            parent consultations, and Islamic commemorations.
          </p>
        </div>

        {/* Next Event Spotlight with Countdown */}
        {nextUpcomingEvent && (
          <div className="overflow-hidden rounded-3xl border border-secondary-gold/40 bg-gradient-to-br from-primary-dark-blue to-primary-blue p-6 text-white shadow-xl md:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="space-y-4 lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-secondary-gold backdrop-blur-xs">
                  Next Upcoming Gathering
                </div>

                <h3 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                  {nextUpcomingEvent.title}
                </h3>

                <p className="text-sm leading-6 text-white/80 sm:text-base">
                  {nextUpcomingEvent.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/90">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-secondary-gold" />
                    {formatEventDay(nextUpcomingEvent.date).full}
                  </span>
                  {nextUpcomingEvent.time && (
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-secondary-gold" />
                      {nextUpcomingEvent.time}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-secondary-gold" />
                    {nextUpcomingEvent.venue}
                  </span>
                </div>
              </div>

              {/* Countdown Display Box */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-xs lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary-gold sm:text-sm">
                  Time Remaining
                </span>
                <div className="mt-3">
                  <CountdownTimer targetDate={nextUpcomingEvent.date} />
                </div>
                <span className="mt-3 text-xs text-white/70">
                  Target: {nextUpcomingEvent.venue}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 border-b border-border/70 pb-4">
          {EVENT_CATEGORIES.map((cat) => (
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

        {/* Events Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredEvents.map((evt) => {
            const dateDetails = formatEventDay(evt.date);
            return (
              <div
                key={evt.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:border-primary-blue/50 hover:shadow-lg sm:p-7"
              >
                <div>
                  <div className="flex items-start gap-4">
                    {/* Date Block */}
                    <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue border border-primary-blue/20">
                      <span className="text-xl font-bold leading-none">
                        {dateDetails.day}
                      </span>
                      <span className="text-xs font-semibold text-secondary-gold uppercase mt-1">
                        {dateDetails.month}
                      </span>
                    </div>

                    {/* Title & Badge */}
                    <div className="flex-1">
                      {evt.category && (
                        <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-primary-blue">
                          {evt.category}
                        </span>
                      )}
                      <h4 className="mt-1.5 text-lg font-bold text-foreground group-hover:text-primary-blue transition-colors">
                        {evt.title}
                      </h4>
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-6 text-muted-foreground sm:text-sm">
                    {evt.description}
                  </p>

                  {/* Metadata */}
                  <div className="mt-5 space-y-2 border-t border-border/70 pt-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-primary-blue" />
                      <span>{evt.time || "Scheduled Time Announced Soon"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-secondary-gold" />
                      <span>{evt.venue}</span>
                    </div>
                    {evt.targetAudience && (
                      <div className="flex items-center gap-2">
                        <Users className="h-3.5 w-3.5 text-muted-foreground" />
                        <span>Audience: {evt.targetAudience}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Event Action */}
                <div className="mt-6 border-t border-border/70 pt-4">
                  <button
                    onClick={() => handleReminder(evt.id)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-primary-blue transition-colors hover:text-primary-dark-blue cursor-pointer"
                  >
                    <Bell className="h-3.5 w-3.5 text-secondary-gold" />
                    <span>
                      {reminderAdded === evt.id
                        ? "Marked on Calendar!"
                        : "Notify Me About This Event"}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
};

export default UpcomingEvents;
