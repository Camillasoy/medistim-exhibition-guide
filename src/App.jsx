import { useState, useRef, useEffect } from "react";

// ============================================================
// CONTENT — edit all text and image URLs here
// ============================================================
const CONTENT = {
  // Header
  headerTitle: "Medistim",
  headerSubtitle: "Exhibition & Congress Guide",

  // Navigation
  navLinks: ["Overview", "Booth Design", "Visual Elements", "Collateral", "Merchandise", "Team", "Checklist"],
  navIds:   ["overview", "booth",        "visual",           "collateral", "merchandise", "team",  "checklist"],

  // Hero
  heroBadge: "Version 1.0",
  heroTitle: "Exhibition & Congress Guide",
  heroDate: "Updated April 2026",
  heroDescription: "Unified brand experience for all events and congresses",

  // Hero carousel — swap src for any image URL
  carouselSlides: [
    { src: "https://link.assetfile.io/6muQIIZf8XXrXjvFRbkIxQ/EACTS+2025.jpg", alt: "Medistim at EACTS" },
    { src: "https://link.assetfile.io/1pA3wBiAjYMXH0ywal5DNz/201910048884.jpg", alt: "Exhibition Hall" },
    { src: "https://link.assetfile.io/5GFhfpt8XFhllau2ryA8aG/AdobeStock_495620626.jpg", alt: "Modern Trade Show" },
  ],

  // Overview
  overviewTitle: "Overview & Brand Principles",
  overviewDescription: "This guide ensures that every Medistim exhibition booth, collateral, and interaction reflects a consistent brand identity. It helps all teams maintain the same visual and experiential quality at every congress.",

  brandPrinciples: [
    { title: "Consistency", description: "All booths should reflect the same tone, color palette, and brand hierarchy." },
    { title: "Clarity", description: "Spaces and materials should be minimal, functional, and easy to navigate." },
    { title: "Simplicity", description: "Every element should serve a purpose and reinforce our brand promise." },
    { title: "Human Connection", description: "Our people embody our brand—approachable, professional, and warm." },
  ],

  colorPaletteTitle: "Brand Color Palette",
  colorPaletteDescription: "The primary colors define the visual identity of Medistim. Orange 500 is the characteristic brand driver. Used with generous white space it gives an overall bright appearance. The darker orange 950 is used to accentuate and emotionalize.",

  colorPalette: [
    { name: "White", value: "#FFFFFF", percentage: "70%" },
    { name: "Deep Black", value: "#250801", percentage: "20%" },
    { name: "Medistim Orange", value: "#F36C21", percentage: "10%" },
  ],

  colorGuideTitle: "Complete Color Guide",
  colorGuideDescription: "Access the full Medistim color system, including gradients, tints, and accessibility guidelines.",
  colorGuideButton: "View in Frontify",
  colorGuideUrl: "https://frontify.com",

  // Booth Design
  boothTitle: "Examples of Booth Designs and Layout",
  boothCards: [
    { src: "https://link.assetfile.io/50cZ5nDNt42FgJWcbO63xr/Mockup+Vascular+Backwall+-+1+rollup+and+1+Screen.png", alt: "Booth Front View", badge: "Vascular Booth Setup Example", badgeColor: "#F36C21", title: "Booth Perspective", description: "Primary visitor angle with visible logo placement" },
    { src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80", alt: "Floor Plan Layout", badge: "Cardiac", badgeColor: "#250801", title: "Layout Configuration", description: "Space allocation for demo zone and meeting areas" },
    { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80", alt: "Booth Side View", badge: "Vascular Congress", badgeColor: "#F36C21", title: "Side Configuration", description: "Optimal flow and accessibility from adjacent aisles" },
    { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80", alt: "Booth Interior View", badge: "Liver Congress 2025", badgeColor: "#250801", title: "Interior Setup", description: "Product display and visitor engagement zones" },
    { src: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&q=80", alt: "Booth Configuration", badge: "EACTS 2025", badgeColor: "#F36C21", title: "Booth Configuration", description: "Professional setup with clear brand visibility" },
    { src: "https://images.unsplash.com/photo-1561489401-fc2876ced162?w=800&q=80", alt: "Exhibition Layout", badge: "German Congress 2023", badgeColor: "#250801", title: "Exhibition Layout", description: "Strategic positioning for optimal visitor flow" },
  ],
  boothRequirementsTitle: "Design Requirements",
  boothRequirements: [
    "Logo always visible from primary visitor angles",
    "Color ratio: 70% white, 20% deep black, 10% Medistim orange",
    "Include dedicated demo zone and meeting table area",
    "Use clean, soft lighting and matte materials to avoid glare",
  ],

  // Visual Elements
  visualTitle: "Visual Elements",
  visualDescription: "Ensure all visuals follow Medistim's core palette and typography system. Copy tone should be concise, factual, and benefits-focused.",

  verticalBannerTitle: "Vertical Banner",
  verticalBannerDescription: "2m × 0.8m roll-up banner",
  verticalBannerText: "Position at booth entry points",
  verticalBannerSrc: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=600&q=80",

  horizontalBannerTitle: "Horizontal Banner",
  horizontalBannerDescription: "1m × 3m backdrop banner",
  horizontalBannerText: "Main backdrop for booth wall",

  digitalScreenTitle: "Digital Screen Layouts",
  digitalScreenDescription: "16:9 screen format for product demos and presentations",
  digitalScreenHeading: "Product Innovation",
  digitalScreenSubtext: "Interactive demonstrations and key features",
  digitalScreenGuidelines: [
    "Keep animations subtle and professional",
    "Use high-contrast text for readability",
    "Auto-loop content every 60–90 seconds",
  ],

  signageTitle: "Directional Signage",
  signageDescription: "Clear wayfinding for booth zones",
  signageLabels: ["Demo Area", "Meeting Space", "Information"],

  // Print Collateral
  collateralTitle: "Print Collateral",
  collateralDescription: "Keep layouts minimal with generous whitespace. Headlines should be short and data-supported. Use #F36C21 for key highlights only.",
  collateralItems: [
    { src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&q=80", title: "Product Brochure", description: "A4 tri-fold, 8–12 pages" },
    { src: "https://images.unsplash.com/photo-1568667256549-094345857637?w=400&q=80", title: "One-Pager", description: "A4 single sheet, quick overview" },
    { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80", title: "Case Study", description: "A4, data-driven results" },
  ],

  // Merchandise
  merchandiseTitle: "Giveaways & Merchandise",
  merchandiseDescription: "All merchandise should be displayed in a tidy, non-cluttered manner. Use pen holders for pens, and arrange notebooks and microfiber cleaning cloths in neat groups of five or six. Candies or chocolates should be presented in a clean bowl—never scattered loosely.",
  merchandiseItems: [
    { src: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&q=80", title: "Canvas Tote Bag", description: "Natural cotton with logo" },
    { src: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&q=80", title: "Premium Pen", description: "Medistim orange pen from Prodir" },
    { src: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=400&q=80", title: "Microfiber Cloth", description: "Branded cleaning cloth" },
    { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", title: "Mint Box", description: "Mint boxes 23 gr" },
  ],
  webshopUrl: "https://medistim.apogeestorefront.com/storefront/index.ep",

  // Team
  teamTitle: "Team Presentation",
  teamDescription: "Team members should embody Medistim's brand values: precision, empathy, and professionalism. Use calm tones and open body language when engaging visitors.",
  teamImageSrc: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",

  engagementTitle: "Visitor Engagement",
  engagementPoints: [
    "Approach with a warm smile and open posture",
    "Ask open-ended questions to understand visitor needs",
    "Maintain professional distance while being approachable",
    "Always follow up with contact information",
  ],

  attireTitle: "Attire Guidelines",
  attireItems: [
    { color: "#250801", title: "Business Formal", description: "Dark suits preferred" },
    { color: "#FFFFFF", title: "White Shirts", description: "Crisp and clean", border: true },
    { color: "#F36C21", title: "Brand Accent", description: "Optional tie or accessory" },
  ],

  nameBadgeTitle: "Name Badge",
  nameBadgeName: "Jane Doe",
  nameBadgeRole: "Clinical Specialist",

  // Checklist
  checklistTitle: "Pre-Event Checklist",
  checklistDescription: "Complete all items before the event to ensure a smooth setup and successful exhibition.",
  checklistItems: [
    { key: "graphics",   label: "Booth graphics printed and packed" },
    { key: "demo",       label: "Demo equipment tested and ready" },
    { key: "brochures",  label: "Brochures and giveaways prepared" },
    { key: "attire",     label: "Team attire aligned with dress code" },
    { key: "review",     label: "Brand review completed" },
  ],
  checklistComplete: "All items completed! Ready for the event.",

  // Footer
  footerTitle: "Exhibition & Congress Guide",
  footerVersion: "Version 1.0 – Updated October 2025",
  footerContact: "For questions or support, contact the Marketing Team",
};

// ============================================================
// Inline editable text — click to edit, blur/Enter to save
// ============================================================
function Editable({ value, onChange, tag: Tag = "span", className = "", multiline = false }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const ref = useRef(null);

  useEffect(() => { setDraft(value); }, [value]);
  useEffect(() => { if (editing && ref.current) ref.current.focus(); }, [editing]);

  const commit = () => { setEditing(false); if (draft !== value) onChange(draft); };

  if (editing) {
    const shared = {
      ref,
      value: draft,
      onChange: e => setDraft(e.target.value),
      onBlur: commit,
      style: { width: "100%", background: "rgba(243,108,33,0.08)", border: "1.5px solid #F36C21", borderRadius: 4, padding: "2px 6px", font: "inherit", color: "inherit", outline: "none", resize: multiline ? "vertical" : "none" },
    };
    return multiline
      ? <textarea {...shared} rows={3} onKeyDown={e => e.key === "Escape" && commit()} />
      : <input {...shared} onKeyDown={e => (e.key === "Enter" || e.key === "Escape") && commit()} />;
  }

  return (
    <Tag
      className={className}
      onClick={() => setEditing(true)}
      title="Click to edit"
      style={{ cursor: "text", borderRadius: 3, transition: "background 0.15s" }}
      onMouseEnter={e => e.currentTarget.style.background = "rgba(243,108,33,0.07)"}
      onMouseLeave={e => e.currentTarget.style.background = ""}
    >
      {value}
    </Tag>
  );
}

// ============================================================
// Carousel
// ============================================================
function Carousel({ slides }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div style={{ position: "relative", width: "100%", height: 420, overflow: "hidden", background: "#111" }}>
      {slides.map((s, i) => (
        <img key={i} src={s.src} alt={s.alt}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: i === idx ? 1 : 0, transition: "opacity 0.8s ease" }} />
      ))}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.5))" }} />
      <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)}
            style={{ width: i === idx ? 24 : 8, height: 8, borderRadius: 4, background: i === idx ? "#F36C21" : "rgba(255,255,255,0.5)", border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Section wrapper
// ============================================================
function Section({ id, bg = "#fff", children }) {
  return (
    <section id={id} style={{ background: bg, padding: "64px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

// ============================================================
// Card
// ============================================================
function Card({ children, style = {} }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden", ...style }}>
      {children}
    </div>
  );
}

// ============================================================
// Main App
// ============================================================
export default function App() {
  const [c, setC] = useState(CONTENT);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("banners");
  const [checklist, setChecklist] = useState(() =>
    Object.fromEntries(c.checklistItems.map(i => [i.key, false]))
  );

  // Generic updaters
  const set = (path, value) => {
    setC(prev => {
      const next = { ...prev };
      const parts = path.split(".");
      let obj = next;
      for (let i = 0; i < parts.length - 1; i++) {
        obj[parts[i]] = Array.isArray(obj[parts[i]]) ? [...obj[parts[i]]] : { ...obj[parts[i]] };
        obj = obj[parts[i]];
      }
      obj[parts[parts.length - 1]] = value;
      return next;
    });
  };

  const setArr = (arr, idx, field, value) => {
    setC(prev => ({
      ...prev,
      [arr]: prev[arr].map((item, i) => i === idx ? { ...item, [field]: value } : item),
    }));
  };

  const scroll = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const allChecked = Object.values(checklist).every(Boolean);

  const O = "#F36C21";
  const DARK = "#250801";

  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "system-ui, -apple-system, sans-serif", color: DARK }}>

      {/* ── HEADER ── */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "#fff", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, background: O, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 18, flexShrink: 0 }}>M</div>
            <div>
              <Editable value={c.headerTitle} onChange={v => set("headerTitle", v)} tag="div" className="" style={{ fontWeight: 700, fontSize: 16, color: DARK }} />
              <Editable value={c.headerSubtitle} onChange={v => set("headerSubtitle", v)} tag="div" style={{ fontSize: 12, color: "#6b7280" }} />
            </div>
          </div>

          {/* Desktop nav */}
          <nav style={{ display: "flex", gap: 28, alignItems: "center" }} className="desktop-nav">
            {c.navLinks.map((link, i) => (
              <button key={i} onClick={() => scroll(c.navIds[i])}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: "#4b5563", padding: 0 }}
                onMouseEnter={e => e.currentTarget.style.color = O}
                onMouseLeave={e => e.currentTarget.style.color = "#4b5563"}
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(o => !o)}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: 22, display: "none" }} className="mobile-toggle">
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div style={{ borderTop: "1px solid #e5e7eb", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
            {c.navLinks.map((link, i) => (
              <button key={i} onClick={() => scroll(c.navIds[i])}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: 15, color: "#374151", textAlign: "left", padding: 0 }}>
                {link}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section style={{ background: "#f9fafb", padding: "72px 24px 64px", textAlign: "center" }}>
        <span style={{ display: "inline-block", background: O, color: "#fff", fontSize: 12, fontWeight: 600, borderRadius: 20, padding: "4px 14px", marginBottom: 16 }}>
          <Editable value={c.heroBadge} onChange={v => set("heroBadge", v)} />
        </span>
        <Editable value={c.heroTitle} onChange={v => set("heroTitle", v)} tag="h1"
          style={{ fontSize: 40, fontWeight: 700, color: DARK, marginBottom: 12 }} />
        <Editable value={c.heroDate} onChange={v => set("heroDate", v)} tag="p"
          style={{ color: "#6b7280", marginBottom: 8 }} />
        <Editable value={c.heroDescription} onChange={v => set("heroDescription", v)} tag="p"
          style={{ color: "#374151", maxWidth: 560, margin: "0 auto" }} />
      </section>

      {/* ── CAROUSEL ── */}
      <Carousel slides={c.carouselSlides} />

      {/* ── OVERVIEW ── */}
      <Section id="overview">
        <Editable value={c.overviewTitle} onChange={v => set("overviewTitle", v)} tag="h2"
          style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }} />
        <Editable value={c.overviewDescription} onChange={v => set("overviewDescription", v)} tag="p"
          style={{ color: "#6b7280", maxWidth: 720, marginBottom: 40 }} multiline />

        {/* Brand Principles */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 40 }}>
          {c.brandPrinciples.map((p, i) => (
            <Card key={i}>
              <div style={{ padding: 24 }}>
                <div style={{ width: 32, height: 32, background: O, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <span style={{ color: "#fff", fontSize: 16 }}>✓</span>
                </div>
                <Editable value={p.title} onChange={v => setArr("brandPrinciples", i, "title", v)} tag="h4"
                  style={{ fontWeight: 600, marginBottom: 6, color: DARK }} />
                <Editable value={p.description} onChange={v => setArr("brandPrinciples", i, "description", v)} tag="p"
                  style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }} multiline />
              </div>
            </Card>
          ))}
        </div>

        {/* Color palette */}
        <Card>
          <div style={{ padding: 28 }}>
            <Editable value={c.colorPaletteTitle} onChange={v => set("colorPaletteTitle", v)} tag="h3"
              style={{ fontWeight: 600, marginBottom: 8, color: DARK }} />
            <Editable value={c.colorPaletteDescription} onChange={v => set("colorPaletteDescription", v)} tag="p"
              style={{ fontSize: 14, color: "#6b7280", marginBottom: 24 }} multiline />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {c.colorPalette.map((col, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ width: "100%", height: 80, background: col.value, borderRadius: 8, border: "1px solid #e5e7eb", marginBottom: 10 }} />
                  <div style={{ fontSize: 14, fontWeight: 500, color: DARK }}>{col.name}</div>
                  <div style={{ fontSize: 12, color: "#9ca3af" }}>{col.value}</div>
                  <span style={{ display: "inline-block", marginTop: 6, border: "1px solid #e5e7eb", borderRadius: 12, padding: "2px 10px", fontSize: 12, color: "#374151" }}>{col.percentage}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Frontify link */}
        <Card style={{ marginTop: 20 }}>
          <div style={{ padding: 24, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <div>
              <Editable value={c.colorGuideTitle} onChange={v => set("colorGuideTitle", v)} tag="h4"
                style={{ fontWeight: 600, color: DARK, marginBottom: 4 }} />
              <Editable value={c.colorGuideDescription} onChange={v => set("colorGuideDescription", v)} tag="p"
                style={{ fontSize: 14, color: "#6b7280" }} />
            </div>
            <a href={c.colorGuideUrl} target="_blank" rel="noopener noreferrer"
              style={{ background: O, color: "#fff", border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 500, cursor: "pointer", textDecoration: "none", whiteSpace: "nowrap" }}>
              {c.colorGuideButton}
            </a>
          </div>
        </Card>
      </Section>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb" }} />

      {/* ── BOOTH DESIGN ── */}
      <Section id="booth" bg="#f9fafb">
        <Editable value={c.boothTitle} onChange={v => set("boothTitle", v)} tag="h2"
          style={{ fontSize: 28, fontWeight: 700, marginBottom: 32 }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginBottom: 32 }}>
          {c.boothCards.map((bc, i) => (
            <Card key={i}>
              <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                <img src={bc.src} alt={bc.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <span style={{ position: "absolute", top: 12, left: 12, background: bc.badgeColor, color: "#fff", fontSize: 11, fontWeight: 600, borderRadius: 12, padding: "3px 10px" }}>
                  <Editable value={bc.badge} onChange={v => setArr("boothCards", i, "badge", v)} />
                </span>
              </div>
              <div style={{ padding: "16px 20px" }}>
                <Editable value={bc.title} onChange={v => setArr("boothCards", i, "title", v)} tag="h4"
                  style={{ fontWeight: 600, color: DARK, marginBottom: 4 }} />
                <Editable value={bc.description} onChange={v => setArr("boothCards", i, "description", v)} tag="p"
                  style={{ fontSize: 13, color: "#6b7280" }} multiline />
              </div>
            </Card>
          ))}
        </div>

        <Card>
          <div style={{ padding: 24 }}>
            <Editable value={c.boothRequirementsTitle} onChange={v => set("boothRequirementsTitle", v)} tag="h3"
              style={{ fontWeight: 600, color: DARK, marginBottom: 16 }} />
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {c.boothRequirements.map((req, i) => (
                <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: O, marginTop: 1, flexShrink: 0 }}>✓</span>
                  <Editable value={req} onChange={v => setC(prev => ({ ...prev, boothRequirements: prev.boothRequirements.map((r, j) => j === i ? v : r) }))} tag="span"
                    style={{ color: "#374151", fontSize: 14 }} />
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </Section>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb" }} />

      {/* ── VISUAL ELEMENTS ── */}
      <Section id="visual">
        <Editable value={c.visualTitle} onChange={v => set("visualTitle", v)} tag="h2"
          style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }} />
        <Editable value={c.visualDescription} onChange={v => set("visualDescription", v)} tag="p"
          style={{ color: "#6b7280", marginBottom: 32, maxWidth: 680 }} multiline />

        {/* Tabs */}
        <div style={{ borderBottom: "1px solid #e5e7eb", marginBottom: 28, display: "flex", gap: 0 }}>
          {[["banners", "Banners"], ["digital", "Digital Screens"], ["signage", "Signage"]].map(([key, label]) => (
            <button key={key} onClick={() => setActiveTab(key)}
              style={{ padding: "10px 20px", border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: activeTab === key ? 600 : 400, color: activeTab === key ? O : "#6b7280", borderBottom: activeTab === key ? `2px solid ${O}` : "2px solid transparent", marginBottom: -1, transition: "all 0.15s" }}>
              {label}
            </button>
          ))}
        </div>

        {activeTab === "banners" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            <Card>
              <div style={{ padding: 20 }}>
                <Editable value={c.verticalBannerTitle} onChange={v => set("verticalBannerTitle", v)} tag="h3"
                  style={{ fontWeight: 600, color: DARK, marginBottom: 4 }} />
                <Editable value={c.verticalBannerDescription} onChange={v => set("verticalBannerDescription", v)} tag="p"
                  style={{ fontSize: 13, color: "#6b7280", marginBottom: 16 }} />
                <img src={c.verticalBannerSrc} alt="Vertical Banner" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", borderRadius: 8, marginBottom: 12 }} />
                <Editable value={c.verticalBannerText} onChange={v => set("verticalBannerText", v)} tag="p"
                  style={{ fontSize: 13, color: "#6b7280" }} />
              </div>
            </Card>
            <Card>
              <div style={{ padding: 20 }}>
                <Editable value={c.horizontalBannerTitle} onChange={v => set("horizontalBannerTitle", v)} tag="h3"
                  style={{ fontWeight: 600, color: DARK, marginBottom: 4 }} />
                <Editable value={c.horizontalBannerDescription} onChange={v => set("horizontalBannerDescription", v)} tag="p"
                  style={{ fontSize: 13, color: "#6b7280", marginBottom: 16 }} />
                <div style={{ aspectRatio: "3/1", background: "#f3f4f6", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", gap: 16, padding: 20, marginBottom: 12 }}>
                  <div style={{ width: 44, height: 44, background: O, borderRadius: 6, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 13, color: "#374151" }}>Horizontal Layout</div>
                    <div style={{ fontSize: 12, color: "#9ca3af" }}>Logo left, content right</div>
                  </div>
                </div>
                <Editable value={c.horizontalBannerText} onChange={v => set("horizontalBannerText", v)} tag="p"
                  style={{ fontSize: 13, color: "#6b7280" }} />
              </div>
            </Card>
          </div>
        )}

        {activeTab === "digital" && (
          <Card>
            <div style={{ padding: 24 }}>
              <Editable value={c.digitalScreenTitle} onChange={v => set("digitalScreenTitle", v)} tag="h3"
                style={{ fontWeight: 600, color: DARK, marginBottom: 4 }} />
              <Editable value={c.digitalScreenDescription} onChange={v => set("digitalScreenDescription", v)} tag="p"
                style={{ fontSize: 13, color: "#6b7280", marginBottom: 20 }} />
              <div style={{ aspectRatio: "16/9", background: DARK, borderRadius: 10, overflow: "hidden", marginBottom: 20 }}>
                <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 32, color: "#fff" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ width: 44, height: 44, background: O, borderRadius: 8 }} />
                    <span style={{ background: "#fff", color: DARK, fontSize: 12, fontWeight: 600, borderRadius: 12, padding: "4px 12px" }}>Live Demo</span>
                  </div>
                  <div>
                    <Editable value={c.digitalScreenHeading} onChange={v => set("digitalScreenHeading", v)} tag="h4"
                      style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 6 }} />
                    <Editable value={c.digitalScreenSubtext} onChange={v => set("digitalScreenSubtext", v)} tag="p"
                      style={{ fontSize: 14, color: "#d1d5db" }} />
                  </div>
                </div>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {c.digitalScreenGuidelines.map((g, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: O, marginTop: 6, flexShrink: 0 }} />
                    <Editable value={g} onChange={v => setC(prev => ({ ...prev, digitalScreenGuidelines: prev.digitalScreenGuidelines.map((x, j) => j === i ? v : x) }))} tag="span"
                      style={{ fontSize: 14, color: "#6b7280" }} />
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        )}

        {activeTab === "signage" && (
          <Card>
            <div style={{ padding: 24 }}>
              <Editable value={c.signageTitle} onChange={v => set("signageTitle", v)} tag="h3"
                style={{ fontWeight: 600, color: DARK, marginBottom: 4 }} />
              <Editable value={c.signageDescription} onChange={v => set("signageDescription", v)} tag="p"
                style={{ fontSize: 13, color: "#6b7280", marginBottom: 20 }} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {c.signageLabels.map((label, i) => (
                  <div key={i} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 10, padding: 20, textAlign: "center" }}>
                    <div style={{ width: 32, height: 32, background: O, borderRadius: 6, margin: "0 auto 10px" }} />
                    <Editable value={label} onChange={v => setC(prev => ({ ...prev, signageLabels: prev.signageLabels.map((l, j) => j === i ? v : l) }))} tag="p"
                      style={{ fontSize: 13, color: DARK, fontWeight: 500 }} />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        )}
      </Section>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb" }} />

      {/* ── COLLATERAL ── */}
      <Section id="collateral" bg="#f9fafb">
        <Editable value={c.collateralTitle} onChange={v => set("collateralTitle", v)} tag="h2"
          style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }} />
        <Editable value={c.collateralDescription} onChange={v => set("collateralDescription", v)} tag="p"
          style={{ color: "#6b7280", marginBottom: 32, maxWidth: 680 }} multiline />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {c.collateralItems.map((item, i) => (
            <Card key={i}>
              <div style={{ aspectRatio: "1/1.4", overflow: "hidden", background: "#f3f4f6" }}>
                <img src={item.src} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "14px 16px" }}>
                <Editable value={item.title} onChange={v => setArr("collateralItems", i, "title", v)} tag="h4"
                  style={{ fontWeight: 600, color: DARK, marginBottom: 4 }} />
                <Editable value={item.description} onChange={v => setArr("collateralItems", i, "description", v)} tag="p"
                  style={{ fontSize: 13, color: "#6b7280" }} />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb" }} />

      {/* ── MERCHANDISE ── */}
      <Section id="merchandise">
        <Editable value={c.merchandiseTitle} onChange={v => set("merchandiseTitle", v)} tag="h2"
          style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }} />
        <Editable value={c.merchandiseDescription} onChange={v => set("merchandiseDescription", v)} tag="p"
          style={{ color: "#6b7280", marginBottom: 32, maxWidth: 680 }} multiline />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginBottom: 32 }}>
          {c.merchandiseItems.map((item, i) => (
            <Card key={i}>
              <div style={{ aspectRatio: "1/1", overflow: "hidden", background: "#f3f4f6" }}>
                <img src={item.src} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "14px 16px", textAlign: "center" }}>
                <Editable value={item.title} onChange={v => setArr("merchandiseItems", i, "title", v)} tag="p"
                  style={{ fontWeight: 500, color: DARK, marginBottom: 4 }} />
                <Editable value={item.description} onChange={v => setArr("merchandiseItems", i, "description", v)} tag="p"
                  style={{ fontSize: 12, color: "#9ca3af" }} />
              </div>
            </Card>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a href={c.webshopUrl} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: O, color: "#fff", borderRadius: 8, padding: "12px 28px", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
            Go to Webshop
          </a>
        </div>
      </Section>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb" }} />

      {/* ── TEAM ── */}
      <Section id="team" bg="#f9fafb">
        <Editable value={c.teamTitle} onChange={v => set("teamTitle", v)} tag="h2"
          style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }} />
        <Editable value={c.teamDescription} onChange={v => set("teamDescription", v)} tag="p"
          style={{ color: "#6b7280", marginBottom: 32, maxWidth: 680 }} multiline />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24 }} className="team-grid">
          <Card>
            <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
              <img src={c.teamImageSrc} alt="Team" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ padding: 24 }}>
              <Editable value={c.engagementTitle} onChange={v => set("engagementTitle", v)} tag="h4"
                style={{ fontWeight: 600, color: DARK, marginBottom: 14 }} />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {c.engagementPoints.map((pt, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: O, marginTop: 7, flexShrink: 0 }} />
                    <Editable value={pt} onChange={v => setC(prev => ({ ...prev, engagementPoints: prev.engagementPoints.map((x, j) => j === i ? v : x) }))} tag="span"
                      style={{ fontSize: 14, color: "#6b7280" }} />
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Card>
              <div style={{ padding: 24 }}>
                <Editable value={c.attireTitle} onChange={v => set("attireTitle", v)} tag="h4"
                  style={{ fontWeight: 600, color: DARK, marginBottom: 16 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {c.attireItems.map((a, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, background: a.color, borderRadius: 8, border: a.border ? "2px solid #d1d5db" : "none", flexShrink: 0 }} />
                      <div>
                        <Editable value={a.title} onChange={v => setArr("attireItems", i, "title", v)} tag="p"
                          style={{ fontWeight: 500, fontSize: 14, color: DARK, margin: 0 }} />
                        <Editable value={a.description} onChange={v => setArr("attireItems", i, "description", v)} tag="p"
                          style={{ fontSize: 12, color: "#9ca3af", margin: 0 }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ padding: 24 }}>
                <Editable value={c.nameBadgeTitle} onChange={v => set("nameBadgeTitle", v)} tag="h4"
                  style={{ fontWeight: 600, color: DARK, marginBottom: 16 }} />
                <div style={{ border: "1.5px solid #e5e7eb", borderRadius: 10, padding: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 36, height: 36, background: O, borderRadius: 6, flexShrink: 0 }} />
                    <span style={{ fontSize: 11, color: "#9ca3af", fontWeight: 600, letterSpacing: 1 }}>MEDISTIM</span>
                  </div>
                  <Editable value={c.nameBadgeName} onChange={v => set("nameBadgeName", v)} tag="p"
                    style={{ fontWeight: 600, color: DARK, margin: 0, fontSize: 15 }} />
                  <Editable value={c.nameBadgeRole} onChange={v => set("nameBadgeRole", v)} tag="p"
                    style={{ fontSize: 12, color: "#9ca3af", margin: 0 }} />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb" }} />

      {/* ── CHECKLIST ── */}
      <Section id="checklist">
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <Editable value={c.checklistTitle} onChange={v => set("checklistTitle", v)} tag="h2"
            style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }} />
          <Editable value={c.checklistDescription} onChange={v => set("checklistDescription", v)} tag="p"
            style={{ color: "#6b7280", marginBottom: 32 }} multiline />

          <Card style={{ border: allChecked ? `2px solid ${O}` : "1px solid #e5e7eb", background: allChecked ? "#fff8f4" : "#fff" }}>
            <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 0 }}>
              {c.checklistItems.map((item, i) => (
                <div key={item.key}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0" }}>
                    <button onClick={() => setChecklist(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                      style={{ width: 22, height: 22, borderRadius: 5, border: `2px solid ${checklist[item.key] ? O : "#d1d5db"}`, background: checklist[item.key] ? O : "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.15s" }}>
                      {checklist[item.key] && <span style={{ color: "#fff", fontSize: 13, lineHeight: 1 }}>✓</span>}
                    </button>
                    <Editable value={item.label} onChange={v => setC(prev => ({ ...prev, checklistItems: prev.checklistItems.map((ci, j) => j === i ? { ...ci, label: v } : ci) }))} tag="span"
                      style={{ fontSize: 15, color: checklist[item.key] ? "#9ca3af" : "#374151", textDecoration: checklist[item.key] ? "line-through" : "none" }} />
                  </div>
                  {i < c.checklistItems.length - 1 && <hr style={{ border: "none", borderTop: "1px solid #f3f4f6", margin: 0 }} />}
                </div>
              ))}

              {allChecked && (
                <div style={{ marginTop: 20, background: O, borderRadius: 10, padding: 20, textAlign: "center", color: "#fff" }}>
                  <div style={{ fontSize: 28, marginBottom: 6 }}>✓</div>
                  <Editable value={c.checklistComplete} onChange={v => set("checklistComplete", v)} tag="p"
                    style={{ margin: 0, fontWeight: 500 }} />
                </div>
              )}
            </div>
          </Card>
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <footer style={{ background: DARK, color: "#fff", padding: "48px 24px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ width: 36, height: 36, background: O, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 16 }}>M</div>
          <span style={{ fontWeight: 600, fontSize: 16 }}>Medistim</span>
        </div>
        <Editable value={c.footerTitle} onChange={v => set("footerTitle", v)} tag="p"
          style={{ fontSize: 14, color: "#9ca3af", margin: "0 0 4px" }} />
        <Editable value={c.footerVersion} onChange={v => set("footerVersion", v)} tag="p"
          style={{ fontSize: 12, color: "#6b7280", margin: "0 0 16px" }} />
        <Editable value={c.footerContact} onChange={v => set("footerContact", v)} tag="p"
          style={{ fontSize: 12, color: "#6b7280", margin: 0 }} />
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
