import { useTranslation } from "react-i18next";
import TitleTextBloc from "../../Components/CommonComponents/TitleTextBloc/TitleTextBloc";
import ContactBam from "../../Components/ContactBam/ContactBam";
import styles from "./Urgence.module.scss";
import TranslateButton from "../../Components/Buttons/TranslateButton/TranslateButton";
import { useState } from "react";
import ModalSelectLanguage from "../../Components/Modal/ModalSelectLanguage/ModalSelectLanguage";

const Urgence = () => {

const { t } = useTranslation();

type SiteLanguage = "fr" | "en" | "may";

const STORAGE_KEY = "bam-language";

const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);

const handleClose = () => setOpen(false);
const [selectedLanguage, setSelectedLanguage] = useState<SiteLanguage>(localStorage.getItem(STORAGE_KEY) as SiteLanguage || "fr");

  return (
    <div className={styles.wrapper}>   
        <TitleTextBloc className={styles.titleTextBloc} title={t("urgence.title")} text={<span>{t("urgence.textBlock")}<a href="mailto:brasserie.montflours@orange.fr">{t("urgence.contactLink")}</a></span>} />
    
        <h2 className={styles.subtitle}>{t("urgence.subtitle")}</h2>

        <div className={styles.mapWrapper}>
            <iframe className={styles.googlemap_frame} src="https://www.google.com/maps/d/embed?mid=1k-waHdc2gotsPbR_OIoJx236mpdrtCs&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
            <div className={styles.contactWrapper}>
                <p className={styles.text}>ZA du Mottay Route de Sacé 53240 Montflours</p>
                <ContactBam isTelephoneNumber={true}/>
                <ContactBam isTelephoneNumber={false}/>
            </div>
        </div>

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
    )
}


export default Urgence;