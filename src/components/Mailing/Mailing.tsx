import FormCheckbox from "../FormCheckbox/FormCheckbox";
import FormInput from "../FormInput/FormInput";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Mailing.scss";

const Mailing = () => {
  return (
    <section className="mailing">
      <SectionTitle>Подпишись на нашу рассылку</SectionTitle>
      <p className="mailing__subtitle">
        Обещаем присылать только самое важное и интересное <span>{":)"}</span>
      </p>
      <form className="mailing__form">
        <FormInput type="email" placeholder="Email" />
        <button className="mailing__button" type="submit">Отправить</button>
        <FormCheckbox className="mailing__checkbox" id="mailing-ckeckbox" />
      </form>
    </section>
  );
};

export default Mailing;
