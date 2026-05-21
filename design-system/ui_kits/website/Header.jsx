/* global React */
const { useState } = React;

function Header() {
  const [active, setActive] = useState("Shop");
  const links = ["Shop", "Materials", "Studies", "Journal", "About"];
  return (
    <header className="oc-header">
      <div className="oc-header__eyebrow">
        <span>— LDN · 51.5074° N · 0.1278° W</span>
        <span>EDITION No. 04 / 24</span>
        <span>FREE WORLDWIDE SHIPPING</span>
      </div>
      <nav className="oc-header__nav">
        <div className="oc-header__mark">OLIVER&nbsp;CO</div>
        <div className="oc-header__links">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className={"oc-header__link" + (active === l ? " is-active" : "")}
              onClick={(e) => { e.preventDefault(); setActive(l); }}
            >
              {l}
            </a>
          ))}
        </div>
        <div className="oc-header__right">
          <a href="#" className="oc-header__link">Search</a>
          <a href="#" className="oc-header__link">Account</a>
          <a href="#" className="oc-header__bag" aria-label="Bag, 2 items">
            <svg viewBox="0 0 20 22" width="18" height="20" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
              <path d="M2 7 H18 L17 21 H3 Z"/>
              <path d="M6.5 7 V5.5 a3.5 3.5 0 0 1 7 0 V7"/>
            </svg>
            <span className="oc-header__bag-count">02</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

window.Header = Header;
