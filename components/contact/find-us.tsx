import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { MapPin, Navigation, ShieldCheck, Car, Phone } from "lucide-react";

const FindUs = () => {
  return (
    <PageSection id="find-us" className="bg-muted/30">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="Campus Location"
            label="How to Find Us in Gusau"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Our campus is conveniently situated along Zannah Road in Gada Biyu,
            providing a secure, peaceful, and accessible learning environment.
          </p>
        </div>

        {/* Map and Directions Grid */}
        <div className="grid items-stretch gap-8 lg:grid-cols-12">
          {/* Map Container */}
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-md lg:col-span-7 min-h-[380px]">
            <iframe
              title="Sarah Academy Location Map Gusau"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.444520448134!2d6.6534571!3d12.176214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11933f7c9e0d9b4b%3A0x7d9f7b6b6b6b6b6b!2sGusau!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[0.1] contrast-[1.05]"
            />
          </div>

          {/* Directions & Visitor Information */}
          <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-xs sm:p-8 lg:col-span-5">
            <div className="space-y-6">
              <div>
                <span className="rounded-full bg-secondary-gold/15 px-3 py-1 text-xs font-semibold text-secondary-gold">
                  Gusau Campus
                </span>
                <h3 className="mt-3 text-xl font-bold text-foreground sm:text-2xl">
                  Sarah Academy Premises
                </h3>
                <p className="mt-2 text-xs leading-6 text-muted-foreground sm:text-sm">
                  Zannah Road, Gada Biyu, Gusau, Zamfara State, Nigeria.
                </p>
              </div>

              <div className="space-y-4 border-t border-border/70 pt-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                    <Navigation className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Getting Here</h4>
                    <p className="text-xs leading-5 text-muted-foreground">
                      Located along Zannah Road, easily reachable via public transport
                      or private vehicle from anywhere in Gusau township.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Visitor Security</h4>
                    <p className="text-xs leading-5 text-muted-foreground">
                      All parents, guardians, and visitors must check in at the
                      gatehouse and present valid identification upon arrival.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                    <Car className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Parking</h4>
                    <p className="text-xs leading-5 text-muted-foreground">
                      Dedicated, monitored parking is available inside the school
                      grounds for visitors during school hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-border/70 pt-5">
              <a
                href="https://maps.google.com/?q=Gusau+Zamfara+State"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-blue py-3 text-xs font-semibold text-white transition-colors hover:bg-primary-dark-blue sm:text-sm"
              >
                <MapPin className="h-4 w-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default FindUs;
