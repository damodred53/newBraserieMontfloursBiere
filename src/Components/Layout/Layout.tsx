import { Outlet, useLocation, useNavigate } from "react-router-dom";
import bannerImage from "../../assets/images/bannerImage.png";
import logo from "../../assets/images/logo.png";
import styles from "./Layout.module.scss";
import ButtonBrown from "../Buttons/ButtonsBrown/ButtonBrown";
import { t } from "i18next";
import Footer from "../../Components/CommonComponents/Footer/Footer";


const Layout = () => {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>   
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