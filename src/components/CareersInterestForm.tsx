"use client";

import { useState } from "react";

const AREAS_OF_EXPERIENCE = [
  "Trades & installation",
  "Operations",
  "Project coordination",
  "Sales",
  "Customer service",
  "Technical services",
  "Other",
];

const STATES = [
  "Victoria",
  "New South Wales",
  "Queensland",
  "Western Australia",
  "South Australia",
  "Tasmania",
  "Australian Capital Territory",
  "Northern Territory",
];

const labelClass =
  "text-[10px] font-bold uppercase tracking-[0.12em] text-ink/40";
const fieldClass =
  "border border-ink/15 px-3.5 py-2.5 text-[14px] text-ink focus:outline-none focus:border-brand-green-dark focus-visible:ring-2 focus-visible:ring-brand-green";
const selectClass = `${fieldClass} bg-surface`;

// TODO: no backend is wired up yet. Submissions (including the CV upload) are
// not sent anywhere until a route handler / form service is connected, so the
// form tells applicants to email their CV instead.
const CAREERS_EMAIL = "careers@consolidatedenergy.com.au";

export default function CareersInterestForm() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-surface p-7 sm:p-9 border border-ink/10">
      <p className="text-brand-green-dark text-[11px] font-bold uppercase tracking-[0.15em] mb-6">
        Register Your Interest
      </p>

      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="careers-name" className={labelClass}>
            Name
          </label>
          <input
            id="careers-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={fieldClass}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="careers-email" className={labelClass}>
              Email
            </label>
            <input
              id="careers-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={fieldClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="careers-phone" className={labelClass}>
              Phone
            </label>
            <input
              id="careers-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              className={fieldClass}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="careers-area" className={labelClass}>
              Area of Experience
            </label>
            <select
              id="careers-area"
              name="area"
              required
              defaultValue=""
              className={selectClass}
            >
              <option value="" disabled>
                Select an area
              </option>
              {AREAS_OF_EXPERIENCE.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="careers-state" className={labelClass}>
              State
            </label>
            <select
              id="careers-state"
              name="state"
              required
              defaultValue=""
              className={selectClass}
            >
              <option value="" disabled>
                Select a state
              </option>
              {STATES.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="careers-message" className={labelClass}>
            Tell Us About Yourself
          </label>
          <textarea
            id="careers-message"
            name="message"
            rows={4}
            className={`${fieldClass} resize-none`}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="careers-resume" className={labelClass}>
            CV / Resume
          </label>
          <div className="relative border border-dashed border-ink/25 px-4 py-5 text-center transition-colors hover:border-brand-green-dark focus-within:border-brand-green-dark focus-within:ring-2 focus-within:ring-brand-green focus-within:ring-offset-2 focus-within:ring-offset-surface">
            <input
              id="careers-resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              required
              aria-describedby="careers-resume-hint"
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            />
            <span className="inline-flex items-center justify-center rounded-sm border border-ink/15 px-4 py-2 text-[12px] font-bold uppercase tracking-wide text-ink">
              {fileName ? "Change File" : "Upload CV / Resume"}
            </span>
            <p
              id="careers-resume-hint"
              className="mt-2.5 text-[12px] text-ink/50 break-all"
            >
              {fileName ?? "PDF, DOC or DOCX"}
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="mt-1 bg-ink text-surface text-[12px] font-bold uppercase tracking-wide py-3.5 hover:bg-brand-green-dark hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          Register Your Interest
        </button>

        <p aria-live="polite" className="text-[13px] leading-relaxed text-ink/70">
          {sent && (
            <>
              Online applications aren&apos;t available yet. Please email your
              CV/resume and details to{" "}
              <a
                href={`mailto:${CAREERS_EMAIL}`}
                className="font-semibold text-brand-green-dark underline underline-offset-2"
              >
                {CAREERS_EMAIL}
              </a>
              .
            </>
          )}
        </p>
      </form>
    </div>
  );
}
