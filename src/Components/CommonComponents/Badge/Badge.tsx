import styles from './Badge.module.scss';

type BadgeProps = {
    number: number;
};

const Badge = ({ number }: BadgeProps) => {
    return (
        <div className={styles.badge}>
            <p className={styles.number}>{number}</p>
        </div>
    );
}

export default Badge;