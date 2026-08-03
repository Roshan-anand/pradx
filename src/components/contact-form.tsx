"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

const INDUSTRIES = [
  "FMCG and Consumer Brands",
  "E-commerce and Retail",
  "Fashion and Lifestyle",
  "Real Estate and Interiors",
  "Education and Institutions",
  "Healthcare and Wellness",
  "Hospitality and Food",
  "Technology and Professional Services",
  "Other",
];

const SERVICES = [
  "Brand strategy and identity",
  "Campaign or launch",
  "Social content system",
  "Motion film or AI production",
  "Website or digital experience",
  "Packaging or sector campaign",
  "Ongoing creative partnership",
  "Not sure yet",
];

const BUDGETS = [
  "Prefer not to say",
  "Under ₹1 lakh",
  "₹1–3 lakh",
  "₹3–7 lakh",
  "₹7 lakh and above",
];

const fieldClass =
  "mb-4 block w-full rounded border border-border bg-card px-4 py-3.5 font-sans text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-[#555555] focus:border-accent";

const selectClass =
  "mb-4 block w-full rounded border border-border bg-card px-4 py-3.5 font-sans text-sm outline-none transition-colors duration-300 focus:border-accent";

type Status = "idle" | "submitting" | "success" | "error";
type FieldValues = Record<string, string>;

function SelectField({
  name,
  value,
  onChange,
  required,
  placeholder,
  options,
}: {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  required?: boolean;
  placeholder: string;
  options: readonly string[];
}) {
  const isPlaceholder = value === "";
  return (
    <select
      name={name}
      required={required}
      value={value}
      onChange={(event) => onChange(name, event.target.value)}
      className={`${selectClass} ${
        isPlaceholder ? "text-[#555555]" : "text-foreground"
      }`}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState<FieldValues>({});

  function handleFieldChange(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setValues({});
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="bot-field"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <input
        type="text"
        name="name"
        required
        placeholder="Your name"
        className={fieldClass}
      />
      <input
        type="email"
        name="email"
        required
        placeholder="your@email.com"
        className={fieldClass}
      />
      <input
        type="text"
        name="company"
        placeholder="Brand or company name"
        className={fieldClass}
      />
      <SelectField
        name="industry"
        required
        value={values.industry ?? ""}
        onChange={handleFieldChange}
        placeholder="Choose your industry"
        options={INDUSTRIES}
      />
      <SelectField
        name="service"
        required
        value={values.service ?? ""}
        onChange={handleFieldChange}
        placeholder="Choose a starting point"
        options={SERVICES}
      />
      <SelectField
        name="budget"
        value={values.budget ?? ""}
        onChange={handleFieldChange}
        placeholder="choose your budget range"
        options={BUDGETS}
      />
      <textarea
        name="brief"
        rows={5}
        required
        placeholder="Tell us what you are building, the challenge you are solving, and your expected timeline."
        className={fieldClass}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="block w-full rounded-sm bg-accent py-4 font-sans text-sm font-semibold tracking-[0.05em] text-white transition-colors duration-300 hover:bg-dark-green disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send project brief"}
      </button>
      {status === "success" && (
        <p className="mt-4 text-sm text-accent">
          Thank you — your brief has been received. We respond to every serious
          enquiry within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-destructive">
          Something went wrong — please email {SITE.email} directly.
        </p>
      )}
    </form>
  );
}
