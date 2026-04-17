const iconMap = {
  website: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path d="M3 5h18v14H3z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9h18" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6" cy="7" r="0.8" fill="currentColor" />
      <circle cx="8.8" cy="7" r="0.8" fill="currentColor" />
    </svg>
  ),
  ads: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path
        d="M4 10v4h3l3 4h2l-1.2-4H14l6 2V8l-6 2H4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  social: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <circle cx="7" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="17" r="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 11l6-3M9 13l6 3" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
};

export default function IconBadge({ icon }) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-azure/25 bg-azure/10 text-azure">
      {iconMap[icon] ?? iconMap.website}
    </span>
  );
}
