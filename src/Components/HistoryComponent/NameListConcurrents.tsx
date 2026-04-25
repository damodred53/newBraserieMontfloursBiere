import { useTranslation } from "react-i18next";
import { listConcurrent } from "./ConcurrentList";
import styles from "./NameListConcurrents.module.scss";

const NameListConcurrents = () => {

    const {t} = useTranslation();

    return (
        <div className={styles.wrapper}>
            {listConcurrent.map((concurrent, index) => (
                <div key={index} className={styles.concurrentItem}>
                    <p>{concurrent.name}</p>
                    <a className={styles.link} href={concurrent.link} target="_blank" rel="noopener noreferrer">{t("history.concurrence.linkProducer")}</a>
                </div>
            ))}
        </div>
    )
}

export default NameListConcurrents;