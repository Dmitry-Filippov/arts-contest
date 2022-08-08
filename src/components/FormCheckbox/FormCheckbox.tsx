import "./FormCheckbox.scss";

type props = {
  className?: string;
  id: string;
};

const FormCheckbox = ({ className, id }: props) => {
  return (
    <div className={className}>
      <input
        id={id}
        type="checkbox"
        className="form-checkbox__checkbox"
      />
      <label htmlFor={id} className="form-checkbox__label">
        Отправляя данные я соглашаюсь с <a href="/">Условиями конкурса</a>{" "}
        <br /> и <a href="/">Политикой обработки данных</a>
      </label>
    </div>
  );
};

export default FormCheckbox;
