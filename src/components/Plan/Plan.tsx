import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Plan.scss";

const Plan = () => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const [isFirstVisible, setFirstVisible] = useState<boolean>(false);
  const [isSecondVisible, setSecondVisible] = useState<boolean>(false);
  const [isThirdVisible, setThirdVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isAnimated) {
      setTimeout(() => {
        setFirstVisible(true);
      }, 700);
      setTimeout(() => {
        setSecondVisible(true);
      }, 1500);
      setTimeout(() => {
        setThirdVisible(true);
      }, 2300);
    }
  }, [isAnimated]);

  return (
    <section
      className="plan"
      onWheel={(e) => {
        setIsAnimated(true);
      }}
    >
      <SectionTitle>
        Пошаговый <span className="plan__underline">план</span>
      </SectionTitle>
      <ul className="plan__steps">
        <li className="plan__step one">
          <p className="plan__step__number">1</p>
          <p
            className={`plan__step-caption ${
              isAnimated ? "plan__step-caption_one" : ""
            } ${isFirstVisible ? "plan__step-caption_visible" : ""}`}
          >
            Зарегистрируйтесь <br /> на конкурс{" "}
            <a href="/" target="blank">
              Здесь
            </a>
          </p>
        </li>
        <li className="plan__step two">
          <p className="plan__step__number">2</p>
          <p
            className={`plan__step-caption ${
              isAnimated ? "plan__step-caption_two" : ""
            } ${isSecondVisible ? "plan__step-caption_visible" : ""}`}
          >
            Выполните все <br /> условия конкурса
          </p>
        </li>
        <li className="plan__step three">
          <p className="plan__step__number plan__step-caption_three">3</p>
          <p
            className={`plan__step-caption ${
              isAnimated ? "plan__step-caption_three" : ""
            } ${isThirdVisible ? "plan__step-caption_visible" : ""}`}
          >
            Загрузите рисунок{" "}
            <a href="/" target="blank">
              Здесь
            </a>{" "}
            <br /> или в Личном кабинете
          </p>
        </li>
      </ul>
      <div
        className={`plan__plane ${isAnimated ? "plan__plane_animated" : ""}`}
      ></div>
    </section>
  );
};

export default Plan;
