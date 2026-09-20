import { CONTACT_CHANNELS } from "@/constants/contact-page";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { ArrowUpRight } from "lucide-react";

const ContactInformation = () => {
  return (
    <PageSection className="bg-muted/30">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="Official Channels"
            label="Direct Contact Information"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Reach out through our official lines or visit our school premises in
            Gusau. Our administrative team is readily available during operating
            hours.
          </p>
        </div>

        {/* 4 Contact Channels Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CHANNELS.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.id}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue/50 hover:shadow-md"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue transition-colors group-hover:bg-primary-blue group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-foreground">
                    {channel.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {channel.description}
                  </p>

                  <div className="mt-4 space-y-1">
                    {channel.values.map((val) => (
                      <span
                        key={val}
                        className="block font-mono text-xs font-semibold text-foreground sm:text-sm"
                      >
                        {val}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-border/70 pt-4">
                  <a
                    href={channel.actionHref}
                    target={channel.actionHref.startsWith("http") ? "_blank" : undefined}
                    rel={channel.actionHref.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-blue transition-colors hover:text-primary-dark-blue"
                  >
                    <span>{channel.actionText}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
};

export default ContactInformation;
