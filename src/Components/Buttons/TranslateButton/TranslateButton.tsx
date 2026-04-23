import { useTranslation } from 'react-i18next';
import './TranslateButton.scss'

type TranslateButtonProps = {
    className?: string;
    onClick: () => void;
}

const TranslateButton = ({ className, onClick }: TranslateButtonProps) => {

  const { t } = useTranslation();

  return (
    <button className={`button-translate ${className ?? ""}`} type="button" onClick={onClick}>
      <span className="button-translate__label">{t('translateButton.label')}</span>
    </button>
  );
}

export default TranslateButton;