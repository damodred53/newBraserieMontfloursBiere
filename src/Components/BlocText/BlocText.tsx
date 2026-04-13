import styles from './BlocText.module.scss';

type BlocTextProps = {
    text: string;
    className?: string;
}

const BlocText = ({text, className}: BlocTextProps) => {
    return (
        <div className={`${className} ${styles.text}`}>   
           {text}
        </div>
    );
}   

export default BlocText;