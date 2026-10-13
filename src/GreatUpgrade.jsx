import { useState } from "react";

const MAILERLITE_FORM_URL =
  "https://assets.mailerlite.com/jsonp/1843389/forms/200759700290012407/subscribe";

/* ── Confetti dots ── */
const CONFETTI = [
  { top: "6%",  left: "14%", background: "#f7c948", width: "9px",  height: "9px",  animationDelay: "0.25s", animationName: "gu-c1" },
  { top: "10%", left: "80%", background: "#e09612", width: "8px",  height: "8px",  animationDelay: "0.3s",  animationName: "gu-c2" },
  { top: "4%",  left: "48%", background: "#ffffff", width: "6px",  height: "6px",  animationDelay: "0.35s", animationName: "gu-c3" },
  { top: "84%", left: "15%", background: "#ffe89e", width: "8px",  height: "8px",  animationDelay: "0.4s",  animationName: "gu-c1" },
  { top: "82%", left: "84%", background: "#f5b330", width: "7px",  height: "7px",  animationDelay: "0.28s", animationName: "gu-c2" },
  { top: "89%", left: "50%", background: "#ab6106", width: "6px",  height: "6px",  animationDelay: "0.45s", animationName: "gu-c4" },
  { top: "44%", left: "2%",  background: "#fff2c4", width: "7px",  height: "7px",  animationDelay: "0.22s", animationName: "gu-c3" },
  { top: "44%", left: "95%", background: "#f7c948", width: "6px",  height: "6px",  animationDelay: "0.5s",  animationName: "gu-c4" },
  { top: "22%", left: "5%",  background: "#e09612", width: "5px",  height: "5px",  animationDelay: "0.38s", animationName: "gu-c1" },
  { top: "25%", left: "92%", background: "#ffe494", width: "6px",  height: "6px",  animationDelay: "0.32s", animationName: "gu-c2" },
  { top: "64%", left: "5%",  background: "#ffffff", width: "5px",  height: "5px",  animationDelay: "0.42s", animationName: "gu-c3" },
  { top: "67%", left: "92%", background: "#f7c948", width: "7px",  height: "7px",  animationDelay: "0.48s", animationName: "gu-c4" },
  { top: "3%",  left: "28%", background: "#fff5db", width: "8px",  height: "8px",  animationDelay: "0.52s", animationName: "gu-c3" },
  { top: "3%",  left: "70%", background: "#c47a08", width: "6px",  height: "6px",  animationDelay: "0.27s", animationName: "gu-c4" },
  { top: "94%", left: "30%", background: "#f7c948", width: "5px",  height: "5px",  animationDelay: "0.33s", animationName: "gu-c1" },
  { top: "93%", left: "70%", background: "#ffe89e", width: "7px",  height: "7px",  animationDelay: "0.41s", animationName: "gu-c2" },
];

/* ── Keyframes for the modal only ── */
const MODAL_CSS = `
  @keyframes gu-bdIn   { from{opacity:0} to{opacity:1} }
  @keyframes gu-bdOut  { from{opacity:1} to{opacity:0} }

  @keyframes gu-cardIn {
    from { opacity:0; transform:scale(0.65) translateY(24px); }
    to   { opacity:1; transform:scale(1) translateY(0); }
  }
  @keyframes gu-cardOut {
    from { opacity:1; transform:scale(1); }
    to   { opacity:0; transform:scale(0.88) translateY(12px); }
  }

  @keyframes gu-shimmer {
    0%   { transform:translateX(-110%) skewX(-14deg); }
    100% { transform:translateX(220%)  skewX(-14deg); }
  }

  @keyframes gu-ring {
    0%   { transform:translate(-50%,-50%) scale(0.65); opacity:0.85; }
    100% { transform:translate(-50%,-50%) scale(1.9);  opacity:0; }
  }

  @keyframes gu-float {
    0%,100% { transform:translateY(0) rotate(0deg); }
    50%     { transform:translateY(-5px) rotate(3deg); }
  }

  @keyframes gu-drawC {
    to { stroke-dasharray:175 0; }
  }
  @keyframes gu-drawS {
    to { stroke-dasharray:125 0; }
  }
  @keyframes gu-fillF {
    from { opacity:0; } to { opacity:1; }
  }

  @keyframes gu-pop {
    from { opacity:0; transform:scale(0.65); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes gu-up {
    from { opacity:0; transform:translateY(16px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes gu-lineExp {
    from { opacity:0; width:0; }
    to   { opacity:1; width:220px; }
  }

  @keyframes gu-c1 {
    0%  { opacity:0; transform:translate(0,0) scale(0) rotate(0deg); }
    20% { opacity:1; }
    100%{ opacity:0; transform:translate(-50px,-85px) scale(1) rotate(360deg); }
  }
  @keyframes gu-c2 {
    0%  { opacity:0; transform:translate(0,0) scale(0) rotate(0deg); }
    20% { opacity:1; }
    100%{ opacity:0; transform:translate(60px,-80px) scale(1) rotate(-300deg); }
  }
  @keyframes gu-c3 {
    0%  { opacity:0; transform:translate(0,0) scale(0) rotate(0deg); }
    20% { opacity:1; }
    100%{ opacity:0; transform:translate(-40px,70px) scale(1) rotate(200deg); }
  }
  @keyframes gu-c4 {
    0%  { opacity:0; transform:translate(0,0) scale(0) rotate(0deg); }
    20% { opacity:1; }
    100%{ opacity:0; transform:translate(45px,75px) scale(1) rotate(-260deg); }
  }

  .gu-close:hover {
    filter: brightness(1.15) !important;
    box-shadow: 0 4px 18px rgba(0,0,0,0.7), 0 0 35px rgba(245, 175, 45, 0.7), inset 0 1px 1px rgba(255,255,255,0.8) !important;
    transform: translateY(-1px);
  }
  .gu-close:active {
    transform: scale(0.97) translateY(1px);
    filter: brightness(0.92) !important;
  }
`;


export default function GreatUpgrade() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [closing, setClosing] = useState(false);

  function handleSubmit(e) {
    const trimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      if (e && e.preventDefault) e.preventDefault();
      return;
    }
    setTimeout(() => {
      setEmail("");
      setShowSuccess(true);
      setClosing(false);
    }, 100);
  }

  function handleClose() {
    setClosing(true);
    setTimeout(() => {
      setShowSuccess(false);
      setClosing(false);
    }, 420);
  }

  return (
    <div style={styles.bodyWrapper}>
      <style>{MODAL_CSS}</style>
      {/* ── Section 1: Hero ── */}
      <div style={styles.section} className="gu-section">
        <img src="/1.png" alt="The Great Upgrade - Hero" style={styles.fullWidthImg} />
      </div>

      {/* ── Section 2: Sign Up Bar (image background + real form overlay) ── */}
      <div style={styles.signupSection} className="gu-section">
        <img src="/2.png" alt="Sign Up Banner" style={styles.fullWidthImg} />

        {/* Overlay form centered on the input + button area */}
        <div style={styles.formOverlay}>
          <form
            action={MAILERLITE_FORM_URL}
            method="POST"
            target="hidden_iframe"
            onSubmit={handleSubmit}
            style={styles.formRow}
          >
            <input type="hidden" name="ml-submit" value="1" />
            <input type="hidden" name="anticsrf" value="true" />
            {/* Email Input */}
            <div style={styles.inputWrapper} className="gu-input-wrapper">
              {/* Mail icon */}
              <svg
                width="20"
                height="16"
                viewBox="0 0 24 20"
                fill="none"
                style={styles.mailIcon}
              >
                <path
                  d="M22 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H22C23.1 18 24 17.1 24 16V4C24 2.9 23.1 2 22 2ZM21 4.75V5.25L12 11L3 5.25V4.75L12 10.5L21 4.75ZM22 16H2V6.5L12 12.75L22 6.5V16Z"
                  fill="#cfa751"
                />
              </svg>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="fields[email]"
                placeholder="Enter Your Email Address"
                style={styles.emailInput}
                className="gu-email-input"
                autoComplete="email"
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" style={styles.submitBtn} className="gu-submit-btn">
              <span className="gu-btn-text">JOIN THE UPGRADE &gt;&gt;</span>
            </button>
          </form>
        </div>
      </div>

      {/* ── Section 3: Evolutionary Sequence ── */}
      <div style={styles.section} className="gu-section">
        <img
          src="/3.png"
          alt="The Evolutionary Sequence of Intelligence"
          style={styles.fullWidthImg}
        />
      </div>

      {/* ── Section 4: YouTube Videos — full width stacked ── */}
      <div style={styles.videosSection} className="gu-section">
        {[
          "O12p74cOah4",
          "CHYHB4C1gkg",
          "yI4lYjvxpjA",
        ].map((id) => (
          <div key={id} style={styles.videoCard}>
            <div style={styles.videoAspect}>
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title={`The Great Upgrade - ${id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={styles.videoIframe}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ── Section 5: Footer ── */}
      <div style={styles.section} className="gu-section">
        <img src="/footer.png" alt="Footer" style={styles.fullWidthImg} />
      </div>

      {/* ══ Success Modal ══ */}
      {showSuccess && (
        <div
          style={{
            ...styles.modalBackdrop,
            animation: closing ? "gu-bdOut 0.4s ease forwards" : "gu-bdIn 0.3s ease forwards",
          }}
          onClick={handleClose}
        >
          <div
            style={{
              ...styles.successCard,
              animation: closing
                ? "gu-cardOut 0.4s cubic-bezier(0.4,0,0.2,1) forwards"
                : "gu-cardIn 0.55s cubic-bezier(0.34,1.56,0.64,1) forwards",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top glowing flare bar & lens flare starburst */}
            <div style={styles.topFlareBar} />
            <div style={styles.topCenterFlare} />

            {/* Shimmer light sweep */}
            <div style={styles.shimmerLine} />

            {/* Bottom edge reflection bar */}
            <div style={styles.bottomFlareBar} />

            {/* Confetti dots */}
            <div style={styles.confettiWrap} aria-hidden="true">
              {CONFETTI.map((c, i) => <span key={i} style={{ ...styles.dot, ...c }} />)}
            </div>

            {/* Animated star SVG + pulsing rings */}
            <div style={styles.iconBox}>
              {/* Rings rendered behind the SVG */}
              <div style={{ ...styles.ring, animationDelay: "0s" }} />
              <div style={{ ...styles.ring, width: "124px", height: "124px", animationDelay: "0.55s", opacity: 0.35 }} />

              <svg viewBox="0 0 60 60" style={{ width: "100%", height: "100%", overflow: "visible", position: "relative", zIndex: 1 }}>
                <defs>
                  <linearGradient id="guGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="25%" stopColor="#ffe494" />
                    <stop offset="60%" stopColor="#f5b330" />
                    <stop offset="100%" stopColor="#9e5e04" />
                  </linearGradient>
                  <linearGradient id="guStarFill" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255, 235, 160, 0.4)" />
                    <stop offset="100%" stopColor="rgba(217, 145, 25, 0.15)" />
                  </linearGradient>
                </defs>
                <circle cx="30" cy="30" r="27" fill="none" stroke="url(#guGoldGrad)" strokeWidth="1.6"
                  strokeDasharray="0 175"
                  style={{ animation: "gu-drawC 0.65s ease 0.15s forwards" }} />
                <circle cx="30" cy="30" r="24" fill="none" stroke="rgba(245, 185, 55, 0.35)" strokeWidth="0.8" strokeDasharray="3 3" />
                <polygon
                  points="30,13 34.2,24 46,24 37,31.5 40.5,43 30,36 19.5,43 23,31.5 14,24 25.8,24"
                  fill="rgba(207,167,81,0.0)" stroke="url(#guGoldGrad)" strokeWidth="1.8" strokeLinejoin="round"
                  strokeDasharray="0 125"
                  style={{ animation: "gu-drawS 0.7s ease 0.65s forwards" }} />
                <polygon
                  points="30,13 34.2,24 46,24 37,31.5 40.5,43 30,36 19.5,43 23,31.5 14,24 25.8,24"
                  fill="url(#guStarFill)"
                  style={{ animation: "gu-fillF 0.35s ease 1.2s both" }} />
              </svg>
            </div>

            {/* Badge */}
            <div style={{ ...styles.badge, animation: "gu-pop 0.4s cubic-bezier(0.34,1.56,0.64,1) 0.3s both" }}>
              <span style={styles.badgeLine} />
              <span style={styles.badgeLabel}>MISSION ACCEPTED</span>
              <span style={{ ...styles.badgeLine, transform: "scaleX(-1)" }} />
            </div>

            {/* Title */}
            <h2 style={{ ...styles.title, animation: "gu-up 0.5s cubic-bezier(0.34,1.4,0.64,1) 0.45s both" }}>
              YOU&apos;RE IN THE UPGRADE.
            </h2>

            {/* Subtitle */}
            <p style={{ ...styles.subtitle, animation: "gu-up 0.45s ease 0.65s both" }}>
              Welcome to the next evolution.
            </p>

            {/* Glowing divider line with centered star flare */}
            <div style={styles.glowLineWrap}>
              <div style={{ ...styles.glowLine, animation: "gu-lineExp 0.55s ease 0.8s both" }} />
              <div style={{ ...styles.glowCenterFlare, animation: "gu-pop 0.4s ease 0.9s both" }} />
            </div>

            {/* Body */}
            <p style={{ ...styles.body, animation: "gu-up 0.45s ease 0.95s both" }}>
              Something extraordinary is heading to your inbox.
              <br />
              <span style={styles.bodyAccent}>Stay sharp. The upgrade begins now.</span>
            </p>

            {/* Close button with site-matching 3D gold gradient */}
            <button className="gu-close" style={styles.closeBtn} onClick={handleClose}>
              CLOSE &nbsp;✕
            </button>
          </div>
        </div>
      )}

      <iframe name="hidden_iframe" title="hidden_iframe" style={{ display: "none" }} />
    </div>
  );
}

const styles = {
  bodyWrapper: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#0A0C0E",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  section: {
    lineHeight: 0,
  },

  fullWidthImg: {
    width: "100%",
    height: "auto",
    display: "block",
  },

  /* ── Signup section: position:relative so overlay works ── */
  signupSection: {
    position: "relative",
    lineHeight: 0,
  },

  /*
   * Overlay aligned to the input+button area in 2.png.
   * 2.png is 1598×290px. Left ~38% = "SIGN UP TODAY" text (image).
   * Right 58% = input field + button (our overlay).
   * Input row sits at y≈43–90 → top≈14%, height≈17%.
   */
  formOverlay: {
    position: "absolute",
    top: "13.79%",
    left: "32.54%",
    width: "61.08%",
    height: "31.38%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    boxSizing: "border-box",
  },

  formRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3.48%",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },

  inputWrapper: {
    flex: "0 0 54.51%",
    width: "54.51%",
    height: "100%",
    background: "linear-gradient(180deg, #06080a 0%, #0d1014 100%)",
    border: "1px solid #2e2510",
    boxShadow: "inset 0px 3px 6px rgba(0,0,0,0.9), inset 0px -1px 2px rgba(255,255,255,0.03)",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    padding: "0 2.5%",
    boxSizing: "border-box",
    minWidth: 0,
  },

  mailIcon: {
    flexShrink: 0,
    marginRight: "clamp(4px, 0.6vw, 8px)",
    opacity: 0.85,
    width: "clamp(12px, 1.35vw, 18px)",
    height: "auto",
  },

  emailInput: {
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    color: "black",
    fontWeight: "400",
    height: "100%",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    opacity: 0.95,
    minWidth: 0,
    width: "100%",
  },

  submitBtn: {
    flex: "0 0 42.01%",
    width: "42.01%",
    height: "100%",
    padding: "0 3px",
    background: "linear-gradient(180deg, #eb9d1b 0%, #ab6106 55%, #7a4100 100%)",
    borderTop: "1px solid #fff4d4",
    borderLeft: "1px solid #ffe8b5",
    borderBottom: "2px solid #3d2c0b",
    borderRight: "2px solid #3d2c0b",
    borderRadius: "6px",
    color: "#110E01",
    fontWeight: "900",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    transition: "filter 0.15s ease, transform 0.08s ease, box-shadow 0.15s ease",
    boxSizing: "border-box",
    minWidth: 0,
    textShadow: "0 1px 0 rgba(255, 255, 255, 0.25)",
    boxShadow: "0 1px 3px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.4)",
  },

  videosSection: {
    backgroundColor: "#000000",
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },

  videoCard: {
    width: "100%",
    background: "#000000",
    lineHeight: 0,
  },

  videoAspect: {
    position: "relative",
    width: "100%",
    paddingTop: "56.25%", // 16:9
  },

  videoIframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
    display: "block",
  },

  /* ── Modal styles (form styles above are untouched) ── */
  modalBackdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(3, 6, 12, 0.78)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    zIndex: 9999,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  successCard: {
    width: "min(520px, 90vw)",
    background: "radial-gradient(ellipse 110% 60% at 50% -5%, rgba(245, 175, 45, 0.24) 0%, rgba(200, 130, 20, 0.08) 45%, transparent 75%), radial-gradient(ellipse 80% 40% at 50% 100%, rgba(180, 100, 10, 0.14) 0%, transparent 60%), linear-gradient(175deg, #121926 0%, #0c121c 30%, #070b12 70%, #05070c 100%)",
    border: "1.5px solid #d4a340",
    boxShadow: "0 0 0 1px rgba(255, 235, 160, 0.35) inset, 0 0 45px rgba(235, 157, 27, 0.28), 0 25px 70px rgba(0, 0, 0, 0.95), inset 0 0 30px rgba(240, 175, 45, 0.06)",
    borderRadius: "20px",
    padding: "48px 40px 40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    cursor: "default",
    position: "relative",
    overflow: "hidden",
  },

  topFlareBar: {
    position: "absolute",
    top: 0, left: 0, right: 0,
    height: "2px",
    background: "linear-gradient(90deg, transparent 0%, rgba(235, 157, 27, 0.45) 20%, #ffe9a0 50%, rgba(235, 157, 27, 0.45) 80%, transparent 100%)",
    boxShadow: "0 0 12px 1px #f5a623",
    zIndex: 3,
    pointerEvents: "none",
  },

  topCenterFlare: {
    position: "absolute",
    top: "-2px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "140px",
    height: "6px",
    background: "radial-gradient(ellipse at center, #ffffff 0%, #ffdf78 40%, rgba(245, 166, 35, 0.8) 70%, transparent 100%)",
    filter: "blur(1px)",
    boxShadow: "0 0 18px 4px rgba(245, 166, 35, 0.75)",
    zIndex: 4,
    pointerEvents: "none",
  },

  shimmerLine: {
    position: "absolute",
    top: 0, left: 0, right: 0,
    height: "2px",
    background: "linear-gradient(90deg, transparent 0%, #dfba6b 40%, #ffffff 50%, #dfba6b 60%, transparent 100%)",
    animation: "gu-shimmer 2.4s ease 0.4s infinite",
    zIndex: 5,
    pointerEvents: "none",
  },

  bottomFlareBar: {
    position: "absolute",
    bottom: 0, left: 0, right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent 10%, rgba(212, 163, 64, 0.45) 50%, transparent 90%)",
    boxShadow: "0 0 8px rgba(235, 157, 27, 0.3)",
    zIndex: 2,
    pointerEvents: "none",
  },

  confettiWrap: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    pointerEvents: "none",
    zIndex: 0,
  },

  dot: {
    position: "absolute",
    borderRadius: "50%",
    opacity: 0,
    animationDuration: "1.5s",
    animationFillMode: "forwards",
    animationTimingFunction: "ease-out",
  },

  iconBox: {
    width: "82px",
    height: "82px",
    marginBottom: "18px",
    position: "relative",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(245, 175, 45, 0.28) 0%, rgba(210, 140, 20, 0.1) 45%, transparent 70%)",
    filter: "drop-shadow(0 0 16px rgba(245, 175, 45, 0.65))",
    animation: "gu-float 3.2s ease-in-out 1.5s infinite",
  },

  ring: {
    position: "absolute",
    width: "92px",
    height: "92px",
    borderRadius: "50%",
    border: "1.5px solid rgba(245, 185, 55, 0.65)",
    top: "50%", left: "50%",
    transform: "translate(-50%,-50%)",
    boxShadow: "0 0 14px rgba(245, 166, 35, 0.4)",
    animation: "gu-ring 2.2s ease-out infinite",
    pointerEvents: "none",
  },

  badge: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "14px",
    position: "relative",
    zIndex: 1,
  },

  badgeLine: {
    display: "block",
    width: "28px",
    height: "1px",
    background: "linear-gradient(90deg, transparent, #f5c44c)",
    boxShadow: "0 0 6px rgba(245, 185, 55, 0.4)",
  },

  badgeLabel: {
    fontSize: "9px",
    fontWeight: "800",
    letterSpacing: "3.5px",
    color: "#fbd36b",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    textTransform: "uppercase",
    background: "rgba(245, 175, 45, 0.1)",
    border: "1px solid rgba(245, 185, 55, 0.35)",
    borderRadius: "20px",
    padding: "3px 14px",
    textShadow: "0 0 10px rgba(245, 185, 55, 0.5)",
  },

  title: {
    margin: "0 0 10px",
    fontSize: "clamp(20px, 3vw, 27px)",
    fontWeight: "900",
    letterSpacing: "3.2px",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    position: "relative",
    zIndex: 1,
    background: "linear-gradient(180deg, #ffffff 0%, #fff0b8 20%, #f6c442 55%, #df991a 80%, #9e5e04 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    filter: "drop-shadow(0 2px 14px rgba(235, 157, 27, 0.5))",
    lineHeight: 1.25,
  },

  subtitle: {
    margin: 0,
    fontSize: "clamp(11.5px, 1.5vw, 13.5px)",
    fontWeight: "700",
    color: "#f0ca72",
    letterSpacing: "2.2px",
    textTransform: "uppercase",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    position: "relative",
    zIndex: 1,
    textShadow: "0 0 12px rgba(240, 185, 65, 0.45)",
  },

  glowLineWrap: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "22px 0 20px",
    width: "100%",
    zIndex: 1,
  },

  glowLine: {
    height: "2px",
    background: "linear-gradient(90deg, transparent 0%, rgba(235, 157, 27, 0.3) 15%, #ffe699 50%, rgba(235, 157, 27, 0.3) 85%, transparent 100%)",
    boxShadow: "0 0 10px #f0a31e, 0 0 20px rgba(235, 157, 27, 0.6)",
    borderRadius: "2px",
    width: 0,
  },

  glowCenterFlare: {
    position: "absolute",
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "#ffffff",
    boxShadow: "0 0 8px 2px #f7b731, 0 0 16px 4px rgba(245, 166, 35, 0.8)",
  },

  body: {
    margin: 0,
    fontSize: "clamp(12px, 1.35vw, 14.5px)",
    color: "#eae2cf",
    lineHeight: "1.75",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    position: "relative",
    zIndex: 1,
  },

  bodyAccent: {
    color: "#fcd46f",
    fontWeight: "800",
    letterSpacing: "0.5px",
    textShadow: "0 0 14px rgba(245, 185, 55, 0.45)",
  },

  closeBtn: {
    marginTop: "26px",
    background: "linear-gradient(180deg, #f7c948 0%, #e09612 40%, #b86e04 80%, #7e4400 100%)",
    borderTop: "1px solid #fff5db",
    borderLeft: "1px solid #ffe6a8",
    borderBottom: "2px solid #3d2503",
    borderRight: "2px solid #3d2503",
    borderRadius: "7px",
    color: "#160e02",
    fontSize: "11px",
    fontWeight: "900",
    letterSpacing: "3px",
    padding: "13px 44px",
    cursor: "pointer",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    transition: "filter 0.18s ease, transform 0.1s ease, box-shadow 0.18s ease",
    position: "relative",
    zIndex: 1,
    boxShadow: "0 4px 14px rgba(0,0,0,0.6), 0 0 25px rgba(235,157,27,0.4), inset 0 1px 1px rgba(255,255,255,0.65)",
    textShadow: "0 1px 0 rgba(255,255,255,0.3)",
  },
};
