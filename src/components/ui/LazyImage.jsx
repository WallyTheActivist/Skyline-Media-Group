/**
 * LazyImage — drop-in replacement for <img> with production-ready defaults:
 *
 *  - loading="lazy"    — browser-native lazy loading (defers off-screen images)
 *  - decoding="async"  — decodes off the main thread, prevents jank
 *  - fetchpriority     — caller can set "high" for LCP images (hero), default "auto"
 *  - aspectRatio       — reserves layout space before image loads (prevents CLS)
 *  - object-fit cover  — consistent fill with no layout shift
 *
 * Usage:
 *   <LazyImage src="/hero.webp" alt="Hero" aspectRatio="16/9" />
 *   <LazyImage src="/logo.png"  alt="Logo" priority /> ← LCP image
 */
export default function LazyImage({
  src,
  alt,
  aspectRatio,
  className = "",
  priority = false,
  width,
  height,
  ...props
}) {
  const wrapStyle = aspectRatio ? { aspectRatio } : undefined;

  return (
    <div
      className={`overflow-hidden ${wrapStyle ? "w-full" : ""} ${className}`}
      style={wrapStyle}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        // fetchpriority is the HTML attribute; React uses camelCase
        fetchPriority={priority ? "high" : "auto"}
        className="h-full w-full object-cover"
        {...props}
      />
    </div>
  );
}
