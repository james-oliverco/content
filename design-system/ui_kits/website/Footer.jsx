/* global React */
const { useState: useStateF } = React;

function Footer() {
  const [email, setEmail] = useStateF("");
  const [done, setDone] = useStateF(false);
  return (
    <footer className="oc-footer">
      <div className="oc-footer__top">
        <div className="oc-footer__manifest">
          <div className="oc-section-eyebrow">— Manifest</div>
          <p className="oc-footer__line">Crafted from waste tea leaves.</p>
          <p className="oc-footer__line">Engineered for longevity.</p>
          <p className="oc-footer__line">Designed for repetition.</p>
          <p className="oc-footer__line">Renewable by design.</p>
        </div>
        <div className="oc-footer__cols">
          <div className="oc-footer__col">
            <div className="oc-footer__h">— Shop</div>
            <a href="#">Wallets</a>
            <a href="#">Card holders</a>
            <a href="#">Travel</a>
            <a href="#">Sleeves</a>
            <a href="#">Gift cards</a>
          </div>
          <div className="oc-footer__col">
            <div className="oc-footer__h">— Materials</div>
            <a href="#">WASTEA®</a>
            <a href="#">Apple Leather</a>
            <a href="#">MIRUM®</a>
            <a href="#">Recycled lining</a>
          </div>
          <div className="oc-footer__col">
            <div className="oc-footer__h">— House</div>
            <a href="#">About</a>
            <a href="#">B-Corp</a>
            <a href="#">Production · Istanbul</a>
            <a href="#">Care</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="oc-footer__signup">
          <div className="oc-footer__h">— Material studies</div>
          <p className="oc-footer__sub">Quiet dispatches. No marketing.</p>
          {done ? (
            <p className="oc-footer__done">— Recorded. Thank you.</p>
          ) : (
            <form
              className="oc-footer__form"
              onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
            >
              <input
                className="oc-input"
                placeholder="name@studio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="oc-btn oc-btn--text" type="submit">Subscribe ↗</button>
            </form>
          )}
        </div>
      </div>
      <div className="oc-footer__bottom">
        <span>© Oliver Co. London · {new Date().getFullYear()}</span>
        <span>OLIVER CO</span>
        <span>B-CORP CERTIFIED · ISTANBUL · LONDON</span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
