import { useState } from "react";
import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";

const INPUT_CLS =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-azure focus:ring-2 focus:ring-azure/20 placeholder:text-ink/35";

const SOCIAL_PROOF = [
  { value: "+120%", label: "Avg. conversion lift" },
  { value: "48 hrs", label: "Audit turnaround" },
  { value: "100%", label: "Free, no commitment" },
];

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <SectionShell id="contact-form" className="bg-white">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr]">

        {/* ── Left: copy + social proof ── */}
        <div>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-azure">
              Free strategy session
            </p>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,3.1rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-navy">
              Get your free growth strategy — no pitch, just clarity.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 text-base leading-relaxed text-ink/60">
              Tell us your business type. We'll review your current setup and send you a
              specific, actionable audit within 48 hours.
            </p>
          </Reveal>

          {/* Social proof stats */}
          <Reveal delay={0.2}>
            <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl border border-ink/8 bg-mist/50 px-5 py-5">
              {SOCIAL_PROOF.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-navy">{s.value}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-ink/50">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Contact info */}
          <Reveal delay={0.26}>
            <div className="mt-7 space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-azure/20 bg-azure/8 text-azure">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M3 8l9 6 9-6M3 8v10h18V8" />
                  </svg>
                </span>
                <span className="text-sm text-ink/60">skylinemediagroup01@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-azure/20 bg-azure/8 text-azure">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </span>
                <span className="text-sm text-ink/60">Gauteng, Pretoria — responds within 4 hours</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Right: form ── */}
        <Reveal delay={0.1}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center rounded-3xl border border-ink/10 bg-mist/40 px-10 py-16 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 18 }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-azure/15 text-azure"
              >
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-navy">Request received.</h3>
              <p className="mt-2 text-ink/60">
                Your audit is in the queue. Expect a detailed breakdown within 48 hours.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-3xl border border-ink/10 bg-mist/30 p-7 shadow-soft md:p-9"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">
                Step 1 of 1 — takes 30 seconds
              </p>

              {/* Name */}
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-navy">Your name</span>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  className={INPUT_CLS}
                  placeholder="Jane Smith"
                />
              </label>

              {/* Email */}
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-navy">Work email</span>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  className={INPUT_CLS}
                  placeholder="jane@company.com"
                />
              </label>

              {/* Business type */}
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-navy">Business type</span>
                <select required className={INPUT_CLS}>
                  <option value="">Select your business type…</option>
                  <option value="ecommerce">Ecommerce / DTC</option>
                  <option value="saas">SaaS / Software</option>
                  <option value="agency">Agency / Consulting</option>
                  <option value="local">Local / Service Business</option>
                  <option value="healthcare">Healthcare / Clinic</option>
                  <option value="finance">Finance / Professional Services</option>
                  <option value="other">Other</option>
                </select>
              </label>

              {/* Submit */}
              <div className="pt-1">
                <Button type="submit" variant="primary" motionEnabled={false} className="w-full justify-center">
                  Send My Request →
                </Button>
                <p className="mt-3 text-center text-[11px] text-ink/35">
                  No spam. No sales pitch. Just a clear, specific growth plan for your business.
                </p>
              </div>
            </form>
          )}
        </Reveal>

      </div>
    </SectionShell>
  );
}
