import { images } from "@/assets/images";
import Image from "next/image";
import PageSection from "../shared/page-section";

const AboutHero = () => {
  const { about_img, about_img2, about_img3, about_img4 } = images;
  return (
    <PageSection className="bg-primary-dark-blue">
      <div className="flex items-center justify-between gap-6 py-10 text-white max-lg:flex-col xl:gap-10">
        {/* Content */}
        <div className="flex flex-col gap-4 md:gap-8 xl:w-1/2">
          <span className="text-lg font-medium uppercase tracking-wide text-secondary-gold md:text-xl">
            About Our School
          </span>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:max-xl:text-6xl">
            Growing Minds. Shaping Character. Building Futures.
          </h1>

          <p className="max-lg:hidden max-w-xl leading-7 text-white/75 md:text-lg">
            We are committed to providing an environment where children can
            learn with confidence, grow in character, strengthen their values,
            and develop the knowledge and skills they need for a meaningful
            future.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full lg:max-w-150 lg:w-2/5 xl:w-1/2 shrink-0">
          <div className="absolute bg-secondary-gold size-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full -z-10 blur-[150px]" />
          <div className="grid aspect-[1.08] grid-cols-2 gap-3">
            {[
              { src: about_img, className: "rounded-tl-[100px]" },
              { src: about_img2, className: "rounded-tr-[28px]" },
              { src: about_img3, className: "rounded-bl-[28px]" },
              { src: about_img4, className: "rounded-br-[100px]" },
            ].map(({ src, className }, index) => (
              <div
                key={src.src}
                className={`relative overflow-hidden ${className}`}
              >
                <Image
                  src={src}
                  alt={`About Image ${index + 1}`}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <p className="mt-4 lg:hidden max-w-xl leading-7 text-white/75 md:text-lg">
            We are committed to providing an environment where children can
            learn with confidence, grow in character, strengthen their values,
            and develop the knowledge and skills they need for a meaningful
            future.
          </p>
        </div>
      </div>
    </PageSection>
  );
};

export default AboutHero;
