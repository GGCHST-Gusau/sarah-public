import { images } from "@/assets/images";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import Location from "./location";
import PrimaryButton from "../shared/primary-button";
import { FaLocationDot, FaLocationPin } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Clock10 } from "lucide-react";

const Contact = () => {
  const { contact_bg } = images;
  return (
    <PageSection
      className="bg-primary-blue bg-cover bg-center bg-no-repeat relative text-white"
      style={{ backgroundImage: `url(${contact_bg.src})` }}
    >
      <div className="absolute inset-0 bg-linear-to-b to-[rgba(0,0,0, 0%)] from-[#191A19]" />
      <SectionTitle
        title="GET IN TOUCH"
        label="We’re Here to Help"
        className="text-center z-10"
      />
      <div className="z-10 flex gap-10 max-lg:flex-col md:max-xl:gap-6">
        <div className="flex flex-col rounded-2xl bg-primary-dark-blue p-5 md:p-10 lg:w-2/3">
          <p className="mb-2 text-2xl font-medium md:mb-3">Location</p>
          <p className="mb-5">
            Follow the map to reach our school effortlessly
          </p>
          <Location />
        </div>
        <div className="flex flex-1 flex-col justify-between rounded-2xl bg-primary-dark-blue p-5 md:p-10">
          <p className="text-2xl font-medium">Contact Info</p>
          <div className="">
            Do You Have Any Question, Just Contact Us To Get Help!
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="text-xl flex items-center gap-2">
                <FaLocationDot />
                Visit Us
              </div>
              <p className="text-sm">
                Zannah Road, Gada biyu. Gusau, Zamfara State
              </p>
            </div>
            <div className="space-y-1">
              <div className="text-xl flex items-center gap-2">
                <RiCustomerService2Fill />
                Contact Us
              </div>

              <div className="">
                <div className="flex gap-2 text-sm">
                  <p>Call Us:</p>
                  <a href="tel:(+234) 80-2469-7246">(+234) 80-2469-7246</a>
                </div>
                <div className="flex gap-2 text-sm">
                  <p>Email:</p>
                  <a href="mailto:contact@jhontraktor.co">contact@sarah.co</a>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xl flex items-center gap-2">
                <Clock10 /> Opening Hours
              </div>

              <div className="">
                <p className="text-sm">Monday - Friday</p>
                <p className="text-sm">09:00 AM - 06:00 PM</p>
              </div>
            </div>
          </div>
          <PrimaryButton>Contact Us</PrimaryButton>
        </div>
      </div>
    </PageSection>
  );
};
export default Contact;
