const PROJECTS = [
  { year: '2024 — present', title: <>Independent <em>operator</em></>, role: 'Building, writing, advising early-stage teams.', place: 'Latam · remote' },
  { year: '2020 — 2024',    title: <>Logistics, <em>scaled</em></>, role: 'Head of Ops · grew the team from 3 to 28.', place: 'Bogotá' },
  { year: '2018 — 2020',    title: <>Series-A <em>fintech</em></>, role: 'Founding PM · launched payments product.', place: 'Mexico City' },
  { year: '2016 — 2018',    title: <>Consultancy, <em>strategy</em></>, role: 'Associate · early-stage growth advisory.', place: 'New York' },
  { year: '2012 — 2016',    title: <>Engineering, <em>BS</em></>, role: 'Studied things that didn\u2019t end up mattering.', place: 'Quito' },
];

function ProjectList() {
  return (
    <main className="main">
      <div className="inner">
        <div className="page-header">
          <div className="page-eyebrow">Projects · CV</div>
          <h1 className="page-title">Where I've spent <em>my time</em>.</h1>
        </div>
        <div>
          {PROJECTS.map((p, i) => (
            <div className="project-row" key={i}>
              <div className="project-year">{p.year}</div>
              <div>
                <div className="project-title">{p.title}</div>
                <div className="project-role">{p.role}</div>
              </div>
              <div className="project-place">{p.place}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
window.ProjectList = ProjectList;
