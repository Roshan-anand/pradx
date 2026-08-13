import Image from "next/image";
import { experience } from "@/lib/projects";

export function ExperienceMarquee() {
  const logos = [...experience, ...experience];
  return (
    <section className="experience" aria-labelledby="experience-title">
      <div className="experience-intro">
        <span className="eyebrow" id="experience-title">
          Selected experience
        </span>
        <p>
          Brands and organisations represented in the supplied studio
          experience archive.
        </p>
      </div>
      <div className="logo-marquee">
        <div className="logo-track">
          {logos.map(([name, src], index) => (
            <div className="experience-logo" key={`${name}-${index}`}>
              <Image
                src={src}
                alt={index < experience.length ? name : ""}
                aria-hidden={index >= experience.length}
                width={420}
                height={110}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
