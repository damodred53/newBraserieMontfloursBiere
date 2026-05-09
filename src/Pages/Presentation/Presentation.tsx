
import PresentationContent from "../../Components/PresentationComponents/PresentationContent/PresentationContent";
import PresentationVisual from "../../Components/PresentationComponents/PresentationVisual/PresentationVisual";
import CommonLayout from "../../Components/CommonComponents/CommonLayout/CommonLayout";
import BlocTitle from "../../Components/BlocTitle/BlocTitle";
import TitleTextBloc from "../../Components/CommonComponents/TitleTextBloc/TitleTextBloc";
import styles from "./Presentation.module.scss";
import TranslateButton from "../../Components/Buttons/TranslateButton/TranslateButton";
import { useState } from "react";
import ModalSelectLanguage from "../../Components/Modal/ModalSelectLanguage/ModalSelectLanguage";
import { useTranslation } from "react-i18next";

const Presentation = () => {

  const {t} = useTranslation();

  const [open, setOpen] = useState(false);

  type SiteLanguage = "fr" | "en" | "may";
  const STORAGE_KEY = "bam-language";

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedLanguage, setSelectedLanguage] = useState<SiteLanguage>(localStorage.getItem(STORAGE_KEY) as SiteLanguage || "fr");
  

  return (
    <div>   
        <CommonLayout> 
          <PresentationContent className={styles.content} />
          <PresentationVisual className={styles.picture} />
        </CommonLayout>

        <CommonLayout className={styles.wrapper}> 
          <BlocTitle title={t("presentation.services.title")} className={styles.title} />

          <div className={styles.wrapper_presentation_services}>
            <TitleTextBloc title={t("presentation.services.formationTitle")} className={styles.subTitle} text={t("presentation.services.formation")} />
            <TitleTextBloc title={t("presentation.services.commandeTitle")} className={styles.subTitle} text={t("presentation.services.commande")} />
          </div>

        </CommonLayout>

        <div className={styles.translateButtonWrapper}>
          <TranslateButton className={styles.translateButton} onClick={handleOpen} />
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

export default Presentation;