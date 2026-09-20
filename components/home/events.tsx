"use client";
import { useState } from "react";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { EVENTS } from "@/constants/events";
import Image from "next/image";
import { Calendar1Icon, ChevronLeft, ChevronRight } from "lucide-react";
import { IoLocation } from "react-icons/io5";
import CountdownTimer from "./countdown-timer";
import PrimaryButton from "../shared/primary-button";

const Events = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEvent = EVENTS[activeIndex];

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-Us", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === EVENTS.length - 1;
  const handlePrev = () => {
    if (isFirst) return;
    setActiveIndex(activeIndex - 1);
  };

  const handleNext = () => {
    if (isLast) return;
    setActiveIndex(activeIndex + 1);
  };

  return (
    <PageSection className="">
      <SectionTitle
        title="Upcoming Events"
        label="Moments Worth Looking Forward To"
        className="text-center"
      />
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        <div className="rounded-lg overflow-hidden object-center relative">
          <Image
            src={activeEvent.image}
            alt={activeEvent.title}
            className="hover:scale-105 duration-500 transition-transform w-full h-full max-h-150"
          />
          <div className="lg:hidden absolute inset-0 bg-linear-to-t from-black to-transparent" />
          <div className="lg:hidden">
            <p className="text-primary-blue bg-white py-2 px-6 rounded-full font-bold absolute top-1">
              <span className="text-2xl">{activeIndex + 1}</span>{" "}
              <span className="text-lg">
                <span className="italic">of</span> {EVENTS.length}
              </span>
            </p>
            <div className="flex flex-col gap-1 absolute bottom-0 text-white p-2">
              <h3 className="text-2xl font-medium">{activeEvent.title}</h3>
              <p>{activeEvent.description}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6">
          <div className="max-lg:hidden">
            <p className="text-primary-blue font-bold">
              <span className="text-5xl">{activeIndex + 1}</span>{" "}
              <span className="text-3xl">
                <span className="italic">of</span> {EVENTS.length}
              </span>
            </p>
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-medium">{activeEvent.title}</h3>
              <p>{activeEvent.description}</p>
            </div>
          </div>
          <div className="flex max-lg:flex-col gap-2">
            <div className="w-full flex flex-col gap-2 items-center bg-primary-blue text-white p-4 rounded-lg">
              <Calendar1Icon
                size={32}
                className="bg-white text-secondary-gold p-1 rounded-lg shrink-0"
              />
              <p className="text-nowrap font-medium text-lg">
                {formatDate(activeEvent.date)}
              </p>
            </div>
            <div className="w-full flex flex-col gap-2 items-center bg-primary-blue text-white p-4 rounded-lg">
              <IoLocation
                size={32}
                className="bg-white text-secondary-gold p-1 rounded-lg shrink-0"
              />
              <p className="text-nowrap font-medium text-lg">
                {activeEvent.venue}
              </p>
            </div>
          </div>
          <div className="flex max-lg:flex-col lg:items-center lg:justify-between gap-2 bg-primary-blue/10 p-4 rounded-lg">
            <p className="text-3xl uppercase text-secondary-gold font-bold">
              Time left:
            </p>
            <CountdownTimer targetDate={activeEvent.date} />
          </div>
          <div className="flex items-center justify-between md:justify-end gap-4 mt-auto">
            <PrimaryButton onClick={handlePrev} disabled={isFirst}>
              <div className="flex items-center gap-2">
                <ChevronLeft />
                <span className="max-sm:hidden">Previous</span>
              </div>
            </PrimaryButton>
            <div className="flex items-center gap-2">
              {Array.from({ length: EVENTS.length }).map((_, i) => (
                <div
                  key={i}
                  className={`size-3 rounded-full border border-primary-blue ${
                    i === activeIndex ? "bg-primary-blue" : ""
                  }`}
                ></div>
              ))}
            </div>
            <PrimaryButton onClick={handleNext} disabled={isLast}>
              <div className="flex items-center gap-2">
                <span className="max-sm:hidden">Next</span>
                <ChevronRight />
              </div>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Events;
