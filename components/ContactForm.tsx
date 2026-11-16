"use client";

import { useState, type FormEvent } from "react";
import { brand, contact, links } from "@/content/site";

// Free key from https://web3forms.com. It is safe to expose in the browser.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "sending" | "success" | "error";

const field =
  "mt-2 block w-full rounded-lg border border-line bg-bg px-4 py-3 text-base text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const f = contact.form;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // No key configured yet: open the visitor's email app with the message filled in.
    if (!ACCESS_KEY) {
      const bodyText = `${data.message}\n\n${data.name}${data.company ? `, ${data.company}` : ""}\n${data.email}`;
      window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(
        f.subject,
      )}&body=${encodeURIComponent(bodyText)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          access_key: ACCESS_KEY,
          subject: f.subject,
          from_name: brand.name,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error("Submit failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="rounded-2xl bg-surface p-8 font-serif text-2xl leading-snug">
        {f.success}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Hidden field that only bots fill in. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          {f.name}
          <input name="name" type="text" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-medium">
          {f.email}
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>

      <label className="block text-sm font-medium">
        {f.company} <span className="font-normal text-muted">({f.companyHint})</span>
        <input name="company" type="text" autoComplete="organization" className={field} />
      </label>

      <label className="block text-sm font-medium">
        {f.message}
        <textarea
          name="message"
          required
          rows={6}
          placeholder={f.messageHint}
          className={field}
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-13 items-center justify-center rounded-full bg-accent px-7 font-medium text-accent-ink transition-opacity hover:opacity-85 disabled:opacity-60"
      >
        {status === "sending" ? f.sending : f.submit}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm">
          {f.error}{" "}
          <a href={`mailto:${links.email}`} className="underline underline-offset-4">
            {links.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
