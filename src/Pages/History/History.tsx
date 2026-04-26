
import { useTranslation } from "react-i18next";
import TitleTextBloc from "../../Components/CommonComponents/TitleTextBloc/TitleTextBloc";
import styles from "./History.module.scss";
import Carousel from "../../Components/Carousel/Carousel";
import NatureProgres from "../../Components/HistoryComponent/NatureProgres/NatureProgres";
import NameListConcurrents from "../../Components/HistoryComponent/NameListConcurrents";
import IrregulomadaireBlock from "../../Components/HistoryComponent/IrregulomadaireBlock/Irregulomadaire";

const History = () => {

  const { t } = useTranslation();

  return (
    <div className={styles.history}>
        
        <TitleTextBloc className={styles.title} titleOrientation="middle" title={t('history.title')} />

        <Carousel />

        <TitleTextBloc className={styles.natureProgres} titleOrientation="middle" title={t('history.nature.title')} text={<NatureProgres />} />

        <TitleTextBloc className={styles.concurrence} titleOrientation="middle" title={t('history.concurrence.title')} text={<NameListConcurrents />} />
    
        <TitleTextBloc className={styles.irregulomadaire} titleOrientation="middle" title={t('history.irregulomadaire.title')} />

        <IrregulomadaireBlock />
    </div>
  );
}

export default History;