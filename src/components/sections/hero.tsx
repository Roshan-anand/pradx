import Link from "next/link";

export function Hero() {
  return (
    <section id="top" className="hero">
      {/* Poster renders instantly as the LCP background while the video boots,
          and doubles as the placeholder before the video is requested. */}
      {/* biome-ignore lint/performance/noImgElement: plain <img> poster — next/image can't serve a video poster */}
      <img
        src="/assets/brand/hero-poster.webp"
        alt=""
        aria-hidden="true"
        width={1080}
        height={1920}
        decoding="async"
        fetchPriority="high"
        className="hero-video"
      />
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/brand/hero-poster.webp"
      >
        <source src="/assets/brand/hero-motion.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay" />
      <div className="hero-side">
        <span>PRADXCLUSIVE</span>
        <span>Creative studio</span>
        <span>India</span>
      </div>
      <div className="hero-content">
        <span className="eyebrow">Independent brand &amp; creative studio</span>
        <h1>
          Brands built to be understood.
          <br />
          <em>Designed to be remembered.</em>
        </h1>
        <p className="hero-lead">
          PRADXCLUSIVE builds brand strategy, identity, packaging, websites,
          campaigns, content and social presence for ambitious businesses.
        </p>
        <p className="hero-support">
          From first positioning to everyday presence, we create the systems
          that help brands communicate with greater clarity, consistency and
          confidence.
        </p>
        <div className="hero-actions">
          <a className="button" href="#contact">
            Start a project
          </a>
          <Link className="button button-ghost" href="/audit">
            Get a free brand audit
          </Link>
        </div>
        <span className="signature">Purpose. Presence. Power.</span>
      </div>
      <a
        className="scroll-cue"
        href="#experience"
        aria-label="Scroll to selected experience"
      >
        <span />
      </a>
    </section>
  );
}
