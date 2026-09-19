import { useTranslation } from "react-i18next";
import styles from "./KegOrderContent.module.scss";

const KegOrderContent = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <p className={styles.emphasis}>{t("presentation.services.commande.intro")}</p>
      <ul>
        <li>{t("presentation.services.commande.beers.available")}</li>
        <li>{t("presentation.services.commande.beers.onOrder")}</li>
      </ul>
      <p className={`${styles.emphasis} ${styles.sectionTitle}`}>
        {t("presentation.services.commande.optionsTitle")}
      </p>
      <ul>
        <li>{t("presentation.services.commande.options.tap")}</li>
        <li>{t("presentation.services.commande.options.return")}</li>
        <li>{t("presentation.services.commande.options.rental")}</li>
      </ul>
      <p className={`${styles.emphasis} ${styles.outro}`}>
        {t("presentation.services.commande.outro")}
      </p>
    </div>
  );
};

export default KegOrderContent;