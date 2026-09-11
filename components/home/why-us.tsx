import Image from "next/image";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { images } from "@/assets/images";
import { WHY_US } from "@/constants/why-us";

const WhyUs = () => {
  const { why_us } = images;
  return (
    <PageSection>
      <SectionTitle
        title="Why Choose Us?"
        label="More Than Education. A Foundation for Life."
        className="text-center"
      />
      <div className="relative flex gap-4 lg:gap-6 items-start">
        <Image
          src={why_us}
          alt="happy school children"
          className="rounded-2xl max-md:hidden max-lg:w-1/2 sticky top-20 w-1/3 shrink-0 aspect-9/16"
        />
        <div className="grid lg:grid-cols-2 gap-6 xl:gap-12">
          {WHY_US.map((reason) => (
            <div
              key={reason.title}
              className="flex flex-col gap-2 items-center text-center shadow-lg hover:shadow-xl p-6 xl:p-10 rounded-lg relative overflow-hidden"
            >
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-10 bg-secondary-gold -z-10 blur-2xl" />
              <div className="absolute top-0 left-0 bg-primary-blue size-8 blur-2xl" />
              <div className="absolute bottom-0 right-0 bg-primary-blue size-8 blur-2xl" />
              <reason.icon
                size={64}
                className="p-3 rounded-full bg-linear-30 from-secondary-gold via-primary-blue to-primary-dark-blue"
              />
              <h4 className="text-primary-blue text-lg font-medium">
                {reason.title}
              </h4>
              <div className="">{reason.description}</div>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default WhyUs;
