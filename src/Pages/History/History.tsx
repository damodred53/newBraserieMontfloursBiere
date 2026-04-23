
import { useTranslation } from "react-i18next";
import TitleTextBloc from "../../Components/CommonComponents/TitleTextBloc/TitleTextBloc";
import styles from "./History.module.scss";
import Carousel from "../../Components/Carousel/Carousel";

const History = () => {

  const { t } = useTranslation();


  return (
    <div className={styles.history}>
        
        <TitleTextBloc className={styles.title} titleOrientation="middle" title={t('history.title')} />

        <Carousel />
    </div>
  );
}

export default History;