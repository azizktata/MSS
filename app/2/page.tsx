import SiteNav from "@/components/SiteNav";
import RfqForm from "@/components/RfqForm";
import HeroCarousel, { type HeroSlide } from "@/components/HeroCarousel";
import { CHEMICAL, SIEVE, APPLICATIONS, COMPLIANCE, COMPANY, IMG, HERO_STATS } from "@/lib/data";

const NAV = [
  { href: "#material", label: "Material" },
  { href: "#chemistry", label: "Chemistry" },
  { href: "#applications", label: "Applications" },
  { href: "#process", label: "Process" },
  { href: "#why", label: "Why MMS" },
];

// Plain-language reasons to choose MMS — same three points across all variants.
const REASONS = [
  { n: "01", t: "Supply you can count on", d: "We keep material in stock and ship on the date we promise — no surprises, no waiting." },
  { n: "02", t: "Quality you can check", d: "Every batch is tested before it leaves. You get the paperwork that proves it, every time." },
  { n: "03", t: "People who pick up", d: "Talk to specialists who know your industry — quick answers from real people, not a call centre." },
];

// Hero carousel — warm furnace/molten-glass slides, all one aesthetic.
const HERO_SLIDES: HeroSlide[] = [
  {
    img: IMG.glassFurnace,
    alt: "Molten glass glowing amber on a working rod inside an industrial furnace, the high-purity silica feedstock at melt temperature.",
    headline: "The silica behind\nclearer, stronger glass.",
    sub: "MMS supplies 99.65% SiO₂ sand with iron oxide held below 0.012% — the consistency a float line, container plant or foundry needs, lot after lot, backed by an auditable Certificate of Analysis.",
  },
  {
    img: IMG.glassMelt,
    alt: "A glassworker drawing a glowing gather of molten glass from the furnace in a dark workshop.",
    headline: "Feedstock that melts\npredictably, batch after batch.",
    sub: "A tight grain band and ultra-low iron mean a stable melt, true colour and fewer rejects — the difference between a good pour and a scrapped one.",
  },
  {
    img: IMG.glassJars,
    alt: "Rows of clear glass vessels on a production line, the high-clarity output of high-purity silica.",
    headline: "From a single seam\nto your furnace.",
    sub: "We work dedicated Mediterranean deposits and grade on site, so the material that reaches the melt matches the assay you signed off — every shipment.",
  },
];

const HERO_CTAS = {
  cta1: { href: "#rfq", label: "Request a quote" },
  cta2: { href: "#chemistry", label: "See the chemistry" },
};

export default function V2() {
  return (
    <main className="mss v2" id="top">
      <SiteNav items={NAV} />

      {/* HERO — crossfading furnace/glass carousel + static stat strip */}
      <HeroCarousel slides={HERO_SLIDES} stats={HERO_STATS} cta1={HERO_CTAS.cta1} cta2={HERO_CTAS.cta2} />

      {/* I. THE MATERIAL — origin + reused v1 imagery */}
      <section id="material" className="section-pad">
        <div className="shell grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="eyebrow">I · The Material</div>
            <h2 className="display mt-4" style={{ fontSize: "clamp(1.9rem, 3vw, 2.7rem)" }}>
              From a single seam to a single spec.
            </h2>
            <p className="measure mt-5" style={{ color: "var(--ink-soft)", fontSize: "1rem", lineHeight: 1.6 }}>
              MMS works dedicated high-purity deposits in the Mediterranean basin, processing and grading on site so the material that reaches your furnace matches the assay you signed off — every shipment.
            </p>
            <div className="grid grid-cols-3 gap-px mt-8" style={{ background: "var(--line)", border: "1px solid var(--line)" }}>
              {[["99.65%", "SiO₂"], ["0.012%", "Fe₂O₃ max"], ["< 1.3", "Cᵤ"]].map(([v, k]) => (
                <div key={k} style={{ background: "var(--bg)", padding: "1rem" }}>
                  <div className="num display" style={{ fontSize: "1.4rem", color: "var(--accent)" }}>{v}</div>
                  <div className="num" style={{ fontSize: "0.7rem", color: "var(--muted)" }}>{k}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-3">
            <div className="photo-frame photo-grain photo-hover" style={{ aspectRatio: "3 / 4", border: "1px solid var(--line)" }}>
              <img src={IMG.conveyor} alt="Mechanised sorting conveyor grading high-purity silica sand at an open processing pit." className="photo" loading="lazy" />
            </div>
            <div className="grid gap-3">
              <div className="photo-frame photo-grain photo-hover" style={{ aspectRatio: "4 / 3", border: "1px solid var(--line)" }}>
                <img src={IMG.stockpileRig} alt="Graded silica sand stockpile beside a steel conveyor rig at the processing yard." className="photo" loading="lazy" />
              </div>
              <div className="photo-frame photo-grain photo-hover" style={{ aspectRatio: "4 / 3", border: "1px solid var(--line)" }}>
                <img src={IMG.sandMacro} alt="Macro photograph of high-purity silica sand grains under hard studio light." className="photo" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHEMISTRY — ported from v3, faceless lab photos */}
      <section id="chemistry" className="section-pad" style={{ background: "var(--bg-2)" }}>
        <div className="shell grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow">II · The Chemistry</div>
            <h2 className="display mt-4" style={{ fontSize: "clamp(1.9rem, 3vw, 2.7rem)" }}>
              Verified by spectrometry, lot after lot.
            </h2>
            <p className="measure mt-5" style={{ color: "var(--ink-soft)", lineHeight: 1.6 }}>
              Each consignment is fingerprinted by XRF and ICP before it leaves origin. The numbers don&apos;t drift — and they travel with the material.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-8">
              <div className="photo-frame photo-grain photo-hover" style={{ aspectRatio: "1 / 1", border: "1px solid var(--line)" }}>
                <img src={IMG.labTube} alt="Gloved hand holding a test tube of prepared sample during ICP analysis." className="photo" loading="lazy" />
              </div>
              <div className="photo-frame photo-grain photo-hover" style={{ aspectRatio: "1 / 1", border: "1px solid var(--line)" }}>
                <img src={IMG.beakers} alt="Clean laboratory glassware and a pipette set up for silica purity verification." className="photo" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div style={{ background: "var(--bg)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "clamp(1.25rem, 2.5vw, 2rem)" }}>
              <div className="eyebrow mb-4">Chemical composition · certified assay</div>
              <div className="scroll-x">
                <table className="spec">
                  <thead><tr><th>Oxide</th><th>Value</th><th>Unit</th><th>Validation</th></tr></thead>
                  <tbody>
                    {CHEMICAL.map((r) => (
                      <tr key={r.k}>
                        <td className="v">{r.k}</td><td className="v">{r.v}</td><td className="k">{r.unit}</td><td className="k">{r.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="eyebrow mt-8 mb-4">Sieve profile · mesh matrix</div>
              <div className="scroll-x">
                <table className="spec">
                  <tbody>
                    {SIEVE.map((r) => (
                      <tr key={r.k}><td className="k">{r.k}</td><td className="v">{r.v}</td><td className="k">{r.unit}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS — DARK photo-bg band with CTA (forge coals) */}
      <section id="process" className="relative" style={{ background: "var(--bg-3)" }}>
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <img src={IMG.forgeCoals} alt="" className="photo" style={{ opacity: 0.35 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, oklch(18% 0.02 200 / 0.92) 0%, oklch(18% 0.02 200 / 0.55) 100%)" }} />
        </div>
        <div className="shell relative section-pad">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="eyebrow" style={{ color: "oklch(82% 0.06 60)" }}>III · The Process</div>
              <h2 className="display mt-4" style={{ color: "oklch(98% 0.01 75)", fontSize: "clamp(2rem, 3.4vw, 3rem)" }}>
                Washed, dried, graded <br/> controlled end to end.
              </h2>
              <p className="measure mt-5" style={{ color: "oklch(88% 0.01 75)", lineHeight: 1.6 }}>
                Attrition scrubbing strips iron-bearing coatings; classification holds the grain band; every batch is sampled to the COA. The result is feedstock that melts predictably and colours consistently.
              </p>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[["01", "Wash & scrub"], ["02", "Dry & classify"], ["03", "Grade to band"], ["04", "Sample to COA"]].map(([n, l]) => (
                <div key={n} style={{ border: "1px solid oklch(96% 0.01 75 / 0.18)", borderRadius: "var(--radius)", padding: "1rem 1.1rem", background: "oklch(22% 0.02 200 / 0.4)" }}>
                  <div className="num display" style={{ fontSize: "1.5rem", color: "var(--accent-2)" }}>{n}</div>
                  <div className="num mt-1" style={{ fontSize: "0.82rem", color: "oklch(92% 0.01 75)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#rfq" className="btn btn-primary">Request a sample assay →</a>
            <a href="#applications" className="btn btn-onphoto">Browse grades</a>
          </div>
        </div>
      </section>

      {/* APPLICATIONS — glass-led grid */}
      <section id="applications" className="section-pad">
        <div className="shell">
          <div className="eyebrow">IV · Applications</div>
          <h2 className="display mt-4" style={{ fontSize: "clamp(1.9rem, 3vw, 2.7rem)", maxWidth: "18ch" }}>
            One source of truth. Four certified grades.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "var(--line)" }}>
            {APPLICATIONS.map((a) => (
              <article key={a.code} className="photo-hover" style={{ background: "var(--bg)" }}>
                <div className="photo-frame photo-grain" style={{ aspectRatio: "5 / 4" }}>
                  <img src={a.img} alt={a.alt} className="photo" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="eyebrow">{a.industry}</div>
                  <div className="display mt-2" style={{ fontSize: "1.5rem" }}>{a.code}</div>
                  <div className="num mt-3" style={{ fontSize: "0.78rem", color: "var(--muted)" }}>{a.spec}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GLASS SHOWCASE — full-bleed photo band, green glass */}
      <section className="relative" style={{ minHeight: 420 }}>
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <img src={IMG.stockpileRig} alt="" className="photo" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, oklch(18% 0.02 200 / 0.9) 0%, oklch(18% 0.02 200 / 0.3) 70%, transparent 100%)" }} />
        </div>
        <div className="shell relative section-pad flex">
          <div className="max-w-xl">
            <div className="eyebrow" style={{ color: "oklch(82% 0.01 75)" }}>Container · Float · Tableware</div>
            <h2 className="display mt-4" style={{ color: "oklch(98% 0.01 75)", fontSize: "clamp(2rem, 3.4vw, 3rem)" }}>
              Low iron means true colour and high transmission.
            </h2>
            <p className="measure mt-5" style={{ color: "oklch(90% 0.01 75)", lineHeight: 1.6 }}>
              At ≤0.012% Fe₂O₃, our GL-99 grade holds the colour window glassmakers depend on — fewer rejects, tighter tint control, cleaner clarity.
            </p>
            <a href="#rfq" className="btn btn-onphoto mt-8">Price GL-99 →</a>
          </div>
        </div>
      </section>

      {/* WHY MMS — plain-language reasons, editorial column layout */}
      <section id="why" className="section-pad" style={{ background: "var(--bg-2)" }}>
        <div className="shell">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-5">
              <div className="eyebrow">V · Why MMS</div>
              <h2 className="display mt-4" style={{ fontSize: "clamp(1.9rem, 3vw, 2.6rem)" }}>
                Why buyers stay with us.
              </h2>
              <p className="measure mt-5" style={{ color: "var(--ink-soft)", lineHeight: 1.6 }}>
                No jargon, no runaround. Three simple things you can hold us to on every order.
              </p>
            </div>
            <div className="lg:col-span-7 grid gap-3">
              {REASONS.map((r) => (
                <div key={r.n} className="p-6" style={{ background: "var(--bg)", border: "1px solid var(--line-strong)", borderRadius: "var(--radius)", display: "flex", gap: "1.25rem", alignItems: "baseline" }}>
                  <div className="display num" style={{ fontSize: "1.8rem", color: "var(--accent)", flex: "0 0 auto" }}>{r.n}</div>
                  <div>
                    <div className="display" style={{ fontSize: "1.25rem" }}>{r.t}</div>
                    <p className="mt-2" style={{ fontSize: "0.92rem", color: "var(--ink-soft)", lineHeight: 1.6 }}>{r.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RFQ */}
      <section id="rfq" className="section-pad" style={{ background: "var(--bg-3)", color: "var(--accent-ink)" }}>
        <div className="shell grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow" style={{ color: "oklch(78% 0.01 75)" }}>VI · The Request</div>
            <h2 className="display mt-4" style={{ fontSize: "clamp(2rem, 3.2vw, 2.8rem)", color: "oklch(98% 0.01 75)" }}>
              Tell us the grade. We answer in one business day.
            </h2>
            <p className="measure mt-5" style={{ color: "oklch(88% 0.01 75)", lineHeight: 1.55 }}>
              Specify grade, tonnage and destination port. Every quotation ships with a certified Certificate of Analysis for the lifted material.
            </p>
            <div className="num mt-8" style={{ color: "oklch(82% 0.01 75)", fontSize: "0.82rem", lineHeight: 1.8 }}>
              {COMPANY.email}<br />{COMPANY.phone}
            </div>
          </div>
          <div className="lg:col-span-7" style={{ background: "var(--bg)", color: "var(--ink)", padding: "clamp(1.5rem, 3vw, 2.5rem)", borderRadius: "var(--radius)" }}>
            <RfqForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--bg-3)", color: "oklch(80% 0.01 75)", borderTop: "1px solid oklch(96% 0.01 75 / 0.12)" }}>
        <div className="shell" style={{ paddingBlock: "2.5rem", display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "space-between" }}>
          <div>
            <div className="display" style={{ color: "oklch(97% 0.01 75)", fontSize: "1.3rem" }}>{COMPANY.name}</div>
            <div className="num mt-2" style={{ fontSize: "0.78rem" }}>{COMPANY.address}</div>
          </div>
          <div className="num" style={{ fontSize: "0.72rem", textAlign: "right", lineHeight: 1.9 }}>
            {COMPLIANCE.join(" · ")}<br />{COMPANY.phone} · {COMPANY.email}
          </div>
        </div>
      </footer>
    </main>
  );
}
