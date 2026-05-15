import { useNavigate } from "react-router-dom";
import ButtonBrown from "../../Components/Buttons/ButtonsBrown/ButtonBrown";
import landingImage from "../../assets/images/POST_detoure.png";
import styles from "./LandingPage.module.scss";
import TranslateButton from "../../Components/Buttons/TranslateButton/TranslateButton";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import ModalSelectLanguage from "../../Components/Modal/ModalSelectLanguage/ModalSelectLanguage";
import ModalMajeur from "../../Components/Modal/ModalMajeur/ModalMajeur";


type SiteLanguage = "fr" | "en" | "may";

const LandingPage = () => {


  const { t } = useTranslation();
  const STORAGE_KEY = "bam-language";

  const [open, setOpen] = useState(false);
  const [openModalMajeure, setOpenModalMajeure] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseModalMajeure = () => setOpenModalMajeure(false);
  const handleNoModalMajeure = () => {
    window.location.href = "https://www.google.com";
  };
  const [selectedLanguage, setSelectedLanguage] = useState<SiteLanguage>(localStorage.getItem(STORAGE_KEY) as SiteLanguage || "fr");

  const navigate = useNavigate();

  return (
    <div className={styles.landingPage}>
      <div className={styles.stage}>
        <img className={styles.image} src={landingImage} alt="Landing Page" />

          <ButtonBrown
            className={`${styles.button} ${styles.buttonIntro}`}
            content={t('landing.button1')}
            size="medium"
            isAnimated={true}
            onClick={() => navigate("/presentation")}
          />
          <ButtonBrown
            className={`${styles.button} ${styles.buttonUrgent}`}
            content={t('landing.button2')}
            size="medium"
            isAnimated={true}
            onClick={() => navigate("/urgence")}
          />
          <ButtonBrown
            className={`${styles.button} ${styles.buttonDetails}`}
            content={t('landing.button3')}
            size="medium"
            isAnimated={true}
            onClick={() => navigate("/history")}
          />

        <TranslateButton className={styles.translateButton} onClick={handleOpen} />
      </div>

      <ModalSelectLanguage
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={(language: string) => setSelectedLanguage(language as SiteLanguage)}
      />

      <ModalMajeur open={openModalMajeure} onYes={handleCloseModalMajeure} onNo={handleNoModalMajeure} />
    </div>
  );
}

export default LandingPage;