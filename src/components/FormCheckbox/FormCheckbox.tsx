import { useState } from "react";
import "./FormCheckbox.scss";

type props = {
  className?: string;
  id: string;
};

const FormCheckbox = ({ className, id }: props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <div className={className}>
      <input
        id={id}
        type="checkbox"
        className="form-checkbox__checkbox"
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <label htmlFor={id} className="form-checkbox__label">
        Отправляя данные я соглашаюсь с <a href="/">Условиями конкурса</a>{" "}
        <br /> и <a href="/">Политикой обработки данных</a>
      </label>
    </div>
  );
};

export default FormCheckbox;
