"use client";

import { useState } from "react";
import PageSection from "../shared/page-section";
import { BellRing, CheckCircle, Mail, ShieldCheck } from "lucide-react";

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  return (
    <PageSection>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-md sm:p-12 lg:p-16">
        {/* Decorative elements */}
        <div className="absolute -top-16 -right-16 -z-10 h-64 w-64 rounded-full bg-primary-blue/10 blur-2xl" />
        <div className="absolute -bottom-16 -left-16 -z-10 h-64 w-64 rounded-full bg-secondary-gold/10 blur-2xl" />

        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-blue/10 text-primary-blue">
            <BellRing className="h-7 w-7" />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            Never Miss an Official School Circular or Milestone
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
            Subscribe to receive official termly schedules, examination updates,
            holiday notices, and academic highlights directly in your inbox.
          </p>

          {/* Form */}
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  required
                  placeholder="Enter parent or guardian email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-border bg-muted/20 py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary-blue focus:outline-hidden"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-primary-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark-blue cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              <CheckCircle className="h-5 w-5" />
              <span>Thank you! You have subscribed to Sarah Academy updates.</span>
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-secondary-gold" />
              No spam. Only verified school notices.
            </span>
            <span>•</span>
            <span>Unsubscribe at any time</span>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default NewsletterSubscribe;
