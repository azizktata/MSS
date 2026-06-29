"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type HeroSlide = {
  img: string;
  alt: string;
  headline: string;
  sub: string;
};

type Stat = { k: string; v: string };

type Props = {
  slides: HeroSlide[];
  stats: readonly Stat[];
  cta1: { href: string; label: string };
  cta2: { href: string; label: string };
  /** Auto-advance interval in ms (0 disables). */
  interval?: number;
};

// v2 hero carousel — crossfading full-bleed slides with a static stat strip.
// Respects prefers-reduced-motion (crossfade only; auto-advance still pauses on interaction).
export default function HeroCarousel({ slides, stats, cta1, cta2, interval = 6000 }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const go = useCallback((next: number) => setIndex((next + count) % count), [count]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  // Auto-advance, paused on hover/focus or when the tab is hidden.
  const pausedRef = useRef(paused);
  pausedRef.current = paused;
  useEffect(() => {
    if (!interval || count <= 1) return;
    const id = window.setInterval(() => {
      if (!pausedRef.current && !document.hidden) {
        setIndex((i) => (i + 1) % count);
      }
    }, interval);
    return () => window.clearInterval(id);
  }, [interval, count]);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
  }

  return (
    <section className="relative">
      <div
        className="hero-carousel relative w-full overflow-hidden"
        style={{ height: "92vh", minHeight: 640, background: "var(--bg-3)" }}
        role="region"
        aria-roledescription="carousel"
        aria-label="MMS highlights"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
        onKeyDown={onKeyDown}
      >
        {/* Slides — stacked, crossfaded via opacity */}
        {slides.map((s, i) => (
          <div
            key={s.img}
            className="hero-slide absolute inset-0"
            data-active={i === index}
            aria-hidden={i !== index}
          >
            <img src={s.img} alt={i === index ? s.alt : ""} className="photo" {...(i === 0 ? {} : { loading: "lazy" })} />
          </div>
        ))}

        <div className="protect-zone absolute inset-x-0 top-0" style={{ height: "78%" }} aria-hidden />
        <div className="protect-bottom absolute inset-x-0 bottom-0" style={{ height: "45%" }} aria-hidden />

        {/* Slide copy — re-keyed so it re-runs the rise animation on change */}
        <div className="hero-copy absolute inset-0 flex items-center" style={{ paddingBottom: "clamp(9rem, 18vh, 13rem)" }}>
          <div className="shell w-full grid lg:grid-cols-12 gap-8">
            <div key={index} className="lg:col-span-8 xl:col-span-7 rise" aria-live="polite">
              <h1 className="display" style={{ color: "oklch(98% 0.01 75)", fontSize: "clamp(2.6rem, 6.2vw, 5rem)", lineHeight: 1.0, textWrap: "balance" }}>
                {slides[index].headline.split("\n").map((line, i) => (
                  <span key={i} style={{ display: "block" }}>{line}</span>
                ))}
              </h1>
              <p className="measure mt-6" style={{ color: "oklch(92% 0.01 75)", fontSize: "1.1rem", lineHeight: 1.55 }}>
                {slides[index].sub}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={cta1.href} className="btn btn-primary">{cta1.label} →</a>
                <a href={cta2.href} className="btn btn-onphoto">{cta2.label}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows — vertically centred on the left and right edges */}
        <button type="button" className="hero-arrow hero-arrow-prev" onClick={prev} aria-label="Previous slide">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button type="button" className="hero-arrow hero-arrow-next" onClick={next} aria-label="Next slide">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>

        {/* Dots — centred just above the stat strip */}
        <div className="hero-dots" role="tablist" aria-label="Choose slide">
          {slides.map((s, i) => (
            <button
              key={s.img}
              type="button"
              role="tab"
              className="hero-dot"
              data-active={i === index}
              aria-selected={i === index}
              aria-label={`Slide ${i + 1} of ${count}`}
              onClick={() => go(i)}
            />
          ))}
        </div>

        {/* Static stat strip */}
        <div className="absolute left-0 right-0 bottom-0" style={{ borderTop: "1px solid oklch(96% 0.01 75 / 0.18)", background: "oklch(18% 0.02 200 / 0.6)", backdropFilter: "blur(10px)" }}>
          <div className="shell grid grid-cols-2 md:grid-cols-4 gap-6" style={{ paddingBlock: "1.1rem" }}>
            {stats.map((s) => (
              <div key={s.k}>
                <div className="eyebrow" style={{ color: "oklch(78% 0.01 75)" }}>{s.k}</div>
                <div className="num display mt-1" style={{ color: "oklch(98% 0.01 75)", fontSize: "1.35rem" }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
