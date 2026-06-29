import SiteNav from "@/components/SiteNav";
import RfqForm from "@/components/RfqForm";
import { CHEMICAL, SIEVE, APPLICATIONS, COMPLIANCE, COMPANY, IMG, HERO_STATS } from "@/lib/data";

const NAV = [
  { href: "#assay", label: "Chemistry" },
  { href: "#grades", label: "Grades" },
  { href: "#origin", label: "Origin" },
  { href: "#why", label: "Why MMS" },
  { href: "#rfq", label: "Request" },
];

// Plain-language reasons to choose MMS — same three points across all variants.
const REASONS = [
  { n: "01", t: "Supply you can count on", d: "We keep material in stock and ship on the date we promise — no surprises, no waiting." },
  { n: "02", t: "Quality you can check", d: "Every batch is tested before it leaves. You get the paperwork that proves it, every time." },
  { n: "03", t: "People who pick up", d: "Talk to specialists who know your industry — quick answers from real people, not a call centre." },
];

export default function V3() {
  return (
    <main className="mss v3" id="top">
      <SiteNav items={NAV} />

      {/* HERO — full-bleed clean glass, bright premium gradient, airy stat strip */}
      <section className="relative">
        <div className="relative w-full overflow-hidden" style={{ height: "90vh", minHeight: 620, background: "var(--bg-3)" }}>
          <img src={IMG.quarryTerraced} alt="A terraced open-pit silica quarry in warm daylight — the pristine Mediterranean deposit at source." className="photo" />
          {/* gradient tuned for the warm furnace image — protects the bottom copy */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(18% 0.02 200 / 0.55) 0%, oklch(18% 0.02 200 / 0.3) 35%, oklch(18% 0.02 200 / 0.86) 100%)" }} aria-hidden />
          <div className="absolute inset-0 flex items-end">
            <div className="shell w-full" style={{ paddingBottom: "clamp(9rem, 20vh, 13rem)" }}>
              <div className="rise" style={{ maxWidth: 880 }}>
                {/* <div className="label-wide" style={{ color: "oklch(86% 0.02 60)" }}>High-Purity Mediterranean Quartz · Origin Series</div> */}
                <h1 className="display mt-5" style={{ color: "oklch(99% 0.01 75)", fontSize: "clamp(2.6rem, 6vw, 5.2rem)", lineHeight: 0.98 }}>
                  Purity you can put under a microscope.
                </h1>
                <p className="measure mt-6" style={{ color: "oklch(92% 0.01 75)", fontSize: "1.1rem", lineHeight: 1.6 }}>
                  99.65% SiO₂, iron oxide below 0.012%. Sourced from pristine Mediterranean deposits and verified by XRF and ICP spectrometry — backed by an auditable Certificate of Analysis.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#rfq" className="btn btn-primary">Request a sample assay →</a>
                  <a href="#assay" className="btn btn-onphoto">View the chemistry</a>
                </div>
              </div>
            </div>
          </div>

          {/* airy stat strip — expansive letter-spacing labels (v3 signature) */}
          <div className="absolute left-0 right-0 bottom-0" style={{ borderTop: "1px solid oklch(96% 0.01 75 / 0.16)", background: "oklch(20% 0.02 200 / 0.5)", backdropFilter: "blur(10px)" }}>
            <div className="shell grid grid-cols-2 md:grid-cols-4 gap-6" style={{ paddingBlock: "1.15rem" }}>
              {HERO_STATS.map((s) => (
                <div key={s.k}>
                  <div className="label-wide" style={{ color: "oklch(80% 0.01 75)" }}>{s.k}</div>
                  <div className="display num mt-1" style={{ color: "oklch(99% 0.01 75)", fontSize: "1.35rem" }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE — spaced label row */}
      <section className="shell" style={{ paddingTop: "clamp(4rem, 8vw, 6.5rem)" }}>
        <div className="stone" style={{ padding: "1.1rem 1.5rem", display: "flex", flexWrap: "wrap", gap: "2.5rem", justifyContent: "center" }}>
          {COMPLIANCE.map((c) => (
            <span key={c} className="label-wide" style={{ color: "var(--ink-soft)" }}>{c}</span>
          ))}
        </div>
      </section>

      {/* ASSAY — chemistry with lab imagery */}
      <section id="assay" className="shell" style={{ paddingBlock: "clamp(3rem, 6vw, 5.5rem)" }}>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="label-wide">The Chemistry</div>
            <h2 className="display mt-4" style={{ fontSize: "clamp(1.9rem, 3vw, 2.6rem)" }}>
              Verified by spectrometry, lot after lot.
            </h2>
            <p className="measure mt-5" style={{ color: "var(--ink-soft)", lineHeight: 1.6 }}>
              Each consignment is fingerprinted by XRF and ICP before it leaves origin. The numbers don&apos;t drift — and they travel with the material.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-8">
              <div className="photo-frame photo-grain photo-hover stone" style={{ aspectRatio: "1 / 1" }}>
                <img src={IMG.labTube} alt="Gloved hand holding a prepared sample tube during ICP verification of silica purity." className="photo" loading="lazy" />
              </div>
              <div className="photo-frame photo-grain photo-hover stone" style={{ aspectRatio: "1 / 1" }}>
                <img src={IMG.beakers} alt="Clean laboratory glassware and a pipette prepared for spectrometry analysis." className="photo" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="stone" style={{ padding: "clamp(1.25rem, 2.5vw, 2rem)" }}>
              <div className="label-wide mb-4">Chemical composition · certified assay</div>
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
              <div className="label-wide mt-8 mb-4">Sieve profile · mesh matrix</div>
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
      </section>

      {/* THE ORIGIN — editorial macro + floating stone caption (airy, premium) */}
      <section id="origin" className="shell" style={{ paddingBlock: "clamp(2.5rem, 5vw, 4.5rem)" }}>
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7" style={{ position: "relative" }}>
            <div className="photo-frame photo-grain photo-hover stone" style={{ aspectRatio: "16 / 10", boxShadow: "0 30px 70px -34px oklch(22% 0.02 200 / 0.45)" }}>
              <img src={IMG.sandMacro} alt="Macro detail of pristine Mediterranean silica grains, warm and uniform under raking light." className="photo" />
            </div>
            <div className="stone v3-origin-cap" style={{ background: "var(--bg)", padding: "0.9rem 1.2rem" }}>
              <div className="label-wide">Whiteness index</div>
              <div className="display num" style={{ fontSize: "1.9rem" }}>94.2 <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>GE</span></div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="label-wide">The Origin</div>
            <h2 className="display mt-4" style={{ fontSize: "clamp(1.9rem, 3vw, 2.6rem)" }}>
              One deposit. A geology that doesn&apos;t compromise.
            </h2>
            <p className="measure mt-5" style={{ color: "var(--ink-soft)", lineHeight: 1.6 }}>
              MMS draws from a single high-purity Mediterranean seam — exceptional whiteness, ultra-low iron, and a grain structure that has stayed within spec across years of extraction. Provenance you can audit, not just claim.
            </p>
            <a href="#assay" className="btn btn-ghost mt-7">Review the assay</a>
          </div>
        </div>
      </section>

      {/* PROVENANCE / ASSURANCE — dark operations-backed band, gradient + glass cards */}
      <section className="relative" style={{ background: "var(--bg-3)", color: "var(--accent-ink)" }}>
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <img src={IMG.haulTrucks} alt="" className="photo" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(18% 0.02 200 / 0.82) 0%, oklch(18% 0.02 200 / 0.62) 40%, oklch(18% 0.02 200 / 0.9) 100%)" }} />
        </div>
        <div className="shell relative" style={{ paddingBlock: "clamp(3.5rem, 6vw, 5.5rem)" }}>
          <div className="label-wide" style={{ textAlign: "center", color: "oklch(86% 0.02 60)" }}>Provenance &amp; Assurance</div>
          <h2 className="display mt-4" style={{ fontSize: "clamp(1.7rem, 2.6vw, 2.2rem)", textAlign: "center", maxWidth: "20ch", marginInline: "auto", color: "oklch(99% 0.01 75)" }}>
            Every tonne carries its own paperwork.
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mt-10">
            {[
              { t: "Single-source seam", d: "No blending across deposits — one geology, one fingerprint, shipment after shipment.", s: "ORIGIN" },
              { t: "Signed Certificate of Analysis", d: "XRF + ICP results accompany every lot; nothing leaves origin uncertified.", s: "COA" },
              { t: "Traceable to the stem", d: "Each consignment is tied to its loading stem and lot reference end to end.", s: "TRACE" },
            ].map((c) => (
              <article key={c.s} style={{ padding: "1.75rem", background: "oklch(20% 0.02 200 / 0.55)", border: "1px solid oklch(96% 0.01 75 / 0.16)", borderRadius: "var(--radius)", backdropFilter: "blur(8px)" }}>
                <div className="label-wide" style={{ color: "var(--accent-2)" }}>{c.s}</div>
                <h3 className="display mt-3" style={{ fontSize: "1.25rem", color: "oklch(98% 0.01 75)" }}>{c.t}</h3>
                <p className="mt-3" style={{ color: "oklch(86% 0.01 75)", fontSize: "0.92rem", lineHeight: 1.6 }}>{c.d}</p>
              </article>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a href="#rfq" className="btn btn-primary">Request a sample assay →</a>
          </div>
        </div>
      </section>

      {/* APPLICATIONS — premium cards */}
      <section id="grades" className="shell" style={{ paddingBlock: "clamp(1rem, 3vw, 3rem)" }}>
        <div className="label-wide" style={{ textAlign: "center" }}>Application Grades</div>
        <h2 className="display mt-4" style={{ fontSize: "clamp(1.7rem, 2.6vw, 2.2rem)", textAlign: "center" }}>
          Four grades. One source of truth.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {APPLICATIONS.map((a) => (
            <article key={a.code} className="stone photo-hover" style={{ overflow: "hidden" }}>
              <div className="photo-frame photo-grain" style={{ aspectRatio: "4 / 3" }}>
                <img src={a.img} alt={a.alt} className="photo" loading="lazy" />
              </div>
              <div style={{ padding: "1.25rem" }}>
                <div className="label-wide">{a.industry}</div>
                <div className="display mt-2" style={{ fontSize: "1.4rem" }}>{a.code}</div>
                <div className="num mt-3" style={{ fontSize: "0.78rem", color: "var(--muted)" }}>{a.spec}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY MMS — dark operations-backed band, gradient + glass cards */}
      <section id="why" className="relative" style={{ background: "var(--bg-3)", color: "var(--accent-ink)" }}>
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <img src={IMG.sandClose} alt="" className="photo" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(18% 0.02 200 / 0.86) 0%, oklch(18% 0.02 200 / 0.66) 45%, oklch(18% 0.02 200 / 0.9) 100%)" }} />
        </div>
        <div className="shell relative" style={{ paddingBlock: "clamp(3.5rem, 6vw, 5.5rem)" }}>
          <div className="label-wide" style={{ textAlign: "center", color: "oklch(86% 0.02 60)" }}>Why Choose MMS</div>
          <h2 className="display mt-4" style={{ fontSize: "clamp(1.7rem, 2.6vw, 2.2rem)", textAlign: "center", maxWidth: "20ch", marginInline: "auto", color: "oklch(99% 0.01 75)" }}>
            Three reasons buyers stay with us.
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mt-10">
            {REASONS.map((r) => (
              <article key={r.n} style={{ padding: "1.75rem", background: "oklch(20% 0.02 200 / 0.55)", border: "1px solid oklch(96% 0.01 75 / 0.16)", borderRadius: "var(--radius)", backdropFilter: "blur(8px)" }}>
                <div className="display num" style={{ fontSize: "2rem", color: "var(--accent-2)" }}>{r.n}</div>
                <h3 className="display mt-3" style={{ fontSize: "1.25rem", color: "oklch(98% 0.01 75)" }}>{r.t}</h3>
                <p className="mt-3" style={{ color: "oklch(86% 0.01 75)", fontSize: "0.92rem", lineHeight: 1.6 }}>{r.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RFQ */}
      <section id="rfq" className="shell" style={{ paddingBlock: "clamp(3rem, 5vw, 5rem)" }}>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="label-wide">Begin the Conversation</div>
            <h2 className="display mt-4" style={{ fontSize: "clamp(2rem, 3.2vw, 2.8rem)" }}>
              Request a sample assay.
            </h2>
            <p className="measure mt-5" style={{ color: "var(--ink-soft)", lineHeight: 1.6 }}>
              Tell us the grade and tonnage. We respond within one business day with a quotation and a certified Certificate of Analysis for the exact material.
            </p>
            <div className="num mt-8" style={{ fontSize: "0.85rem", color: "var(--ink-soft)", lineHeight: 1.9 }}>
              {COMPANY.email}<br />{COMPANY.phone}
            </div>
          </div>
          <div className="lg:col-span-7 stone" style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            <RfqForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--bg-3)", color: "oklch(82% 0.01 75)" }}>
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
