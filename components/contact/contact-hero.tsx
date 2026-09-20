import { images } from "@/assets/images";
import PageSection from "../shared/page-section";
import { Mail, MapPin, Phone, Sparkles, MessageSquare } from "lucide-react";

const ContactHero = () => {
  return (
    <PageSection className="relative overflow-hidden bg-primary-dark-blue text-white py-12 md:py-20">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 -z-10 h-80 w-80 rounded-full bg-primary-blue/30 blur-[130px]" />
      <div className="absolute bottom-0 left-1/4 -z-10 h-72 w-72 rounded-full bg-secondary-gold/20 blur-[120px]" />

      <div className="relative pt-10 z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-xs">
          <Sparkles className="h-4 w-4 text-secondary-gold" />
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary-gold sm:text-sm">
            Contact Sarah Academy
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-6 text-3xl font-bold leading-snug sm:text-5xl md:text-6xl">
          We’d Love to Hear from You. <br className="hidden sm:inline" />
          Let’s Connect Today.
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base md:text-lg">
          Have questions regarding enrollment, academic programmes, fees, or
          scheduling a campus visit? Our dedicated administrative team in Gusau
          is ready to assist you every step of the way.
        </p>

        {/* Quick Contact Touchpoints */}
        <div className="mt-10 grid w-full gap-4 sm:grid-cols-3">
          <a
            href="tel:08136625135"
            className="flex items-center gap-3.5 rounded-2xl border border-white/15 bg-white/5 p-4 text-left backdrop-blur-xs transition-all hover:border-secondary-gold/50 hover:bg-white/10"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-secondary-gold">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-xs text-white/60">Phone Line</span>
              <span className="block text-sm font-bold text-white">
                0813 662 5135
              </span>
            </div>
          </a>

          <a
            href="mailto:sarah220@gmail.com"
            className="flex items-center gap-3.5 rounded-2xl border border-white/15 bg-white/5 p-4 text-left backdrop-blur-xs transition-all hover:border-secondary-gold/50 hover:bg-white/10"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-secondary-gold">
              <Mail className="h-5 w-5" />
            </div>
            <div className="overflow-hidden">
              <span className="block text-xs text-white/60">Email Desk</span>
              <span className="block truncate text-sm font-bold text-white">
                sarah220@gmail.com
              </span>
            </div>
          </a>

          <a
            href="#find-us"
            className="flex items-center gap-3.5 rounded-2xl border border-white/15 bg-white/5 p-4 text-left backdrop-blur-xs transition-all hover:border-secondary-gold/50 hover:bg-white/10"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-secondary-gold">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="overflow-hidden">
              <span className="block text-xs text-white/60">
                Campus Location
              </span>
              <span className="block truncate text-sm font-bold text-white">
                Gusau, Zamfara State
              </span>
            </div>
          </a>
        </div>
      </div>
    </PageSection>
  );
};

export default ContactHero;
