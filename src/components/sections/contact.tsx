import { SubmitForm } from "@/components/submit-form";
import { SITE } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-intro">
        <span className="eyebrow">Start a project</span>
        <h2>
          What are you
          <br />
          <em>building next?</em>
        </h2>
        <p>Direct communication. Clear scope. Thoughtful creative direction.</p>
        <div className="direct-contact">
          <span>Email</span>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <span>WhatsApp</span>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
            Prefer to message directly?
          </a>
          <span>Location</span>
          <p>{SITE.location}</p>
        </div>
      </div>

      <SubmitForm
        name="project-enquiry"
        className="project-form"
        successTitle="Project brief received."
        successCopy="Thank you. We'll review the brief and contact you with a clear next step."
        submitLabel="Send project brief"
      >
        <label>
          <span>Your name</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" required autoComplete="email" />
        </label>
        <label>
          <span>Brand or company</span>
          <input name="company" required />
        </label>
        <label>
          <span>Industry</span>
          <select name="industry" required defaultValue="">
            <option value="" disabled>
              Choose your industry
            </option>
            <option>FMCG and Consumer Brands</option>
            <option>E-commerce and Retail</option>
            <option>Fashion and Lifestyle</option>
            <option>Real Estate and Interiors</option>
            <option>Education and Institutions</option>
            <option>Healthcare and Wellness</option>
            <option>Hospitality and Food</option>
            <option>Technology and Professional Services</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          <span>Starting point</span>
          <select name="starting-point" required defaultValue="">
            <option value="" disabled>
              Choose a starting point
            </option>
            <option>Brand strategy and identity</option>
            <option>Packaging</option>
            <option>Website or digital experience</option>
            <option>Campaign or launch</option>
            <option>Social presence and management</option>
            <option>Motion or creative production</option>
            <option>Ongoing creative partnership</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="wide">
          <span>Project brief</span>
          <textarea
            name="brief"
            rows={5}
            required
            placeholder="Tell us what you are building, the challenge and your expected timeline."
          />
        </label>
      </SubmitForm>
    </section>
  );
}
