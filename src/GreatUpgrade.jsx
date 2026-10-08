import { useState } from "react";

const MAILERLITE_FORM_URL =
  "https://assets.mailerlite.com/jsonp/1843389/forms/200759700290012407/subscribe";

export default function GreatUpgrade() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  function handleSubmit() {
    setTimeout(() => {
      setEmail("");
      setShowSuccess(true);
    }, 100);
  }

  return (
    <div style={styles.bodyWrapper}>
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

      {/* Success Modal */}
      {showSuccess && (
        <div style={styles.successModal} onClick={() => setShowSuccess(false)}>
          SUCCESS! YOU ARE IN. »
          <span style={styles.closeHint}>CLICK ANYWHERE TO CLOSE</span>
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

  successModal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    minWidth: "300px",
    maxWidth: "80%",
    padding: "40px",
    background: "#0d0d0c",
    color: "#dfba6b",
    border: "2px solid #44371e",
    borderRadius: "12px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.8)",
    zIndex: 9999,
    cursor: "pointer",
    textAlign: "center",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: "18px",
    fontWeight: "800",
    letterSpacing: "1px",
  },

  closeHint: {
    display: "block",
    fontSize: "10px",
    color: "#7a6e55",
    marginTop: "15px",
  },
};
