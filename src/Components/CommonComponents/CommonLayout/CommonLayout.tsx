
import styles from "./CommonLayout.module.scss";

type CommonLayoutProps = {
    children: React.ReactNode;
    className?: string;
}

const CommonLayout = ({ children, className}: CommonLayoutProps) => {
  return (
    <div className={`${styles.wrapper} ${className || ""}`}>
        {children}
    </div>
  );
}

export default CommonLayout;