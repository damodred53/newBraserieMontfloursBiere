import { useTranslation } from "react-i18next";
import styles from "./ButtonBrown.module.scss";

type ButtonBrownProps = {
  className?: string;
  content: string;
  size: "small" | "medium" | "large";
  isAnimated?: boolean;
  onClick?: () => void;
};

const ButtonBrown = ({ className, content, size, isAnimated = false, onClick }: ButtonBrownProps) => {

  const {t} = useTranslation();

  const sizeClassNames = {
    small: styles.buttonBrownSmall,
    medium: styles.buttonBrownMedium,
    large: styles.buttonBrownLarge,
  };

  const buttonClassName = [
    styles.buttonBrown,
    sizeClassNames[size],
    isAnimated ? styles.buttonBrownAnimated : "",
    className ?? "",
  ].filter(Boolean).join(" ");

  return (
    <button className={buttonClassName} onClick={onClick}>
      <span className={styles.buttonBrownLabel}>{t(content)}</span>
    </button>
  );
};

export default ButtonBrown;