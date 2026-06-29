import SiteNav from "@/components/SiteNav";
import RfqForm from "@/components/RfqForm";
import { CHEMICAL, SIEVE, APPLICATIONS, COMPLIANCE, COMPANY, IMG, HERO_STATS } from "@/lib/data";

const NAV = [
  { href: "#spec", label: "Spec" },
  { href: "#grades", label: "Grades" },
  { href: "#why", label: "Why MMS" },
  { href: "#rfq", label: "RFQ" },
];

// Plain-language reasons to choose MMS — same three points across all variants.
const REASONS = [
  { n: "01", t: "Supply you can count on", d: "We keep material in stock and ship on the date we promise — no surprises, no waiting." },
  { n: "02", t: "Quality you can check", d: "Every batch is tested before it leaves. You get the paperwork that proves it, every time." },
  { n: "03", t: "People who pick up", d: "Talk to specialists who know your industry — quick answers from real people, not a call centre." },
];

export default function V1() {
  return (
    <main className="mss v1" id="top">
      <SiteNav items={NAV} />

      {/* HERO — full-bleed processing plant, sharp industrial framing */}
      <section className="relative">
        <div className="relative w-full overflow-hidden" style={{ height: "90vh", minHeight: 620, background: "var(--bg-3)" }}>
          <img src={IMG.quarry} alt="Active high-purity silica processing operation: excavator and graded sand in an open working pit under daylight." className="photo" />
          {/* harder, technical gradient — left-anchored */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, oklch(16% 0.02 200 / 0.92) 0%, oklch(16% 0.02 200 / 0.7) 42%, oklch(16% 0.02 200 / 0.15) 100%)" }} aria-hidden />
          <div className="absolute inset-0 flex items-center" style={{ paddingBottom: "clamp(6rem, 12vh, 9rem)" }}>
            <div className="shell w-full">
              <div className="rise" style={{ maxWidth: 880 }}>
                {/* <div className="num" style={{ fontSize: "0.72rem", letterSpacing: "0.2em", color: "var(--accent-2)" }}>
                  MMS — SPEC ENGINE / REF.SiO₂-99.65
                </div> */}
                <h1 className="display mt-8" style={{ color: "oklch(98% 0.01 75)", fontSize: "clamp(2.2rem, 5.4vw, 4.6rem)", lineHeight: 1.0, textWrap: "balance" }}>
                  High-purity silica,<br />sold by the assay.
                </h1>
                <p className="measure mt-6" style={{ color: "oklch(90% 0.01 75)", fontSize: "1.02rem", lineHeight: 1.55 }}>
                  An asset-backed processing and sourcing facility. Every lot ships against an auditable Certificate of Analysis. No marketing copy stands between you and the numbers.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#rfq" className="btn btn-primary">Open RFQ →</a>
                  <a href="#spec" className="btn btn-onphoto">Full spec sheet</a>
                </div>
              </div>
            </div>
          </div>

          {/* hard-edged spec strip (sharp cells, no blur — keeps v1 raw identity) */}
          <div className="absolute left-0 right-0 bottom-0" style={{ borderTop: "1px solid oklch(96% 0.01 75 / 0.2)", background: "oklch(16% 0.02 200 / 0.82)" }}>
            <div className="shell stat-strip" style={{ borderTop: 0 }}>
              {HERO_STATS.map((s) => (
                <div key={s.k} className="stat-cell" style={{ borderLeft: 0, borderTop: 0, borderColor: "oklch(96% 0.01 75 / 0.16)" }}>
                  <div className="num" style={{ fontSize: "0.64rem", letterSpacing: "0.12em", color: "oklch(76% 0.01 75)" }}>{s.k}</div>
                  <div className="num display mt-1" style={{ fontSize: "1.4rem", color: "oklch(98% 0.01 75)" }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* MASS SPEC ENGINE — side-by-side compound + sieve */}
      <section id="spec" className="shell" style={{ paddingBlock: "clamp(3rem, 6vw, 5rem)" }}>
        <div className="num" style={{ fontSize: "0.7rem", letterSpacing: "0.16em", color: "var(--muted)" }}>02 / MASS SPECIFICATION ENGINE</div>
        <h2 className="display mt-3" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>Chemical compound &amp; sieve profile</h2>
        <div className="grid lg:grid-cols-2 gap-px mt-8" style={{ background: "var(--line-strong)", border: "1px solid var(--line-strong)" }}>
          <div className="cell" style={{ border: 0, padding: "1.5rem" }}>
            <div className="eyebrow mb-3">Chemical composition · certified assay</div>
            <table className="spec">
              <thead><tr><th>Oxide</th><th>Value</th><th>Unit</th><th>Standard</th></tr></thead>
              <tbody>
                {CHEMICAL.map((r) => (
                  <tr key={r.k}>
                    <td className="v">{r.k}</td><td className="v">{r.v}</td><td className="k">{r.unit}</td><td className="k">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cell" style={{ border: 0, padding: "1.5rem", background: "var(--bg-2)" }}>
            <div className="eyebrow mb-3">Physical sieve analysis · mesh matrix</div>
            <table className="spec">
              <tbody>
                {SIEVE.map((r) => (
                  <tr key={r.k}><td className="k">{r.k}</td><td className="v">{r.v}</td><td className="k">{r.unit}</td></tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6 photo-frame photo-grain photo-hover" style={{ aspectRatio: "16 / 7" }}>
              <img src={IMG.stockpileRig} alt="Graded silica sand stockpile beside a steel conveyor rig at the processing yard." className="photo" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS CONTROL LOG — tabular worksheet (raw v1 identity, not v2's photo band) */}
      <section className="shell" style={{ paddingBlock: "clamp(2rem, 4vw, 4rem)" }}>
        <div className="num" style={{ fontSize: "0.7rem", letterSpacing: "0.16em", color: "var(--muted)" }}>02B / PROCESS CONTROL LOG</div>
        <h2 className="display mt-3" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>Every stage logged to a control limit.</h2>
        <div className="grid lg:grid-cols-12 gap-px mt-6" style={{ background: "var(--line-strong)", border: "1px solid var(--line-strong)" }}>
          <div className="cell lg:col-span-8 scroll-x" style={{ border: 0, padding: "0.5rem 0.25rem", minWidth: 0 }}>
            <table className="spec" style={{ width: "100%" }}>
              <thead><tr><th>Stage</th><th>Operation</th><th>Control parameter</th><th>Limit</th></tr></thead>
              <tbody>
                {[
                  ["S-01", "Attrition scrub", "Surface iron removal", "≤ 0.012% Fe₂O₃"],
                  ["S-02", "Hydro classify", "Grain band hold", "0.10–0.40 mm"],
                  ["S-03", "Thermal dry", "Residual moisture", "≤ 0.05%"],
                  ["S-04", "Sieve & sample", "Out-of-spec margin", "≤ 0.1% / 35 mesh"],
                  ["S-05", "Assay & COA", "Lot certification", "XRF + ICP signed"],
                ].map(([s, op, cp, lim]) => (
                  <tr key={s}>
                    <td className="v">{s}</td><td className="k">{op}</td><td className="k">{cp}</td><td className="v">{lim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="photo-frame photo-grain photo-hover lg:col-span-4" style={{ minHeight: 240 }}>
            <img src={IMG.excavator} alt="Mining excavators working a high-purity silica deposit, feeding the processing line." className="photo" loading="lazy" />
            <div className="absolute left-0 bottom-0 num" style={{ background: "var(--bg-3)", color: "var(--accent-ink)", padding: "0.5rem 0.9rem", fontSize: "0.68rem", letterSpacing: "0.1em" }}>
              FIG.02 — EXTRACTION FEED
            </div>
          </div>
        </div>
      </section>

      {/* TRACK RECORD — quarry-backed dark band, left-anchored gradient + sharp stat cells */}
      <section className="relative" style={{ background: "var(--bg-3)", color: "var(--accent-ink)" }}>
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <img src={IMG.quarryTerraced} alt="" className="photo" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, oklch(16% 0.02 200 / 0.94) 0%, oklch(16% 0.02 200 / 0.82) 48%, oklch(16% 0.02 200 / 0.55) 100%)" }} />
        </div>
        <div className="shell relative" style={{ paddingBlock: "clamp(3rem, 6vw, 5rem)" }}>
          <div className="num" style={{ fontSize: "0.7rem", letterSpacing: "0.16em", color: "var(--accent-2)" }}>02C / TRACK RECORD</div>
          <div className="grid lg:grid-cols-12 gap-8 mt-4 items-end">
            <div className="lg:col-span-7">
              <h2 className="display" style={{ color: "oklch(98% 0.01 75)", fontSize: "clamp(1.8rem, 3vw, 2.7rem)", lineHeight: 1.04 }}>
                Asset-backed at the source. A supplier that shows up.
              </h2>
              <p className="measure mt-5" style={{ color: "oklch(88% 0.01 75)", fontSize: "0.98rem", lineHeight: 1.6 }}>
                We work our own deposits and grade on site — so the tonnage you book is tonnage we control, not a position we hope to cover.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px mt-8" style={{ background: "oklch(96% 0.01 75 / 0.16)", border: "1px solid oklch(96% 0.01 75 / 0.16)" }}>
            {[["12+", "years trading"], ["40+", "plants supplied"], ["98%", "on-time shipments"], ["24h", "quote turnaround"]].map(([v, k]) => (
              <div key={k} style={{ background: "oklch(16% 0.02 200 / 0.78)", padding: "1.25rem 1.1rem" }}>
                <div className="num display" style={{ fontSize: "1.8rem", color: "var(--accent-2)" }}>{v}</div>
                <div className="num mt-1" style={{ fontSize: "0.66rem", letterSpacing: "0.1em", color: "oklch(80% 0.01 75)" }}>{k}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#rfq" className="btn btn-primary">Open RFQ →</a>
            <a href="#grades" className="btn btn-onphoto">View grade matrix</a>
          </div>
        </div>
      </section>

      {/* STRUCTURAL GRADES GRID */}
      <section id="grades" className="shell" style={{ paddingBlock: "clamp(2rem, 4vw, 4rem)" }}>
        <div className="num" style={{ fontSize: "0.7rem", letterSpacing: "0.16em", color: "var(--muted)" }}>03 / STRUCTURAL APPLICATION MATRIX</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px mt-6" style={{ background: "var(--line-strong)", border: "1px solid var(--line-strong)" }}>
          {APPLICATIONS.map((a, i) => (
            <article key={a.code} className="cell photo-hover" style={{ border: 0 }}>
              <div className="photo-frame photo-grain" style={{ aspectRatio: "4 / 3" }}>
                <img src={a.img} alt={a.alt} className="photo" loading="lazy" />
              </div>
              <div style={{ padding: "1.1rem 1.2rem" }}>
                <div className="num" style={{ fontSize: "0.65rem", color: "var(--accent)" }}>0{i + 1}</div>
                <div className="display mt-2" style={{ fontSize: "1.25rem" }}>{a.code}</div>
                <div className="num mt-1" style={{ fontSize: "0.72rem", color: "var(--ink-soft)" }}>{a.industry}</div>
                <div className="num mt-3" style={{ fontSize: "0.7rem", color: "var(--muted)" }}>{a.spec}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY MMS — plain-language reasons, hard-cell grid (raw v1 identity) */}
      <section id="why" className="shell" style={{ paddingBlock: "clamp(2rem, 4vw, 4rem)" }}>
        <div className="num" style={{ fontSize: "0.7rem", letterSpacing: "0.16em", color: "var(--muted)" }}>04 / WHY CHOOSE MMS</div>
        <h2 className="display mt-3" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>Three reasons buyers stay with us.</h2>
        <div className="grid sm:grid-cols-3 gap-px mt-6" style={{ background: "var(--line-strong)", border: "1px solid var(--line-strong)" }}>
          {REASONS.map((r) => (
            <div key={r.n} className="cell" style={{ border: 0, padding: "1.5rem" }}>
              <div className="num display" style={{ fontSize: "1.8rem", color: "var(--accent)" }}>{r.n}</div>
              <div className="display mt-3" style={{ fontSize: "1.2rem" }}>{r.t}</div>
              <p className="mt-3" style={{ fontSize: "0.9rem", color: "var(--ink-soft)", lineHeight: 1.6 }}>{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RFQ ENGINE — dark contact panel + light form (sharp v1 framing) */}
      <section id="rfq" className="shell" style={{ paddingBlock: "clamp(3rem, 5vw, 5rem)" }}>
        <div style={{ border: "1px solid var(--line-strong)" }}>
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-5" style={{ padding: "clamp(1.75rem, 3vw, 2.75rem)", background: "var(--bg-3)", color: "var(--accent-ink)" }}>
              <div className="num" style={{ fontSize: "0.7rem", letterSpacing: "0.16em", color: "var(--accent-2)" }}>05 / TRANSACTIONAL RFQ ENGINE</div>
              <h2 className="display mt-3" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.1rem)", color: "oklch(98% 0.01 75)" }}>Structured request. Auditable reply.</h2>
              <p className="measure mt-4" style={{ color: "oklch(88% 0.01 75)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                Capture grade, tonnage and destination port. The trade desk returns a quotation with a certified COA within one business day.
              </p>
              <div className="num mt-6" style={{ fontSize: "0.78rem", color: "oklch(82% 0.01 75)", lineHeight: 1.9 }}>
                {COMPANY.email}<br />{COMPANY.phone}
              </div>
            </div>
            <div className="lg:col-span-7" style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)", background: "var(--bg)" }}>
              <RfqForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="cell" style={{ borderLeft: 0, borderRight: 0, borderBottom: 0 }}>
        <div className="shell" style={{ paddingBlock: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between" }}>
          <div className="num" style={{ fontSize: "0.78rem", color: "var(--ink-soft)" }}>
            <span className="display" style={{ fontSize: "1rem" }}>{COMPANY.name}</span><br />{COMPANY.address}
          </div>
          <div className="num" style={{ fontSize: "0.7rem", color: "var(--muted)", textAlign: "right", lineHeight: 1.9 }}>
            {COMPLIANCE.join(" · ")}<br />{COMPANY.phone}
          </div>
        </div>
      </footer>
    </main>
  );
}
