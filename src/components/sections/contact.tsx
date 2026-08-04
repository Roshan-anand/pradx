import { ContactForm } from "@/components/contact-form";
import { FadeUp } from "@/components/fade-up";
import { SITE } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="px-10 py-[120px] max-[900px]:px-6 max-[900px]:py-20"
    >
      <FadeUp>
        <div className="mb-4 text-[11px] tracking-[0.2em] text-label">
          START A PROJECT
        </div>
        <h2 className="mb-3 text-[clamp(32px,4vw,56px)] text-foreground">
          What are you building next?
        </h2>
        <p className="mb-16 text-[15px] text-label">
          Direct communication. Clear scope. Thoughtful creative direction.
        </p>
      </FadeUp>

      <div className="grid grid-cols-[60%_40%] max-[900px]:grid-cols-1 max-[900px]:gap-12">
        <FadeUp>
          <ContactForm />
        </FadeUp>

        <FadeUp className="pl-[60px] max-[900px]:pt-10 max-[900px]:pl-0">
          <div className="mb-10">
            <div className="mb-2 text-[11px] tracking-[0.2em] text-label">
              EMAIL
            </div>
            <a
              href={`mailto:${SITE.email}`}
              className="text-base text-foreground transition-colors duration-300 hover:text-accent"
            >
              {SITE.email}
            </a>
          </div>
          <div className="mb-10">
            <div className="mb-2 text-[11px] tracking-[0.2em] text-label">
              WHATSAPP
            </div>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-accent transition-colors duration-300 hover:text-foreground"
            >
              Prefer to message directly?
            </a>
          </div>
          <div className="mb-10">
            <div className="mb-2 text-[11px] tracking-[0.2em] text-label">
              LOCATION
            </div>
            <div className="text-base text-foreground">{SITE.location}</div>
          </div>
          <div className="my-10 border-t border-border" />
          <p className="text-[13px] leading-[1.6] text-[#555555]">
            PRADXCLUSIVE responds to every serious enquiry. Typical response
            within 24 hours.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
