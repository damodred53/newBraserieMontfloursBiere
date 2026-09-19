
import type { ReactNode } from "react";
import styles from "./TitleTextBloc.module.scss";   


type TitleTextBlocProps = {
    title: string;
    titleOrientation?: "left" | "middle" | "right";
    text?: string | ReactNode;
    className?: string;
    children?: ReactNode;
}

const TitleTextBloc = ({ title, text, titleOrientation = "left", className, children }: TitleTextBlocProps) => {
    const content = children ?? text;

    return (
        <div className={`${styles.wrapper} ${className || ""}`}>
            <h2 className={`${styles.title} ${styles[`title_${titleOrientation}`]}`}>{title}</h2>
            {content && <div className={styles.text}>{content}</div>}
        </div>
    );
}

export default TitleTextBloc;