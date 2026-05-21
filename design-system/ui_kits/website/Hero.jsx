/* global React */
function Hero() {
  return (
    <section className="oc-hero">
      <div className="oc-hero__plate" aria-hidden="true">
        <img
          className="oc-hero__photo"
          src="../../assets/imagery/wallet-tea-bed.png"
          alt="Forest bifold wallet on a bed of tea leaves"
        />
        <div className="oc-hero__overlay" />
        <span className="oc-hero__anno oc-hero__anno--tl">— Material study no. 01</span>
        <span className="oc-hero__anno oc-hero__anno--tr">WASTEA® · LOT 04 / 24</span>
        <span className="oc-hero__anno oc-hero__anno--bl">51.5074° N · 0.1278° W</span>
        <span className="oc-hero__anno oc-hero__anno--br">No. 04 / 24</span>
      </div>
      <div className="oc-hero__copy">
        <div className="oc-hero__eyebrow">— Surface, evolving</div>
        <h1 className="oc-hero__title">
          Engineered<br />for longevity.
        </h1>
        <p className="oc-hero__lead">
          Crafted from waste tea leaves and apple pulp. Designed for repetition.
          Considered, sustainably, throughout.
        </p>
        <div className="oc-hero__cta-row">
          <a href="#" className="oc-btn">SHOP THE COLLECTION</a>
          <a href="#" className="oc-btn oc-btn--text">Read the material study&nbsp;↗</a>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
