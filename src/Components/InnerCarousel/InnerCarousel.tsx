import { useTranslation } from 'react-i18next';
import Badge from '../CommonComponents/Badge/Badge';
import styles from './InnerCarousel.module.scss';


type InnerCarouselProps = {
  date: number;
    title: string;
    text: string;
};

const InnerCarousel = ({ date, title, text }: InnerCarouselProps) => {

  const { t } = useTranslation();
  const translatedText = t(text);
  const isShort = translatedText.length <= 160;
  
  return (
    <div className={`${styles.wrapper} ${isShort ? styles.short : ""}`}>
        <div className={styles.date}><Badge number={date} /></div>
        <div className={styles.content}>
          <h2 className={styles.title}>{t(title)}</h2>
          <p className={styles.text}>{translatedText}</p>
        </div>
    </div>
    );  
};

export default InnerCarousel;