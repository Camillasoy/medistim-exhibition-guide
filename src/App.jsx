import { useState, useRef, useEffect } from "react";

// ============================================================
// CONTENT — edit all text and image URLs here
// ============================================================
const CONTENT = {
  // Header
  headerTitle: "Medistim",
  headerSubtitle: "Exhibition & Congress Guide",

  // Navigation
  navLinks: ["Overview", "Booth Design", "Booth Materials", "Merchandise", "Team", "Checklist"],
  navIds:   ["overview", "booth",        "visual",          "merchandise", "team",  "checklist"],

  // Hero
  heroBadge: "Version 1.0.0",
  heroTitle: "Medistim Exhibition & Congress Guide",
  heroDate: "Updated June 2026",
  heroDescription: "This Guide aims to ensure a unified Medistim brand experience for all events and congresses",

  // Hero carousel — swap src for any image URL
  carouselSlides: [
    { src: "https://res.cloudinary.com/dranffioe/image/upload/v1780058868/P1130923_njgsfc.jpg", alt: "Medical Conference Booth" },
    { src: "https://res.cloudinary.com/dranffioe/image/upload/v1780058218/EACTS_2025_esucie.jpg", alt: "Exhibition Hall" },
    { src: "https://res.cloudinary.com/dranffioe/image/upload/v1776683376/AdobeStock_495620626_maic2k.jpg", alt: "Modern Trade Show" },
  ],

  // Overview
  section1Title: "Exhibition Objectives",
  section1Description: "Congresses and exhibitions are among Medistim's most valuable opportunities to showcase our brand and market leadership. The quality of our preparation and professionalism reflects who we are as a company. Consistent booth design, messaging, materials, and presentation ensure a recognizable and high-quality brand experience at every event. By maintaining these standards, we strengthen our reputation, build trust, and reinforce Medistim's position as a trusted partner for surgeons and healthcare providers worldwide.",

  section2Title: "Objectives of the Booth",
  section2Description: "The booth should provide an open, welcoming environment where visitors can learn about Medistim's solutions and engage in meaningful discussions with our team. Product demonstrations, clinical evidence, and educational materials should be presented in a clear and accessible manner, enabling visitors to understand how Medistim supports improved surgical quality and patient outcomes.",

  overviewNote: "NOTE: All trade shows should be preapproved through marketing prior to commitments being made so proper resources and budgets can be allocated.",

  // Booth Design
  boothTitle: "Examples of Booth Designs and Layout",
  boothCards: [
    { src: "https://res.cloudinary.com/dranffioe/image/upload/v1780061341/Image_9_zjpjat.jpg", alt: "Booth Front View", badge: "Vascular Congress 2026", badgeColor: "#1e6765", title: "Vascular Congress 2026", description: "A shell scheme booth 3x2m with the eye graphic backwall. This is from the Charing Cross CX meeting where the leg was used to demonstrate flow." },
    { src: "https://res.cloudinary.com/dranffioe/image/upload/v1780563679/Mockup_Vascular_Backwall_and_2_rollups-for_VAM_pybdnl.png", alt: "Floor Plan Layout", badge: "Vascular", badgeColor: "#1e6765", title: "Layout example", description: "This example features two rollups alongside the large backwall. For a smaller booth footprint, a setup with two rollups and a counter is also recommended." },
    { src: "https://res.cloudinary.com/dranffioe/image/upload/v1780571081/Mockup_2_Rollups_Vascular_-_Medium_wylb0c.png", alt: "Booth Side View", badge: "Vascular", badgeColor: "#1e6765", title: "Two rollups", description: "Vascular rollups for use in small booths or tabletop exhibits. It is recommended to use a counter with the Medistim logo together with this setup." },
    { src: "https://res.cloudinary.com/dranffioe/image/upload/v1780560015/PHOTO-Cardiac_booth_example_diipsl.jpg", alt: "Cardiac Congress 2025", badge: "Cardiac Congress 2025", badgeColor: "#f36c21", title: "Cardiac Congress 2025", description: "Island booth 3x2 with the Heart graphic, this is from ISMICS in Turkey 2025" },
    { src: "https://res.cloudinary.com/dranffioe/image/upload/v1780563779/Mockup_Cardiac_Backwall_-_1_rollup_and_1_Screen_fxkmiq.png", alt: "Booth Configuration", badge: "Cardiac", badgeColor: "#F36C21", title: "Layout example", description: "This example features 1 rollup and a screen with a video loop." },
    { src: "https://res.cloudinary.com/dranffioe/image/upload/v1780571082/Mockup_2_Rollups_Cardiac_-_Medium_dnfdyx.png", alt: "Exhibition Layout", badge: "Cardiac", badgeColor: "#f36c21", title: "Two rollups layout", description: "Cardiac rollups for use in small spaces, we recommend using a counter with the Medistim logo together with this setup." },
  ],
  boothDosTitle: "Booth Presentation Standards",
  boothDos: [
    "Keep booth perimeter open",
    "Hide boxes, coats, suitcases and packaging",
    "Store surplus marketing collateral and giveaways in closed cabinets",
    "Keep counters clear except for approved materials",
    "Keep screens synchronized with approved content",
  ],
  boothDonts: [
    "Use tablecloths",
    "Display handwritten signs",
    "Leave cables visible",
    "Eat at the booth",
    "Store personal belongings in visitor view",
  ],

  // Booth Materials
  boothMaterialsTitle: "Booth Materials",
  boothMaterialsDescription: "Reduce printed literature to a minimum to avoid waste. Guidebooks should always be included at the booth, and QR code posters should be used to give visitors easy access to all supporting materials.",

  boothMaterialsItems: [
    {
      src: "https://res.cloudinary.com/dranffioe/image/upload/v1780053462/Magazine_Mockup_03-Remake_lj4p57.png",
      title: "Guidebooks",
      description: "Guidebooks are a valuable resource for visitors and should always be available at the booth. We recommend having a minimum of 20 copies available for each congress to ensure sufficient supply throughout the event. Printed copies can be ordered directly through the Medistim webshop as part of the event preparation process."
    },
    {
      src: "https://res.cloudinary.com/dranffioe/image/upload/v1780057091/Poster_mockup_Cardiac_azp2vc.png",
      title: "Marketing Material Poster with QR Code",
      description: "These posters, equipped with QR codes linking to our marketing materials, reduce the need for printed brochures and flyers that often go unused or are discarded. There are several different versions available for Cardiac, Vascular and Transplant meetings."
    },
    {
      src: "https://res.cloudinary.com/dranffioe/image/upload/v1780057650/Mockup_INTUI_Posters_tvz8ia.png",
      title: "Other Promotional Posters",
      description: "Example of INTUI promotion posters."
    },
  ],

  // Visual Elements (renamed tabs)
  visualTitle: "Booth Materials",
  visualDescription: "The materials displayed at our booth play an important role in how Medistim is perceived at congresses and exhibitions. Consistent use of approved guidebooks, posters, and supporting materials helps create a professional and recognizable brand experience while ensuring visitors have easy access to relevant product information. The items below are recommended as standard booth materials and should be included as part of the event planning and preparation process.",

  itemsAtBoothDescription: "",
  itemsAtBoothCards: [
    {
      src: "https://res.cloudinary.com/dranffioe/image/upload/v1780053462/Magazine_Mockup_03-Remake_lj4p57.png",
      title: "Guidebooks",
      description: "Guidebooks are a valuable resource for visitors and should always be available at the booth. We recommend having a minimum of 20 copies available for each congress to ensure sufficient supply throughout the event. Printed copies can be ordered directly through the Medistim webshop as part of the event preparation process."
    },
    {
      src: "https://res.cloudinary.com/dranffioe/image/upload/v1780057091/Poster_mockup_Cardiac_azp2vc.png",
      title: "Marketing Material Poster with QR Code",
      description: "These posters, equipped with QR codes linking to our marketing materials, reduce the need for printed brochures and flyers that often go unused or are discarded. The posters are A3-sized and come with a built-in easel back, allowing them to be easily displayed on a counter or tabletop. The posters can be tailored with QR codes directing users to specific web pages."
    },
    {
      title: "Other Promotional Posters",
      description: "Example of INTUI promotion posters.",
      slides: [
        "https://res.cloudinary.com/dranffioe/image/upload/v1780057650/Mockup_INTUI_Posters_tvz8ia.png",
        "https://res.cloudinary.com/dranffioe/image/upload/v1780649481/Flyer_w_QR_Code_for_Guideoboks_yg4fmp.jpg",
        "https://res.cloudinary.com/dranffioe/image/upload/v1780649481/Flyer_EduQ-2-pager_aygrrv.jpg",
      ]
    },
  ],

  supportingVisualsDescription: "Visual assets used to support booth branding and presentation.",
  supportingVisualsCards: [
    {
      src: "https://res.cloudinary.com/dranffioe/image/upload/v1780057091/Poster_mockup_Cardiac_azp2vc.png",
      title: "Flyers",
      description: "Add your flyer image and description here."
    },
    {
      src: "https://res.cloudinary.com/dranffioe/image/upload/v1780057650/Mockup_INTUI_Posters_tvz8ia.png",
      title: "Booth Graphics",
      description: "Add your booth graphics image and description here."
    },
  ],

  digitalScreenTitle: "Digital Screen Layouts",
  digitalScreenDescription: "16:9 screen format for product demos and presentations",
  digitalScreenHeading: "Product Innovation",
  digitalScreenSubtext: "Interactive demonstrations and key features",
  digitalScreenGuidelines: [
    "Keep animations subtle and professional",
    "Use high-contrast text for readability",
    "Auto-loop content every 60–90 seconds",
  ],

  // Merchandise
  merchandiseTitle: "Giveaways & Merchandise",
  merchandiseDescription: "All merchandise should be displayed in a tidy, non-cluttered manner. Use pen holders for pens, and arrange notebooks and microfiber cleaning cloths in neat groups of five or six. Candies or chocolates should be presented in a clean bowl—never scattered loosely.",
  merchandiseItems: [
    { src: "https://res.cloudinary.com/dranffioe/image/upload/v1780055048/Shopper_with_Logo_rqs5ww.jpg", title: "Canvas Tote Bag", description: "Natural cotton with logo" },
    { src: "https://res.cloudinary.com/dranffioe/image/upload/v1780054815/Medistim_Pen_tlvewq.png", title: "Premium Pen", description: "Medistim orange pen from Prodir" },
    { src: "https://res.cloudinary.com/dranffioe/image/upload/v1780055103/15x15cm_Microfiber_cloth_and_pouch-Heart_design_qcnan3.jpg", title: "Microfiber Cloth", description: "Branded cleaning cloth" },
    { src: "https://res.cloudinary.com/dranffioe/image/upload/v1780055145/Mints_in_orange_tin_dozhe3.png", title: "Mint Box", description: "Mint boxes 23 gr" },
  ],
  webshopUrl: "https://medistim.apogeestorefront.com/storefront/index.ep",

  // Team
  teamTitle: "Example of a Strong Congress Presence (ESVS 2025)",
  teamDescription: "This booth setup demonstrates how an open, uncluttered design can create an inviting and professional exhibition presence, as shown in this video from ESVS 2025.",
  teamImageSrc: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",

  engagementTitle: "Visitor Engagement",
  engagementPoints: [
    "Approach with a warm smile and open posture",
    "Ask open-ended questions to understand visitor needs",
    "Maintain professional distance while being approachable",
    "Always follow up with contact information",
  ],

  boothSetupTitle: "Booth Setup",
  boothSetupPoints: [
    "Clean and open layout with clear sightlines and easy visitor access.",
    "Large backwall graphics provide strong brand visibility without overwhelming the space.",
    "Product displays and meeting areas are strategically placed to encourage interaction while maintaining a tidy appearance.",
  ],

  teamEngagementTitle: "Team Engagement",
  teamEngagementPoints: [
    "Team members proactively engage visitors and initiate conversations.",
    "Staff are available throughout the booth to answer questions and discuss products and clinical applications.",
    "The team creates a welcoming atmosphere by maintaining an active presence and interacting with attendees across the booth space.",
  ],

  professionalAppearanceTitle: "Professional Appearance",
  professionalAppearancePoints: [
    "Team members are dressed professionally, reinforcing a consistent and polished brand image.",
  ],

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
  footerVersion: "Version 1.0.0 – Updated June 2026",
  footerContact: "For questions or support, contact the Marketing Team at marketing@medistim.com",
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
    <div className="carousel-height" style={{ position: "relative", width: "100%", height: 420, overflow: "hidden", background: "#111" }}>
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
// Card-level image carousel
// ============================================================
function CardCarousel({ slides }) {
  const [idx, setIdx] = useState(0);
  return (
    <div style={{ position: "relative", width: "100%", background: "#f3f4f6", borderRadius: 8, marginBottom: 12, overflow: "hidden" }}>
      <img src={slides[idx]} alt={`Slide ${idx + 1}`}
        style={{ width: "100%", maxHeight: 400, objectFit: "contain", display: "block" }} />
      {slides.length > 1 && (
        <>
          <button onClick={() => setIdx(i => (i - 1 + slides.length) % slides.length)}
            style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.4)", color: "#fff", border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
          <button onClick={() => setIdx(i => (i + 1) % slides.length)}
            style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.4)", color: "#fff", border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
          <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6 }}>
            {slides.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                style={{ width: i === idx ? 20 : 7, height: 7, borderRadius: 4, background: i === idx ? "#F36C21" : "rgba(255,255,255,0.7)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.2s" }} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ============================================================
// Section wrapper
// ============================================================
function Section({ id, bg = "#fff", children }) {
  return (
    <section id={id} className="section-padding" style={{ background: bg, padding: "64px 24px" }}>
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
  const [activeTab, setActiveTab] = useState("items");
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
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: "#4b5563", padding: 0, fontWeight: 700 }}
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
      <section className="hero-section" style={{ background: "#f9fafb", padding: "72px 24px 64px", textAlign: "center" }}>
        <span style={{ display: "inline-block", background: O, color: "#fff", fontSize: 12, fontWeight: 600, borderRadius: 20, padding: "4px 14px", marginBottom: 16 }}>
          <Editable value={c.heroBadge} onChange={v => set("heroBadge", v)} />
        </span>
        <Editable value={c.heroTitle} onChange={v => set("heroTitle", v)} tag="h1" className="hero-title"
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
        <Editable value={c.section1Title} onChange={v => set("section1Title", v)} tag="h2"
          style={{ fontSize: 28, fontWeight: 700, marginBottom: 12, color: DARK }} />
        <Editable value={c.section1Description} onChange={v => set("section1Description", v)} tag="p"
          style={{ color: "#6b7280", maxWidth: 720, marginBottom: 40, lineHeight: 1.7 }} multiline />

        <Editable value={c.section2Title} onChange={v => set("section2Title", v)} tag="h2"
          style={{ fontSize: 28, fontWeight: 700, marginBottom: 12, color: DARK }} />
        <Editable value={c.section2Description} onChange={v => set("section2Description", v)} tag="p"
          style={{ color: "#6b7280", maxWidth: 720, marginBottom: 40, lineHeight: 1.7 }} multiline />

        <div style={{ background: "#fff8f4", border: "1px solid #F36C21", borderRadius: 10, padding: "16px 20px" }}>
          <Editable value={c.overviewNote} onChange={v => set("overviewNote", v)} tag="p"
            style={{ fontSize: 14, color: DARK, fontWeight: 500, margin: 0 }} multiline />
        </div>
      </Section>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb" }} />

      {/* ── BOOTH DESIGN ── */}
      <Section id="booth" bg="#f9fafb">
        <Editable value={c.boothTitle} onChange={v => set("boothTitle", v)} tag="h2"
          style={{ fontSize: 28, fontWeight: 700, marginBottom: 32 }} />

        <div className="booth-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginBottom: 32 }}>
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

        {/* Do's and Don'ts */}
        <div style={{ marginTop: 24 }}>
          <Editable value={c.boothDosTitle} onChange={v => set("boothDosTitle", v)} tag="h3"
            style={{ fontSize: 20, fontWeight: 700, color: DARK, marginBottom: 16 }} />
          <div className="dos-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {/* Do */}
            <Card>
              <div style={{ padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#22c55e", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>✓</span>
                  </div>
                  <span style={{ fontWeight: 700, fontSize: 16, color: "#22c55e" }}>Do</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {c.boothDos.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", marginTop: 7, flexShrink: 0 }} />
                      <Editable value={item} onChange={v => setC(prev => ({ ...prev, boothDos: prev.boothDos.map((x, j) => j === i ? v : x) }))} tag="span"
                        style={{ fontSize: 14, color: "#374151" }} />
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
            {/* Don't */}
            <Card>
              <div style={{ padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>✕</span>
                  </div>
                  <span style={{ fontWeight: 700, fontSize: 16, color: "#ef4444" }}>Don't</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {c.boothDonts.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ef4444", marginTop: 7, flexShrink: 0 }} />
                      <Editable value={item} onChange={v => setC(prev => ({ ...prev, boothDonts: prev.boothDonts.map((x, j) => j === i ? v : x) }))} tag="span"
                        style={{ fontSize: 14, color: "#374151" }} />
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb" }} />

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb" }} />

      {/* ── VISUAL ELEMENTS ── */}
      <Section id="visual">
        <Editable value={c.visualTitle} onChange={v => set("visualTitle", v)} tag="h2"
          style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }} />
        <Editable value={c.visualDescription} onChange={v => set("visualDescription", v)} tag="p"
          style={{ color: "#6b7280", marginBottom: 32, maxWidth: 680 }} multiline />

        {/* Tabs */}
        <div style={{ borderBottom: "1px solid #e5e7eb", marginBottom: 28, display: "flex", gap: 0 }}>
          {[["items", "Items at Booth"], ["supporting", "Supporting Visual Elements"]].map(([key, label]) => (
            <button key={key} onClick={() => setActiveTab(key)} className="tab-label"
              style={{ padding: "10px 20px", border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: activeTab === key ? 600 : 400, color: activeTab === key ? O : "#6b7280", borderBottom: activeTab === key ? `2px solid ${O}` : "2px solid transparent", marginBottom: -1, transition: "all 0.15s" }}>
              {label}
            </button>
          ))}
        </div>

        {activeTab === "items" && (
          <div>
            <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 24, maxWidth: 680 }}>{c.itemsAtBoothDescription}</p>
            <div className="poster-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {c.itemsAtBoothCards.map((item, i) => (
                <Card key={i}>
                  <div style={{ padding: 20 }}>
                    <Editable value={item.title} onChange={v => setArr("itemsAtBoothCards", i, "title", v)} tag="h3"
                      style={{ fontWeight: 600, color: DARK, marginBottom: 8 }} />
                    {item.slides
                      ? <CardCarousel slides={item.slides} />
                      : <img src={item.src} alt={item.title} style={{ width: "100%", maxHeight: 400, objectFit: "contain", borderRadius: 8, marginBottom: 12, background: "#f3f4f6" }} />
                    }
                    <Editable value={item.description} onChange={v => setArr("itemsAtBoothCards", i, "description", v)} tag="p"
                      style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }} multiline />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "supporting" && (
          <div>
            <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 24, maxWidth: 680 }}>{c.supportingVisualsDescription}</p>
            <div className="poster-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {c.supportingVisualsCards.map((item, i) => (
                <Card key={i}>
                  <div style={{ padding: 20 }}>
                    <Editable value={item.title} onChange={v => setArr("supportingVisualsCards", i, "title", v)} tag="h3"
                      style={{ fontWeight: 600, color: DARK, marginBottom: 8 }} />
                    <img src={item.src} alt={item.title} style={{ width: "100%", maxHeight: 400, objectFit: "contain", borderRadius: 8, marginBottom: 12, background: "#f3f4f6" }} />
                    <Editable value={item.description} onChange={v => setArr("supportingVisualsCards", i, "description", v)} tag="p"
                      style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }} multiline />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </Section>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb" }} />

      {/* ── MERCHANDISE ── */}
      <Section id="merchandise">
        <Editable value={c.merchandiseTitle} onChange={v => set("merchandiseTitle", v)} tag="h2"
          style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }} />
        <Editable value={c.merchandiseDescription} onChange={v => set("merchandiseDescription", v)} tag="p"
          style={{ color: "#6b7280", marginBottom: 32, maxWidth: 680 }} multiline />

        <div className="merch-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginBottom: 32 }}>
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
            <div style={{ aspectRatio: "4/5", overflow: "hidden" }}>
              <video
                src="https://res.cloudinary.com/dranffioe/video/upload/v1780577531/ESVS_day_2_4x5_xwdcnt.mp4"
                autoPlay loop muted playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
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
                <Editable value={c.boothSetupTitle} onChange={v => set("boothSetupTitle", v)} tag="h4"
                  style={{ fontWeight: 600, color: DARK, marginBottom: 12 }} />
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {c.boothSetupPoints.map((pt, i) => (
                    <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: O, marginTop: 7, flexShrink: 0 }} />
                      <Editable value={pt} onChange={v => setC(prev => ({ ...prev, boothSetupPoints: prev.boothSetupPoints.map((x, j) => j === i ? v : x) }))} tag="span"
                        style={{ fontSize: 14, color: "#6b7280" }} />
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card>
              <div style={{ padding: 24 }}>
                <Editable value={c.teamEngagementTitle} onChange={v => set("teamEngagementTitle", v)} tag="h4"
                  style={{ fontWeight: 600, color: DARK, marginBottom: 12 }} />
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {c.teamEngagementPoints.map((pt, i) => (
                    <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: O, marginTop: 7, flexShrink: 0 }} />
                      <Editable value={pt} onChange={v => setC(prev => ({ ...prev, teamEngagementPoints: prev.teamEngagementPoints.map((x, j) => j === i ? v : x) }))} tag="span"
                        style={{ fontSize: 14, color: "#6b7280" }} />
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card>
              <div style={{ padding: 24 }}>
                <Editable value={c.professionalAppearanceTitle} onChange={v => set("professionalAppearanceTitle", v)} tag="h4"
                  style={{ fontWeight: 600, color: DARK, marginBottom: 12 }} />
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {c.professionalAppearancePoints.map((pt, i) => (
                    <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: O, marginTop: 7, flexShrink: 0 }} />
                      <Editable value={pt} onChange={v => setC(prev => ({ ...prev, professionalAppearancePoints: prev.professionalAppearancePoints.map((x, j) => j === i ? v : x) }))} tag="span"
                        style={{ fontSize: 14, color: "#6b7280" }} />
                    </li>
                  ))}
                </ul>
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
      <footer className="footer-padding" style={{ background: DARK, color: "#fff", padding: "48px 24px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ width: 36, height: 36, background: O, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 16 }}>M</div>
          <span style={{ fontWeight: 600, fontSize: 16 }}>Medistim</span>
        </div>
        <Editable value={c.footerTitle} onChange={v => set("footerTitle", v)} tag="p"
          style={{ fontSize: 14, color: "#9ca3af", margin: "0 0 4px" }} />
        <Editable value={c.footerVersion} onChange={v => set("footerVersion", v)} tag="p"
          style={{ fontSize: 12, color: "#6b7280", margin: "0 0 16px" }} />
        <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>
          For questions or support, contact the Marketing Team at{" "}
          <a href="mailto:marketing@medistim.com" style={{ color: O, textDecoration: "none" }}>marketing@medistim.com</a>
        </p>
      </footer>

      <style>{`
        * { box-sizing: border-box; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
          .team-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 26px !important; }
          .hero-section { padding: 40px 16px 32px !important; }
          .section-padding { padding: 40px 16px !important; }
          .carousel-height { height: 240px !important; }
          .tab-label { font-size: 12px !important; padding: 8px 12px !important; }
          .footer-padding { padding: 32px 16px !important; }
          .dos-grid { grid-template-columns: 1fr !important; }
          .booth-grid { grid-template-columns: 1fr !important; }
          .collateral-grid { grid-template-columns: 1fr !important; }
          .merch-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .poster-grid { grid-template-columns: 1fr !important; }
          .section-title { font-size: 22px !important; }
        }
      `}</style>
    </div>
  );
}
