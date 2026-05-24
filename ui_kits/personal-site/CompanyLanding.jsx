// Per-company landing page template.
// Same system, but blue is allowed to take more space here.
function CompanyLanding() {
  return (
    <main className="main" style={{padding: 0}}>
      <div style={{width:'100%'}}>
        <section className="cl-hero">
          <div className="cl-eyebrow">For the team at Acme</div>
          <h1 className="cl-headline">
            Three things I'd<br/>
            ship in my <em>first quarter</em>.
          </h1>
          <p className="cl-lede">
            A short page, built from the outside, for a job I'd like to do.
            Not a deck — a working sketch of how I'd think about your ops
            problem in the first ninety days.
          </p>
          <div className="cl-meta">
            <div>Audience · <strong style={{color:'var(--ink)'}}>Hiring manager, Acme Ops</strong></div>
            <div>From · <strong style={{color:'var(--ink)'}}>JD Peñaherrera</strong></div>
            <div>Reading time · <strong style={{color:'var(--ink)'}}>4 minutes</strong></div>
          </div>
        </section>

        <section className="cl-section">
          <h2>The problem, <em>stated plainly</em>.</h2>
          <p style={{maxWidth:'58ch', color:'var(--ink-2)', lineHeight:1.7}}>
            You're scaling a logistics network across three countries, and your
            ops team is doing it with five spreadsheets and a Slack channel.
            That's fine — until it isn't. I've been in that exact room before.
          </p>

          <div className="cl-cards">
            <div className="cl-card">
              <div className="cl-card-num">01 — Diagnose</div>
              <div className="cl-card-title">Two weeks of <em>listening</em>.</div>
              <div className="cl-card-body">Talk to the five operators who actually touch the system every day. Write down where the spreadsheets break.</div>
            </div>
            <div className="cl-card">
              <div className="cl-card-num">02 — Decide</div>
              <div className="cl-card-title">One <em>system</em>, not five.</div>
              <div className="cl-card-body">Consolidate into a single source of truth. Pick the one tool that hurts the least to migrate. Move in stages.</div>
            </div>
            <div className="cl-card">
              <div className="cl-card-num">03 — Deploy</div>
              <div className="cl-card-title">Ship something <em>by Friday</em>.</div>
              <div className="cl-card-body">A new dashboard in someone's hands by week six. Not perfect — useful. Iterate from there.</div>
            </div>
          </div>
        </section>

        <section className="cl-cta">
          <div className="cl-cta-text">If any of this is wrong, I'd like to hear why.</div>
          <a className="btn btn-blue" href="#">Book fifteen minutes →</a>
        </section>
      </div>
    </main>
  );
}
window.CompanyLanding = CompanyLanding;
