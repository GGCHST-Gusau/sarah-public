import type { Metadata } from "next";
import ContactHero from "@/components/contact/contact-hero";
import GetInTouch from "@/components/contact/get-in-touch";
import ContactInformation from "@/components/contact/contact-information";
import SendMessage from "@/components/contact/send-message";
import FindUs from "@/components/contact/find-us";
import OfficeHours from "@/components/contact/office-hours";
import ContactFaq from "@/components/contact/contact-faq";

export const metadata: Metadata = {
  title: "Contact Us | Sarah Academy",
  description:
    "Contact Sarah Academy in Gusau, Zamfara State. Reach our administrative team for admissions, campus tours, academic inquiries, and student services.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      {/* <GetInTouch /> */}
      <ContactInformation />
      <SendMessage />
      <FindUs />
      <OfficeHours />
      <ContactFaq />
    </>
  );
}
