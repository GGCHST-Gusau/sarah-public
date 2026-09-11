const ContactHero = () => {
  return (
    <section className="bg-primary-dark-blue pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 lg:px-8">
        {/* Content */}
        <div className="max-w-2xl">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary-gold">
            Get In Touch
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            We’d Love to Hear From You
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/75 md:text-lg">
            Whether you have questions about admissions, academics, or life at
            our school, our team is ready to provide the information and
            assistance you need.
          </p>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl">
            <img
              src="/images/contact/contact-hero.jpg"
              alt="Students at our school"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-2xl bg-secondary-gold/20" />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
