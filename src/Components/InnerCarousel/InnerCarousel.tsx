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
  
  return (
    <div className={styles.wrapper}>
        <div className={styles.date}><Badge number={date} /></div>
        <h2 className={styles.title}>{t(title)}</h2>
        <p className={styles.text}>{t(text)}</p>
    </div>
    );  
};

export default InnerCarousel;