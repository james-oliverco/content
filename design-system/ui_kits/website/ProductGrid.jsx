/* global React */
const PRODUCTS = [
  { id: "001", name: "Compact Wallet",   material: "WASTEA® · Forest",      price: "£ 95",  img: "../../assets/imagery/compact-wallet-forest.jpg",     ways: ["forest","cedar","pitch"] },
  { id: "002", name: "Slim Card Holder", material: "Apple Lthr · Coastal",  price: "£ 65",  img: "../../assets/imagery/card-holder-coastal-blue.jpg",  ways: ["coastal","pitch","ochre","bone"] },
  { id: "003", name: "Bifold Wallet",    material: "Apple Lthr · Forest",   price: "£ 110", img: "../../assets/imagery/billfold-forest-open.png",     ways: ["forest","pitch"] },
  { id: "004", name: "Card Holder",      material: "Apple Lthr · Pitch",    price: "£ 75",  img: "../../assets/imagery/card-holder-pitch-open.png",    ways: ["pitch","forest","coastal","cedar"] },
  { id: "005", name: "Washbag",          material: "rPET · Pitch",          price: "£ 145", img: "../../assets/imagery/washbag.png",                   ways: ["pitch","moss"] },
  { id: "006", name: "Tote Bag",         material: "rPET · Pitch",          price: "£ 195", img: "../../assets/imagery/tote.png",                      ways: ["pitch","bone","coastal"] },
];

function ProductCard({ p, idx }) {
  return (
    <a href="#" className="oc-card">
      <div className="oc-card__img">
        <img src={p.img} alt={p.name} />
        <span className="oc-card__anno">— {p.material}</span>
        <span className="oc-card__idx">{p.id} / 06</span>
      </div>
      <div className="oc-card__meta">
        <div className="oc-card__name">{p.name}</div>
        <div className="oc-card__price">{p.price}</div>
      </div>
      <div className="oc-card__ways">
        {p.ways.map((w, i) => (
          <span key={w} className={"oc-way oc-way--" + w + (i === 0 ? " is-on" : "")}/>
        ))}
        <span className="oc-card__count">{p.ways.length} colourways</span>
      </div>
    </a>
  );
}

function ProductGrid() {
  return (
    <section className="oc-grid-section">
      <div className="oc-section-head">
        <div className="oc-section-eyebrow">— Index · 06 objects</div>
        <h2 className="oc-section-title">The collection</h2>
        <div className="oc-section-meta">No. 01 / 03</div>
      </div>
      <div className="oc-grid">
        {PRODUCTS.map((p, i) => <ProductCard key={p.id} p={p} idx={i} />)}
      </div>
      <div className="oc-grid__foot">
        <span>— Collection grid · 6-up</span>
        <span className="oc-grid__note">Packshots presented uniformly on near-white surfaces with a faint multiply grain. Annotations sit in graphite, not white, so they read as scientific labelling rather than UI chrome.</span>
        <span>OC · 2026</span>
      </div>
    </section>
  );
}

window.ProductGrid = ProductGrid;
window.ProductCard = ProductCard;
