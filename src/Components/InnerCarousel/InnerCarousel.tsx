import Badge from '../CommonComponents/Badge/Badge';
import styles from './InnerCarousel.module.scss';


type InnerCarouselProps = {
  date: number;
    title: string;
    text: string;
};

const InnerCarousel = ({ date, title, text }: InnerCarouselProps) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.date}><Badge number={date} /></div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
    </div>
    );  
};

export default InnerCarousel;