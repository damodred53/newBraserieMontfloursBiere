import styles from "./BeerButton.module.scss";

type BeerButtonProps = {
    logoPath: string;
    name: string;
    className?: string;
    onClick: () => void;
}

const BeerButton = ({ logoPath, name, className, onClick }: BeerButtonProps) => {

  return (
      <button
        type="button"
        className={`${styles.beerButton} ${className ?? ""}`}
        onClick={onClick}
      >
        <img className={styles.beerLogo} src={logoPath} alt={name} />
        <p className={styles.beerName}>{name}</p>
      </button>
  );

};

export default BeerButton;