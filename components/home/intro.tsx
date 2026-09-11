import Image from "next/image";
import PageSection from "../shared/page-section";
import { images } from "@/assets/images";
import PrimaryButton from "../shared/primary-button";
import SectionTitle from "../shared/section-title";

const Intro = () => {
  const { about_img, about_img2, about_img3, about_img4 } = images;
  return (
    <PageSection>
      <div className="flex max-lg:flex-col-reverse items-center gap-6 xl:gap-24 justify-between relative">
        <div className="absolute bg-primary-blue size-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full -z-10 blur-[150px]" />
        <div className="flex flex-col gap-4 w-full grow-0 items-start">
          <SectionTitle
            title="who we are"
            label="More Than a School — A Foundation for Life"
            className="text-left max-lg:hidden"
          />
          <p>
            At Sarah Academy, we are dedicated to nurturing the minds and hearts
            of our students. Our mission is to provide a holistic education that
            combines academic excellence with strong moral and ethical values.
          </p>
          <p>
            We provide a nurturing and inspiring learning environment where
            children are equipped with the knowledge, skills, values, and
            confidence they need to thrive. From Nursery through Primary and
            Secondary, alongside a strong Islamiyya programme, we are committed
            to providing a balanced education that supports both academic
            excellence and character development.
          </p>
          <p>
            We believe that every child has unique potential. Through quality
            teaching, strong moral values, and a supportive community, we help
            our students grow into confident, responsible, and well-rounded
            individuals prepared for the future.
          </p>
          <PrimaryButton>Learn more</PrimaryButton>
        </div>
        <div className="relative w-full max-w-150 shrink-0">
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
        </div>
        <SectionTitle
          title="who we are"
          label="More Than a School — A Foundation for Life"
          className="text-center lg:hidden"
        />
      </div>
    </PageSection>
  );
};

export default Intro;
