"use client";

import { useState } from "react";
import { APPLICATIONS } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

// Structured RFQ data-capture (Design-doc §2.07). Shared across variants; styled by scope.
export default function RfqForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    // Demo-only: simulate a structured submission round-trip.
    setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className="cell" style={{ padding: "2.5rem", borderRadius: "var(--radius)" }}>
        <div className="eyebrow" style={{ color: "var(--accent)" }}>RFQ-2024-CONFIRMED</div>
        <p className="display" style={{ fontSize: "1.4rem", marginTop: "0.75rem" }}>
          Request logged. Our trade desk replies within one business day.
        </p>
        <p className="measure" style={{ color: "var(--ink-soft)", marginTop: "0.75rem", fontSize: "0.95rem" }}>
          A certified Certificate of Analysis (COA) for the selected grade will accompany our quotation.
        </p>
        <button className="btn btn-ghost" style={{ marginTop: "1.5rem" }} onClick={() => setStatus("idle")}>
          New request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rfq-grid" noValidate>
      <div className="rfq-row">
        <div>
          <label className="field-label" htmlFor="grade">Grade</label>
          <select id="grade" className="field" required>
            {APPLICATIONS.map((a) => (
              <option key={a.code} value={a.code}>{a.code} · {a.industry}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="tonnage">Tonnage (MT)</label>
          <input id="tonnage" className="field num" type="number" min={1} placeholder="30000" required />
        </div>
      </div>
      <div className="rfq-row">
        <div>
          <label className="field-label" htmlFor="port">Destination port</label>
          <input id="port" className="field" type="text" placeholder="Rotterdam" required />
        </div>
        <div>
          <label className="field-label" htmlFor="incoterm">Incoterm</label>
          <select id="incoterm" className="field" defaultValue="CIF">
            <option>FOB</option>
            <option>CIF</option>
          </select>
        </div>
      </div>
      <div>
        <label className="field-label" htmlFor="company">Company &amp; contact</label>
        <input id="company" className="field" type="text" placeholder="Procurement, Acme Glassworks" required />
      </div>
      <div>
        <label className="field-label" htmlFor="email">Work email</label>
        <input id="email" className="field" type="email" placeholder="you@company.com" required />
      </div>
      <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Transmitting…" : "Submit RFQ →"}
      </button>
    </form>
  );
}
