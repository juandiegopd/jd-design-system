const POSTS = [
  {
    id: 'cold-apply',
    date: '22 May 2026',
    category: 'Playbook',
    read: '8 min',
    title: <>Applying without a referral, <em>deliberately</em>.</>,
    excerpt: 'A playbook for early-stage companies, written from the operator side of the table.',
  },
  {
    id: 'logistics-hiring',
    date: '04 Apr 2026',
    category: 'Essay',
    read: '12 min',
    title: <>Hiring before <em>product-market fit</em>.</>,
    excerpt: 'What I learned scaling an ops team from 3 to 28 — and what I\u2019d do differently.',
  },
  {
    id: 'latam-operator',
    date: '17 Feb 2026',
    category: 'Notes',
    read: '5 min',
    title: <>The Latin American <em>operator</em>.</>,
    excerpt: 'On building for a region that\u2019s usually skipped by the second slide of the deck.',
  },
  {
    id: 'one-page-strategy',
    date: '09 Jan 2026',
    category: 'Playbook',
    read: '6 min',
    title: <>One-page <em>strategy</em>.</>,
    excerpt: 'How to write a strategy doc that a board of seven actually reads.',
  },
  {
    id: 'on-leaving',
    date: '03 Dec 2025',
    category: 'Life',
    read: '4 min',
    title: <>On <em>leaving</em>.</>,
    excerpt: 'Notes from the last week of a four-year run.',
  },
];

function PostList({ onOpen }) {
  return (
    <main className="main">
      <div className="inner">
        <div className="page-header">
          <div className="page-eyebrow">Writing · 5 posts</div>
          <h1 className="page-title">Notes, playbooks, <em>and a few essays</em>.</h1>
        </div>
        <div className="post-list">
          {POSTS.map(p => (
            <div className="post-entry" key={p.id} onClick={() => onOpen(p.id)}>
              <div className="post-meta">
                {p.date}<br />
                {p.category}<br />
                {p.read}
              </div>
              <div>
                <div className="post-title">{p.title}</div>
                <div className="post-excerpt">{p.excerpt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

window.POSTS = POSTS;
window.PostList = PostList;
