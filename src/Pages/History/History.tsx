
import { useTranslation } from "react-i18next";
import TitleTextBloc from "../../Components/CommonComponents/TitleTextBloc/TitleTextBloc";
import styles from "./History.module.scss";
import Carousel from "../../Components/Carousel/Carousel";
import NatureProgres from "../../Components/HistoryComponent/NatureProgres/NatureProgres";
import NameListConcurrents from "../../Components/HistoryComponent/NameListConcurrents";
import IrregulomadaireBlock from "../../Components/HistoryComponent/IrregulomadaireBlock/Irregulomadaire";
import Nomade from "../../Components/HistoryComponent/Nomade/Nomade";
import ModalSelectLanguage from "../../Components/Modal/ModalSelectLanguage/ModalSelectLanguage";
import { useState } from "react";
import TranslateButton from "../../Components/Buttons/TranslateButton/TranslateButton";

const History = () => {

  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  
    type SiteLanguage = "fr" | "en" | "may";
    const STORAGE_KEY = "bam-language";

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [selectedLanguage, setSelectedLanguage] = useState<SiteLanguage>(localStorage.getItem(STORAGE_KEY) as SiteLanguage || "fr");

  return (
    <div className={styles.history}>
        <TitleTextBloc className={styles.title} titleOrientation="middle" title={t('history.title')} />
        <Carousel />
        <TitleTextBloc className={styles.natureProgres} titleOrientation="middle" title={t('history.nature.title')} text={<NatureProgres />} />
        <TitleTextBloc className={styles.concurrence} titleOrientation="middle" title={t('history.concurrence.title')} text={<NameListConcurrents />} />
        <TitleTextBloc className={styles.nomade} titleOrientation="middle" title={t('history.nomade.title')} text={<Nomade />} />
        <TitleTextBloc className={styles.irregulomadaire} titleOrientation="middle" title={t('history.irregulomadaire.title')}  />
        <IrregulomadaireBlock />

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

export default History;