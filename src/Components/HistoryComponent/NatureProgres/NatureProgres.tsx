import { useTranslation } from "react-i18next";
import natureProgresImage from "../../../assets/images/natureProgres.png";
import styles from "./NatureProgres.module.scss";


const NatureProgres = () => {

    const { t } = useTranslation();

    return (
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <p className={styles.paragraph1}>{t('history.nature.content.paragraph1')}</p>  
                    <ul className={styles.list}> 
                        <li className={styles.listItem}>{t('history.nature.content.list.0')}</li>
                        <li className={styles.listItem}>{t('history.nature.content.list.1')}</li>
                        <li className={styles.listItem}>{t('history.nature.content.list.2')}</li>
                        <li className={styles.listItem}>{t('history.nature.content.list.3')}</li>
                        <li className={styles.listItem}>{t('history.nature.content.list.4')}</li>
                        <li className={styles.listItem}>{t('history.nature.content.list.5')}</li>
                        <li className={styles.listItem}>{t('history.nature.content.list.6')}</li>
                    </ul>
                        
                    <p className="" >{t('history.nature.content.paragraph2')}</p>
                    
                    <div className={styles.imageLinkWrapper}>
                        <img className={styles.natureProgresImage} src={natureProgresImage} alt={t('history.nature.content.image.alt')} />
                        <a target="_blank" href="https://natureetprogres.org/?Mention"><p className={styles.link}>{t('history.nature.content.link.text')}</p></a>
                    </div>
                    
                    
                </div>
            </div>  
    )
}

export default NatureProgres;