import { images } from "@/assets/images";
import { ACADEMIC_SUPPORT_SERVICES } from "@/constants/academics";
import Image from "next/image";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";

const AcademicSupport = () => {
  return (
    <PageSection>
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <SectionTitle
          title="Individual Care"
          label="Academic Support & Intervention"
          className="text-center"
        />

        {/* Support Grid & Visual */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Support Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {ACADEMIC_SUPPORT_SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-xs transition-shadow hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-lg font-bold text-primary-blue">
                    {service.title}
                  </h3>

                  <p className="text-xs leading-6 text-muted-foreground sm:text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Image Showcase */}
          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div className="aspect-4/3 overflow-hidden rounded-3xl border border-border shadow-lg">
              <Image
                src={images.why_us}
                alt="Teacher providing individualized academic support to students"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-3xl bg-secondary-gold/20 blur-xl" />
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default AcademicSupport;
