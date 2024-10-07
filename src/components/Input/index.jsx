import { useEffect, useState } from "react";

function Input(props) {
  const [isActive, setActive] = useState(false);

  const handleClick = (event) => {
    navigator.clipboard.writeText("felipe.sousa4030@gmail.com"); // copy to clipboard
    setActive(!isActive);
  };

  useEffect(() => {
    if (isActive === true) {
      setTimeout(() => {
        setActive(false);
      }, 5000);
    }
  }, [isActive]);

  return isActive === false ? (
    <div className="contact__input" onClick={handleClick}>
      <img
        src="/images/copy-icon.svg"
        alt="icon"
        onClick={handleClick}
        className="input__icon"
      />
      <p className="input__email" onClick={handleClick}>
        {props.email}
      </p>
    </div>
  ) : (
    <div className="contact__input input-active">
      <img
        src="/images/confirm-icon.svg"
        alt="icon"
        className="input__icon-active"
      />
      <p className="input__email email-active">
        {navigator.language === "pt-BR"
          ? "O email foi copiado!"
          : "The email was copied!"}
      </p>
    </div>
  );
}

export default Input;
