import styles from './BlocTitle.module.scss';

type BlocTitleProps = {
    title: string;
    className?: string;
}

const BlocTitle = ({title, className}: BlocTitleProps) => {
    return (
        <div className={`${className} ${styles.title}`}>    
              {title}
        </div>
    );
}   

export default BlocTitle;