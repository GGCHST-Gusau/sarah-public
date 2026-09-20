"use client";

import { useState } from "react";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { CheckCircle2, MessageSquare, Send, ShieldCheck, UserCheck } from "lucide-react";

const DEPARTMENTS = [
  "Admissions & Enrollment",
  "Academics & Curriculum",
  "Bursary & School Fees",
  "Tahfiz & Islamiyya Program",
  "School Bus & Transport Service",
  "General Inquiries",
];

const SendMessage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: DEPARTMENTS[0],
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <PageSection id="send-message">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="Send a Message"
            label="Drop Us a Line Anytime"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Have a question or need detailed guidance? Complete the form below,
            and our administrative team will respond within 24 business hours.
          </p>
        </div>

        {/* Message Form & Reassurance Grid */}
        <div className="mx-auto w-full max-w-4xl">
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-md sm:p-10 lg:p-12">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-bold uppercase tracking-wider text-foreground"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="e.g. Ibrahim Abubakar"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-muted/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary-blue focus:outline-hidden"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-foreground"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="e.g. parent@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-muted/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary-blue focus:outline-hidden"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold uppercase tracking-wider text-foreground"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. 0813 000 0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-muted/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary-blue focus:outline-hidden"
                    />
                  </div>

                  {/* Department */}
                  <div className="space-y-2">
                    <label
                      htmlFor="department"
                      className="block text-xs font-bold uppercase tracking-wider text-foreground"
                    >
                      Inquiry Department <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-muted/20 px-4 py-3 text-sm text-foreground focus:border-primary-blue focus:outline-hidden"
                    >
                      {DEPARTMENTS.map((dept) => (
                        <option key={dept} value={dept} className="bg-card text-foreground">
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-xs font-bold uppercase tracking-wider text-foreground"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="e.g. Admission inquiry for Primary 2"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-muted/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary-blue focus:outline-hidden"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-foreground"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Write your message or question in detail..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-muted/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary-blue focus:outline-hidden"
                  />
                </div>

                {/* Submit button & Privacy assurance */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-2">
                  <span className="flex items-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-secondary-gold" />
                    Your information is kept safe and strictly confidential.
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-blue px-8 py-3.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-primary-dark-blue cursor-pointer disabled:opacity-60"
                  >
                    <Send className="h-4 w-4" />
                    <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex flex-col items-center py-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-foreground">
                  Thank You for Reaching Out!
                </h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                  Your message has been received by our administrative desk. A
                  representative will contact you at{" "}
                  <strong className="text-foreground">{formData.email}</strong> or by
                  phone shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      department: DEPARTMENTS[0],
                      subject: "",
                      message: "",
                    });
                  }}
                  className="mt-6 rounded-xl bg-primary-blue px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-primary-dark-blue cursor-pointer sm:text-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default SendMessage;
