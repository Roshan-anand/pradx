"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

interface SubmitFormProps {
  name: string;
  className?: string;
  successTitle: string;
  successCopy: string;
  submitLabel: string;
  children: React.ReactNode;
}

/**
 * Design-faithful Netlify-style form that submits to the existing
 * /api/contact route (Google Sheets + Postgres fallback) and renders an
 * in-page success state with a WhatsApp continuation link.
 */
export function SubmitForm({
  name,
  className = "",
  successTitle,
  successCopy,
  submitLabel,
  children,
}: SubmitFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <span className="eyebrow">{successTitle}</span>
        <h3>{successCopy}</h3>
        <a
          className="text-link"
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          Continue on WhatsApp →
        </a>
      </div>
    );
  }

  return (
    <form className={className} name={name} onSubmit={handleSubmit}>
      <input
        type="text"
        name="bot-field"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      {children}
      <button
        className="button submit-button"
        disabled={status === "sending"}
        type="submit"
      >
        {status === "sending" ? "Sending…" : submitLabel}
      </button>
      {status === "error" && (
        <p className="form-error" role="alert">
          Something went wrong. Please try again or continue on WhatsApp.
        </p>
      )}
    </form>
  );
}
