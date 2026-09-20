import type { Metadata } from "next";
import NewsEventsHero from "@/components/news-events/news-events-hero";
import FeaturedNews from "@/components/news-events/featured-news";
import NewsSection from "@/components/news-events/news-section";
import UpcomingEvents from "@/components/news-events/upcoming-events";
import PastHighlights from "@/components/news-events/past-highlights";
import NewsletterSubscribe from "@/components/news-events/newsletter-subscribe";

export const metadata: Metadata = {
  title: "News & Events | Sarah Academy",
  description:
    "Explore the latest news, student achievements, termly milestones, and upcoming school events at Sarah Academy.",
};

export default function NewsEventsPage() {
  return (
    <>
      <NewsEventsHero />
      <FeaturedNews />
      <NewsSection />
      <UpcomingEvents />
      <PastHighlights />
      <NewsletterSubscribe />
    </>
  );
}
