import "./Footer.scss";

function Footer() {
  const footerItems = [
    "FAQ",
    "Help Centre",
    "Account",
    "Media Centre",
    "Investor Relations",
    "Jobs",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ];

  return (
    <div className="container">
      <footer className="footer">
        <button className="footer-link call" type="button">
          Questions? Call xxx-xxx-xxx-xxxx
        </button>
        <div className="footer-grid">
          {footerItems.map((item, index) => (
            <button key={index} className="footer-link" type="button">
              {item}
            </button>
          ))}
        </div>
        <p className="country">
          <span>Netflix India</span>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
