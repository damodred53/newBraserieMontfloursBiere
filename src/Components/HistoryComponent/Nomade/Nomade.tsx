import { t } from "i18next"
import styles from "./Nomade.module.scss";


const Nomade = () => {

    return (
        <>
            {t('history.nomade.text')}{" "}
            <a className={styles.nomadeLink} href="https://nomadeguinguette.fr/" target="_blank" rel="noopener noreferrer"><p className={styles.link}>nomadeguinguette.fr</p></a>
        </>
    )
}

export default Nomade