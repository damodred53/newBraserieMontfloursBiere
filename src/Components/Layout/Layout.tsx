import { Outlet, useNavigate } from "react-router-dom";
import bannerImage from "../../assets/images/bannerImage.png";
import logo from "../../assets/images/logo.png";
import "./Layout.scss";
import ButtonBrown from "../Buttons/ButtonsBrown/ButtonBrown";
import { t } from "i18next";


const Layout = () => {

  const navigate = useNavigate();
  return (
    <>   
        <div className="layout__banner">
          <img className="layout__banner-image" src={bannerImage} alt="Banner" />
          <img className="layout__banner-logo" src={logo} alt="Logo" />
        </div>

        <div className="layout__content">
          <ButtonBrown
            className="layout__button layout__button--intro"
            content={t('landing.button1')}
            size="medium"
            isAnimated={true}
            onClick={() => navigate("/presentation")}
          />
          <ButtonBrown
            className="layout__button layout__button--urgent"
            content={t('landing.button2')}
            size="medium"
            isAnimated={true}
            onClick={() => navigate("/urgence")}
          />
          <ButtonBrown
            className="layout__button layout__button--details"
            content={t('landing.button3')}
            size="medium"
            isAnimated={true}
            onClick={() => navigate("/details")}
          />
        </div>

        <main>
            <Outlet />
        </main>

        <footer>
            <p>© 2024 Nouvelle BAM. Tous droits réservés.</p>
        </footer>
    </>
  );
}   

export default Layout;