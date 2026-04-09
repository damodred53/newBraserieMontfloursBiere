import "./ButtonBrown.scss";

type ButtonBrownProps = {
    className: string;
    content: string;
    size: "small" | "medium" | "large";
    isAnimated?: boolean;
    onClick?: () => void;
}

const ButtonBrown = ({ className, content, size, isAnimated = false, onClick }: ButtonBrownProps) => {
  return (
    <button className={`button-brown ${className} ${`button-brown_${size}`} ${isAnimated ? "button-brown_animated" : ""}`} onClick={onClick}>
        <span className="button-brown__label">{content}</span>
    </button>
  );
}

export default ButtonBrown;