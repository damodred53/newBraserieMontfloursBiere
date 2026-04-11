import { useNavigate } from "react-router-dom";
import ButtonBrown from "../../Components/Buttons/ButtonsBrown/ButtonBrown";
import landingImage from "../../assets/images/POST_detoure.png";
import "./LandingPage.scss"
import TranslateButton from "../../Components/Buttons/TranslateButton/TranslateButton";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import ModalSelectLanguage from "../../Components/Modal/ModalSelectLanguage/ModalSelectLanguage";


type SiteLanguage = "fr" | "en" | "may";

const LandingPage = () => {


  const { t } = useTranslation();
  const STORAGE_KEY = "bam-language";

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedLanguage, setSelectedLanguage] = useState<SiteLanguage>(localStorage.getItem(STORAGE_KEY) as SiteLanguage || "fr");

  const navigate = useNavigate();

  return (
    <div className="landingPage">
      <div className="landingPage__stage">
        <img className="landingPage__image" src={landingImage} alt="Landing Page" />

          <ButtonBrown
            className="landingPage__button landingPage__button--intro"
            content={t('landing.button1')}
            size="medium"
            isAnimated={true}
            onClick={() => navigate("/presentation")}
          />
          <ButtonBrown
            className="landingPage__button landingPage__button--urgent"
            content={t('landing.button2')}
            size="medium"
            isAnimated={true}
            onClick={() => navigate("/urgence")}
          />
          <ButtonBrown
            className="landingPage__button landingPage__button--details"
            content={t('landing.button3')}
            size="medium"
            isAnimated={true}
            onClick={() => navigate("/details")}
          />


        <TranslateButton className="translate_button_landingpage" onClick={handleOpen} />
      </div>

      <ModalSelectLanguage
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={(language: string) => setSelectedLanguage(language as SiteLanguage)}
      />
    </div>
  );
}

export default LandingPage;