import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import bannerImage from "../../assets/images/bannerImage.png";
import logo from "../../assets/images/logo.png";
import styles from "./Layout.module.scss";
import ButtonBrown from "../Buttons/ButtonsBrown/ButtonBrown";
import Footer from "../../Components/CommonComponents/Footer/Footer";
import { useTranslation } from "react-i18next";

const Layout = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
        <header className={styles.mobileHeader}>
          <div className={styles.mobileMasthead}>
            <Link to="/" className={styles.homeLink} aria-label={t("landing.title")}>
              <img src={`${import.meta.env.BASE_URL}favicon.png`} alt="BAM" />
            </Link>
            <button
              type="button"
              className={styles.menuToggle}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Menu <span aria-hidden="true">{menuOpen ? "−" : "+"}</span>
            </button>
          </div>
          <nav id="mobile-navigation" className={styles.mobileNavigation} hidden={!menuOpen}>
            {[
              ["/presentation", "landing.button1"],
              ["/urgence", "landing.button2"],
              ["/history", "landing.button3"],
            ].map(([path, label]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => {
                  setMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
              >
                {t(label)}
              </NavLink>
            ))}
          </nav>
        </header>
        <div className={styles.banner}>
          <img className={styles.bannerImage} src={bannerImage} alt="Banner" />
          <img className={styles.bannerLogo} src={logo} alt="Logo" />
        </div>

        <div className={styles.content}>
          
          <ButtonBrown
            className={`${styles.button} ${location.pathname === "/presentation" ? styles.active : ''}`}
            content={t('landing.button1')}
            size="medium"
            isAnimated={true}
            onClick={() => navigate("/presentation")}
          />

          <ButtonBrown
            className={`${styles.button} ${location.pathname === "/urgence" ? styles.active : ''}`}
            content={t('landing.button2')}
            size="medium"
            isAnimated={true}
            onClick={() => navigate("/urgence")}
          />
          
          <ButtonBrown
            className={`${styles.button} ${location.pathname === "/history" ? styles.active : ''}`}
            content={t('landing.button3')}
            size="medium"
            isAnimated={true}
            onClick={() => navigate("/history")}
          />
        </div>

        <main>
            <Outlet />
        </main>

        <Footer />
    </>
  );
}   

export default Layout;