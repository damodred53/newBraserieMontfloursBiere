import { t } from "i18next"
import styles from "./Nomade.module.scss";


const Nomade = () => {

    return (
        <div className={styles.wrapper}>
            <p>{t('history.nomade.text')}</p>
            <p className={styles.learnMore}>
                <span>{t('history.nomade.learnMore')}</span>
                <a className={styles.link} href="https://nomadeguinguette.fr/" target="_blank" rel="noopener noreferrer">nomadeguinguette.fr</a>
            </p>
        </div>
    )
}

export default Nomade