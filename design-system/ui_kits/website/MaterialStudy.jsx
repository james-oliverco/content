/* global React */
function MaterialStudy() {
  const rows = [
    ["Origin", "Anatolia · Turkey"],
    ["Bio-content", "65 %"],
    ["Base", "Recycled polyester canvas"],
    ["Coating", "Bio-PU · waste tea leaves"],
    ["Lot", "04 / 24"],
    ["Use", "Compact wallet · Card holder"],
    ["Care", "Soft damp cloth"],
  ];
  return (
    <section className="oc-study">
      <div className="oc-study__head">
        <div className="oc-section-eyebrow">— Material study no. 01</div>
        <div className="oc-section-meta">No. 02 / 03</div>
      </div>
      <div className="oc-study__body">
        <div className="oc-study__plate">
          <img className="oc-study__photo" src="../../assets/specimen-wastea-01.jpg" alt="Macro: dried Anatolian tea leaves alongside finished WASTEA® hide in forest." />
          <span className="oc-study__corner oc-study__corner--tl"/>
          <span className="oc-study__corner oc-study__corner--tr"/>
          <span className="oc-study__corner oc-study__corner--bl"/>
          <span className="oc-study__corner oc-study__corner--br"/>
          <span className="oc-study__tag oc-study__tag--tl">— WASTEA® · Forest</span>
          <span className="oc-study__tag oc-study__tag--tr">MACRO · 1:1</span>
          <span className="oc-study__tag oc-study__tag--bl">— Source</span>
          <span className="oc-study__tag oc-study__tag--bm">Hide —</span>
          <span className="oc-study__tag oc-study__tag--br">SPEC · WT-04 / 24</span>
        </div>
        <div className="oc-study__copy">
          <h2 className="oc-study__title">Formed through reduction.</h2>
          <p className="oc-study__lead">
            WASTEA®, co-developed exclusively for Oliver Co., transforms leftover tea leaves
            into a premium bio-based material with exceptional durability and a refined, supple feel.
          </p>
          <dl className="oc-study__specs">
            {rows.map(([k, v]) => (
              <React.Fragment key={k}>
                <dt>— {k}</dt>
                <dd>{v}</dd>
              </React.Fragment>
            ))}
          </dl>
          <a href="#" className="oc-btn oc-btn--text">View full study&nbsp;↗</a>
        </div>
      </div>
    </section>
  );
}

window.MaterialStudy = MaterialStudy;
