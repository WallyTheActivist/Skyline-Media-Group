export default function SectionShell({ id, className = "", children }) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`.trim()}>
      <div className="mx-auto w-[min(1200px,92vw)]">{children}</div>
    </section>
  );
}
