interface PageHeroProps {
  title: string;
  subtitle?: string;
  label?: string;
}

export default function PageHero({ title, subtitle, label }: PageHeroProps) {
  return (
    <section
      className="relative flex items-center min-h-[30vh] sm:min-h-[36vh] md:min-h-[40vh] bg-beige overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(120,129,108,0.08) 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }}
    >
      {/* Soft decorative gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(248,246,241,0.4) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 container mx-auto px-5 sm:px-6 md:px-12 py-14 sm:py-20 md:py-24">
        {label && (
          <p
            className="font-body text-[11px] sm:text-xs tracking-widest uppercase text-olive mb-3 sm:mb-4"
          >
            {label}
          </p>
        )}

        {/* Decorative line */}
        <div
          className="mb-4 sm:mb-6"
          style={{ width: 44, height: 1, backgroundColor: '#78816C' }}
        />

        <h1
          className="font-display font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-olive-dark leading-[1.15] mb-3 sm:mb-4"
          style={{ fontWeight: 300 }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="font-body text-sm sm:text-base text-mocha mt-2 sm:mt-3 max-w-xl leading-relaxed"
            style={{ fontWeight: 300 }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
