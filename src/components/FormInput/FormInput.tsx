import "./FormInput.scss";

type props = {
  type: string;
  placeholder: string;
  className?: string;
};

const FormInput = ({ type, placeholder, className }: props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`form-input ${className ? className : ""}`}
      required
    />
  );
};

export default FormInput;
