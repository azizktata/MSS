// Shared factual data layer for Mediterranean Mining Solutions (MMS).
// IDENTICAL across all three design variants — only the visual shell changes.
// Source of truth: Design-doc.md §5.

export const COMPANY = {
  name: "Mediterranean Mining Solutions",
  short: "MMS",
  tagline: "High-Purity Industrial Silica · Mediterranean Basin",
  address: "Zone Industrielle, Radès Port Authority, Ben Arous 2040, Tunisia",
  phone: "+216 71 449 200",
  email: "trade@medminingsolutions.com",
} as const;

// Curated, sector-relevant photography (Unsplash — high resolution, downscaled via query params).
// Categories mapped per Design-doc §6 photo matrix.
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;

// Local assets in /public (user-supplied).
const LOCAL = {
  quarryTerraced: "/construction_et_mines_2-scaled-e1671723103401.jpg", // terraced open-pit quarry, warm neutral
  haulTrucks: "/mining.jpg", // yellow haul trucks in an open pit
} as const;

// All IDs visually verified (Chrome DevTools contact-sheet audit) for sector relevance.
export const IMG = {
  ...LOCAL,
  // /v2 + logistics: bulk carriers, ports, cranes
  bulkCarrier: u("1568347877321-f8935c7dc5a3", 2000), // aerial red bulk carrier at sea
  bulkCarrierDusk: u("1604506522146-316c8bedd874", 2000), // cargo ship at dusk
  portTerminal: u("1686851189462-7cdb1eb894d8", 1800), // dock with cranes + ship
  craneOps: u("1707860139049-5432cfad9fbc", 1600), // bulk ship docked at terminal
  cranes: u("1780052731773-d4a0d70a4ec6", 1600), // industrial port cranes
  // /v1: processing, conveyors, quarry, machinery
  conveyor: u("1578804376914-6d367cd21488", 1800), // processing conveyor in quarry
  quarry: u("1680463990599-9d318aaecf71", 1800), // excavator in open pit
  excavator: u("1523848309072-c199db53f137", 1600), // mining excavators
  stockpileRig: u("1684067241390-32e697757ae7", 1600), // sand pile + metal structure
  // /v3: macro sand, lab, COA
  sandMacro: u("1541683236156-d5f6b1d135de", 1800), // macro photography of sand
  sandClose: u("1672578830708-e9cbc4490d3c", 1600), // close sand texture
  lab: u("1639772823907-a716be4bdecc", 1600), // gloved hand at microscope
  labPipette: u("1614935151651-0bea6508db6b", 1600), // pipette + test tubes
  beakers: u("1532094349884-543bc11b234d", 1600), // clean lab glassware
  // Application-specific (must match the named grade)
  waterFiltration: u("1548839140-29a749e1cf4d", 1600), // clean water poured into a clear glass — filtration
  ceramics: u("1610701596007-11502861dcfa", 1600), // cream/tan ceramic vessels — technical ceramics
  // Material / packaging
  bigBag: u("1777793919630-c9f8f50486d2", 1600), // industrial aggregate piles
  glassMelt: u("1767725185080-5e8bffbfaee9", 1600), // glassblower with molten glass
  // Glass story (v2) — all verified, no women's faces
  glassFurnace: u("1773125465958-4b83adc60498", 2000), // glowing molten glass on rod (hero)
  glassHeating: u("1777107499127-af12d8804cef", 1800), // heating glass in furnace
  forgeCoals: u("1782054845316-3a333d6d8fb1", 1800), // glowing forge coals/flames (dark section)
  fireWall: u("1500670602153-5e2dd3c75f20", 2000), // pure flame texture (CTA band bg)
  glassJars: u("1475906067486-6c5bd3aa9c9d", 1600), // rows of empty glass jars
  glassBottles: u("1608745167260-e15bc0e0521f", 1600), // clear glass bottles
  glassGreen: u("1765850257843-aa029ab7769c", 1800), // dark green glass bottle rows
  glassAmber: u("1778940454587-2bef3ac0dfbb", 1600), // amber bottle caps bokeh
  labTube: u("1639772823849-6efbd173043c", 1600), // gloved hand + test tube (no face)
  testTubes: u("1579154341184-22069e4614d2", 1600), // clear test tubes rack
  foundryPour: u("1684259499227-e9844ab79747", 1600), // molten metal pour / foundry casting
} as const;

// Headline purity/spec stats (material-led, used in hero strips)
export const HERO_STATS = [
  { k: "SiO₂ PURITY", v: "99.65%" },
  { k: "Fe₂O₃ MAX", v: "0.012%" },
  { k: "GRAIN SIZE", v: "0.1–0.4mm" },
  { k: "UNIFORMITY Cᵤ", v: "< 1.3" },
] as const;

// A. Chemical composition (Design-doc §5.A)
export const CHEMICAL = [
  { k: "SiO₂", name: "Silicon Dioxide", v: "99.65", unit: "%", tol: "± 0.05", note: "High-purity premium threshold" },
  { k: "Fe₂O₃", name: "Iron Oxide", v: "0.012", unit: "% max", tol: "≤ limit", note: "Glass-grade colour consistency" },
  { k: "Al₂O₃", name: "Aluminium Oxide", v: "0.12", unit: "%", tol: "nominal", note: "Refractory structural balance" },
  { k: "TiO₂", name: "Titanium Dioxide", v: "0.03", unit: "%", tol: "nominal", note: "Mineral purity verification" },
] as const;

// B. Physical sieve analysis (Design-doc §5.B)
export const SIEVE = [
  { k: "Effective grain size", v: "0.10 – 0.40", unit: "mm" },
  { k: "Retained on 35 mesh (≥0.500 mm)", v: "0.1", unit: "% max" },
  { k: "Passing 140 mesh (≤0.106 mm)", v: "0.5", unit: "% max" },
  { k: "Uniformity coefficient (Cᵤ)", v: "< 1.3", unit: "" },
] as const;

// C. Logistics (Design-doc §5.C)
export const LOGISTICS = {
  packaging: [
    { k: "Ocean bulk carrier", v: "30,000", unit: "MT", note: "Dedicated holds" },
    { k: "Industrial big-bags", v: "1.5", unit: "T", note: "Double-sleeved · UV-stabilised" },
  ],
  ports: [
    { code: "RADÈS", country: "Tunisia", term: "FOB", lane: "→ Rotterdam", days: "9.2" },
    { code: "ALEXANDRIA", country: "Egypt", term: "FOB", lane: "→ Genoa", days: "6.4" },
  ],
  incoterms: "Incoterms 2020 · FOB / CIF destination routing",
} as const;

// Application grades (Design-doc §2 / §4 grid)
export const APPLICATIONS = [
  { code: "GL-99", industry: "Container & Float Glass", spec: "SiO₂ ≥ 99.6 · Fe₂O₃ ≤ 0.012%", alt: "Rows of clear glass containers — the end product of glass-grade silica sand.", img: IMG.glassJars },
  { code: "FD-AFS", industry: "Foundry & Casting", spec: "AFS 45–55 · uniform Cᵤ < 1.3", alt: "Molten metal pour with sparks in a foundry, illustrating foundry-grade silica sand use in casting.", img: IMG.foundryPour },
  { code: "WF-EN", industry: "Water Filtration", spec: "EN 12904 · NSF 61 graded", alt: "Clean, clear water poured into a glass — the result of silica filtration media graded to EN 12904 for potable water treatment.", img: IMG.waterFiltration },
  { code: "CR-TECH", industry: "Technical Ceramics", spec: "Low TiO₂ · high whiteness", alt: "Cream and tan ceramic vessels made from high-purity, low-iron silica for technical ceramics.", img: IMG.ceramics },
] as const;

// Compliance frameworks (Design-doc §2 compliance bar)
export const COMPLIANCE = ["ISO 9001", "EN 12904", "NSF 61", "AFS Fineness", "Incoterms 2020"] as const;

export const VARIANTS = [
  { id: "1", path: "/1", label: "Industrial Spec Engine", tag: "RAW UTILITY" },
  { id: "2", path: "/2", label: "Deep Basin Carrier", tag: "MARITIME SCALE" },
  { id: "3", path: "/3", label: "Material Monolith", tag: "PREMIUM ORIGIN" },
] as const;
