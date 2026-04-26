import styles from "./IrregulomadaireButton.module.scss";
import { useTranslation } from "react-i18next";

type IrregulomadaireButtonProps = {
  id: number;
};

const IrregulomadaireButton = ({ id }: IrregulomadaireButtonProps) => {
  const { t } = useTranslation();

  return (
    <a
      href={`${import.meta.env.BASE_URL}Irregulomadaires/Irregulo_${id}.pdf`}
      download={`Irregulomadaire_${id}.pdf`}
      className={styles.button}
    >
      {t("history.irregulomadaire.button", { id })}
    </a>
  );
};

export default IrregulomadaireButton;