import styles from "./Irregulomadaire.module.scss";
import { useTranslation } from "react-i18next";
import IrregulomadairePicture from "../../../assets/images/Irregulomadaire.jpg";
import IrregulomadaireButton from "../IrregulomadaireButton/IrregulomadaireButton";

const pdfFiles = import.meta.glob("/public/Irregulomadaires/Irregulo_*.pdf", { eager: true });
const TOTAL_PDF = Object.keys(pdfFiles).length;

const IrregulomadaireBlock = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={IrregulomadairePicture} alt={t("history.irregulomadaire.image.alt")} />
      <p className={styles.text}>{t("history.irregulomadaire.text")}</p>
      <div className={styles.linkWrapper}>
        {Array.from({ length: TOTAL_PDF }, (_, i) => (
          <IrregulomadaireButton key={i + 1} id={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default IrregulomadaireBlock;