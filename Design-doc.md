# Mediterranean Mining Solutions (MMS) — Strategic Design Document

**Project Context:** Industrial Mineral Commodity Trading (B2B Bulk Silica Sand & Quartz Sourcing)^^

**Target Basin:** Mediterranean / North Africa Basin (Export-oriented to Europe & MENA)^^

**Primary Language:** English (International standard) | **Secondary Language:** French (Export market target)^^

## 1. Executive Strategy & Market Positioning

### The Credibility Gap

Industrial silica procurement online is split between low-trust commodity board listings (Alibaba, EC21) and a small handful of massive global market leaders (Sibelco, Covia)^^. As an independent specialist trader, MMS sits in a structural credibility gap: it is too agile to be an established global major, but it must look completely distinct from unverified marketplace brokers^^.

### The Core Purchase Drivers

Industrial procurement managers, plant engineers, and category buyers do not buy material based on emotional brand storytelling or flashy startup aesthetics^^. They commit large-scale financial and logistical capital based exclusively on three empirical vectors:

1. **Chemical Consistency:** Guaranteed chemical profiles (High **$\text{SiO}_2$**, ultra-low **$\text{Fe}_2\text{O}_3$**) backed by auditable Certificates of Analysis (COA)^^.
2. **Supply Chain Predictability:** Confirmed maritime shipping networks, port options, and absolute tonnage reliability^^.
3. **Application Expertise:** A partner who understands the distinct technical thresholds of glass making, foundries, and water filtration rather than a generic broker^^.

The website’s singular operational objective is to communicate these three pillars within the first 5 seconds of a user landing on the page^^.

## 2. Technical Information Architecture & Structural Blueprint

The single-page showroom layout is engineered to display maximum structural operational data. Rather than abstract marketing sections, the layout functions as a highly professional B2B utility dashboard.

```
/ (Single-Page Dashboard Showroom Layout Matrix)
├── [Engineering Control Bar]: Sticky Top Toggle System [/v1 | /v2 | /v3 Mode Switcher]
├── [01. Navigation Header]: Transparent-to-Solid Scroll • Inline i18n Switch (EN/FR) • Quick RFQ Anchor
├── [02. Photographic Hero Core]: High-Purity Silica Value Proposition • Deep Asset/Logistics Media Frame
├── [03. Quality Compliance Bar]: Continuous Inline Text Row (ISO 9001 • EN 12904 • NSF 61 • AFS Fineness)
├── [04. Structural Grades Grid]: 4-Column Technical Application Matrix (Glass / Foundry / Filtration / Ceramics)
├── [05. Mass Specification Engine]: Side-by-Side Chemical Compound Matrix & Monospace Sieve Profile Chart
├── [06. Maritime Logistics Hub]: Port Footprints (FOB Radès/Alexandria) • Tonnage Options • Incoterms Matrix
├── [07. Transactional RFQ Engine]: Structured Data-Capture Field Layout (Grade, Tonnage, Destination Port)
└── [08. Operational Footer]: Compliance Frameworks • Direct Physical Address & Fixed Phone Accents
```

## 3. Global Design System Foundations (OKLCH Base)

To guarantee technical cohesion and high-end visual performance across all rendering variations, the entire design system is mapped to a perceptually uniform color space and rigorous structural metrics.

**CSS**

```
:root {
  /* Core Industrial Fluid Palette */
  --neutral-dark: oklch(16% 0.006 45);   /* Grounded Graphite Neutral (Never pure black) */
  --neutral-light: oklch(97% 0.004 65);  /* Warm Quartz Surface (Never pure white) */
  --accent-action: oklch(64% 0.165 48);  /* Industrial High-Contrast Amber (CTA / Focus) */
  
  /* Layout Metrics & Structural Scale */
  --max-text-width: 65ch;                /* Strict reading line threshold to maintain legibility */
  --base-radius-sharp: 0px;              /* Rigid raw engineering corners */
  --base-radius-soft: 3px;               /* Minimal form input rounding */
  
  /* Standard Micro-Interaction Durations */
  --duration-snappy: 120ms;              /* Instantaneous feedback threshold (<80ms mental buffer) */
  --duration-smooth: 280ms;              /* Structural layout state transitions */
  --ease-exponential: cubic-bezier(0.16, 1, 0.3, 1); /* Physics-based deceleration curve */
}
```

## 4. The Three Design Directions & Brand Positions

To establish the ultimate layout flexibility for the client, the showroom architecture dynamically shifts between three entirely distinct design philosophies, brand voices, and photographic layouts.

```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                             ENGINEERING CONTROL INTERACTIVE TOGGLE                          │
│          [/v1: Industrial Spec Engine]   [/v2: Deep Basin Carrier]   [/v3: Material Monolith]   │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

### `/v1` — The Industrial Spec Engine (Raw Utility Philosophy)

* **Brand Positioning Statement:** A pure technical facility stripped of corporate fluff. MMS functions as a direct, asset-backed processing and sourcing provider where empirical mineral data does the selling^^.
* **Target Persona:** Plant engineers, strict quality control officers, and risk-averse formulas managers who value chemical spec tables over marketing copy^^.
* **Visual Framework & Grid Structure:**
  * **Hero Configuration:** A rigid 50/50 split vertical block layout^^. The left side is an unyielding data frame containing the primary value proposition bordered by sharp `1px` lines^^. The right side features a giant, high-contrast landscape photograph of an active mineral processing plant (mechanized sorting infrastructure, conveyor setups, and graded sand stockpiles)^^.
  * **Typography Hierarchy:** Monospace styling (`font-family: monospace` or `IBM Plex Mono`) is dominant across all text labels, specification metrics, and transaction elements to signal a raw lab-tested atmosphere^^.
  * **Component Borders & Radii:** Pure linear cells with zero rounding (`border-radius: 0px`)^^. Layout boxes use sharp, low-opacity `rgba` lines rather than soft container blocks^^.
  * **In-Page Imagery Style:** Technical, granular close-ups of specific industrial mesh sizes embedded directly inside the application cards.

### `/v2` — The Deep Basin Carrier (Maritime Logistics & Scale Philosophy)

* **Brand Positioning Statement:** A highly coordinated, large-scale international supply chain network. Focuses heavily on resource security, high tonnage logistics capacity, and seamless Mediterranean-to-Europe maritime trade paths^^.
* **Target Persona:** Global procurement directors, volume category managers, and international supply chain planners anxious about bulk shipping timelines and port-to-port risk management^^.
* **Visual Framework & Grid Structure:**
  * **Hero Configuration:** An immersive, ultra-wide cinematic background image that completely dominates the viewport area. The background photo features a massive bulk carrier cargo vessel being loaded via high-capacity cranes at a Mediterranean industrial terminal port. The text content sits layered on top inside a dark, highly protective visual zone for perfect legibility.
  * **Typography Hierarchy:** High-end, heavy editorial grotesque display titles (e.g., `Archivo Expanded` or system analogs) that convey weight and physical infrastructure, paired with balanced sans-serif body copy^^.
  * **Component Borders & Radii:** Fluid layout sections separated by generous vertical padding scales (`7rem 4rem`)^^. Structured asymmetric columns break the layout to chart shipping lanes and port operational nodes^^.
  * **In-Page Imagery Style:** Full-bleed horizontal banners highlighting massive bulk infrastructure, transport fleets, and large-scale crane operations.

### `/v3` — The Material Monolith (Premium Laboratory & Origin Philosophy)

* **Brand Positioning Statement:** High-purity mineral perfection from the source. Capitalizes on the chemical superiority, exceptional whiteness, and pristine geological characteristics of premium Mediterranean quartz deposits^^.
* **Target Persona:** High-end application specialists, specialty glass designers, and technical R&D directors looking for ultra-low impurities for premium formulations^^.
* **Visual Framework & Grid Structure:**
  * **Hero Configuration:** An overlapping layout built on contrasting scale. The design is anchored by an incredibly crisp macro photograph showing luminous, crystalline raw white quartz veins or high-purity silica sand grains breaking under sharp, hard-raking studio light^^. The typographic messaging block punches through this image field via a heavy, left-aligned structural card.
  * **Typography Hierarchy:** Clean, authoritative, geometric sans-serif layouts with expansive letter-spacing on sub-labels to create an elite laboratory aesthetic.
  * **Component Borders & Radii:** Surfaces utilize bright, ultra-clean mineral stone backgrounds, balanced by tight structural padding scales (`2rem–2.5rem`) and microscopic corner rounding (`border-radius: 3px`)^^.
  * **In-Page Imagery Style:** Exceptionally crisp, brightly-lit imagery detailing precise XRF/ICP chemical spectrometry testing procedures and official auditable COA documents.

## 5. Technical Specification & Core Data Matrix

To guarantee real-world fidelity, identical factual datasets are permanently mapped within all three design layouts, changing only their visual shell.

### A. Chemical Composition Base Profiles

$$
\begin{array}{l|l|l}
\textbf{Chemical Parameter} & \textbf{Industrial Value Range} & \textbf{B2B Validation Standard} \\
\hline
\text{Silicon Dioxide } (\text{SiO}_2) & 99.65\% \text{ (}\pm 0.05\%\text{)} & \text{High-Purity Premium Threshold} \\
\text{Iron Oxide } (\text{Fe}_2\text{O}_3) & 0.012\% \text{ maximum limit} & \text{Glass-Grade Color Consistency} \\
\text{Aluminum Oxide } (\text{Al}_2\text{O}_3) & 0.12\% \text{ nominal} & \text{Refractory Structural Balance} \\
\text{Titanium Dioxide } (\text{TiO}_2) & 0.03\% \text{ nominal} & \text{Mineral Purity Verification} \\
\end{array}
$$

### B. Physical Sieve Analysis Profile

* **Effective Grain Size Range:** **$0.1\text{ mm} - 0.4\text{ mm}$** (Sieve-matched for optimal industrial melting & filtration dynamics).
* **Retained on 35 Mesh (**$\ge 0.500\text{ mm}$**):** **$0.1\%$** maximum allowed out-of-spec margin.
* **Passing 140 Mesh (**$\le 0.106\text{ mm}$**):** **$0.5\%$** maximum allowed fine dust limit.
* **Uniformity Coefficient (**$C_u$**):** **$< 1.3$** (Highly uniform particle size distribution profile).

### C. Logistical Operational Variables

* **Bulk Marine Loading Node:** **$30,000\text{ MT}$** (Metric Tons) dedicated Ocean Bulk Carrier holds^^.
* **Containerized Cargo Node:** **$1.5\text{ T}$** Industrial Big-Bags, double-sleeved, UV-stabilized^^.
* **Departure Footprints:** FOB Port of Radès (Tunisia) | FOB Port of Alexandria (Egypt).
* **Incoterms Standard:** Incoterms 2020 Compliant framework (FOB / CIF destination routing).

## 6. Functional Interface Rules (The Engineering Checklist)

### Micro-Interactions & Physics

1. **The 80ms Rule:** Any physical mouse click or interactive element state transition must execute its initial transformation phase in under **$80\text{ms}$** to match human cognitive feedback speed.
2. **Animation Overrides:** If a user’s operating system flag passes `prefers-reduced-motion: reduce`, all spatial slide and structural scaling animations must automatically shut down and convert instantly into simple, crisp opacity crossfades.

### Interactive State Requirements

Every clickable item (such as navigation links, version toggles, and form field nodes) must be built with explicit visual configurations for all eight interactive states:

* **Default:** The base resting variable mapped to the specific version theme.
* **Hover:** Activated only via fine pointer devices (`@media (pointer: fine)`), showing swift background light shifts.
* **Focus-Visible:** A high-contrast outline border offset by exactly `2px` from the element, triggering strictly during keyboard tabs.
* **Active:** A rapid spatial drop (`translateY(1px)`) that mimics physical compression mechanics.
* **Disabled / Loading / Error / Success:** Clearly configured via the dynamic structured RFQ form module.

### PHOTO RENDERING & IMAGE HOLDER DIRECTIVES:

- BAN BLANK MAGAZINE CARD GAPS: Every section must feature a dominant photo placeholder card that anchors the data. Use sharp, thematic industrial imagery (using Unsplash source categories or descriptive placeholder image blocks with realistic alt-tags).
- OVERLAY RULES: For full-bleed photo blocks, wrap typography within explicit, high-contrast text protective backing properties (e.g., linear gradient overlays or dark oklch containers) to maintain flawless readability under all viewport conditions.
- PHOTO CONTENT MATRIX:
  * Variant /v1 must render images of automated sorting machinery, raw processing conveyors, and heavy quarry equipment.
  * Variant /v2 must render images of massive cargo vessels, industrial shipping docks, and crane terminals.
  * Variant /v3 must render premium macro quartz crystals under studio lighting and pristine laboratory verification environments.
- ALL INTERACTIVE HOVERS ON CARDS WITH IMAGES: Image fields must subtly scale up (e.g., transform: scale(1.03)) inside an overflow-hidden mask with an exponential transit curve under 280ms to make the interface feel incredibly reactive.
