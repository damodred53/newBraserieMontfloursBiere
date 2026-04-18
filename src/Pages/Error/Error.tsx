import TitleTextBloc from "../../Components/CommonComponents/TitleTextBloc/TitleTextBloc";
import styles from "./Error.module.scss";

const Error = () => {
  return (
    <div className={styles.wrapper}>
        <p className={styles.title}>404</p>
        <TitleTextBloc className={styles.textBloc} titleOrientation="middle" title="Oups ! Page introuvable" text="La page que vous recherchez a sauté... comme un bouchon de bouteille !" />
    </div>
  );
}

export default Error;