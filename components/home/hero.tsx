import { images } from "@/assets/images";
import CustomVideoPlayer from "./custom-video-player";
import PrimaryButton from "../shared/primary-button";
import SecondaryButton from "../shared/secondary-button";

const Hero = () => {
  const { home_hero } = images;

  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${home_hero.src})` }}
      />
      <div className="absolute inset-0 bg-[#031933]/90" />

      <div className="relative z-20 container pt-24 pb-10 lg:pt-44 lg:pb-32 flex items-center gap-6 xl:gap-10 max-lg:flex-col text-white">
        <div className="xl:w-1/2 flex flex-col gap-4 md:gap-8">
          <span className="text-lg md:text-xl font-medium uppercase text-secondary-gold tracking-wide">
            Excellence in Learning. Excellence in Character.
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl  lg:max-xl:text-6xl font-bold text-white leading-tight">
            Preparing Today's Children for Tomorrow's World
          </h1>
          <div className="flex items-center gap-3">
            <PrimaryButton>Apply now</PrimaryButton>
            <SecondaryButton>Learn more</SecondaryButton>
          </div>
          <div className="h-[0.5px] w-full bg-white mt-4" />
          <ul className="-mt-2 md:-mt-4 flex flex-wrap items-center">
            {["Tahfiz", "Nursery", "Primary", "Secondary"].map(
              (item, index) => (
                <li
                  key={index}
                  className={`text-sm md:text-base font-medium ${
                    index !== 3
                      ? "mr-4 md:mr-6 pr-4 md:pr-6 border-r-2 border-secondary-gold"
                      : ""
                  }`}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="lg:w-2/5 xl:w-1/2 shrink-0 xl:p-10">
          <CustomVideoPlayer />
        </div>
      </div>
    </section>
  );
};

export default Hero;
