export function Hero() {
  return (
    <section id="top" className="relative h-screen overflow-hidden">
      {/* Poster renders instantly as the LCP background while the video boots,
          and doubles as the placeholder before the video is requested. */}
      {/* biome-ignore lint/performance/noImgElement: plain <img> poster — next/image can't serve a video poster */}
      <img
        src="/assets/pradxclusive-hero-poster.webp"
        alt=""
        aria-hidden="true"
        width={1080}
        height={1920}
        decoding="async"
        fetchPriority="high"
        className="absolute top-0 left-0 h-full w-full bg-background object-cover"
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/assets/pradxclusive-hero-poster.webp"
        className="absolute top-0 left-0 h-full w-full bg-background object-cover"
      >
        <source src="/video/pradxclusive-hero-mobile.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.7)_0%,rgba(10,10,10,0.35)_55%,rgba(10,10,10,0.75)_100%)]" />
      <div className="absolute top-28 left-10 z-[2] text-[11px] leading-[1.8] tracking-[0.2em] text-label max-[600px]:left-6">
        PRADXCLUSIVE
        <br />
        CREATIVE STUDIO
        <br />
        INDIA
      </div>
      <div className="relative z-[2] flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-6 max-w-[800px] text-[clamp(40px,6vw,80px)] leading-[1.1] text-foreground">
          Nothing ordinary leaves this house.
        </h1>
        <p className="mb-10 max-w-[480px] font-sans text-base font-medium leading-[1.6] text-label">
          Brand identity, websites, social content and campaigns — built under
          one connected creative direction.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#contact"
            className="inline-block rounded-sm bg-accent px-8 py-3.5 font-sans text-sm font-semibold text-white transition-colors duration-300 hover:bg-dark-green"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="py-3.5 font-sans text-sm text-foreground transition-colors duration-300 hover:text-accent hover:underline"
          >
            View selected work &darr;
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 h-10 w-px -translate-x-1/2 animate-pulse bg-white opacity-40" />
    </section>
  );
}
