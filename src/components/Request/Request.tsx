import "./Request.scss";
import priceImg from "../../imgs/price.png";
import SectionTitle from "../SectionTitle/SectionTitle";
import FormInput from "../FormInput/FormInput";
import FormCheckbox from "../FormCheckbox/FormCheckbox";
import { useState } from "react";

const Request = () => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const [arePlanesAnimated, setArePlanesAnimated] = useState<boolean>(false);

  return (
    <section
      className="request"
      onWheel={() => {
        setTimeout(() => {
          setIsAnimated(true);
        }, 500);
        setTimeout(() => {
          setArePlanesAnimated(true);
        }, 2200);
      }}
    >
      <img src={priceImg} alt="стоимость участия" className="request__price" />
      <div className="request__form-block">
        <SectionTitle>Зарегистрируйтесь, чтобы участвовать</SectionTitle>
        <form className="request__form">
          <FormInput type="text" placeholder="ФИО ребенка" />
          <FormInput type="date" placeholder="Дата рождения" />
          <FormInput type="text" placeholder="Город" />
          <FormInput type="email" placeholder="Email" />
          <FormInput type="password" placeholder="Пароль" />
          <FormCheckbox className="request__checkbox" id="request-checkbox" />
          <button type="submit" className="request__submit">
            Участвовать
          </button>
          <div className="request__planes">
            <div
              className={`request__plane-one ${
                arePlanesAnimated ? "request__plane-one_animated" : ""
              }`}
            ></div>
            <div
              className={`request__plane-two ${
                arePlanesAnimated ? "request__plane-two_animated" : ""
              }`}
            ></div>
            <div
              className={`request__plane-three ${
                isAnimated ? "request__plane-three_animated" : ""
              }`}
            ></div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Request;
