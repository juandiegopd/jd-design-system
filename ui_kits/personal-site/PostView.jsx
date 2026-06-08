function PostView({ id, onBack }) {
  const post = (window.POSTS || []).find(p => p.id === id) || (window.POSTS || [])[0];
  if (!post) return null;
  return (
    <main className="main">
      <div className="post-view">
        <div className="page-eyebrow">{post.date} · {post.category} · {post.read}</div>
        <h1>{post.title}</h1>
        <p className="lede">{post.excerpt}</p>

        <p className="first">
          There is a version of the cold application that works, and a version
          that doesn't. The difference isn't the resume. It isn't the company.
          It's whether you've put in the work before you hit send.
        </p>
        <p>
          The standard advice — "tailor your cover letter, reach out to a recruiter,
          use the right keywords" — is fine. It will get you into the top 30%. What
          it won't do is get you read by the person who actually decides.
        </p>

        <h2>The operator filter</h2>
        <p>
          Every hiring manager at an early-stage company is, by definition, also
          an operator. They have ten other things on their plate. The application
          that wins isn't the most polished. It's the one that hands them back time.
        </p>
        <blockquote>
          Hand the hiring manager back time. The application that wins isn't the
          most polished — it's the one that makes the next step obvious.
        </blockquote>

        <h2>Three moves that actually work</h2>
        <ol>
          <li>Find a problem they have. Not a problem you'd like to solve — one
              they have written about, complained about, or hired around.</li>
          <li>Build a half-version of the solution. Not a deck. A page. A loom.
              Something that demonstrates instead of describes.</li>
          <li>Send it with a single sentence asking for fifteen minutes.</li>
        </ol>

        <p>
          That's the whole playbook. The friction is in step two — building the
          half-version. But that friction is the point: it filters out everyone
          who is applying to forty companies with the same email.
        </p>

        <p>
          If you want to see what this looks like in practice, here's an
          example I built for a fictional company called <a>Acme</a>.
        </p>

        <div className="post-footer">
          <div className="post-footer-link" onClick={onBack}>← All writing</div>
          <button className="btn btn-cta">Subscribe</button>
        </div>
      </div>
    </main>
  );
}
window.PostView = PostView;
