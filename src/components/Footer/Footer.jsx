import React from "react";
import "./Footer.css";

const footerLinks = [
  { label: "О сервисе", href: "#" },
  { label: "Контакты", href: "#" },
  { label: "Документы", href: "#" },
  { label: "Помощь", href: "#" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="footer__link"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="footer__copyright">© 2025.МИРЭА</div>
    </footer>
  );
};

export default Footer;
