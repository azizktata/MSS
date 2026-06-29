"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { VARIANTS } from "@/lib/data";

type NavItem = { href: string; label: string };

// Simple geometric mark: a faceted "M" / mineral prism in a square.
function Logo() {
  return (
    <span className="nav-logo" aria-label="Mediterranean Mining Solutions">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
        <rect x="0.6" y="0.6" width="24.8" height="24.8" rx="1.6" stroke="currentColor" strokeWidth="1.2" />
        {/* Outer legs of the M in ink */}
        <path d="M5 19 L9.5 7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" fill="none" />
        <path d="M16.5 7 L21 19" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" fill="none" />
        {/* Inner V at the top in terracotta accent */}
        <path d="M9.5 7 L13 15 L16.5 7" stroke="var(--accent)" strokeWidth="1.9" strokeLinejoin="round" strokeLinecap="round" fill="none" />
      </svg>
      <span className="nav-logo-text">
        MMS<span className="nav-logo-sub">/ SILICA</span>
      </span>
    </span>
  );
}

export default function SiteNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sitenav" data-scrolled={scrolled} data-open={open}>
      <div className="sitenav-inner shell">
        <Link href="#top" className="nav-logo-link" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="nav-links" aria-label="Page sections">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="nav-link" onClick={() => setOpen(false)}>
              {it.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          {/* variant switcher kept compact */}
          <div className="nav-variants" role="navigation" aria-label="Design variant">
            {VARIANTS.map((v) => (
              <Link key={v.id} href={v.path} className="nav-variant" data-active={pathname === v.path}>
                /{v.id}
              </Link>
            ))}
          </div>
          <a href="#rfq" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>Request a quote</a>
          <button
            className="nav-burger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <div className="nav-drawer" hidden={!open}>
        {items.map((it) => (
          <a key={it.href} href={it.href} className="nav-drawer-link" onClick={() => setOpen(false)}>
            {it.label}
          </a>
        ))}
        <a href="#rfq" className="btn btn-primary" style={{ marginTop: "0.5rem" }} onClick={() => setOpen(false)}>Request a quote</a>
      </div>
    </header>
  );
}
