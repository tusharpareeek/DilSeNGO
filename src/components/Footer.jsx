export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} DilSe NGO. All rights reserved.</p>
        <p className="muted">Dil Se, For a Better Tomorrow.</p>
      </div>
    </footer>
  );
}
