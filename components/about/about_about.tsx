import { images } from "@/assets/images";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";

const AboutAbout = () => {
  return (
    <PageSection>
      <div className="relative flex items-center justify-between gap-6 flex-col-reverse lg:flex-row-reverse xl:gap-24">
        <div className="flex w-full grow-0 flex-col items-start gap-4">
          <SectionTitle
            title="Who We Are"
            label="A Place to Learn, Grow, and Belong"
          />

          <div className="space-y-4 leading-7 md:text-lg">
            <p>
              Our school provides a supportive and engaging environment where
              children are encouraged to discover their abilities, develop
              confidence, and grow into responsible individuals.
            </p>

            <p>
              From Nursery and Primary through Secondary education, alongside
              our Islamiyya programme, we bring together academic learning,
              character development, practical skills, and sound values.
            </p>

            <p>
              We believe that education is more than what happens in the
              classroom. It is about preparing children with the knowledge,
              character, and confidence they need to make a meaningful
              contribution to their families and society.
            </p>
          </div>

          <a
            href="/academics"
            className="inline-flex items-center gap-2 font-semibold text-primary-blue transition hover:gap-3"
          >
            Explore Our Academics
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="relative w-full lg:w-1/3 xl:w-1/2 max-w-150 shrink-0">
          <div className="aspect-4/3 overflow-hidden rounded-3xl">
            <Image
              src={images.about_about}
              alt="Students learning at our school"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 hidden h-28 w-28 rounded-2xl bg-secondary-gold/20 md:block" />
        </div>
      </div>
    </PageSection>
  );
};

export default AboutAbout;
