import './TranslateButton.scss'

type TranslateButtonProps = {
    className?: string;
    onClick?: () => void;
}

const TranslateButton = ({ className, onClick }: TranslateButtonProps) => {
  return (
    <button className={`button-translate ${className ?? ""}`} type="button" onClick={onClick}>
      <span className="button-translate__label">Traduire</span>
    </button>
  );
}

export default TranslateButton;