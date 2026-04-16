
import styles from "./TitleTextBloc.module.scss";   


type TitleTextBlocProps = {
    title: string;
    titleOrientation?: "left" | "middle" | "right";
    text: string;
    className?: string;
}

const TitleTextBloc = ({ title, text, titleOrientation = "left", className }: TitleTextBlocProps) => {
    return (
        <div className={`${styles.wrapper} ${className || ""}`}>
            <h2 className={`${styles.title} ${styles[`title_${titleOrientation}`]}`}>{title}</h2>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default TitleTextBloc;