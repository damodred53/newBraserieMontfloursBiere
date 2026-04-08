import "./ButtonBrown.scss";

type ButtonBrownProps = {
    className: string;
    content: string;
    size: "small" | "medium" | "large";
}

const ButtonBrown = ({ className, content, size }: ButtonBrownProps) => {
  return (
    <button className={`button-brown ${className} ${`button-brown_${size}`}`}>
        {content}
    </button>
  );
}

export default ButtonBrown;