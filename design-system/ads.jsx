/* global React */
const { useState, useEffect } = React;

const IMG = "assets/wallet-tea-leaves.png";

// ---------------------------------------------------------------------------
// 01 — Magazine spread (1600 × 1000)
// ---------------------------------------------------------------------------
function AdSpread() {
  return (
    <div className="ad ad-spread grain">
      <div className="left">
        <div className="top-row">
          <span className="wordmark">Oliver Co. London</span>
          <span className="mono">MS / 04 · BIFOLD · 24.11</span>
        </div>

        <h1 className="headline">
          Crafted from<br/>
          <em>waste tea leaves.</em>
        </h1>

        <p className="sub">
          The Compact Bifold in WASTEA® — a leather alternative co-developed in
          our London studio and partially derived from spent tea leaves.
          Refined detailing, sustainably considered throughout.
        </p>

        <div className="specs">
          <div>
            <div className="k">Material</div>
            <div className="v">WASTEA® · Lot 04 / 24</div>
          </div>
          <div>
            <div className="k">Atelier</div>
            <div className="v">Istanbul · solar-powered</div>
          </div>
          <div>
            <div className="k">Edition</div>
            <div className="v">No. 02 / Series IV</div>
          </div>
          <div>
            <div className="k">Origin</div>
            <div className="v">51.5074° N · 0.1278° W</div>
          </div>
        </div>

        <div className="bottom-row">
          <a className="cta" href="#">Acquire — olivercolondon.com<span>↗</span></a>
          <span className="mono">B-Corp Certified · Plant-based</span>
        </div>
      </div>

      <div className="right">
        <img src={IMG} alt="Compact Bifold in WASTEA® on a bed of tea leaves" />
        <span className="annot tr">Fig. 01 — Bifold, open</span>
        <span className="annot br">WASTEA® · 0.9 mm</span>
        <span className="annot bl">Specimen no. 04</span>
        <span className="tick tl" />
        <span className="tick tr" />
        <span className="tick bl" />
        <span className="tick br" />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 02 — Square social (1080 × 1080)
// ---------------------------------------------------------------------------
function AdSquare() {
  return (
    <div className="ad ad-square">
      <div className="img-wrap">
        <img src={IMG} alt="Bifold wallet on a circle of tea leaves" />
      </div>
      <div className="frame" />
      <div className="chrome">
        <div className="row">
          <span className="wordmark">Oliver Co.</span>
          <span>MS / 04 · 24.11</span>
        </div>

        <div className="center">
          <div className="eyebrow">Material study no. 04 — WASTEA®</div>
          <div className="h">
            Surface,<br/>
            <em>evolving.</em>
          </div>
        </div>

        <div className="row bottom-row">
          <span>Compact Bifold · in WASTEA®</span>
          <span>£135 — olivercolondon.com ↗</span>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 03 — Poster (900 × 1280) — dark
// ---------------------------------------------------------------------------
function AdPoster() {
  return (
    <div className="ad ad-poster">
      <div className="top">
        <span className="wordmark">Oliver Co.</span>
        <span>London · Edition 02 / 04</span>
      </div>

      <h1 className="hero">
        Designed for<br/>
        <em>repetition.</em>
      </h1>

      <div className="image">
        <img src={IMG} alt="Compact Bifold wallet, opened, resting on loose tea" />
        <span className="label">FIG. 01 — BIFOLD · WASTEA® · LOT 04 / 24</span>
        <span className="label-r">51.5074° N · 0.1278° W</span>
      </div>

      <div className="foot">
        <div>
          <div className="k">Object</div>
          <div className="v">Compact Bifold<br/>5 pocket · plant-based</div>
        </div>
        <div>
          <div className="k">Material</div>
          <div className="v">WASTEA®<br/>Tea-leaf derived</div>
        </div>
        <div>
          <div className="k">Made</div>
          <div className="v">Istanbul<br/>Solar-powered</div>
        </div>
        <div>
          <div className="k">Acquire</div>
          <div className="v">olivercolondon<br/>.com ↗</div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 04 — Vertical story (720 × 1280)
// ---------------------------------------------------------------------------
function AdStory() {
  return (
    <div className="ad ad-story">
      <div className="img">
        <img src={IMG} alt="Wallet at rest on tea leaves" />
      </div>
      <div className="head">
        <span className="wordmark">Oliver Co.</span>
        <span>WASTEA® · LOT 04 / 24</span>
      </div>
      <div className="body">
        <div className="eyebrow">New release — Material study no. 04</div>
        <h2>
          Quiet utility,<br/>
          <em>renewable<br/>by design.</em>
        </h2>
        <p>
          The Compact Bifold returns in WASTEA® — a leather alternative
          partially derived from spent tea leaves. Engineered for longevity.
        </p>
        <div className="meta">
          <span>£135 · Free UK delivery</span>
          <a className="cta" href="#">Shop ↗</a>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Canvas mount
// ---------------------------------------------------------------------------
const { DesignCanvas, DCSection, DCArtboard } = window;

function App() {
  return (
    <DesignCanvas
      title="Oliver Co. — WASTEA® Bifold · Campaign"
      subtitle="Four ad formats from a single material study"
    >
      <DCSection id="print" title="Print & Editorial">
        <DCArtboard id="spread" label="Magazine spread · 1600 × 1000" width={1600} height={1000}>
          <AdSpread />
        </DCArtboard>
        <DCArtboard id="poster" label="Poster · 900 × 1280" width={900} height={1280}>
          <AdPoster />
        </DCArtboard>
      </DCSection>

      <DCSection id="social" title="Social">
        <DCArtboard id="square" label="Square · 1080 × 1080" width={1080} height={1080}>
          <AdSquare />
        </DCArtboard>
        <DCArtboard id="story" label="Story · 720 × 1280" width={720} height={1280}>
          <AdStory />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
