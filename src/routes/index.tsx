import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import zaraShot from "@/assets/zara-boutique.png.asset.json";
import lahoreShot from "@/assets/lahore-eats.png.asset.json";
import pakinvestShot from "@/assets/pakinvest.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AreneX Techworks | Custom Web Development — Pakistan" },
      { name: "description", content: "AreneX Techworks builds custom websites and web applications for startups and businesses in Pakistan. Built from scratch. Get a proposal in 48 hours." },
      { property: "og:title", content: "AreneX Techworks | Custom Web Development Pakistan" },
      { property: "og:description", content: "Custom websites and web apps for businesses serious about growth." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const AXLogo = ({ size = 36, color = "white" }: { size?: number; color?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 1254 1254"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="AreneX Techworks"
    role="img"
  >
    <g transform="translate(0,1254) scale(0.1,-0.1)" fill={color} stroke="none">
      <path d="M6215 9518 c-38 -22 -189 -111 -335 -196 -146 -85 -323 -189 -395 -232 -580 -344 -1119 -663 -1442 -853 l-153 -89 0 -854 c0 -470 2 -854 4 -854 3 0 60 73 127 163 67 89 133 175 146 190 l23 29 0 572 0 572 238 140 c130 78 359 213 507 301 806 478 1304 772 1333 787 l33 17 72 -44 c87 -54 1064 -629 1521 -896 l330 -193 174 75 174 75 -193 115 c-107 63 -260 153 -341 201 -82 47 -214 125 -295 173 -82 47 -251 147 -378 221 -126 74 -354 207 -505 296 -424 250 -556 326 -566 326 -5 -1 -40 -19 -79 -42z" />
      <path d="M5519 8143 c-78 -109 -165 -229 -194 -268 -143 -194 -202 -276 -331 -454 -161 -223 -341 -473 -419 -581 -75 -104 -344 -467 -614 -830 -125 -168 -270 -363 -321 -434 -52 -70 -132 -178 -177 -240 -46 -61 -83 -114 -83 -118 0 -9 625 -11 690 -2 l50 7 127 171 c70 94 319 428 553 741 234 314 446 598 470 632 199 273 393 533 399 533 4 0 39 -46 79 -102 39 -57 164 -229 276 -383 113 -154 206 -283 206 -287 0 -5 -138 -8 -307 -8 l-308 0 -170 -207 c-93 -113 -191 -231 -217 -262 l-48 -56 720 -5 720 -5 165 -225 c91 -124 222 -303 291 -397 l125 -173 411 0 c327 0 409 3 401 13 -5 6 -39 50 -75 97 -209 273 -1260 1674 -1488 1985 -80 108 -281 381 -447 606 -167 225 -309 418 -315 429 -7 11 -16 20 -19 20 -4 0 -71 -89 -150 -197z" />
      <path d="M8689 8063 c-42 -43 -161 -170 -264 -283 -104 -113 -277 -299 -384 -414 -108 -115 -196 -216 -195 -225 0 -14 235 -314 353 -451 l30 -35 224 225 c402 405 1199 1219 1214 1240 l14 20 -458 0 -458 0 -76 -77z" />
      <path d="M6730 7364 c0 -5 255 -339 500 -654 287 -369 441 -570 775 -1009 110 -145 238 -313 285 -375 l86 -111 386 -3 c212 -1 402 1 422 5 l37 8 -98 121 c-112 139 -119 148 -541 659 -590 714 -839 1018 -1027 1252 l-90 113 -367 0 c-203 0 -368 -2 -368 -6z" />
      <path d="M7985 4844 c-126 -75 -383 -226 -570 -334 -331 -192 -526 -306 -922 -539 -106 -62 -196 -111 -200 -108 -4 2 -154 91 -333 197 -470 279 -506 301 -820 488 -504 300 -677 401 -693 408 -12 4 -471 -49 -512 -60 -5 -1 22 -21 60 -43 322 -185 718 -418 1275 -748 360 -213 739 -436 841 -495 l186 -107 264 152 c145 83 332 192 414 240 150 88 522 305 645 376 36 20 297 173 580 338 283 165 520 302 525 305 6 2 7 6 4 10 -5 5 -212 28 -454 51 l-60 5 -230 -136z" />
    </g>
  </svg>
);

function Index() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Page-load + scroll animations
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero load sequence
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.from(".nav", { y: -20, opacity: 0, duration: 0.6 })
        .from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.6 }, 0.3)
        .from(".hero-word", { y: 50, opacity: 0, duration: 0.8, stagger: 0.08 }, 0.4)
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.6 }, 0.9)
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, 1.1)
        .from(".hero-scroll", { opacity: 0, duration: 0.6 }, 1.4);

      // Generic reveals
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 30, opacity: 0, duration: 0.9, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
      gsap.utils.toArray<HTMLElement>(".reveal-stagger").forEach((parent) => {
        gsap.from(parent.children, {
          y: 40, opacity: 0, scale: 0.97, duration: 0.8, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: parent, start: "top 80%" },
        });
      });
      gsap.utils.toArray<HTMLElement>(".rule").forEach((el) => {
        gsap.from(el, {
          scaleX: 0, transformOrigin: "left", duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      // Stat count-up
      gsap.utils.toArray<HTMLElement>(".stat-num").forEach((el) => {
        const target = parseInt(el.dataset.target || "0", 10);
        if (!target) return;
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target, duration: 2, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => { el.textContent = String(Math.round(obj.v)) + (el.dataset.suffix || ""); },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  // Navbar scroll
  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock + Esc close for mobile menu
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [mobileOpen]);

  // Custom cursor
  useEffect(() => {
    if (typeof window === "undefined") return;
    const dot = cursorRef.current;
    if (!dot) return;
    let mx = 0, my = 0, cx = 0, cy = 0;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const loop = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      dot.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    let raf = requestAnimationFrame(loop);
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, input, textarea, select, .card-surface")) dot.classList.add("is-hover");
      else dot.classList.remove("is-hover");
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const name = (data.get("name") as string) || "";
    const email = (data.get("email") as string) || "";
    const company = (data.get("company") as string) || "";
    const msg = (data.get("msg") as string) || "";
    const budgetMap: Record<string, string> = {
      u50: "Under PKR 50K",
      "50-150": "PKR 50–150K",
      "150-500": "PKR 150–500K",
      "500+": "PKR 500K+",
      usd: "International USD",
    };
    const budget = budgetMap[(data.get("budget") as string) || ""] || "";
    const lines = [
      "Hi AreneX — new project inquiry",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company / Project: ${company}`,
      `Budget: ${budget}`,
      "",
      "Project details:",
      msg,
    ];
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/923434247850?text=${text}`, "_blank", "noopener");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ background: "#000" }}>
      <div ref={cursorRef} className="cursor-dot" />

      {/* NAVBAR */}
      <nav
        className="nav"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          height: 64,
          padding: "0 48px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: navScrolled ? "rgba(0,0,0,0.85)" : "transparent",
          backdropFilter: navScrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: navScrolled ? "blur(24px)" : "none",
          borderBottom: navScrolled ? "1px solid #161616" : "1px solid transparent",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        <a href="#hero" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "#fff" }}>
          <AXLogo size={32} />
          <span style={{ fontFamily: "Outfit", fontWeight: 500, fontSize: 13, letterSpacing: "0.3em" }}>ARENEX</span>
        </a>

        <div className="hidden md:flex" style={{ gap: 36 }}>
          <a className="nav-link" href="#work">Work</a>
          <a className="nav-link" href="#process">Process</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>

        <a href="#contact" className="btn-nav hidden md:inline-flex">
          Start a Project
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
          className={`hamburger md:hidden${mobileOpen ? " is-open" : ""}`}
        >
          <span className="line line-1" />
          <span className="line line-2" />
          <span className="line line-3" />
        </button>
      </nav>

      <div className={`mobile-menu-overlay${mobileOpen ? " is-open" : ""}`} aria-hidden={!mobileOpen}>
        <nav style={{ width: "100%" }}>
          {[
            { n: "01", l: "Work", h: "#work" },
            { n: "02", l: "Process", h: "#process" },
            { n: "03", l: "About", h: "#about" },
            { n: "04", l: "Contact", h: "#contact" },
            { n: "05", l: "Start a Project", h: "#contact" },
          ].map((item) => (
            <div key={item.n} className="menu-item">
              <span className="menu-number">{item.n}</span>
              <a href={item.h} className="menu-link" onClick={() => setMobileOpen(false)}>{item.l}</a>
            </div>
          ))}
        </nav>
        <div className="menu-contact">Arenextechworks@gmail.com · +92 343 424 7850</div>
      </div>

      {/* HERO */}
      <section id="hero" className="hero-glow" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#000" }}>
        <div className="hero-grid" />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", opacity: 0.03, zIndex: 0 }}>
          <AXLogo size={500} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 40%, #000 90%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "30%", background: "linear-gradient(to top, #000 0%, transparent 100%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px", maxWidth: 1200 }}>
          <div className="hero-eyebrow label-mono" style={{ marginBottom: 32 }}>
            WEB DEVELOPMENT STUDIO &nbsp; · &nbsp; PAKISTAN
          </div>

          <h1 className="font-display" style={{ fontSize: "clamp(56px, 11vw, 140px)", lineHeight: 0.95, letterSpacing: "0.02em", color: "#fff", margin: 0 }}>
            <span className="hero-word" style={{ display: "inline-block", marginRight: "0.3em" }}>WE</span>
            <span className="hero-word" style={{ display: "inline-block" }}>BUILD</span>
            <br />
            <span className="hero-word" style={{ display: "inline-block", marginRight: "0.3em" }}>WEBSITES</span>
            <span className="hero-word" style={{ display: "inline-block", marginRight: "0.3em" }}>THAT</span>
            <br />
            <span className="hero-word" style={{ display: "inline-block" }}>WORK.</span>
          </h1>

          <p className="hero-sub" style={{ fontFamily: "Outfit", fontWeight: 300, fontSize: 18, color: "#888", maxWidth: 480, margin: "32px auto 0", lineHeight: 1.7 }}>
            Custom web development for startups and businesses that are serious about growth. No templates. No shortcuts. Built from scratch, engineered to convert.
          </p>

          <div className="hero-cta-row" style={{ marginTop: 48, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contact" className="hero-cta btn-primary">
              <span>Begin Your Project</span>
              <span className="arrow">→</span>
            </a>
            <a href="#work" className="hero-cta btn-secondary">
              <span>See Our Work</span>
            </a>
          </div>
        </div>

        <div className="hero-scroll" style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <span style={{ fontFamily: "DM Mono", fontSize: 9, letterSpacing: "0.2em", color: "#2A2A2A" }}>SCROLL</span>
          <span className="scroll-line" />
        </div>
      </section>

      {/* STATEMENT */}
      <section style={{ background: "#000", padding: "180px 24px", textAlign: "center" }}>
        <div className="rule" style={{ width: 60, height: 1, background: "#222", margin: "0 auto 80px" }} />
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 className="reveal" style={{ fontFamily: "Outfit", fontWeight: 200, fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.4, color: "#fff", margin: 0 }}>
            Most agencies build you a website.
          </h2>
          <h2 className="reveal" style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.4, color: "#fff", margin: "8px 0 0" }}>
            We build you a revenue machine.
          </h2>
          <p className="reveal" style={{ fontFamily: "Outfit", fontWeight: 300, fontSize: 16, color: "#444", marginTop: 24, maxWidth: 480, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            Every line of code we write is in service of one goal: turning your visitors into customers.
          </p>

          <div className="reveal-stagger" style={{ marginTop: 100, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}>
            {[
              { num: "48", suffix: "H", label: "Proposal Turnaround" },
              { num: "100", suffix: "%", label: "Custom Code" },
              { num: "∞", suffix: "", label: "Support After Launch" },
            ].map((s) => (
              <div key={s.label} style={{ borderTop: "1px solid #161616", paddingTop: 32, textAlign: "left" }}>
                {s.num === "∞" ? (
                  <div style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: 52, color: "#fff" }}>∞</div>
                ) : (
                  <div className="stat-num" data-target={s.num} data-suffix={s.suffix} style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: 52, color: "#fff" }}>
                    0{s.suffix}
                  </div>
                )}
                <div className="label-mono" style={{ marginTop: 12 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES / WHAT WE BUILD */}
      <section id="services" style={{ background: "#080808", padding: "140px 48px", position: "relative" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ maxWidth: 680, marginBottom: 80 }}>
            <div className="label-mono reveal">WHAT WE BUILD</div>
            <h2 className="reveal" style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "clamp(34px, 5vw, 52px)", color: "#fff", lineHeight: 1.1, margin: "16px 0 0", letterSpacing: "-0.02em" }}>
              One service.<br />Done exceptionally well.
            </h2>
            <p className="reveal" style={{ fontFamily: "Outfit", fontWeight: 300, fontSize: 17, color: "#666", maxWidth: 520, marginTop: 20, lineHeight: 1.75 }}>
              We don't do logos, SEO packages, or social media. We do one thing — build high-performance custom websites and web applications — and we do it better than anyone else in Pakistan.
            </p>
          </div>

          <div className="reveal-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 2 }}>
            {[
              { n: "01", t: "Business Websites", d: "For businesses that need a credible, fast, professional web presence. Landing pages, corporate sites, service businesses.", s: "Next.js · Tailwind · Vercel" },
              { n: "02", t: "E-Commerce Stores", d: "Online stores built to sell. Custom product pages, checkout flows, and payment integration — no Shopify templates.", s: "React · Stripe · PostgreSQL" },
              { n: "03", t: "Web Applications", d: "Complex platforms, dashboards, admin panels, SaaS tools. If it needs a login screen, we build it right.", s: "Full-Stack · REST APIs · Cloud" },
              { n: "04", t: "Landing Pages", d: "Single-purpose pages engineered to convert. A/B-tested layouts, blazing-fast load times, zero fluff.", s: "React · Framer Motion · Analytics" },
            ].map((it) => (
              <div key={it.n} className="card-surface" style={{ padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 320 }}>
                <div>
                  <div className="label-mono">{it.n}</div>
                  <h3 style={{ fontFamily: "Outfit", fontWeight: 500, fontSize: 22, color: "#fff", marginTop: 32, marginBottom: 0 }}>{it.t}</h3>
                  <p style={{ fontFamily: "Outfit", fontWeight: 300, fontSize: 15, color: "#666", lineHeight: 1.7, marginTop: 12 }}>{it.d}</p>
                </div>
                <div className="label-mono" style={{ marginTop: 32 }}>{it.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ background: "#000", padding: "140px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 100, maxWidth: 680 }}>
            <div className="label-mono reveal">HOW WE WORK</div>
            <h2 className="reveal" style={{ fontFamily: "Outfit", fontWeight: 200, fontSize: "clamp(34px, 5vw, 56px)", color: "#fff", lineHeight: 1.05, margin: "16px 0 0", letterSpacing: "-0.02em" }}>
              From first message<br /><span style={{ fontWeight: 600 }}>to live website.</span>
            </h2>
          </div>

          <div style={{ maxWidth: 720 }}>
            {[
              { n: "01", t: "Discovery", b: "DAY 1–2", d: "You tell us what you're building and who it's for. We ask the uncomfortable questions — the ones most agencies skip." },
              { n: "02", t: "Proposal", b: "DAY 2–3", d: "A detailed proposal arrives within 48 hours. Scope, timeline, price. No ambiguity. No surprises." },
              { n: "03", t: "Design", b: "WEEK 1–2", d: "We design your site in Figma before writing a single line of code. You approve the look before the build begins." },
              { n: "04", t: "Development", b: "WEEK 2–4", d: "Clean, documented code. Weekly check-ins. You can see progress every step of the way." },
              { n: "05", t: "Launch", b: "WEEK 4–6", d: "QA, speed-tested, and live. Plus 30 days of post-launch support — because launch day is just the beginning." },
            ].map((s) => (
              <div key={s.n} className="timeline-step reveal">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12 }}>
                  <div className="label-mono">{s.n}</div>
                  <div className="label-mono">{s.b}</div>
                </div>
                <h3 style={{ fontFamily: "Outfit", fontWeight: 500, fontSize: 22, color: "#fff", margin: "16px 0 12px" }}>{s.t}</h3>
                <p style={{ fontFamily: "Outfit", fontWeight: 300, fontSize: 15, color: "#666", lineHeight: 1.75, margin: 0, maxWidth: 560 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="about" style={{ background: "#080808", padding: "140px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 80 }}>
          <div>
            <div className="label-mono reveal">WHY US</div>
            <h2 className="reveal" style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "clamp(34px, 4.5vw, 48px)", color: "#fff", lineHeight: 1.1, margin: "16px 0 0", letterSpacing: "-0.02em" }}>
              We write code<br />like our name<br />depends on it.
            </h2>
            <p className="reveal" style={{ fontFamily: "Outfit", fontWeight: 300, fontSize: 17, color: "#666", lineHeight: 1.8, marginTop: 24, maxWidth: 460 }}>
              Because it does. We're a small, focused studio in Pakistan with a single obsession: building web products that perform. We don't take on projects we can't do well. We don't pad timelines. And we don't disappear after handing over your files.
            </p>
          </div>

          <div>
            {[
              { t: "Pakistan's timezone. International standards.", d: "We work in your market's context with the quality of a London studio." },
              { t: "You own 100% of your code.", d: "Full handover. No vendor lock-in. Ever." },
              { t: "No templates were harmed in our process.", d: "Every pixel is written for your project, nobody else's." },
              { t: "We respond in hours, not days.", d: "Because a client waiting for an answer is a client losing money." },
            ].map((d) => (
              <div key={d.t} className="diff-block reveal">
                <div style={{ fontFamily: "Outfit", fontWeight: 500, fontSize: 16, color: "#fff" }}>{d.t}</div>
                <div style={{ fontFamily: "Outfit", fontWeight: 300, fontSize: 14, color: "#666", marginTop: 8, lineHeight: 1.6 }}>{d.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ background: "#000", padding: "140px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 100, maxWidth: 680 }}>
            <div className="label-mono reveal">SELECTED WORK</div>
            <h2 className="reveal" style={{ fontFamily: "Outfit", fontWeight: 200, fontSize: "clamp(40px, 6vw, 64px)", color: "#fff", lineHeight: 1.05, margin: "16px 0 0", letterSpacing: "-0.02em" }}>
              Built to <span style={{ fontWeight: 700 }}>perform.</span>
            </h2>
          </div>

          <div className="reveal-stagger" style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              { type: "E-COMMERCE · 2025", name: "Zara Boutique", desc: "A fashion e-commerce store built from scratch for a Lahore-based boutique. Custom cart, Stripe checkout, inventory management — zero Shopify.", stack: "Next.js · PostgreSQL · Stripe · Vercel", result: "+340% online revenue in 90 days", img: zaraShot.url, alt: "Zara Boutique e-commerce website built by AreneX Techworks" },
              { type: "WEB APPLICATION · 2025", name: "Lahore Eats", desc: "A restaurant platform for online orders, table bookings, and real-time kitchen management. Built for scale from day one.", stack: "React · Node.js · WebSockets · Supabase", result: "0 → 800 orders/month at launch", img: lahoreShot.url, alt: "Lahore Eats restaurant platform built by AreneX Techworks" },
              { type: "SAAS DASHBOARD · 2025", name: "PakInvest", desc: "An investment tracking dashboard for Pakistani retail investors. Real-time data, clean charts, authentication, and a mobile-first layout.", stack: "Next.js · Chart.js · PostgreSQL · Auth.js", result: "2,400 users, month one", img: pakinvestShot.url, alt: "PakInvest investment dashboard built by AreneX Techworks" },
            ].map((p) => (
              <div key={p.name} className="project-card card-surface">
                <div className="project-info">
                  <div className="label-mono">{p.type}</div>
                  <h3 style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: 36, color: "#fff", margin: "16px 0 16px", letterSpacing: "-0.015em" }}>{p.name}</h3>
                  <p style={{ fontFamily: "Outfit", fontWeight: 300, fontSize: 16, color: "#666", lineHeight: 1.7, maxWidth: 380, margin: 0 }}>{p.desc}</p>
                  <div className="label-mono" style={{ marginTop: 32 }}>{p.stack}</div>
                  <div style={{ fontFamily: "Outfit", fontWeight: 500, fontSize: 14, color: "#fff", marginTop: 16, paddingTop: 16, borderTop: "1px solid #161616", display: "inline-block", paddingRight: 32 }}>
                    {p.result}
                  </div>
                </div>
                <div className="project-screenshot">
                  <div className="browser-frame">
                    <div className="browser-bar">
                      <div className="browser-dots"><span /><span /><span /></div>
                      <div className="browser-url">arenextechworks.com/work</div>
                    </div>
                    <div className="browser-content">
                      <img src={p.img} alt={p.alt} loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: "#000", padding: "140px 24px", minHeight: "90vh", position: "relative", overflow: "hidden" }}>
        <div className="hero-grid" style={{ opacity: 0.5 }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div className="label-mono reveal">GET IN TOUCH</div>
          <h2 className="font-display reveal" style={{ fontSize: "clamp(52px, 9vw, 96px)", lineHeight: 0.95, color: "#fff", margin: "24px 0 0", letterSpacing: "0.02em" }}>
            LET'S BUILD<br />SOMETHING<br />GREAT.
          </h2>
          <p className="reveal" style={{ fontFamily: "Outfit", fontWeight: 300, fontSize: 18, color: "#555", maxWidth: 440, margin: "32px auto 0", lineHeight: 1.7 }}>
            Tell us about your project. We'll have a detailed proposal in your inbox within 48 hours.
          </p>

          <form onSubmit={onSubmit} style={{ marginTop: 64, maxWidth: 580, marginLeft: "auto", marginRight: "auto", textAlign: "left" }}>
            {!submitted && (
              <>
                {[
                  { id: "name", name: "name", label: "Name", type: "input" },
                  { id: "email", name: "email", label: "Email", type: "input", inputType: "email" },
                  { id: "company", name: "company", label: "Company / Project Name", type: "input" },
                  { id: "msg", name: "msg", label: "Tell us about your project", type: "textarea" },
                ].map((f) => (
                  <FloatingField key={f.id} {...f} />
                ))}
                <div className="field">
                  <label htmlFor="budget">Budget Range</label>
                  <select id="budget" name="budget" defaultValue="" required onChange={(e) => e.target.closest(".field")?.classList.toggle("has-value", !!e.target.value)}>
                    <option value="" disabled hidden></option>
                    <option value="u50">Under PKR 50K</option>
                    <option value="50-150">PKR 50–150K</option>
                    <option value="150-500">PKR 150–500K</option>
                    <option value="500+">PKR 500K+</option>
                    <option value="usd">International USD</option>
                  </select>
                </div>
                <button type="submit" className="btn-submit" style={{ marginTop: 48 }}>
                  Send via WhatsApp →
                </button>
              </>
            )}
            {submitted && (
              <div style={{ padding: "60px 0", textAlign: "center" }}>
                <div className="btn-primary" style={{ cursor: "default" }}>
                  <span>Opened in WhatsApp — hit send to reach us ✓</span>
                </div>
              </div>
            )}
          </form>

          <div style={{ marginTop: 80, borderTop: "1px solid #111", paddingTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            <a href="mailto:Arenextechworks@gmail.com" className="label-mono" style={{ textDecoration: "none", transition: "color 0.25s", letterSpacing: "0.12em" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "")}>
              Arenextechworks@gmail.com
            </a>
            <a href="tel:+923434247850" className="label-mono" style={{ textDecoration: "none", letterSpacing: "0.12em" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "")}>
              +92 343 424 7850
            </a>
            <div className="label-mono" style={{ letterSpacing: "0.12em" }}>Pakistan · Worldwide</div>
          </div>

          <div style={{ marginTop: 32, display: "flex", justifyContent: "center", gap: 16 }}>
            <a href="https://instagram.com/arenextechworks" target="_blank" rel="noreferrer" className="label-mono" style={{ textDecoration: "none", letterSpacing: "0.12em" }}>@arenextechworks · IG</a>
            <span className="label-mono">·</span>
            <a href="https://x.com/arenextechworks" target="_blank" rel="noreferrer" className="label-mono" style={{ textDecoration: "none", letterSpacing: "0.12em" }}>@arenextechworks · X</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#000", borderTop: "1px solid #0D0D0D", padding: 48, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <AXLogo size={24} />
          <span style={{ fontFamily: "Outfit", fontWeight: 500, fontSize: 12, letterSpacing: "0.3em", color: "#fff" }}>ARENEX TECHWORKS</span>
        </div>
        <div style={{ fontFamily: "DM Mono", fontSize: 9, color: "#222", letterSpacing: "0.1em" }}>© 2026 AreneX Techworks. All rights reserved.</div>
        <a href="https://instagram.com/arenextechworks" className="label-mono" style={{ textDecoration: "none", fontSize: 9, letterSpacing: "0.1em" }}>@arenextechworks</a>
      </footer>
    </div>
  );
}

function FloatingField({ id, name, label, type, inputType }: { id: string; name?: string; label: string; type: string; inputType?: string }) {
  const [val, setVal] = useState("");
  return (
    <div className={`field${val ? " has-value" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea id={id} name={name || id} rows={5} value={val} onChange={(e) => setVal(e.target.value)} required />
      ) : (
        <input id={id} name={name || id} type={inputType || "text"} value={val} onChange={(e) => setVal(e.target.value)} required />
      )}
    </div>
  );
}
