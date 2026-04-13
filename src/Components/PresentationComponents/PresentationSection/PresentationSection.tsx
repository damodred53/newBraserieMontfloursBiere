
import styles from "./PresentationSection.module.scss";

type PresentationSectionProps = {
    children: React.ReactNode;
}

const PresentationSection = ({ children, }: PresentationSectionProps) => {
  return (
    <div className={styles.wrapper} >
        {children}
    </div>
  );
}

export default PresentationSection;