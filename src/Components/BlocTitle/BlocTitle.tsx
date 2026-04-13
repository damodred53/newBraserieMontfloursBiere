import styles from './BlocTitle.module.scss';

type BlocTitleProps = {
    title: string;
    subTitle?: string;
    className?: string;
}

const BlocTitle = ({title, className, subTitle}: BlocTitleProps) => {
    return (
        <div className={`${className}`}>    
              <h1 className={styles.title}>{title}</h1>
              {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
        </div>
    );
}   

export default BlocTitle;