export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>DilSe NGO</h1>
          <p>Together for Kindness, Together for Change.</p>
          <div className="cta-buttons">
            <a className="btn" href="/about">Learn More</a>
            <a className="btn outline" href="/contact">Contact Us</a>
          </div>
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <h3>Education</h3>
          <p>Providing quality education for children and youth.</p>
        </article>
        <article className="card">
          <h3>Healthcare</h3>
          <p>Health camps and awareness drives for underserved communities.</p>
        </article>
        <article className="card">
          <h3>Livelihood</h3>
          <p>Skill training and support for sustainable income generation.</p>
        </article>
        <article className="card">
          <h3>Food and Nutrition</h3>
          <p>Nutrition programs and food distribution for underprivileged families.</p>
        </article>
      </section>

      <section className="stats">
        <div className="stat">
          <span className="stat-number">1,500+</span>
          <span className="stat-label">Beneficiaries</span>
        </div>
        <div className="stat">
          <span className="stat-number">25+</span>
          <span className="stat-label">Projects</span>
        </div>
        <div className="stat">
          <span className="stat-number">8</span>
          <span className="stat-label">Districts</span>
        </div>
        <div className="stat">
          <span className="stat-number">20+</span>
          <span className="stat-label">Volunteers</span>
        </div>
      </section>
    </>
  );
}
