import { USEFUL_LINKS } from "@/constants/resources";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { ExternalLink, Globe } from "lucide-react";

const UsefulLinks = () => {
  return (
    <PageSection className="bg-muted/30">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="Educational Gateways"
            label="Useful Links & Official Examination Portals"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Direct gateways to official national education bodies, external
            examination bodies (WAEC, NECO, JAMB), and the ministry of education.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {USEFUL_LINKS.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue/50 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary-blue/10 px-3 py-1 text-xs font-semibold text-primary-blue">
                    {link.badge}
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-blue" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-primary-blue transition-colors">
                  {link.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-muted-foreground sm:text-sm">
                  {link.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 border-t border-border/70 pt-4 text-xs font-semibold text-primary-blue">
                <Globe className="h-3.5 w-3.5" />
                <span>Visit Official Site</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default UsefulLinks;
