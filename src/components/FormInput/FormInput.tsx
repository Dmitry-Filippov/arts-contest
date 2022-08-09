import "./FormInput.scss";

type props = {
  type: string;
  placeholder: string;
  className?: string;
  onFocus?: () => void;
  onblur?: () => void;
};

const FormInput = ({
  type,
  placeholder,
  className,
  onFocus,
  onblur,
}: props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`form-input ${className ? className : ""}`}
      required
      onFocus={onFocus}
      onBlur={onblur}
    />
  );
};

export default FormInput;
