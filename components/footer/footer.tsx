import Image from "next/image";
import { FooterImg, BundoLogo } from "@/public/images";
import { footerData, socialLinks } from "./_components/data";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <Image src={BundoLogo} alt="Bundo Logo" height={24} width={20} className="w-20" />
        <span className="footer-tagline">Simplifying Retail.</span>
      </div>

      <div className="footer-content">
        <div className="footer-image">
          <Image
            src={FooterImg}
            alt="Bundo App"
            height={500}
            className="footer-img-style"
          />
        </div>

        <div className="footer-links">
          <div className="footer-grid">
            {footerData.map((section) => (
              <div key={section.title}>
                <h4 className="footer-section-title">{section.title}</h4>
                <ul className="footer-section-links">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.url} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-socials">
            <h3 className="footer-socials-title">Keep up with us</h3>
            <div className="footer-social-icons">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                  />
                  {social.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
