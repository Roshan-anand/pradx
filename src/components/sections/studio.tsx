import { FadeUp } from "@/components/fade-up";

export function Studio() {
  return (
    <section id="studio" className="studio-section">
      <FadeUp>
        <div className="section-heading">
          <span className="eyebrow">The studio</span>
          <h2>Founder-led. Built for the work.</h2>
        </div>
      </FadeUp>

      <div className="studio-grid">
        <FadeUp className="studio-copy">
          <blockquote>
            “I grew up acting in films, surrounded by lights, cameras and
            storytelling. That early exposure shaped how I understand emotion,
            visuals and audience connection. Five years in Fine Arts
            strengthened my creative foundation, while a Master’s in UI/UX
            Design taught me to design around people and experience. After
            working as a Creative Lead, I founded PRADXCLUSIVE to bring all of
            that together.”
          </blockquote>
          <div className="founder-signoff">
            <strong>PRADYUMNA M.</strong>
            <span>Founder &amp; Creative Director, PRADXCLUSIVE</span>
          </div>
          <p>Based in India. Available for projects worldwide.</p>
        </FadeUp>
      </div>

      <div className="studio-values">
        <article>
          <span>01</span>
          <h3>Direct creative leadership</h3>
          <p>Founder-led strategy, design and creative direction.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Specialist execution</h3>
          <p>Trusted collaborators join where their expertise adds value.</p>
        </article>
        <article>
          <span>03</span>
          <h3>One connected system</h3>
          <p>Identity, campaigns, content and digital remain consistent.</p>
        </article>
      </div>
    </section>
  );
}
