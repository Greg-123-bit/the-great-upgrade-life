import React, { useState, useEffect } from "react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeb-WrttromKcSiDPInj9B-aoc8sHn-9hFP62B56oNXQD2zJg/formResponse";
const EMAIL_ENTRY_ID = "entry.1646219683";

export default function GreatUpgrade() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Use a simple innerWidth check per your request (mobile when < 768)
    function onResize() {
      setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // merge base styles with mobile overrides when needed
  const mobileOverrides = {
    interactiveArea: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      top: "auto",
      /* keep the same visual offset as desktop */
      bottom: "6%",
      width: "90%",
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      zIndex: 20,
      padding: "6px 0"
    },
    container: {
      paddingBottom: 0,
      marginBottom: 0
    },
    outerGlowCapsule: {
      height: "auto",
      minHeight: "34px",
      borderRadius: "14px",
      background: "transparent",
      padding: 0,
      boxShadow: "none",
      boxSizing: "border-box"
    },
    innerBevelLayer: {
      height: "100%",
      padding: "1px",
      boxSizing: "border-box"
    },
    coreLayout: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "4px",
      padding: "1px 4px",
      height: "28px",
      minHeight: "28px",
      boxSizing: "border-box",
      overflow: "visible"
    },
    brandBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      textAlign: "left",
      padding: "0 0 0 3px",
      margin: 0,
      flex: "0 0 auto",
      flexShrink: 0,
      width: "85px",
      whiteSpace: "normal",
      maxWidth: "85px",
      overflow: "visible"
    },
    titleText: {
      fontSize: "8.5px",
      lineHeight: "1.1",
      letterSpacing: "1px",
    },
    subtitleText: {
      fontSize: "6px",
      lineHeight: "1.1",
      letterSpacing: "1.4px",
    },
    verticalDivider: {
      display: "block",
      width: "1px",
      height: "28px",
      background: "linear-gradient(180deg, transparent 0%, #3d331d 20%, #876d37 50%, #3d331d 80%, transparent 100%)",
      margin: "0 8px"
    },
    formContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "4px",
      height: "28px",
      width: "100%",
      flex: "1 1 auto",
      minWidth: 0,
      overflow: "hidden",
      flexWrap: "nowrap"
    },
    recessedInputBox: {
      flex: "1 1 auto",
      width: "auto",
      minWidth: "0",
      maxWidth: "none",
      height: "28px",
      padding: "0 6px",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      background: styles.recessedInputBox.background,
      border: styles.recessedInputBox.border,
      boxShadow: styles.recessedInputBox.boxShadow,
      borderRadius: styles.recessedInputBox.borderRadius
    },
    premiumInputField: {
      height: "100%",
      width: "100%",
      minWidth: "0",
      boxSizing: "border-box",
      fontSize: "8px"
    },
    chiseledGoldBtn: {
      flex: "0 0 auto",
      width: "max-content",
      height: "28px",
      fontSize: "7.5px",
      boxSizing: "border-box",
      padding: "0 4px",
      whiteSpace: "nowrap"
    }
  };

  const s = isMobile ? {
    interactiveArea: { ...styles.interactiveArea, ...mobileOverrides.interactiveArea },
    outerGlowCapsule: { ...styles.outerGlowCapsule, ...mobileOverrides.outerGlowCapsule },
    innerBevelLayer: { ...styles.innerBevelLayer, ...mobileOverrides.innerBevelLayer },
    coreLayout: { ...styles.coreLayout, ...mobileOverrides.coreLayout },
    brandBox: { ...styles.brandBox, ...mobileOverrides.brandBox },
    titleText: { ...styles.titleText, ...mobileOverrides.titleText },
    subtitleText: { ...styles.subtitleText, ...mobileOverrides.subtitleText },
    verticalDivider: { ...styles.verticalDivider, ...mobileOverrides.verticalDivider },
    formContainer: { ...styles.formContainer, ...mobileOverrides.formContainer },
    recessedInputBox: { ...styles.recessedInputBox, ...mobileOverrides.recessedInputBox },
    premiumInputField: { ...styles.premiumInputField, ...mobileOverrides.premiumInputField },
    chiseledGoldBtn: { ...styles.chiseledGoldBtn, ...mobileOverrides.chiseledGoldBtn },
    container: { ...styles.container, ...mobileOverrides.container },
    innerFallback: styles // keep others available
  } : styles;

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;

    const form = document.createElement("form");
    form.method = "POST";
    form.action = GOOGLE_FORM_URL;
    form.target = "hidden_iframe";

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = EMAIL_ENTRY_ID;
    input.value = email;

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    setTimeout(() => {
      setEmail("");
      setShowSuccess(true);
    }, 100);
  }

  return (
    <div style={styles.bodyWrapper}>
      <div style={styles.container}>
        <div style={styles.posterWrapper} className="poster-wrapper">
          {/* Master Poster Layout Image */}
          <img src="/custom greg.png" alt="The Great Upgrade" style={styles.posterImg} />

          {/* 100% Pure React High-Fidelity Capsule Section */}
          <div style={s.interactiveArea} className="gu-interactive">
          <div style={s.outerGlowCapsule} className="outerGlowCapsule">
            <div style={s.innerBevelLayer} className="innerBevelLayer">
              <div style={s.coreLayout} className="coreLayout">
                
                {/* Left Branding Typography */}
                <div style={s.brandBox}>
                  <h2 style={s.titleText}>SIGN UP TODAY</h2>
                  <p style={s.subtitleText}>WITH JUST YOUR EMAIL</p>
                </div>

                {/* Vertical Divider Pin */}
                <div style={s.verticalDivider} className="verticalDivider" />

                {/* Interactive Subscription Form Inputs */}
                <form onSubmit={handleSubmit} style={s.formContainer}>
                  
                  {/* Metallic Recessed Input Field */}
                  <div style={s.recessedInputBox} className="recessedInputBox">
                    <svg width="22" height="18" viewBox="0 0 24 20" fill="none" style={styles.mailIcon}>
                      <path 
                        d="M22 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H22C23.1 18 24 17.1 24 16V4C24 2.9 23.1 2 22 2ZM21 4.75V5.25L12 11L3 5.25V4.75L12 10.5L21 4.75ZM22 16H2V6.5L12 12.75L22 6.5V16Z" 
                        fill="#cfa751"
                      />
                    </svg>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Your Email Address"
                      style={s.premiumInputField}
                      autoComplete="email"
                      required
                    />
                  </div>

                  {/* High Precision Chiseled Gold Action Button */}
                  <button type="submit" style={s.chiseledGoldBtn} className="chiseledGoldBtn">
                    JOIN THE UPGRADE &gt;&gt;
                  </button>

                </form>

              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Floating Success Alert Dialog */}
        {showSuccess && (
          <div style={styles.successModal} onClick={() => setShowSuccess(false)}>
            SUCCESS! YOU ARE IN. »
            <span style={styles.closeHint}>CLICK ANYWHERE TO CLOSE</span>
          </div>
        )}
      </div>
      <iframe name="hidden_iframe" title="hidden_iframe" style={{ display: "none" }} />
    </div>
  );
}

const styles = {
  posterWrapper: {
    position: "relative",
    width: "100%",
    display: "inline-block",
    boxSizing: "border-box"
  },
  bodyWrapper: { 
    width: "100%", 
    minHeight: "100vh", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#0A0C0E", 
    margin: 0,
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  },
  container: { 
    width: "100%", 
    maxWidth: "1365px", 
    position: "relative", 
    backgroundColor: "#0A0C0E", 
    margin: "0 auto",
    overflow: "hidden"
  },
  posterImg: { 
    width: "100%", 
    height: "auto", 
    display: "block" 
  },

  interactiveArea: {
    position: "absolute",
    /* positioned upward to align with email input field on poster */
    bottom: "66.5%",  
    left: "5%",
    width: "90%",
    height: "14%",   
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    zIndex: 10,
  },

  outerGlowCapsule: {
    width: "100%",
    height: "90px",
    background: "linear-gradient(180deg, #3a301a 0%, #15120b 50%, #544423 100%)",
    padding: "1px",
    borderRadius: "14px",
    clipPath: "polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)",
    boxShadow: "0px 0px 25px rgba(239, 186, 75, 0.25), 0px 15px 35px rgba(0,0,0,0.9)",
    boxSizing: "border-box"
  },

  innerBevelLayer: {
    width: "100%",
    height: "100%",
    background: "#090b0e",
    padding: "1px", 
    borderRadius: "12px",
    clipPath: "polygon(2.9% 0%, 97.1% 0%, 100% 50%, 97.1% 100%, 2.9% 100%, 0% 50%)",
    boxSizing: "border-box"
  },

  coreLayout: {
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, #11151c 0%, #171d26 25%, #1d2530 50%, #171d26 75%, #11151c 100%)",
    border: "1px solid #231c0e", 
    borderRadius: "10px",
    clipPath: "polygon(2.8% 0%, 97.2% 0%, 100% 50%, 97.2% 100%, 2.8% 100%, 0% 50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 5% 0 6%",
    boxSizing: "border-box"
  },

  brandBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    userSelect: "none"
  },
  titleText: {
    color: "#DE9014", 
    fontSize: "20px", 
    fontWeight: "800",
    margin: 0,
    letterSpacing: "1.5px",
  },
  subtitleText: {
    color: "#ffffff",
    fontSize: "11px",
    fontWeight: "500",
    margin: 0, // Fixed syntax error here
    letterSpacing: "2.2px",
    opacity: 0.85
  },

  verticalDivider: {
    width: "1px",
    height: "36px",
    background: "linear-gradient(180deg, transparent 0%, #3d331d 20%, #876d37 50%, #3d331d 80%, transparent 100%)",
    margin: "0 20px"
  },

  formContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: "14px",
    height: "38px"
  },

  recessedInputBox: {
    flex: "0 0 62%",
    height: "100%",
    background: "linear-gradient(180deg, #06080a 0%, #0d1014 100%)",
    border: "1px solid #231c0e",
    boxShadow: "inset 0px 3px 6px rgba(0, 0, 0, 0.95), inset 0px -1px 2px rgba(255,255,255,0.03)",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    padding: "0 14px",
    boxSizing: "border-box"
  },
  mailIcon: {
    marginRight: "10px",
    flexShrink: 0,
    filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.5))"
  },
  premiumInputField: {
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "400",
    letterSpacing: "0.4px",
    height: "100%",
    fontFamily: "inherit",
    opacity: 0.95
  },

  chiseledGoldBtn: {
    flex: "0 0 38%",
    height: "100%",
    boxSizing: "border-box",
    background: "#AB6106", 
    borderTop: "1px solid #fff4d4",
    borderLeft: "1px solid #ffe8b5",
    borderBottom: "2px solid #3d2c0b",
    borderRight: "2px solid #3d2c0b",
    borderRadius: "5px",
    color: "#110E01", 
    fontSize: "13px",
    fontWeight: "900",
    letterSpacing: "0.8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    transition: "filter 0.15s ease, transform 0.05s ease",
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
    textAlign: "center"
  },
  closeHint: { 
    display: "block", 
    fontSize: "10px", 
    color: "#7a6e55", 
    marginTop: "15px" 
  }
};
