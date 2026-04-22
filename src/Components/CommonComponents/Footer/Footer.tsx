import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";  
import stoutLogo from "/logos/Stout.webp";
import bougerMayenneLogo from "../../../../src/assets/bougerMayenneLogo.png";
import natureMayenneLogo from "../../../../src/assets/natureProgresLogo.webp";
import instagramLogo from "../../../../src/assets/instagramLogo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {

  const { t } = useTranslation();

  return (  
    <footer className={styles.footer}>
        <img className={styles.logo} src={stoutLogo} alt="Logo" />
        <div className={styles.container}>
            <p>© 2024-{new Date().getFullYear()} Brasserie artisanale de Montflours. Tous droits réservés.</p>
            <div className={styles.logoContainer}>
              <a href="https://www.bouger-en-mayenne.com" target="_blank" rel="noopener noreferrer">
                <img className={styles.social} src={bougerMayenneLogo} alt="Bouger Mayenne Logo" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img className={styles.social} src={instagramLogo} alt="Instagram Logo" />
              </a>
              <a href="https://www.natureetprogres.org" target="_blank" rel="noopener noreferrer">
                <img className={styles.social} src={natureMayenneLogo} alt="Nature et Progrès Logo" />
              </a>
            </div>
        </div>
        <Link className={styles.legalLink} to="/legal-notice">{t("footer.legalNotice")}</Link>
    </footer>
  );
}

export default Footer;