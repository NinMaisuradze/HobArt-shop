import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/style.css";
import logo from "../assets/logo-removebg-preview.png";
import { AccessibilityContext } from "../contexts/AccessibilityContext";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [shopOpen, setShopOpen] = useState(false);
  const [decorationOpen, setDecorationOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [accessPanelOpen, setAccessPanelOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navigate = useNavigate();
  const accessRef = useRef(null);
  const langRef = useRef(null);
  const productBtnRef = useRef(null);
  const submenuRef = useRef(null);

  const { setTextSize, setHighContrast, setIsMuted, disableAccessibility } = useContext(AccessibilityContext);
  const { t, i18n } = useTranslation();

  function submitSearch(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (accessRef.current && !accessRef.current.contains(e.target)) setAccessPanelOpen(false);
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    }
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setAccessPanelOpen(false);
        setLangOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        productBtnRef.current &&
        submenuRef.current &&
        !productBtnRef.current.contains(e.target) &&
        !submenuRef.current.contains(e.target)
      ) {
        setShopOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
    setLangOpen(false);
  }

  return (
    <header className="main-header">
      {/* Header top */}
      <div
        className="header-inner"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px" }}
      >
        <div className="logo-left">
          <Link to="/" className="logo" aria-label="HobArt">
            <img src={logo} alt="HobArt logo" style={{ height: "50px" }} />
          </Link>
        </div>

        <div className="right-area" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          {/* Accessibility */}
          <div className={`access-header ${accessPanelOpen ? "open" : ""}`} ref={accessRef} style={{ position: "relative" }}>
            <button
              className="access-toggle small-btn"
              aria-expanded={accessPanelOpen}
              aria-controls="access-panel"
              onClick={() => setAccessPanelOpen((s) => !s)}
              style={{ cursor: "pointer" }}
            >
              {t("accessibility")}{" "}
              <span style={{ display: "inline-block", transform: accessPanelOpen ? "rotate(180deg)" : "", marginLeft: "5px" }}>
                ▾
              </span>
            </button>
            {accessPanelOpen && (
              <div
                className="access-panel"
                role="region"
                aria-label="Accessibility options"
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  background: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "10px",
                  zIndex: 1000,
                }}
              >
                <div className="access-controls">
                  <div className="control-row" style={{ display: "flex", gap: "5px", marginBottom: "5px" }}>
                    <button className="small-btn" onClick={() => setTextSize((s) => Math.min(s + 10, 200))}>
                      A+
                    </button>
                    <button className="small-btn" onClick={() => setTextSize((s) => Math.max(s - 10, 60))}>
                      A-
                    </button>
                    <button className="small-btn" onClick={() => setHighContrast((v) => !v)}>
                      🌓
                    </button>
                    <button className="small-btn" onClick={() => setIsMuted((m) => !m)}>
                      🔊
                    </button>
                  </div>
                  <div className="access-actions">
                    <button
                      className="disable-frame"
                      onClick={() => {
                        disableAccessibility();
                        setAccessPanelOpen(false);
                      }}
                    >
                      {t("disableAccessibility")}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Language switcher */}
          <div className="language-switcher" ref={langRef} style={{ position: "relative" }}>
            <button
              className="lang-btn"
              onClick={() => setLangOpen((s) => !s)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                background: "none",
                border: "1px solid #ccc",
                padding: "5px 10px",
                borderRadius: "4px",
                color: "#777",
                cursor: "pointer",
              }}
            >
              {i18n.language === "ka" ? "🇬🇪 GEORGIA (GEL ₾)" : "🇬🇧 ENGLISH (USD $)"}
              <span style={{ transform: langOpen ? "rotate(180deg)" : "rotate(0deg)", marginLeft: "5px" }}>▾</span>
            </button>
            {langOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 5px)",
                  left: 0,
                  background: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  minWidth: "180px",
                  zIndex: 1000,
                }}
              >
                <button
                  onClick={() => changeLanguage("ka")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    width: "100%",
                    padding: "8px 12px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  🇬🇪 GEORGIA (GEL ₾)
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    width: "100%",
                    padding: "8px 12px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  🇬🇧 ENGLISH (USD $)
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="primary-nav" role="navigation" aria-label="Main navigation" style={{ marginTop: "10px" }}>
        <ul className="nav-list" style={{ display: "flex", gap: "25px", fontSize: "18px", fontWeight: 500 }}>
          <li><Link to="/about">{t("header.about")}</Link></li>
          <li><Link to="/blog">{t("header.blog")}</Link></li>
          <li><Link to="/contact">{t("header.contact")}</Link></li>

          {/* New Product Dropdown */}
          <li className="has-submenu" style={{ position: "relative" }} ref={productBtnRef}>
            <button
              className="submenu-toggle"
              aria-haspopup="true"
              aria-expanded={shopOpen}
              onClick={(e) => {
                e.stopPropagation();
                setShopOpen((prev) => !prev);
                setDecorationOpen(false);
              }}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px", fontWeight: 500 }}
            >
              {t("header.newProduct")} ▾
            </button>

            {shopOpen && (
              <ul
                ref={submenuRef}
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "10px",
                  zIndex: 1000,
                  minWidth: "200px",
                }}
              >
                <li style={{ position: "relative" }}>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "16px",
                      width: "100%",
                      textAlign: "left",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setDecorationOpen((prev) => !prev);
                    }}
                  >
                    {t("DecorationCandle")} ▾
                  </button>

                  {decorationOpen && (
                    <ul
                      style={{
                        position: "absolute",
                        top: 0,
                        left: "100%",
                        background: "#fff",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        padding: "10px",
                        minWidth: "180px",
                      }}
                    >
                      <li>
                        <Link to="/products/holiday-candle" style={{ fontSize: "16px" }}>
                          {t("Holiday Candle")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/decoration-candle" style={{ fontSize: "16px" }}>
                          {t("Decoration Candle")}
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li><Link to="/products/epoxy-decor" style={{ fontSize: "16px" }}>{t("epoxy Decor")}</Link></li>
                <li><Link to="/products/accessories" style={{ fontSize: "16px" }}>{t("accessories")}</Link></li>
                <li><Link to="/products/plaster-decor" style={{ fontSize: "16px" }}>{t("plaster Decor")}</Link></li>
                <li><Link to="/products/felt-toys" style={{ fontSize: "16px" }}>{t("felt Toys")}</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
