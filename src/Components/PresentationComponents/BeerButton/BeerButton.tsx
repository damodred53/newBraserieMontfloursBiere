import styles from "./BeerButton.module.scss";


type BeerButtonProps = {
    logoPath: string;
    name: string;
    className?: string;
}


const BeerButton = ({ logoPath, name, className }: BeerButtonProps) => {
  return (
    <div className={`${styles.beerButton} ${className}`}>
      <img className={styles.beerLogo} src={logoPath} alt={name} />
      <p className={styles.beerName}>{name}</p>
    </div>
  );

};

export default BeerButton;