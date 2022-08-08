import "./FormCheckbox.scss";

type props = {
  className?: string;
};

const FormCheckbox = ({ className }: props) => {
  return (
    <div className={className}>
      <input
        id="checkbox"
        type="checkbox"
        className="form-checkbox__checkbox"
      />
      <label htmlFor="checkbox" className="form-checkbox__label">
        Отправляя данные я соглашаюсь с <a href="/">Условиями конкурса</a> <br /> и{" "}
        <a href="/">Политикой обработки данных</a>
      </label>
    </div>
  );
};

export default FormCheckbox;
