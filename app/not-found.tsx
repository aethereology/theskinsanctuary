import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="phero section" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <div className="phero__num">/ 404 — Page not found</div>
          <h1 className="display display--xxl" style={{ marginTop: 14 }}>
            That page took a <span className="italic">day off.</span>
          </h1>
          <p className="lede" style={{ margin: "20px auto 32px" }}>
            The page you&apos;re looking for isn&apos;t here — but the studio is open and ready for you.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn btn--primary btn--lg" href="/">
              Back home
            </Link>
            <Link className="btn btn--secondary btn--lg" href="/services">
              View services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
