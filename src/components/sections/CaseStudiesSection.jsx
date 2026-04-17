import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell";
import Reveal from "../ui/Reveal";

export default function CaseStudiesSection({ content }) {
  return (
    <SectionShell id="case-studies" className="bg-midnight text-white">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-white/65">Case studies</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2.2rem,5.1vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
          {content.title}
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-5 text-lg text-white/70">{content.subtitle}</p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {content.projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative min-h-[360px] overflow-hidden rounded-3xl border border-white/15 bg-[radial-gradient(circle_at_10%_20%,rgba(28,116,217,0.35),rgba(7,26,48,0.94))] p-6 shadow-halo"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/65">{project.domain}</p>
            <h3 className="mt-3 font-display text-3xl font-semibold leading-tight">{project.title}</h3>
            <p className="mt-4 max-w-[30ch] text-white/72">{project.summary}</p>

            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 lg:translate-y-6 lg:opacity-0">
              <p className="text-xs uppercase tracking-[0.2em] text-white/55">Result</p>
              <p className="mt-2 font-display text-2xl font-semibold text-white">{project.result}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
